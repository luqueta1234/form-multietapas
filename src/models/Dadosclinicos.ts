// Tabela de dados clínicos do paciente no banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'
import { DadosFemininos } from './Dadosfemininos'


export interface DadosClinicosInstance extends Model {
    id_dados_clinicos: number
    id_dados_femininos: number
    saude: string
    medicamento: string
    fumante: "Sim" | "Não"
    alergico: "Sim" | "Não"
    substancias: string
    gestante: boolean
    hipertirioidismo: boolean
    renal: boolean
    epilepsia: boolean
    quimioterapia_ou_radioterapia: boolean
    osteoporose: boolean
    hipotiroidismo: boolean
    neuropatia: boolean
    hepatite: boolean
    antecedentes_oncologicos: boolean
    cardiopatia: boolean
    hipertensao: boolean
    reumatismo: boolean
    hanseniase: boolean
    cirurgia_mmii: boolean
    marca_passo: boolean
    hipotensao: boolean
    comprometimento_vascular: boolean
    diabetes: "Sim" | "Não"
    taxa_glicemica: string
    data_ultima_verificacao: string
    insulina: "Sim" | "Não" | "Injetável" | "Via Oral"
    dieta_hidrica: "Sim" | "Não" | "Dieta Alimentar"
}

export const DadosClinicos = sequelize.define<DadosClinicosInstance>("DadosClinicos", {
    id_dados_clinicos:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    id_dados_femininos:{
        type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                  model: DadosFemininos,
                  key: "id_dados_femininos",
                },
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
    },
    saude:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    medicamento:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    fumante:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    alergico:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    substancias:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    gestante:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    hipertirioidismo:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    renal:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    epilepsia:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    quimioterapia_ou_radioterapia:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    osteoporose:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    hipotiroidismo:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    neuropatia:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    hepatite:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    antecedentes_oncologicos:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    cardiopatia:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    hipertensao:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    reumatismo:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    hanseniase:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    cirurgia_mmii:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    marca_passo:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    hipotensao:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    comprometimento_vascular:{
        type: DataTypes.TINYINT,
        allowNull: true
    },
    diabetes:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    taxa_glicemica:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    data_ultima_verificacao:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    insulina:{
        type: DataTypes.ENUM("Sim", "Não", "Injetável", "Via Oral"),
        allowNull: true
    },
    dieta_hidrica:{
        type: DataTypes.ENUM("Sim", "Não", "Dieta Alimentar"),
        allowNull: true
    }
},{
    tableName:'dados_clinicos',
    timestamps: false
})