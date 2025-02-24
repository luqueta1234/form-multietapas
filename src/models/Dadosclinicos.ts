// Tabela de dados clínicos do paciente no banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'
import { DadosFemininos } from './Dadosfemininos'
import { DadosPessoais } from './Dadospessoais'


export interface DadosClinicosInstance extends Model {
    id_dados_clinicos: number
    id_dados_pessoais: number
    id_dados_femininos: number
    medicamento: string
    fumante: "Sim" | "Não"
    alergico: "Sim" | "Não"
    substancias: string
    gestante: "Sim" | "Não"
    hipertirioidismo: "Sim" | "Não"
    renal: "Sim" | "Não"
    epilepsia: "Sim" | "Não"
    quimioterapia_ou_radioterapia: "Sim" | "Não"
    osteoporose: "Sim" | "Não"
    hipotiroidismo: "Sim" | "Não"
    neuropatia: "Sim" | "Não"
    hepatite: "Sim" | "Não"
    antecedentes_oncologicos: "Sim" | "Não"
    cardiopatia: "Sim" | "Não"
    hipertensao: "Sim" | "Não"
    reumatismo: "Sim" | "Não"
    hanseniase: "Sim" | "Não"
    cirurgia_mmii: "Sim" | "Não"
    marca_passo: "Sim" | "Não"
    hipotensao: "Sim" | "Não"
    comprometimento_vascular: "Sim" | "Não"
    diabetes: "Sim" | "Não"
    taxa_glicemica: string
    data_ultima_verificacao: string
    insulina: "Sim" | "Não" | "Injetável" | "Via Oral"
    dieta_hidrica: "Sim" | "Não" | "Dieta Alimentar"
}

export const DadosClinicos = sequelize.define<DadosClinicosInstance>("DadosClinicos", {
    id_dados_clinicos: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    id_dados_pessoais: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: DadosPessoais,
          key: "id_dados_pessoais",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    hipertirioidismo:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    renal:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    epilepsia:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    quimioterapia_ou_radioterapia:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    osteoporose:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    hipotiroidismo:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    neuropatia:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    hepatite:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    antecedentes_oncologicos:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    cardiopatia:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    hipertensao:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    reumatismo:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    hanseniase:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    cirurgia_mmii:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    marca_passo:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    hipotensao:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    comprometimento_vascular:{
        type: DataTypes.ENUM("Sim", "Não"),
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
        allowNull: true,
        defaultValue: "0000-00-00"
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