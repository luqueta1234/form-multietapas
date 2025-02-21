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
    observacoes_pe: string
    observacoes_dedos: string
    lesoes: string
    uso_palmilha: "Sim" | "Não" | "Ortopédica" | "Descanso"
    ncalcado: string
    tipocalcado: string
    tipocalcadoesporte: string
    dedo_flexivel: "Direito" | "Esquerdo"
    dedo_rigido: "Direito" | "Esquerdo"
    dedo_espalmado: "Direito" | "Esquerdo"
    dedo_martelo: "Direito" | "Esquerdo"
    queda_metatarso: "Direito" | "Esquerdo"
    tipo_marcha: "Normal" | "Patológica"
    qual_tipo_marcha: string
    joelho: "Normal" | "Valgo" | "Varo"
    articulacao: "Retropé" | "Chopart" | "Mediopé" | "Lisfranc" | "Antepé"
    sensibilidade_a_dor: "Diminuída" | "Normal" | "Aumentada"
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
    tipocalcadoesporte:{
        type: DataTypes.STRING,
        allowNull: true
    },
    dedo_flexivel:{
        type: DataTypes.ENUM("Direito", "Esquerdo"),
        allowNull: true
    },
    dedo_rigido:{
        type: DataTypes.ENUM("Direito", "Esquerdo"),
        allowNull: true
    },
    dedo_espalmado:{
        type: DataTypes.ENUM("Direito", "Esquerdo"),
        allowNull: true
    },
    dedo_martelo:{
        type: DataTypes.ENUM("Direito", "Esquerdo"),
        allowNull: true
    },
    queda_metatarso:{
        type: DataTypes.ENUM("Direito", "Esquerdo"),
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
    sensibilidade_a_dor:{
        type: DataTypes.ENUM("Diminuída", "Normal", "Aumentada"),
        allowNull: true
    }

    
},{
    tableName: 'descricao_pe_paciente',
    timestamps: false
})