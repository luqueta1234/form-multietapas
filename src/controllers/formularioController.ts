import { AlteracoesLesoes } from "../models/Alteracoeslesoes";
import { CotidianoPaciente } from "../models/Cotidianopaciente";
import { DadosClinicos } from "../models/Dadosclinicos";
import { DadosFemininos } from "../models/Dadosfemininos";
import { DadosPessoais } from "../models/Dadospessoais";
import { DescricaoPe } from "../models/Descricaopepaciente";
import { FormatoUnha } from "../models/Formatounha";
import { Artelhos } from "../models/Artelhos";
import session from "express-session";
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
    const { id_dados_pessoais, id_dados_femininos, id_cotidiano_paciente, id_dados_clinicos, id_artelhos, id_descricao_pe_paciente,
            id_alteracoes_lesoes, id_formato_unha, nome, endereco, bairro, cidade, estado, cep, telefone_residencial, 
            telefone_celular, email, data_nascimento, sexo, trabalho, lesoes,
            maior_tempo, duracao, pratica_atividade_fisica, visita_podologo,
            frequencia_podologo, esporte, dum, amamentando, ciclo_menstrual_regular,
            medicamento, fumante, alergico, substancias, gestante, queixa, hipertirioidismo, 
            renal, epilepsia, quimioterapia_ou_radioterapia, osteoporose, hipotiroidismo,
            neuropatia, hepatite, antecedentes_oncologicos, cardiopatia, hipertensao, reumatismo, hanseniase,
            cirurgia_mmii,  marca_passo, hipotensao, comprometimento_vascular, diabetes, taxa_glicemica,
            data_ultima_verificacao, insulina,  dieta_hidrica, dedo_flexivel,dedo_rigido, dedo_espalmado, 
            dedo_martelo, queda_metatarso, tipo_marcha, qual_tipo_marcha, uso_palmilha,
            joelho, articulacao, sensibilidade_a_dor, involuta, telha, funil, gancho, caracol, torques, normal, cunha, 
            onicoatrofia, onicocriptose, onicorrexe, granuloma, onicogrifose, onicolise,
            posicao_trabalho, frequencia_atividadefisica, ncalcado, tipocalcado, tipocalcadoesporte,
            onicofose, onicomicose, psoriase_ungueal, observacoes_cotidiano, observacoes_artelhos, observacoes_pe, observacoes_dedos,
            observacoes_unhas, observacoes_alteracoes, observacoes_pessoais, bromidrose, hidrose, desidrose, isquemia, mal_perfurante, edema,
            tinea, psoriase, tungiase, fissuras, perfusao_pe_direito, perfusao_pe_esquerdo,
            verruga_plantar, calo_dorsal, calo_plantar, hiperqueratose, calo_interdigital,
            erisipela,
    } = req.body;

    const formData: Record<string, any> = {};

        formData.id_dados_pessoais = id_dados_pessoais;
        formData.id_cotidiano_paciente = id_cotidiano_paciente;
        formData.id_artelhos = id_artelhos;
        formData.id_formato_unha = id_formato_unha;
        formData.id_alteracoes_lesoes = id_alteracoes_lesoes;
        formData.id_dados_clinicos = id_dados_clinicos;
        formData.id_descricao_pe_paciente = id_descricao_pe_paciente;
        formData.id_dados_femininos = id_dados_femininos;
        formData.nome = nome;
        formData.endereco = endereco;
        formData.bairro = bairro;
        formData.cidade = cidade;
        formData.estado = estado;
        formData.cep = cep;
        formData.telefone_residencial = telefone_residencial;
        formData.telefone_celular = telefone_celular;
        formData.email = email;
        formData.data_nascimento = data_nascimento;
        formData.sexo = sexo;
        formData.lesoes = lesoes;
        formData.trabalho = trabalho;
        formData.maior_tempo = maior_tempo;
        formData.duracao = duracao;
        formData.pratica_atividade_fisica = pratica_atividade_fisica;
        formData.visita_podologo = visita_podologo;
        formData.frequencia_podologo = frequencia_podologo;
        formData.esporte = esporte;
        formData.dum = dum;
        formData.amamentando = amamentando;
        formData.ciclo_menstrual_regular = ciclo_menstrual_regular;
        formData.medicamento = medicamento;
        formData.fumante = fumante;
        formData.alergico = alergico;
        formData.substancias = substancias;
        formData.gestante = gestante;
        formData.queixa = queixa;
        formData.hipertirioidismo = hipertirioidismo;
        formData.renal = renal;
        formData.ncalcado = ncalcado;
        formData.epilepsia = epilepsia;
        formData.quimioterapia_ou_radioterapia = quimioterapia_ou_radioterapia;
        formData.osteoporose = osteoporose;
        formData.hipotiroidismo = hipotiroidismo;
        formData.neuropatia = neuropatia;
        formData.hepatite = hepatite;
        formData.posicao_trabalho = posicao_trabalho;
        formData.frequencia_atividadefisica = frequencia_atividadefisica;
        formData.antecedentes_oncologicos = antecedentes_oncologicos;
        formData.cardiopatia = cardiopatia;
        formData.hipertensao = hipertensao;
        formData.reumatismo = reumatismo;
        formData.hanseniase = hanseniase;
        formData.cirurgia_mmii = cirurgia_mmii;
        formData.marca_passo = marca_passo;
        formData.hipotensao = hipotensao;
        formData.comprometimento_vascular = comprometimento_vascular;
        formData.diabetes = diabetes;
        formData.taxa_glicemica = taxa_glicemica;
        formData.data_ultima_verificacao = data_ultima_verificacao;
        formData.insulina = insulina;
        formData.dieta_hidrica = dieta_hidrica;
        formData.dedo_flexivel = dedo_flexivel;
        formData.dedo_rigido = dedo_rigido;
        formData.dedo_espalmado = dedo_espalmado;
        formData.dedo_martelo = dedo_martelo;
        formData.queda_metatarso = queda_metatarso;
        formData.tipo_marcha = tipo_marcha;
        formData.qual_tipo_marcha = qual_tipo_marcha;
        formData.uso_palmilha = uso_palmilha;
        formData.joelho = joelho;
        formData.tipocalcado = tipocalcado;
        formData.tipocalcadoesporte = tipocalcadoesporte;
        formData.articulacao = articulacao;
        formData.sensibilidade_a_dor = sensibilidade_a_dor;
        formData.involuta = involuta;
        formData.telha = telha;
        formData.funil = funil;
        formData.gancho = gancho;
        formData.caracol = caracol;
        formData.torques = torques;
        formData.normal = normal;
        formData.cunha = cunha;
        formData.onicoatrofia = onicoatrofia;
        formData.onicocriptose = onicocriptose;
        formData.onicorrexe = onicorrexe;
        formData.granuloma = granuloma;
        formData.onicogrifose = onicogrifose;
        formData.onicolise = onicolise;
        formData.onicofose = onicofose;
        formData.onicomicose = onicomicose;
        formData.psoriase_ungueal = psoriase_ungueal;
        formData.observacoes_pe = observacoes_pe;
        formData.observacoes_dedos = observacoes_dedos;
        formData.observacoes_cotidiano = observacoes_cotidiano;
        formData.observacoes_alteracoes = observacoes_alteracoes;
        formData.observacoes_pessoais = observacoes_pessoais;
        formData.observacoes_artelhos = observacoes_artelhos;
        formData.observacoes_unhas = observacoes_unhas;
        formData.bromidrose = bromidrose;
        formData.hidrose = hidrose;
        formData.desidrose = desidrose;
        formData.isquemia = isquemia;
        formData.mal_perfurante = mal_perfurante;
        formData.edema = edema;
        formData.tinea = tinea;
        formData.psoriase = psoriase;
        formData.tungiase = tungiase;
        formData.fissuras = fissuras;
        formData.perfusao_pe_direito = perfusao_pe_direito;
        formData.perfusao_pe_esquerdo = perfusao_pe_esquerdo;
        formData.verruga_plantar = verruga_plantar;
        formData.calo_dorsal = calo_dorsal;
        formData.calo_plantar = calo_plantar;
        formData.hiperqueratose = hiperqueratose;
        formData.calo_interdigital = calo_interdigital;
        formData.erisipela = erisipela;

    // Aqui você pode armazenar o formData na sessão ou no banco de dados

    console.log("Dados recebidos no corpo da requisição:", req.body);

    const form = await DadosPessoais.create({
        id_dados_pessoais,
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
        observacoes_pessoais,
    });

    await CotidianoPaciente.create({
        id_cotidiano_paciente,
        id_dados_pessoais,
        observacoes_cotidiano,
        maior_tempo,
        posicao_trabalho,
        duracao,
        pratica_atividade_fisica,
        frequencia_atividadefisica,
        frequencia_podologo,
        visita_podologo,
        esporte,
        queixa,
    });

    await DadosFemininos.create({
        id_dados_femininos,
        dum,
        amamentando,
        ciclo_menstrual_regular,
    });

    await DadosClinicos.create({
        id_dados_clinicos,
        id_dados_femininos,
        medicamento,
        fumante,
        alergico,
        substancias,
        gestante,
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
        diabetes,
        taxa_glicemica,
        data_ultima_verificacao,
        insulina,
        dieta_hidrica,
    });

    await DescricaoPe.create({
        id_descricao_pe_paciente,
        id_dados_pessoais,
        id_formato_unha,
        id_alteracoes_lesoes,
        observacoes_pe,
        observacoes_dedos,
        lesoes,
        uso_palmilha,
        ncalcado,
        tipocalcado,
        tipocalcadoesporte,
        dedo_flexivel,
        dedo_rigido,
        dedo_espalmado,
        dedo_martelo,
        queda_metatarso,
        qual_tipo_marcha,
        joelho,
        articulacao,
        sensibilidade_a_dor,
    });

    await AlteracoesLesoes.create({
        id_alteracoes_lesoes,
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
        calo_interdigital,
        hiperqueratose,
        erisipela,
        observacoes_alteracoes,
    });

    await Artelhos.create({
        id_artelhos,
        onicoatrofia,
        onicocriptose,
        onicorrexe,
        granuloma,
        onicogrifose,
        onicolise,
        onicomicose,
        psoriase_ungueal,
        observacoes_artelhos,
    });

    await FormatoUnha.create({
        id_formato_unha,
        id_artelhos,
        involuta,
        telha,
        funil,
        gancho,
        caracol,
        torques,
        normal,
        cunha,
        observacoes_unhas,
    });

    console.log("Dados pessoais criados:", form);

    res.redirect(`/teste/${form.id_dados_pessoais}`)


    } catch (error) {
    console.error("Erro ao cadastrar cliente:", error);
    res.status(500).send("Erro ao cadastrar cliente.");
  }

};

export const submit = async (req: Request, res: Response) => {

    await DadosPessoais.create(formData);
    await DadosFemininos.create(formData);
    await CotidianoPaciente.create(formData);
    await DadosClinicos.create(formData);
    await DescricaoPe.create(formData);
    await FormatoUnha.create(formData);
    await Artelhos.create(formData);
    await AlteracoesLesoes.create(formData);

    res.send("Formulário enviado com sucesso!");
}
