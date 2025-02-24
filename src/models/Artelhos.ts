// Tabela de artelhos do banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

export interface ArtelhosInstance extends Model {
    id_artelhos: number
    onicoatrofia: "Sim" | "Não"
    onicocriptose: "Sim" | "Não"
    onicorrexe: "Sim" | "Não"
    granuloma: "Sim" | "Não"
    onicogrifose: "Sim" | "Não"
    onicolise: "Sim" | "Não"
    onicofose: "Sim" | "Não"
    onicomicose: "Sim" | "Não"
    psoriase_ungueal: "Sim" | "Não"
}

export const Artelhos = sequelize.define<ArtelhosInstance>("Artelhos", {
    id_artelhos:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    onicoatrofia:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    onicocriptose:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    onicorrexe:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    granuloma:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    onicogrifose:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    onicolise:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    onicofose:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    onicomicose:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    psoriase_ungueal:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
},{
    tableName:'artelhos',
    timestamps: false
})