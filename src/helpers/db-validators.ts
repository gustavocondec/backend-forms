import {Role} from '../databaseMongo/role'
import {User} from '../databaseMongo/user'

export const isRoleValid = async (role = '') => {
  const existRole = await Role.findOne({role})
  if (!existRole) throw new Error(`El rol ${role} no exite en la BD.`)
}


export const existEmailInDb = async (correo = '') => {
  const existEmail = await User.findOne({correo})
  if (existEmail) throw new Error(`El correo ${correo} ya existe en la BD.`)
}

export const existUserById = async (id = '') => {
  const existUser = await User.findById(id)
  if (!existUser) throw new Error(`El user id ${id} mo existe.`)
}

