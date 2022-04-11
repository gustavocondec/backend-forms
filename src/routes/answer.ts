import {Router} from 'express'
const {validarCampos, validarJWT} = require('../middlewares');
import {createAnswer, getAnswer} from '../controllers/answer';
import {check} from 'express-validator';

const router = Router()

router.get('/',[
  validarJWT
] ,getAnswer)


router.post('/', [
  validarJWT,
  check(['value','answerquiz_idanswerquiz','question_idquestion','question_quiz_idquiz'],
    'Debe enviar los campos completos').not().isEmpty(),
  check('value', 'Debe ser text').isString(),
  check(['value','answerquiz_idanswerquiz','question_idquestion','question_quiz_idquiz'],
    'debe ser numero').isInt(),
  validarCampos
], createAnswer)

module.exports = router
