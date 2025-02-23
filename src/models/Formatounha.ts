// Tabela de dados gerais do paciente no banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'
import { Artelhos } from './Artelhos'

export interface FormatoUnhaInstance extends Model {
    id_formato_unha: number
    id_artelhos: number
    involuta: "Sim" | "Não"
    telha: "Sim" | "Não"
    funil: "Sim" | "Não"
    gancho: "Sim" | "Não"
    caracol: "Sim" | "Não"
    torques: "Sim" | "Não"
    normal: "Sim" | "Não"
    cunha: "Sim" | "Não"
    observacoes: string
}

export const FormatoUnha = sequelize.define<FormatoUnhaInstance>("FormatoUnha", {
    id_formato_unha:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    id_artelhos:{
        type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                  model: Artelhos,
                  key: "id_artelhos",
                },
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
    },
    involuta:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    telha:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    funil:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    gancho:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    caracol:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    torques:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    normal:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    cunha:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    observacoes_unhas:{
        type: DataTypes.TEXT,
        allowNull: true
    }
},{
    tableName:'formato_unha',
    timestamps: false
})