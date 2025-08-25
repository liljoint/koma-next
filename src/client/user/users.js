import { strapiClient } from '@/client/strapiClient'

export const validateUser = async (password) => {
  const { user } = await strapiClient({
    path: '/api/waiter/validatePassword',
    method: 'POST',
    body: {
      password,
    },
  })
  return user
}

export default validateUser
