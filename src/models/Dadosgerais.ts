// Tabela de dados gerais do paciente no banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

export interface DadosGeraisInstance extends Model {
    id_dados_gerais: number
    queixa: string
}

export const DadosGerais = sequelize.define<DadosGeraisInstance>("DadosGerais", {
    id_dados_gerais:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    queixa:{
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    tableName:'dados_gerais',
    timestamps: false
})