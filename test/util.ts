import * as request from "supertest";

export const login = async (server:any, email: string, password: string) =>{
  const response = await request(server.app).post(`/api/auth/login`).send({
    email,
    password
  })
  console.log('login', response.body)
  if (response.status != 200) throw new Error('Error login')
  if (!response.body.token) throw new Error('No devolvio Token')
  return {
    userToken: response.body.token,
    userId: response.body.user.id
  }
}
