import {Router} from 'express'
import {createQuestion, deleteQuestion, editQuestion, getQuestions} from '../controllers/question';
import {check} from 'express-validator';
const {validarCampos, validarJWT} =require('../middlewares');


const router = Router()

router.get('/',getQuestions)

router.post('/',[
  validarJWT,
  check('title', 'Debe enviar el titulo').not().isEmpty(),
  check('title', 'Titulo es texto').isString(),
  check('description', 'Debe enviar la descripcion').not().isEmpty(),
  check('description', 'La descripcion es text').isString(),
  validarCampos
], createQuestion)

router.put('/:idquestion', [
  validarJWT,
  check('idquestion', 'Es necesario el id para modificarlo').not().isEmpty(),
  validarCampos
], editQuestion)

router.delete('/:idquestion', [
  validarJWT,
  validarCampos
], deleteQuestion)

module.exports = router
