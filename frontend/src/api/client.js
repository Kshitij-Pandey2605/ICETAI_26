import axios from "axios";

const client = axios.create({ baseURL: "/api" });

export async function fetchSchemes() {
  const { data } = await client.get("/schemes");
  return data;
}

export async function fetchSchemeRule(schemeId) {
  const { data } = await client.get(`/schemes/${schemeId}/rule`);
  return data;
}

export async function sendChat({ queryText, language, schemeId, system }) {
  const { data } = await client.post("/chat", {
    query_text: queryText,
    language,
    scheme_id: schemeId,
    system,
  });
  return data;
}

export async function completeChat({ schemeId, language, profile }) {
  const { data } = await client.post("/chat/complete", {
    scheme_id: schemeId,
    language,
    profile,
  });
  return data;
}

export async function checkProfile(schemeId, profile) {
  const { data } = await client.post(`/schemes/${schemeId}/check-profile`, { profile });
  return data;
}

export default client;
