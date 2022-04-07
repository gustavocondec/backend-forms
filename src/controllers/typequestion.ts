import {NextFunction, Request, Response} from 'express'
import {TypeQuestion} from '../databaseSql/typequestion';


export const getTypeQuestion = async (req:Request,res: Response, next: NextFunction) => {
  try {
    const {limit=5, from=0} = req.query
    from.toString()
    const [typequestions, total] = await Promise.all([
      TypeQuestion.findAll({limit: Number(limit)}),
      TypeQuestion.count()
    ])
    res.status(200).json({
      total,
      msg: 'ok',
      data: typequestions
    })
  } catch (e) {
    next(e)
  }
}
export const createTypeQuestion = async (req:Request,res: Response, next: NextFunction) => {
  try {
    const {name,description} = req.body
    const newTypeQuestion = await TypeQuestion.create({name, description})
    res.status(200).json({
      msg: 'ok',
      data: [newTypeQuestion]
    })
  } catch (e) {
    next(e)
  }
}
export const editTypeQuestion = async (req:Request,res: Response, next: NextFunction) => {
  try {
    const {idtypequestion} = req.params
    const {name,description} = req.body
    const typequestion = await TypeQuestion.findByPk(idtypequestion)
    if (!typequestion) return res.status(404).json({msg: 'Not found'})
    const typequestionUpdated = await typequestion.update({
      name,description
    })
    return res.status(200).json({
      msg: 'ok',
      data: [typequestionUpdated]
    })
  } catch (e) {
    return next(e)
  }
}
export const deleteTypeQuestion = async (req:Request,res: Response, next: NextFunction) => {
  try {
    const {idtypequestion} = req.params
    const typequestion = await TypeQuestion.findByPk(idtypequestion)
    if (!typequestion) return res.status(404).json({msg: 'Not found'})

    await typequestion?.destroy()
    return res.status(200).json({
      msg: 'ok',
      data: [typequestion]
    })
  } catch (e) {
    return next(e)
  }
}


