import { createClient } from "@libsql/client";

const dbURL = process.env.TURSO_DATABASE_URL;
if (!dbURL) {
  throw new Error("TURSO_DATABASE_URL is not set");
}

const dbToken = process.env.TURSO_AUTH_TOKEN;
if (!dbToken) {
  throw new Error("TURSO_AUTH_TOKEN is not set");
}

const client = createClient({ url: dbURL, authToken: dbToken });

export async function POST(request: Request) {
  const body: { token: string; email: string } = await request.json();
  const { token, email } = body;

  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      { method: "POST" },
    );
    const recaptchaData = await recaptchaResponse.json();
    if (!recaptchaData.success) {
      return new Response(
        JSON.stringify({ error: "Failed reCAPTCHA verification" }),
        { status: 400 },
      );
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }

  if (typeof email !== "string" || !email.trim()) {
    return new Response(JSON.stringify({ error: "Email is required" }), {
      status: 400,
    });
  }

  try {
    await client
      .batch([
        "CREATE TABLE IF NOT EXISTS waitlist (email TEXT PRIMARY KEY)",
        {
          sql: "SELECT email FROM waitlist WHERE email = ?",
          args: [email],
        },
      ])
      .then((result) => {
        if (result[1].rows.length > 0) {
          throw new Error("Email already registered");
        }
      });

    await client.batch(
      [
        {
          sql: "INSERT INTO waitlist (email) VALUES (?)",
          args: [email],
        },
      ],
      "write",
    );

    return new Response(null, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
      });
    }

    console.error(error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
