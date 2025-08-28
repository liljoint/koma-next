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
  const response = await fetch(`${baseUrl}${path}`, config)

  const data = await response.json()
  if (!response.ok) {
    return { error: data?.error }
  }

  return data
}

export default client
