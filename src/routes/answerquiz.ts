import {Router} from 'express';
import {createAnswerQuiz, getAnswerQuiz} from '../controllers/answerquiz';
import {check} from 'express-validator';
const {validarCampos, validarJWT} = require('../middlewares')


const router = Router()

router.get('/',[
  // validarJWT,
  validarCampos
], getAnswerQuiz)

router.post('/',[
  validarJWT,
  check('quiz_idquiz','Es necesario enviar el id quiz que se responde').not().isEmpty()
], createAnswerQuiz)



module.exports = router
