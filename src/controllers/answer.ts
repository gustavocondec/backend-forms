import {NextFunction, Request, Response} from 'express'

import {Answer} from '../databaseSql/answer';

export const getAnswer = async (req:Request, res:Response, next: NextFunction) => {
  try {
    const {limit = 5, from=0} = req.query

    const [answer,total] = await Promise.all([
      Answer.findAll({limit: Number(limit), offset: Number(from)}),
      Answer.count()
    ])

    res.status(200).json({
      total,
      msg: 'ok',
      data: answer
    })
  } catch (e) {
    next(e)
  }
}


export const createAnswer = async (req:Request, res: Response,next: NextFunction) => {
  try {
    const {value, answerquiz_idanswerquiz,question_idquestion,question_quiz_idquiz} = req.body
    const newAnswer = await Answer.create({value, answerquiz_idanswerquiz,question_idquestion,question_quiz_idquiz})
    res.status(200).json({
      msg: 'ok',
      data: [
        newAnswer
      ]
    })
  } catch (e) {
    next(e)
  }
}
