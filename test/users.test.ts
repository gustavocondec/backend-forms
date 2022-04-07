require('dotenv').config()
import * as request from 'supertest'
import {Server} from '../src/models/server'
import {login} from "./util";

const server = new Server()

const pathUsers = '/api/users'

const newUser = {
  name: 'Gustavo',
  email: 'gustavo1@gmail.com',
  password: '123456',
  role: 'USER_ROLE'
}

beforeAll(async () => {
  await server.initialize()
})

describe('GET /users', () => {
  test('Should respond with status a 200', async () => {
    const response = await request(server.app).get(pathUsers).send()
    expect(response.status).toBe(200)
  })
})

describe('POST /users', () => {
  test('Create user', async () => {
    const response = await request(server.app).post(pathUsers).send(newUser);
    console.log('response', response.body)
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      msg: expect.any(String),
      data: expect.any(Array)
    });
    expect(response.body.data[0]).toMatchObject({
      name: expect.any(String),
      email: expect.stringContaining('@'),
      role: expect.stringMatching('USER_ROLE'),
      id: expect.any(String),
      google: expect.any(Boolean)
    });
  })

})
describe('UPDATE /users', () => {
  let userToken = ''
  let userId = ''
  beforeAll(async () => {
    ({userToken, userId} = await login(server,newUser.email, newUser.password))
  })
  test('update user', async () => {
    let newName = 'aea'
    let response = await request(server.app).put(`${pathUsers}/${userId}`)
      .set({Authorization: `Bearer ${userToken}`})
      .send({
        name: newName
      })
    console.log('response', response.body)
    expect(response.status).toBe(200)
    expect(response.body.data[0].name).toBe(newName)
  })

})
describe('DELETE /users', () => {
  let userToken = ''
  let userId = ''
  beforeAll(async () => {
    ({userToken, userId} = await login(server,newUser.email, newUser.password))
    userToken.length
  })
  test('delete user', async () => {
    let response = await request(server.app)
      .delete(`${pathUsers}/${userId}`)
      .set({Authorization: `Beater ${userToken}`})

    expect(response.status).toBe(200)
  })
})
