//Dados pessoais do banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

export enum Sexo {
    "F" = "Feminino",
    "M" = "Masculino"
}

export interface DadosPessoaisInstance extends Model {
    id_dados_pessoais: number
    id_dados_gerais: number
    nome: string
    sexo: Sexo
    email: string
    data_nascimento: Date
    bairro: string
    cidade: string
    estado: string
    cep: string
    rg: string
    telefone_residencial: string
    telefone_celular: string
    observacoes: string
}

export const Usuario = sequelize.define<DadosPessoaisInstance>("DadosPessoais", {
    id_dados_pessoais: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    id_dados_gerais: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        type: DataTypes.ENUM,
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
    }
}, {
    tableName: 'dados_pessoais',
    timestamps: true
})