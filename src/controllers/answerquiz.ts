import {NextFunction, Request, Response} from 'express'

import {AnswerQuiz} from '../databaseSql/answerquiz'

export const getAnswerQuiz = async (req:Request, res: Response) => {
  const {limit = 5, from=0} = req.query

  const [quizAnswer, total] = await Promise.all([
    AnswerQuiz.findAll({limit: Number(limit),offset: Number(from)}),
    AnswerQuiz.count()
  ])
  console.log('total',total)
  res.status(200).json({
    total,
    msg: 'ok',
    data: quizAnswer
  })
 
}

export const createAnswerQuiz = async (req:Request, res: Response, next: NextFunction) => {
  try {
    const {quiz_idquiz} = req.body
    const newAnswerQuiz = await AnswerQuiz.create({date: new Date(), quiz_idquiz})
    res.status(200).json({
      msg: 'ok',
      data: [
        newAnswerQuiz
      ]
    })
  } catch (e) {
    next(e)
  }
}
