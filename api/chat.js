export default async function handler(req, res) {
  // Sadece POST isteklerini kabul et
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST method is allowed' });
  }

  // Vercel Environment Variables (Çevre Değişkenleri) üzerinden gizli verileri çek
  // Eğer kullanıcı Vercel dashboard'dan bunları girmezse hata dönsün
  const N8N_URL = process.env.COUNCIL_WEBHOOK_URL;
  const SECRET_TOKEN = process.env.COUNCIL_N8N_TOKEN;

  if (!N8N_URL || !SECRET_TOKEN) {
    console.error("Vercel Environment Variables are missing!");
    return res.status(500).json({ error: "Server Configuration Error: Missing Backend Credentials" });
  }

  try {
    // Frontend üzerinden gelen chat verisini (body) olduğu gibi n8n'e aktar
    const n8nResponse = await fetch(N8N_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SECRET_TOKEN}`
      },
      body: JSON.stringify(req.body)
    });

    // n8n'den gelen string veya json cevabı al
    const rawData = await n8nResponse.text();
    let finalData;

    try {
      finalData = JSON.parse(rawData);
      // Eğer n8n zaten {"output": "cevap"} objesi döndüyse bozma
      if (!finalData.output) {
        finalData = { output: typeof finalData === 'string' ? finalData : JSON.stringify(finalData) };
      }
    } catch(e) {
      // Eğer n8n sadece düz metin (string) döndürdüyse, bunu n8n-chat'in anladığı JSON'a çevir
      finalData = { output: rawData };
    }

    // Elde edilen veriyi Vercel arayüzüne (index.html) @n8n/chat formatında güvenle yolla
    return res.status(200).json(finalData);
    
  } catch (error) {
    console.error("Error communicating with n8n:", error);
    return res.status(500).json({ error: "Failed to communicate with The Psychology Council AI Engine." });
  }
}
