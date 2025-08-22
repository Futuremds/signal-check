export default async function handler(req, res) {
  const { city } = req.query;
  const apiKey = 'AIzaSyC8HTUDEEz6pULUefranBP7YfaSIhnypew'; // sua chave do Google Places
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=motéis+em+${encodeURIComponent(city)}&key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
} 