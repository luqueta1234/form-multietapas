// Tabela de descrição do pé do paciente no banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'
import { DadosPessoais } from './Dadospessoais'
import { FormatoUnha } from './Formatounha'
import { AlteracoesLesoes } from './Alteracoeslesoes'

export interface DescricaoPeInstance extends Model {
    id_descricao_pe_paciente: number
    id_dados_pessoais: number
    id_formato_unha: number
    id_alteracoes_lesoes: number
    uso_palmilha: "Sim" | "Não" | "Ortopédica" | "Descanso"
    ncalcado: string
    tipocalcado: string
    dedo_flexivelE: "Sim" | "Não"
    dedo_rigidoE: "Sim" | "Não"
    dedo_espalmadoE: "Sim" | "Não"
    dedo_marteloE: "Sim" | "Não"
    queda_metatarsoE: "Sim" | "Não"
    dedo_flexivelD: "Sim" | "Não"
    dedo_rigidoD: "Sim" | "Não"
    dedo_espalmadoD: "Sim" | "Não"
    dedo_marteloD: "Sim" | "Não"
    queda_metatarsoD: "Sim" | "Não"
    tipo_marcha: "Normal" | "Patológica"
    qual_tipo_marcha: string
    joelho: "Normal" | "Valgo" | "Varo"
    articulacao: "Retropé" | "Chopart" | "Mediopé" | "Lisfranc" | "Antepé"
    sensibilidade_dor: "Diminuída" | "Normal" | "Aumentada"
}

export const DescricaoPe = sequelize.define<DescricaoPeInstance>("DescricaoPe",{
    id_descricao_pe_paciente:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    id_dados_pessoais:{
        type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                  model: DadosPessoais,
                  key: "id_dados_pessoais",
                },
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
    },
    id_formato_unha:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: FormatoUnha,
          key: "id_formato_unha",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    },
    id_alteracoes_lesoes:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: AlteracoesLesoes,
          key: "id_alteracoes_lesoes",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    },
    uso_palmilha:{
        type: DataTypes.ENUM("Sim", "Não", "Ortopédica", "Descanso"),
        allowNull: true
    },
    ncalcado:{
        type: DataTypes.STRING,
        allowNull: true
    },
    tipocalcado:{
        type: DataTypes.STRING,
        allowNull: true
    },
    dedo_flexivelE:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    dedo_rigidoE:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    dedo_espalmadoE:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    dedo_marteloE:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    queda_metatarsoE:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    dedo_flexivelD:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    dedo_rigidoD:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    dedo_espalmadoD:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    dedo_marteloD:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    queda_metatarsoD:{
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true
    },
    tipo_marcha:{
        type: DataTypes.ENUM("Normal", "Patológica"),
        allowNull: true
    },
    qual_tipo_marcha:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    joelho:{
        type: DataTypes.ENUM("Normal", "Valgo", "Varo"),
        allowNull: true
    },
    articulacao:{
        type: DataTypes.ENUM("Retropé", "Chopart", "Mediopé", "Lisfranc", "Antepé"),
        allowNull: true
    },
    sensibilidade_dor:{
        type: DataTypes.ENUM("Diminuída", "Normal", "Aumentada"),
        allowNull: true
    }

    
},{
    tableName: 'descricao_pe_paciente',
    timestamps: false
})