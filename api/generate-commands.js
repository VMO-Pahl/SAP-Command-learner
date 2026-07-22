export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { question } = req.body;

    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Question required' });
    }

    const groqApiKey = process.env.GROQ_API_KEY;
    if (!groqApiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    const systemPrompt = `Du bist ein SAP-Experte. Der Nutzer fragt nach SAP-Befehlen.
Antworte IMMER mit validen JSON, keine anderen Worte. Format:
[
  {
    "command": "Der exakte SAP-Befehl/Transaktion",
    "description": "Kurze Erklärung (max 1 Satz)",
    "keywords": ["suchbegriff1"]
  }
]
Gib 2-3 relevante Befehle zurück für: "${question}"`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${groqApiKey}`
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [{ role: 'user', content: systemPrompt }],
        max_tokens: 500,
        temperature: 0.5
      })
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: `API Error: ${response.status}` });
    }

    const data = await response.json();
    const responseText = data.choices[0].message.content;
    const cleanedText = responseText.replace(/```json|```/g, '').trim();
    const commands = JSON.parse(cleanedText);

    return res.status(200).json({ commands });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
