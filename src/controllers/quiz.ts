import {Request, Response } from 'express'
import {Quiz} from '../databaseSql/quiz'

export const getQuizs = async (req: Request, res: Response) => {
  const {limit=5, from =0} = req.query
  from.toString()
  const [quizs,total] = await Promise.all([
    Quiz.findAll({limit: Number(limit)}),
    Quiz.count()
  ])

  res.status(200).json({
    total,
    msg: 'ok',
    data: quizs
  })
}

export const createQuiz = async (req: Request, res: Response) => {
  const {title,description} = req.body
  const newQuiz = await Quiz.create({title,description,user_iduser: req.user.id})
  res.status(200).json({
    msg: 'ok',
    data: [newQuiz]
  })
}

export const editQuiz = async (req: Request, res: Response) => {
  const {title, description} = req.body
  const {idquiz} = req.params
  const quiz = await Quiz.findByPk(idquiz)
  if (!quiz) return res.status(404).json({msg: 'Not found'})
  const quizUpdated = await quiz?.update({
    title,
    description
  })
  return res.status(200).json({
    msg: 'ok',
    data: [quizUpdated]
  })
}

export const deleteQuiz = async (req: Request, res: Response) => {
  const {idquiz} = req.params
  const quiz = await Quiz.findByPk(idquiz)
  if (!quiz) return res.status(404).json({msg: 'Not found'})
  await quiz.destroy()
  return res.status(200).json({
    msg: 'ok',
    data: [quiz]
  })
}

