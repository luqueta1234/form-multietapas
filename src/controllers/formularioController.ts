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
    const {

    } = req.body;

    const form = await DadosGerais.create({
        
    });

    await CotidianoPaciente.create({

    })

    await DadosFemininos.create({

    })

    await DadosClinicos.create({
        
    })

}
