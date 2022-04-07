import {login} from "./util";

require('dotenv').config()
import * as request from 'supertest'
import {Server} from '../src/models/server'

const server = new Server()

const pathQuiz = '/api/quiz'

const newQuiz = {
  title:"Nueva encuesta",
  description: "Para estudiantes"
}

const userPruebas = {
  name: 'pruebas',
  email: 'pruebas@gmail.com',
  password: '123456',
  role: 'USER_ROLE'
}

beforeAll(async ()=>{
  await server.initialize()
})

describe('POST /quiz',()=>{

  let userToken = ''
  let userId = ''
  beforeAll(async () => {
    ({userToken, userId} = await login(server,userPruebas.email, userPruebas.password))
    console.log(userId)
  })

  test('Create Quiz', async ()=>{
    const response = await request(server.app).post(pathQuiz)
      .set({Authorization: `Bearer ${userToken}`})
      .send(newQuiz);
    console.log('gaaa',response.body)
    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({
      msg: expect.any(String),
      data: expect.any(Array)
    })
    expect(response.body.data[0]).toMatchObject({
      idquiz: expect.any(Number),
      title: expect.any(String),
      description: expect.any(String),
      user_iduser: expect.any(String)
    })
  })
})

describe('GET /quiz',()=>{
  test('Get quizes with status 200 and fields: msg,total, data',async()=>{

    const response = await request(server.app).get(pathQuiz)

    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({
      msg: expect.any(String),
      total: expect.any(Number),
      data: expect.any(Array)
    })
  })
})

describe('PUT /quiz',()=>{

  let userToken = ''
  beforeAll(async () => {
    ({userToken} = await login(server,userPruebas.email, userPruebas.password))
  })

  test('Edita fields title, description of quiz',async ()=>{
    let idquiz= 2
    const title = 'New title'
    const description = 'New description'

    const response = await request(server.app).put(`${pathQuiz}/${idquiz}`)
      .set({Authorization:`Bearer ${userToken}`})
      .send({
      title,
      description
    })

    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({
      msg: expect.any(String),
      data: expect.any(Array)
    })
  })
})

describe('DELETE /quiz', ()=>{
  let userToken = ''
  beforeAll(async () => {
    ({userToken} = await login(server,userPruebas.email, userPruebas.password))
  })

  test('Delete quiz',async ()=>{
    let idquiz=2

    const response = await request(server.app)
      .delete(`${pathQuiz}/${idquiz}`)
      .set({Authorization: `Bearer ${userToken}`})
    console.log('statis', response.status)
    console.log('resposne', response.body)

    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({
      msg: expect.any(String),
      data: expect.any(Array)
    })

  })
})
