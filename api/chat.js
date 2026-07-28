export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {

    const { message } = req.body;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: message
                }
              ]
            }
          ]
        })
      }
    );

   const data = await response.json();

console.log("Gemini Response:", JSON.stringify(data, null, 2));

if (!response.ok) {
    return res.status(response.status).json({
        reply: data.error?.message || "Gemini API Error"
    });
}

const reply =
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "No response generated.";

res.status(200).json({ reply });

    res.status(200).json({
      reply
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      reply: "Something went wrong."
    });

  }

}