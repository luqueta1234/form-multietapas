// Tabela de dados gerais do paciente no banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

export interface FormatoUnhaInstance extends Model {
    id_formato_unha: number
    id_artelhos: number
    involuta: boolean
    telha: boolean
    funil: boolean
    gancho: boolean
    caracol: boolean
    torques: boolean
    normal: boolean
    cunha: boolean
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
        allowNull: false
    },
    involuta:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    telha:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    funil:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    gancho:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    caracol:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    torques:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    normal:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    cunha:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    observacoes:{
        type: DataTypes.TEXT,
        allowNull: true
    }
},{
    tableName:'formato_unha',
    timestamps: false
})