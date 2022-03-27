import {NextFunction, Request, Response} from 'express';

import {validationResult} from 'express-validator'


export const validarCampos = (req: Request, res: Response, next: NextFunction) => {
  // validacion de campos correctos
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    console.log('Checker encontro errores ')
    return res.status(400).json(errors)
  }
  console.log('paso el checker')
  return next()
}

