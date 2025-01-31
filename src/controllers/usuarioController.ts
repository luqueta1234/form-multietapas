// src/controllers/usuarioController.ts
import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario';

export const index = (req: Request, res: Response) => {
    res.redirect('/etapa1');
};

let formData: { nome?: string; email?: string; endereco?: string; cidade?: string } = {};

export const etapa1 = (req: Request, res: Response) => {
    res.render('etapa1');
};

export const etapa1Post = (req: Request, res: Response) => {
    const { nome, email } = req.body;
    formData.nome = nome;
    formData.email = email;
    res.redirect('/etapa2');
};

export const etapa2 = (req: Request, res: Response) => {
    res.render('etapa2');
};

export const etapa2Post = (req: Request, res: Response) => {
    const { endereco, cidade } = req.body;
    formData.endereco = endereco;
    formData.cidade = cidade;
    res.redirect('/etapa3');
};

export const etapa3 = (req: Request, res: Response) => {
    res.render('etapa3', { resumo: formData });
};

export const submit = async (req: Request, res: Response) => {
    try {
        console.log('Dados recebidos:', req.body);  // Adiciona isso para verificar os dados
        const { nome, email, endereco, cidade } = req.body;

        await Usuario.create({ nome, email, endereco, cidade });

        res.send('Cadastro concluído com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar no banco:', error);
        res.status(500).send('Erro ao salvar no banco de dados.');
    }
};