import client from './client'

export const strapiClient = ({ path, method, body }) => {
  try {
    return client({
      baseUrl: process.env.NEXT_PUBLIC_STRAPI_CLIENT,
      path,
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PUBLIC_BEARER}`,
      },
    })
  } catch (e) {
    throw e
  }
}
