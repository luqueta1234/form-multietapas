// Tabela de dados clínicos do paciente no banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

export interface DadosClinicosInstance extends Model {
    id_dados_clinicos: number
    saude: string
}

export const DadosClinicos = sequelize.define<DadosClinicosInstance>("DadosClinicos", {
    id_dados_clinicos:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    saude:{
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    tableName:'dados_clinicos',
    timestamps: false
})