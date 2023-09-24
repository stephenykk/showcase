import { request } from '@/utils'

export const getToken = async (email: string, password: string) => {
  const { DSZ_TOKEN_API: tokenApi } = import.meta.env

  const res = await request.post<{ token: string }>(tokenApi, { email, password })

  return res.data;
}
