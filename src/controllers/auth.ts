import {NextFunction, Request, Response} from 'express';

import {User} from '../databaseMongo/user'
import {compareSync} from 'bcrypt'
import {generateJwt} from '../helpers/jwt'


export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {email, password} = req.body

    //verificar que user este activo
    const user = await User.findOne({email})
    if (!user) return res.status(404).json({msg: 'user not found'})
    if (user.isDeleted) return res.status(404).json({msg: 'El usuario esta inactivo'})

    // verficar contraseña
    const validPassword = compareSync(password, user.password)
    if (!validPassword) return res.status(400).json({msg: 'Contraseña incorrecta'})

    // generar token
    const token = await generateJwt(user.id)
    return res.json({
      token,
      user
    })

  } catch (e) {
    return next(e)
  }
}

