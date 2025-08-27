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

    if (!response.ok) {
      throw response
    }
    const data = await response.json()
    return data
  } catch (e) {
    const data = await e.json()
    throw new Error(data?.error?.message)
  }
}

export default client
