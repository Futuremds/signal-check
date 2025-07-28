export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { phone } = req.query;
  if (!phone) return res.status(400).json({ error: 'phone required' });

  try {
    const apiRes = await fetch(`https://whatsapp-profile-pic.p.rapidapi.com/wspic/url?phone=${phone}`, {
      method: 'GET',
      headers: {
        'X-Rapidapi-Key': 'b7ff50aceemsh46e8ce494d97a6ep10441ajsna186cd3fb5d8',
        'X-Rapidapi-Host': 'whatsapp-profile-pic.p.rapidapi.com'
      }
    });
    const data = await apiRes.json();
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: 'Failed to fetch' });
  }
} 