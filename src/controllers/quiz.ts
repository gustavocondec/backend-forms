import {NextFunction, Request, Response} from 'express'
import {Quiz} from '../databaseSql'

export const getQuizs = async (req: Request, res: Response, next: NextFunction) => {
  try {
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
  } catch (e) {
    next(e)
  }
}

export const createQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {title,description} = req.body
    const newQuiz = await Quiz.create({title,description,user_iduser: req.user.id})
    res.status(200).json({
      msg: 'ok',
      data: [newQuiz]
    })
  } catch (e) {
    next(e)
  }
}

export const editQuiz = async (req: Request, res: Response, next: NextFunction) => {
  try {
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
  } catch (e) {
    return next(e)
  }
}

export const deleteQuiz = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const {idquiz} = req.params
    const quiz = await Quiz.findByPk(idquiz)
    if (!quiz) return res.status(404).json({msg: 'Not found'})
    await quiz.destroy()
    return res.status(200).json({
      msg: 'ok',
      data: [quiz]
    })
  } catch (e) {
    return next(e)
  }
}
