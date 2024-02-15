import client from '../client'

const auth = async ({ email, pw }) => {
  const result = await client({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_CLIENT,
    path: '/api/auth/local',
    method: 'POST',
    body: {
      identifier: email,
      password: pw,
    },
  })
  console.log(result)
}
export default auth
