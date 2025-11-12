import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface CharacterAttributes {
    id: number;
    name: string; 
    image: string; 
    race: string; 
    characterClass: string;
    backstory: string; 
}

export interface CharacterCreation extends Optional<CharacterAttributes, 'id'> { };

export class Character extends Model<CharacterAttributes, CharacterCreation> implements CharacterAttributes {
    public id!: number;
    public name!: string;
    public image!: string; 
    public race!: string;
    public characterClass!: string;
    public backstory!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function CharacterFactory(sequelize: Sequelize): typeof Character {
    Character.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
            },
            race: {
                type: DataTypes.STRING,
            },
            characterClass: {
                type: DataTypes.STRING,
                field: 'class',
            },
            backstory: {
                type: DataTypes.TEXT,
            },
        },
        {
            tableName: 'characters',
            sequelize,
            timestamps: false,
            underscored: true,
            freezeTableName: true,
        }
    );

    return Character;
}
