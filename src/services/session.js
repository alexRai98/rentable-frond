const API_ROOT = "https://rentable-api.herokuapp.com/";

export async function session(endpoint, method, body, token) {
  const response = await fetch(`${API_ROOT}${endpoint}`, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ? token : undefined}`,
    },
  });
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.errors.message);
  }
}