// Tabela de alterações e lesoes do banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

export interface AlteracoesLesoesInstance extends Model {
    id_alteracoes_lesoes: number
    bromidrose: boolean
    hidrose: boolean
    desidrose: boolean
    isquemia: boolean
    mal_perfurante: boolean
    edema: boolean
    tinea: boolean
    psoriase: boolean
    tungiase: boolean
    fissuras: boolean
    perfusao_pe_direito: "Normal" | "Pálido" | "Cianótico"
    perfusao_pe_esquerdo: "Normal" | "Pálido" | "Cianótico"
    verruga_plantar: boolean;
    calo_dorsal: boolean
    calo_plantar: boolean
    hiperqueratose: boolean
    calo_interdigital: boolean
    erisipela: "Sim" | "Não"
    observacoes: string
  }
  
  // Definição do modelo Sequelize
  export const AlteracoesLesoes = sequelize.define<AlteracoesLesoesInstance>("AlteracoesLesoes",{
      id_alteracoes_lesoes: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      bromidrose: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      hidrose: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      desidrose: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      isquemia: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      mal_perfurante: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      edema: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      tinea: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      psoriase: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      tungiase: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      fissuras: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      perfusao_pe_direito: {
        type: DataTypes.ENUM("Normal", "Pálido", "Cianótico"),
        allowNull: true,
      },
      perfusao_pe_esquerdo: {
        type: DataTypes.ENUM("Normal", "Pálido", "Cianótico"),
        allowNull: true,
      },
      verruga_plantar: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      calo_dorsal: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      calo_plantar: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      hiperqueratose: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      calo_interdigital: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      erisipela: {
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true,
      },
      observacoes: {
        type: DataTypes.TEXT,
        allowNull: true,
      } 
},{
      tableName: "alteracoes_lesoes",
      timestamps: false
    }
  );