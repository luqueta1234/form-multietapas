// Tabela de alterações e lesoes do banco de dados

import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

export interface AlteracoesLesoesInstance extends Model {
    id_alteracoes_lesoes: number
    bromidrose: "Sim" | "Não"
    hidrose: "Sim" | "Não"
    desidrose: "Sim" | "Não"
    isquemia: "Sim" | "Não"
    mal_perfurante: "Sim" | "Não"
    edema: "Sim" | "Não"
    tinea: "Sim" | "Não"
    psoriase: "Sim" | "Não"
    tungiase: "Sim" | "Não"
    fissuras: "Sim" | "Não"
    perfusao_pe_direito: "Normal" | "Pálido" | "Cianótico"
    perfusao_pe_esquerdo: "Normal" | "Pálido" | "Cianótico"
    verruga_plantar: "Sim" | "Não";
    calo_dorsal: "Sim" | "Não"
    calo_plantar: "Sim" | "Não"
    hiperqueratose: "Sim" | "Não"
    calo_interdigital: "Sim" | "Não"
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
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true,
      },
      hidrose: {
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true,
      },
      desidrose: {
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true,
      },
      isquemia: {
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true,
      },
      mal_perfurante: {
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true,
      },
      edema: {
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true,
      },
      tinea: {
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true,
      },
      psoriase: {
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true,
      },
      tungiase: {
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true,
      },
      fissuras: {
        type: DataTypes.ENUM("Sim", "Não"),
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
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true,
      },
      calo_dorsal: {
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true,
      },
      calo_plantar: {
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true,
      },
      hiperqueratose: {
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true,
      },
      calo_interdigital: {
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true,
      },
      erisipela: {
        type: DataTypes.ENUM("Sim", "Não"),
        allowNull: true,
      },
      observacoes_alteracoes: {
        type: DataTypes.TEXT,
        allowNull: true,
      } 
},{
      tableName: "alteracoes_lesoes",
      timestamps: false
    }
  );