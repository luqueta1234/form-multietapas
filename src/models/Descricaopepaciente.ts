// Tabela de descrição do pé do paciente no banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

export interface DescricaoPeInstance extends Model {
    id_descricao_pe_paciente: number
    id_dados_pessoais: number
    observacoes_pe: string
    observacoes_dedos: string
    lesoes: string
}

export const DescricaoPe = sequelize.define<DescricaoPeInstance>("DescricaoPe",{
    id_descricao_pe_paciente:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    id_dados_pessoais:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    observacoes_pe:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    observacoes_dedos:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    lesoes:{
        type: DataTypes.TEXT,
        allowNull: true
    }
    
},{
    tableName: 'descricao_pe_paciente',
    timestamps: false
})