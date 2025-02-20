import {Router} from 'express'
import * as DadosPessoais from '../controllers/formularioController'
const router = Router()

router.get('/',DadosPessoais.index)

router.get('/teste',DadosPessoais.etapa1)
router.post('/teste',DadosPessoais.etapa1Post)

router.post('/submit',DadosPessoais.submit)

export default router