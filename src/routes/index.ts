import {Router} from 'express'
import * as DadosPessoais from '../controllers/dadospessoaisController'

const router = Router()

router.get('/',DadosPessoais.index)

router.get('/etapa1',DadosPessoais.etapa1)
router.post('/etapa1',DadosPessoais.etapa1Post)

router.get('/etapa2',DadosPessoais.etapa2)
router.post('/etapa2',DadosPessoais.etapa2Post)

router.get('/etapa3',DadosPessoais.etapa3)

router.post('/submit',DadosPessoais.submit)


export default router