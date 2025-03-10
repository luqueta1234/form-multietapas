// Tabela de dados pessoais do banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'
import { timeStamp } from 'console'
import { DadosClinicos } from './Dadosclinicos'

export interface DadosPessoaisInstance extends Model {
    id_dados_pessoais: number
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
}

export const DadosPessoais = sequelize.define<DadosPessoaisInstance>("DadosPessoais", {
    id_dados_pessoais: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
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
        type: DataTypes.STRING,
        allowNull: true
    },
    rg:{
        type: DataTypes.STRING,
        allowNull: true
    },
    telefone_residencial:{
        type: DataTypes.STRING,
        allowNull: true
    },
    telefone_celular:{
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    timestamps: false,
    tableName: 'dados_pessoais'
})