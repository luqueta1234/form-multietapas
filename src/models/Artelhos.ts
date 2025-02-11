// Tabela de artelhos do banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

export interface ArtelhosInstance extends Model {
    id_artelhos: number
    onicoatrofia: boolean
    onicocriptose: boolean
    onicorrexe: boolean
    granuloma: boolean
    onicogrifose: boolean
    onicolise: boolean
    onicofose: boolean
    onicomicose: boolean
    psoriase_ungueal: boolean
}

export const Artelhos = sequelize.define<ArtelhosInstance>("Artelhos", {
    id_artelhos:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    onicoatrofia:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    onicocriptose:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    onicorrexe:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    granuloma:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    onicogrifose:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    onicolise:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    onicofose:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    onicomicose:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    psoriase_ungueal:{
        type: DataTypes.TINYINT,
        allowNull: true
    }
},{
    tableName:'artelhos',
    timestamps: false
})