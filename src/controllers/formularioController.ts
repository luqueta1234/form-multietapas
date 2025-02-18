import { AlteracoesLesoes } from "../models/Alteracoeslesoes";
import { CotidianoPaciente } from "../models/Cotidianopaciente";
import { DadosClinicos } from "../models/Dadosclinicos";
import { DadosFemininos } from "../models/Dadosfemininos";
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
            telefone_celular, email, data_nascimento, sexo, trabalho
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
        sexo,
        trabalho,     
    });
  
    console.log("Novo ID de dados pessoais:", form.id_dados_pessoais);

    res.redirect(`/etapa2?id=${form.id_dados_pessoais}`);
};

export const etapa2 = async (req: Request, res: Response) => {
    res.render("etapa2", { id_dados_pessoais: req.query.id });
}

export const etapa2Post = async (req: Request, res: Response) => {
    const { id_dados_pessoais, id_dados_femininos, maior_tempo, duracao, pratica_atividade_fisica, visita_podologo,
            frequencia_podologo, esporte, dum, amamentando, ciclo_menstrual_regular,
            medicamento, fumante, alergico, substancias, gestante, queixa
    } = req.body;

    const form = await CotidianoPaciente.create({
        id_dados_pessoais,
        maior_tempo,
        duracao,
        pratica_atividade_fisica,
        visita_podologo,
        frequencia_podologo,
        esporte,
        queixa,
    });

    await DadosFemininos.create({
        id_dados_pessoais,
        dum,
        amamentando,
        gestante,
        ciclo_menstrual_regular,
    })

    await DadosClinicos.create({
        id_dados_pessoais,
        medicamento,
        fumante,
        alergico,
        substancias,
    })

    console.log(id_dados_pessoais);

    res.redirect(`/etapa3?id=${form.id_cotidiano_paciente}`);
};    

export const etapa3 = async (req: Request, res: Response) => {
    res.render("etapa3");
}

export const etapa3Post = async (req: Request, res: Response) => {
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

export const etapa4 = async (req: Request, res: Response) => {
    res.render("etapa4");
}

export const etapa4Post = async (req: Request, res: Response) =>{
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

export const etapa5 = async (req: Request, res: Response) => {
    res.render("etapa5");
}

export const etapa5Post = async (req: Request, res: Response) =>{
    const { involuta, telha, funil, gancho, caracol, torques, normal, cunha, 
        onicoatrofia, onicocriptose, onicorrexe, granuloma, onicogrifose, onicolise,
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
        onicorrexe, 
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

export const etapa6 = async (req: Request, res: Response) => {
    res.render("etapa6");
}

export const etapa6Post = async (req: Request, res: Response) =>{
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

export const submit = async (req: Request, res: Response) => {
    res.send("Formulário enviado com sucesso!");
}
