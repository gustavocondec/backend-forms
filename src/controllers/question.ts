import {Request, Response} from 'express'
import {Question} from '../databaseSql/question';

export const getQuestions = async (req:Request, res: Response) => {
  const {limit=5, from =0} = req.query
  from.toString()
  const [questions,total] = await Promise.all([
    Question.findAll({limit: Number(limit)}),
    Question.count()
  ])

  res.status(200).json({
    total,
    msg: 'ok',
    data: questions
  })
}

export const createQuestion = async (req:Request, res: Response) => {
  const {title, description,options,quiz_idquiz} = req.body
  const newQuestion = await Question.create({title,description,options,quiz_idquiz})
  res.status(200).json({
    msg: 'ok',
    data: [newQuestion]
  })
}

export const editQuestion = async (req:Request, res:Response) => {
  const {title, description,options} = req.body
  const {idquestion} = req.params
  const question = await Question.findByPk(idquestion)
  if (!question) return res.status(404).json({msg: 'Not Found'})
  const questionUpdated = await question.update({
    title, description, options
  })
  return res.status(200).json({
    msg: 'ok',
    data: [questionUpdated]
  })
}

export const deleteQuestion = async (req:Request, res: Response) => {
  const {idquestion} = req.params
  const question = await Question.findByPk(idquestion)
  if (!question) return res.status(404).json({msg: 'Not Found'})
  await question.destroy()
  return res.status(200).json({
    msg: 'ok',
    data: [question]
  })
}
