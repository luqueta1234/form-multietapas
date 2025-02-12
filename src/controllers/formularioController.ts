import { AlteracoesLesoes } from "../models/Alteracoeslesoes";
import { CotidianoPaciente } from "../models/Cotidianopaciente";
import { DadosClinicos } from "../models/Dadosclinicos";
import { DadosFemininos } from "../models/Dadosfemininos";
import { DadosGerais } from "../models/Dadosgerais";
import { DadosPessoais } from "../models/Dadospessoais";
import { DescricaoPe } from "../models/Descricaopepaciente";
import { FormatoUnha } from "../models/Formatounha";
import {}
import { Request, Response } from "express";

export const index = async (req: Request, res: Response) => {
    res.render('inicio')

}
export const etapa1 = async (req: Request, res: Response) => {
    res.render("etapa1");
}