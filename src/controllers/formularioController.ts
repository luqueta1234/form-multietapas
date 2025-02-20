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
    res.render("teste");
}

export const etapa1Post = async (req: Request, res: Response) => {
    try {
    const { nome, endereco, bairro, cidade, estado, cep, telefone_residencial, 
            telefone_celular, email, data_nascimento, sexo, trabalho, id_dados_pessoais, 
            id_dados_femininos, maior_tempo, duracao, pratica_atividade_fisica, visita_podologo,
            frequencia_podologo, esporte, dum, amamentando, ciclo_menstrual_regular,
            medicamento, fumante, alergico, substancias, gestante, queixa, hipertirioidismo, 
            renal, epilepsia, quimioterapia_ou_radioterapia, osteoporose, hipotiroidismo,
            neuropatia, hepatite, antecedentes_oncologicos, cardiopatia, hipertensao, reumatismo, hanseniase,
            cirurgia_mmii,  marca_passo, hipotensao, comprometimento_vascular, diabetes, taxa_glicemica,
            data_ultima_verificacao, insulina,  dieta_hidrica, dedo_flexivel,dedo_rigido, dedo_espalmado, 
            dedo_martelo, queda_metatarso,tipo_marcha, qual_tipo_marcha,
            joelho, articulacao, sensibilidade_a_dor, involuta, telha, funil, gancho, caracol, torques, normal, cunha, 
            onicoatrofia, onicocriptose, onicorrexe, granuloma, onicogrifose, onicolise,
            onicofose, onicomicose, psoriase_ungueal, observacoes, bromidrose, hidrose, desidrose, isquemia, mal_perfurante, edema,
            tinea, psoriase, tungiase, fissuras, perfusao_pe_direito, perfusao_pe_esquerdo,
            verruga_plantar, calo_dorsal, calo_plantar, hiperqueratose, calo_interdigital,
            erisipela,
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

    await CotidianoPaciente.create({
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

    await DadosClinicos.create({
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

    await DescricaoPe.create({
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

    await FormatoUnha.create({
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

     await FormatoUnha.create({
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

    await AlteracoesLesoes.create({
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

    res.redirect(`/teste/${form.id_dados_pessoais}`)

    } catch (error) {
    console.error("Erro ao cadastrar cliente:", error);
    res.status(500).send("Erro ao cadastrar cliente.");
  }

};

export const submit = async (req: Request, res: Response) => {
    res.send("Formulário enviado com sucesso!");
}
