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

let formData: {
    nome?: string;
    endereco?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    cep?: string;
    telefone_residencial?: string;
    telefone_celular?: string;
    email?: string;
    data_nascimento?: Date;
    sexo?: 'Feminino' | 'Masculino' | 'Prefiro não informar';
    trabalho?: string;
    id_dados_pessoais?: number;
    id_dados_femininos?: number;
    maior_tempo?: 'Em pé' | 'Sentado' | 'Andando';
    duracao?: 'Em pé' | 'Sentado' | 'Andando';
    pratica_atividade_fisica?: 'Sim' | 'Não';
    visita_podologo?: 'Sim' | 'Não';
    frequencia_podologo?: string;
    esporte?: string;
    dum?: Date;
    amamentando?: 'Sim' | 'Não';
    ciclo_menstrual_regular?: 'Sim' | 'Não';
    medicamento?: 'Sim' | 'Não';
    fumante?: 'Sim' | 'Não';
    alergico?: 'Sim' | 'Não';
    substancias?: string;
    gestante?: 'Sim' | 'Não';
    queixa?: string;
    hipertirioidismo?: 'Sim' | 'Não';
    renal?: 'Sim' | 'Não';
    epilepsia?: 'Sim' | 'Não';
    quimioterapia_ou_radioterapia?: 'Sim' | 'Não';
    osteoporose?: 'Sim' | 'Não';
    hipotiroidismo?: 'Sim' | 'Não';
    neuropatia?: 'Sim' | 'Não';
    hepatite?: 'Sim' | 'Não';
    antecedentes_oncologicos?: 'Sim' | 'Não';
    cardiopatia?: 'Sim' | 'Não';
    hipertensao?: 'Sim' | 'Não';
    reumatismo?: 'Sim' | 'Não';
    hanseniase?: 'Sim' | 'Não';
    cirurgia_mmii?: 'Sim' | 'Não';
    marca_passo?: 'Sim' | 'Não';
    hipotensao?: 'Sim' | 'Não';
    comprometimento_vascular?: 'Sim' | 'Não';
    diabetes?: 'Sim' | 'Não';
    taxa_glicemica?: number;
    data_ultima_verificacao?: Date;
    insulina?: 'Sim' | 'Não' | 'Injetável' | 'Via Oral';
    dieta_hidrica?: 'Sim' | 'Não' | 'Dieta Alimentar';
    dedo_flexivel?: 'Direito' | 'Esquerdo';
    dedo_rigido?: 'Direito' | 'Esquerdo';
    dedo_espalmado?: 'Direito' | 'Esquerdo';
    dedo_martelo?: 'Direito' | 'Esquerdo';
    queda_metatarso?: 'Direito' | 'Esquerdo';
    tipo_marcha?: 'Normal' | 'Patológica';
    qual_tipo_marcha?: string;
    joelho?: 'Normal' | 'Valgo' | 'Varo';
    articulacao?: 'Retropé' | 'Chopart' | 'Mediopé' | 'Lisfranc' | 'Antepé';
    sensibilidade_a_dor?: 'Diminuída' | 'Normal' | 'Aumentada';
    uso_palmilha?: 'Sim' | 'Não' | 'Ortopédica' | 'Descanso';
    involuta?: 'Sim' | 'Não';
    telha?: 'Sim' | 'Não';
    funil?: 'Sim' | 'Não';
    gancho?: 'Sim' | 'Não';
    caracol?: 'Sim' | 'Não';
    torques?: 'Sim' | 'Não';
    normal?: 'Sim' | 'Não';
    cunha?: 'Sim' | 'Não';
    onicoatrofia?: 'Sim' | 'Não';
    onicocriptose?: 'Sim' | 'Não';
    onicorrexe?: 'Sim' | 'Não';
    granuloma?: 'Sim' | 'Não';
    onicogrifose?: 'Sim' | 'Não';
    onicolise?: 'Sim' | 'Não';
    onicomicose?: 'Sim' | 'Não';
    psoriase_ungueal?: 'Sim' | 'Não';
    observacoes?: string;
    onicofose?: 'Sim' | 'Não';
    bromidrose?: 'Sim' | 'Não';
    hidrose?: 'Sim' | 'Não';
    desidrose?: 'Sim' | 'Não';
    isquemia?: 'Sim' | 'Não';
    mal_perfurante?: 'Sim' | 'Não';
    edema?: 'Sim' | 'Não';
    tinea?: 'Sim' | 'Não';
    psoriase?: 'Sim' | 'Não';
    tungiase?: 'Sim' | 'Não';
    fissuras?: 'Sim' | 'Não';
    perfusao_pe_direito?: 'Normal' | 'Pálido' | 'Cianótico';
    perfusao_pe_esquerdo?: 'Normal' | 'Pálido' | 'Cianótico';
    verruga_plantar?: 'Sim' | 'Não';
    calo_dorsal?: 'Sim' | 'Não';
    calo_plantar?: 'Sim' | 'Não';
    hiperqueratose?: 'Sim' | 'Não';
    calo_interdigital?: 'Sim' | 'Não';
    erisipela?: 'Sim' | 'Não';
} = {};


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
            dedo_martelo, queda_metatarso, tipo_marcha, qual_tipo_marcha, uso_palmilha,
            joelho, articulacao, sensibilidade_a_dor, involuta, telha, funil, gancho, caracol, torques, normal, cunha, 
            onicoatrofia, onicocriptose, onicorrexe, granuloma, onicogrifose, onicolise,
            onicofose, onicomicose, psoriase_ungueal, observacoes, bromidrose, hidrose, desidrose, isquemia, mal_perfurante, edema,
            tinea, psoriase, tungiase, fissuras, perfusao_pe_direito, perfusao_pe_esquerdo,
            verruga_plantar, calo_dorsal, calo_plantar, hiperqueratose, calo_interdigital,
            erisipela,
    } = req.body;

    console.log("Dados recebidos no corpo da requisição:", req.body);

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

    console.log("Dados pessoais criados:", form);

    res.redirect(`/teste/${form.id_dados_pessoais}`)


    } catch (error) {
    console.error("Erro ao cadastrar cliente:", error);
    res.status(500).send("Erro ao cadastrar cliente.");
  }

};

export const submit = async (req: Request, res: Response) => {

    const formData = req.session.formData || {};

    await etapa1.create(formData);

    res.send("Formulário enviado com sucesso!");
}
