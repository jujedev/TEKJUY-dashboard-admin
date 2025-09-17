import axios from "axios";

const API_URL = "http://192.168.11.104:8080/api/devices";

export async function getPowerFactor() {
  const res = await axios.get(`${API_URL}/power-factor`);
  return res.data; // { l1: 0.73, l2: 0.80, l3: 0.78, total: 0.76 }
}

export async function getActivePower(range = "1h") {
  const res = await axios.get(`${API_URL}/active-power?range=${range}`);
  return res.data; 
}

export async function getCurrentHarmonics(range = "1h") {
  const res = await axios.get(`${API_URL}/current-harmonics?range=${range}`);
  return res.data; 
}

export async function getVoltages() {
  const res = await axios.get(`${API_URL}/voltages`);
  return res.data; // { l1: 228.5, l2: 229.1, l3: 227.7 }
}