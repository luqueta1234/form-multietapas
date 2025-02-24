// Tabela de cotidiano de paciente no banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'
import { DadosPessoais } from './Dadospessoais'

export interface CotidianoPacienteInstance extends Model{
    id_cotidiano_paciente: number
    id_dados_pessoais: number
    trabalho: string
    maior_tempo: "Em pé" | "Sentado" | "Andando"
    posicao_trabalho: "Em pé" | "Sentado" | "Andando"
    duracao: string
    pratica_atividade_fisica: "Sim" | "Não"
    frequencia_atividade_fisica: string
    visita_podologo: "Sim" | "Não"
    frequencia_podologo: string
    esporte: string
}

export const CotidianoPaciente = sequelize.define<CotidianoPacienteInstance>("CotidianoPaciente", {
    id_cotidiano_paciente:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    id_dados_pessoais: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: DadosPessoais,
          key: "id_dados_pessoais",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    maior_tempo:{
        type: DataTypes.ENUM("Em pé", "Sentado", "Andando"),
        allowNull: true
    },
    posicao_trabalho:{
        type: DataTypes.ENUM("Em pé", "Sentado", "Andando"),
        allowNull: true
    },
    duracao:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    pratica_atividade_fisica:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    frequencia_atividade_fisica:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    visita_podologo:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    frequencia_podologo:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    esporte:{
        type: DataTypes.STRING,
        allowNull: true
    },
    queixa:{
        type: DataTypes.TEXT,
        allowNull: true
    }
},{
    tableName:'cotidiano_paciente',
    timestamps: false
})

export default DadosPessoais;