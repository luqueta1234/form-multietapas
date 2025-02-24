// Tabela de dados femininos do paciente no banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

export interface DadosFemininosInstance extends Model {
    id_dados_femininos: number
    dum: Date
    amamentando: "Sim" | "Não"
    ciclo_menstrual_regular: "Sim" | "Não"
}

export const DadosFemininos = sequelize.define<DadosFemininosInstance>("DadosFemininos", {
    id_dados_femininos:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    dum:{
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: "0000-00-00"
    },
    amamentando:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    ciclo_menstrual_regular:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    }
},{
    tableName:'dados_femininos',
    timestamps: false
})