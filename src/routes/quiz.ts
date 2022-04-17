import {Router} from 'express'
import {createQuiz, deleteQuiz, editQuiz, getQuizs} from '../controllers/quiz';
import {check} from 'express-validator';
const {validarCampos, validarJWT} = require('../middlewares')

const router = Router()

router.get('/', getQuizs)


router.post('/', [
  check(['title','description','user_iduser'], 'Debe enviar los campos adecuados').not().isEmpty(),
  check(['title','description','user_iduser'], 'Debe enviar los campos adecuados').isString(),
  validarJWT,
  validarCampos
],createQuiz)

router.put('/:idquiz',[
  validarJWT,
  check('idquiz','Es necesario el idquiz a modificar').not().isEmpty(),
  validarCampos,
  editQuiz
])

router.delete('/:idquiz',[
  validarJWT,
  validarCampos
], deleteQuiz)

module.exports = router
