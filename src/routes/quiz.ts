import {Router} from 'express'
import {createQuiz, deleteQuiz, editQuiz, getQuizs} from '../controllers/quiz';
import {check} from 'express-validator';
const {validarCampos, validarJWT} = require('../middlewares')

const router = Router()

router.get('/', getQuizs)


router.post('/', [
  check('title', 'El titulo es obligatorio').not().isEmpty(),
  check('description','Es necesario la descripcion').not().isEmpty(),
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

module .exports = router
