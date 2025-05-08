import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/node-server/serve-static";
import { createClient } from "@libsql/client/node";

const app = new Hono();

app.use("*", serveStatic({ root: "./out" }));

const client = createClient({
  url: Deno.env.get("TURSO_DATABASE_URL")!,
  authToken: Deno.env.get("TURSO_AUTH_TOKEN")!,
});

const waitlistTableSql =
  "CREATE TABLE IF NOT EXISTS waitlist (email TEXT PRIMARY KEY, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)";

app.post("/waitlist", async (c) => {
  const { token, email } = await c.req.json();

  try {
    const secretKey = Deno.env.get("RECAPTCHA_SECRET_KEY");
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      { method: "POST" },
    );
    const recaptchaData = await recaptchaResponse.json();
    if (!recaptchaData.success) {
      return c.json({ error: "Failed reCAPTCHA verification" }, 400);
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }

  if (typeof email !== "string" || !email.trim()) {
    return c.json({ error: "Email is required" }, 400);
  }

  try {
    await client
      .batch([
        waitlistTableSql,
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
        waitlistTableSql,
        {
          sql: "INSERT INTO waitlist (email) VALUES (?)",
          args: [email],
        },
      ],
      "write",
    );

    return c.json(null, 200);
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ error: error.message }, 400);
    }

    console.error(error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

export default app;
