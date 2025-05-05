export async function POST(request: Request) {
  const body: { token: string; email: string } = await request.json();
  const { token, email } = body;

  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      { method: "POST" }
    );
    const recaptchaData = await recaptchaResponse.json();
    if (!recaptchaData.success) {
      return new Response(
        JSON.stringify({ error: "Failed reCAPTCHA verification" }),
        { status: 400 }
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
    // TODO: Store email in db.
    // https://www.npmjs.com/package/@libsql/client
    //

    return new Response(null, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
