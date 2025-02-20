// Tabela de dados pessoais do banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'
import { timeStamp } from 'console'

export interface DadosPessoaisInstance extends Model {
    id_dados_pessoais: number
    id_dados_gerais: number
    id_dados_clinicos: number
    nome: string
    sexo: "Masculino" | "Feminino" | "Prefiro não informar"
    email: string
    data_nascimento: Date
    endereco: string
    bairro: string
    cidade: string
    estado: string
    cep: string
    rg: string
    telefone_residencial: string
    telefone_celular: string
    observacoes: string
}

export const DadosPessoais = sequelize.define<DadosPessoaisInstance>("DadosPessoais", {
    id_dados_pessoais: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    id_dados_clinicos: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        type: DataTypes.ENUM("Masculino", "Feminino", "Prefiro não informar"),
        allowNull: true
    },
    trabalho: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    data_nascimento:{
        type: DataTypes.DATE,
        allowNull: true
    },
    endereco:{
        type: DataTypes.STRING,
        allowNull: true
    },
    bairro:{
        type: DataTypes.STRING,
        allowNull: true
    },
    cidade:{
        type: DataTypes.STRING,
        allowNull: true
    },
    estado:{
        type: DataTypes.STRING,
        allowNull: true
    },
    cep:{
        type: DataTypes.CHAR(8),
        allowNull: true
    },
    rg:{
        type: DataTypes.STRING,
        allowNull: true
    },
    telefone_residencial:{
        type: DataTypes.CHAR(8),
        allowNull: true
    },
    telefone_celular:{
        type: DataTypes.CHAR(9),
        allowNull: true
    },
    observacoes:{
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'dados_pessoais'
})