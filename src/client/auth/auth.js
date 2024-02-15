import client from '../client'

const auth = async ({ email, pw }) => {
  try {
    const result = await client({
      baseUrl: 'http://localhost:1337',
      path: '/api/auth/local',
      method: 'POST',
      body: {
        identifier: email,
        password: pw,
      },
    })
    console.log(result)
  } catch (e) {
    throw e
  }
}
export default auth
