// Tabela de cotidiano de paciente no banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

export interface CotidianoPacienteInstance extends Model{
    id_cotidiano_paciente: number
    id_dados_pessoais: number
    trabalho: string
    observacoes: string
}

export const CotidianoPaciente = sequelize.define<CotidianoPacienteInstance>("CotidianoPaciente", {
    id_cotidiano_paciente:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_dados_pessoais:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    trabalho:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    observacoes:{
        type: DataTypes.TEXT,
        allowNull: true
    }
},{
    tableName:'cotidiano_paciente',
    timestamps: false
})