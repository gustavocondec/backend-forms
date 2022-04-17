import {Router} from 'express'
import {createQuestion, deleteQuestion, editQuestion, getQuestions} from '../controllers/question';
import {check} from 'express-validator';
const {validarCampos, validarJWT} =require('../middlewares');


const router = Router()

router.get('/',getQuestions)

router.post('/',[
  validarJWT,
  check(['title', 'description','quiz_idquiz','typequestion_idtypequestion'], 'Debe enviar los campos requeridos').not().isEmpty(),
  check(['title', 'description'], 'Enviar campos en formato adecuado').isString(),
  check(['quiz_idquiz', 'typequestion_idtypequestion'],'Enviar campos en formato adecuado').isInt(),
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
