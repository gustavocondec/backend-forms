import {Router} from 'express'
import {check} from 'express-validator';
import {createTypeQuestion, deleteTypeQuestion, editTypeQuestion, getTypeQuestion} from '../controllers/typequestion';
const {validarCampos, validarJWT} = require('../middlewares')

const router = Router()

router.get('/', getTypeQuestion)

router.post('/',[
  check('name','Debe enviar name').not().isEmpty(),
  check('description','Debe enviar description').not().isEmpty(),
  validarJWT,
  validarCampos
], createTypeQuestion)

router.put('/:idtypequestion', [
  validarJWT,
  check('idtypequestion', 'Es necesario idtypequestion a modificar').not().isEmpty(),
  validarCampos
], editTypeQuestion)

router.delete('/:idtypequestion', [
  validarJWT
], deleteTypeQuestion)

module.exports= router
