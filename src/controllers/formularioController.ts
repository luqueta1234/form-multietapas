import { AlteracoesLesoes } from "../models/Alteracoeslesoes";
import { CotidianoPaciente } from "../models/Cotidianopaciente";
import { DadosClinicos } from "../models/Dadosclinicos";
import { DadosFemininos } from "../models/Dadosfemininos";
import { DadosGerais } from "../models/Dadosgerais";
import { DadosPessoais } from "../models/Dadospessoais";
import { DescricaoPe } from "../models/Descricaopepaciente";
import { FormatoUnha } from "../models/Formatounha";
import { Artelhos } from "../models/Artelhos";
import { Request, Response } from "express";

export const index = async (req: Request, res: Response) => {
    res.render('inicio')

}
export const etapa1 = async (req: Request, res: Response) => {
    res.render("etapa1");
}

export const etapa1Post = async (req: Request, res: Response) => {
    const { nome, endereco, bairro, cidade, estado, cep, telefone_residencial, 
            telefone_celular, email, data_nascimento, sexo
    } = req.body;

    const form = await DadosPessoais.create({
        nome,
        endereco,
        bairro,
        cidade,
        estado,
        cep,
        telefone_residencial,
        telefone_celular,
        email,
        data_nascimento,
        sexo

        
        
    });
  
    res.redirect(`/etapa2?id=${form}`);
};

export const etapa2 = async (req: Request, res: Response) => {
    const { maior_tempo, duracao, pratica_atividade_fisica, visita_podologo,
            frequencia_podologo, esporte, dum, amamentando, ciclo_menstrual_regular,
            medicamento, fumante, alergico, substancias,
    } = req.body;

    const form = await DadosGerais.create({
        
    });

    await CotidianoPaciente.create({
        maior_tempo,
        duracao,
        pratica_atividade_fisica,
        visita_podologo,
        frequencia_podologo,
        esporte,
    })

    await DadosFemininos.create({
        dum,
        amamentando,
        ciclo_menstrual_regular,
    })

    await DadosClinicos.create({
        medicamento,
        fumante,
        alergico,
        substancias,
    })

    res.redirect(`/etapa3?id=${form}`);
};    

export const etapa3 = async (req: Request, res: Response) => {
    const  { hipertirioidismo, renal, epilepsia, quimioterapia_ou_radioterapia, osteoporose, hipotiroidismo,
        neuropatia, hepatite, antecedentes_oncologicos, cardiopatia, hipertensao, reumatismo, hanseniase,
        cirurgia_mmii,  marca_passo, hipotensao, comprometimento_vascular, diabetes, taxa_glicemica,
        data_ultima_verificacao, insulina,  dieta_hidrica,
    } = req.body

    const form = await DadosClinicos.create({
        hipertirioidismo, 
        renal, 
        epilepsia, 
        quimioterapia_ou_radioterapia, 
        osteoporose, 
        hipotiroidismo,
        neuropatia, 
        hepatite, 
        antecedentes_oncologicos, 
        cardiopatia, 
        hipertensao, 
        reumatismo, 
        hanseniase,
        cirurgia_mmii,  
        marca_passo, 
        hipotensao, 
        comprometimento_vascular,
        diabetes, taxa_glicemica,
        data_ultima_verificacao, 
        insulina,  
        dieta_hidrica
    });
    
    res.redirect(`/etapa4?id=${form}`)    
};

export const etapa4 = async (req: Request, res: Response) =>{
    const { dedo_flexivel,dedo_rigido, dedo_espalmado, dedo_martelo, queda_metatarso,tipo_marcha, qual_tipo_marcha,
            joelho, articulacao, sensibilidade_a_dor,
    } = req.body

    const form = await DescricaoPe.create({
        dedo_flexivel,
        dedo_rigido, 
        dedo_espalmado, 
        dedo_martelo, 
        queda_metatarso,
        tipo_marcha, 
        qual_tipo_marcha,
        joelho, 
        articulacao, 
        sensibilidade_a_dor,

    })

    res.redirect(`/etapa5?id=${form}`)
};

export const etapa5 = async (req: Request, res: Response) =>{
    const { involuta, telha, funil, gancho, caracol, torques, normal, cunha, 
        onicoatrofia, onicocriptose, onicorrex, granuloma, onicogrifose, onicolise,
        onicofose, onicomicose, psoriase_ungueal, observacoes
        
       
        
       
       
        
       
    } = req.body

    const form = await FormatoUnha.create({
        involuta, 
        telha,
        funil, 
        gancho, 
        caracol, 
        torques, 
        normal, 
        cunha,
    });

    await Artelhos.create({
        onicoatrofia, 
        onicocriptose, 
        onicorrex, 
        granuloma,
        onicogrifose, 
        onicolise,
        onicofose, 
        onicomicose, 
        psoriase_ungueal,
        observacoes
    })

    res.redirect(`/etapa6?id=${form}`)
};

export const etapa6 = async (req: Request, res: Response) =>{
    const { bromidrose, hidrose, desidrose, isquemia, mal_perfurante, edema,
            tinea, psoriase, tungiase, fissuras, perfusao_pe_direito, perfusao_pe_esquerdo,
            verruga_plantar, calo_dorsal, calo_plantar, hiperqueratose, calo_interdigital,
            erisipela, observacoes
    } = req.body

    const form = await AlteracoesLesoes.create({
        bromidrose, 
        hidrose, 
        desidrose, 
        isquemia, 
        mal_perfurante, 
        edema,
        tinea, 
        psoriase, 
        tungiase, 
        fissuras, 
        perfusao_pe_direito,
        perfusao_pe_esquerdo,
        verruga_plantar, 
        calo_dorsal, 
        calo_plantar, 
        hiperqueratose, 
        calo_interdigital,
        erisipela, 
        observacoes
    })
}