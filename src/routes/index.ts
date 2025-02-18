import {Router} from 'express'
import * as DadosPessoais from '../controllers/formularioController'
const router = Router()

router.get('/',DadosPessoais.index)

router.get('/etapa1',DadosPessoais.etapa1)
router.post('/etapa1',DadosPessoais.etapa1Post)

router.get('/etapa2',DadosPessoais.etapa2);
router.post('/etapa2',DadosPessoais.etapa2Post)

router.get('/etapa3',DadosPessoais.etapa3)
router.post('/etapa3',DadosPessoais.etapa3Post)

router.get('/etapa4',DadosPessoais.etapa4)
router.post('/etapa4',DadosPessoais.etapa4Post)

router.get('/etapa5',DadosPessoais.etapa5)
router.post('/etapa5',DadosPessoais.etapa5Post)

router.get('/etapa6',DadosPessoais.etapa6)
router.post('/etapa6',DadosPessoais.etapa6Post)

router.post('/submit',DadosPessoais.submit)

export default router