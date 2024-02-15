const client = async ({
  baseUrl = '',
  path = '',
  method = 'GET',
  body,
  headers = { 'Content-Type': 'application/json', Accept: 'application/json' },
}) => {
  const config = {
    method,
    body: JSON.stringify(body),
    headers,
  }
  try {
    const response = await fetch(`${baseUrl}${path}`, config)
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data?.error?.message || 'Error en llamada')
    }
    return data
  } catch (e) {
    throw e
  }
}

export default client
