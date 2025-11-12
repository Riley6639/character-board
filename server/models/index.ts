import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import { CharacterFactory } from './character.js';

const sequelize = process.env.DB_URL 
    ? new Sequelize(process.env.DB_URL) 
    : new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
            decimalNumbers: true,
        },
    });
const Character = CharacterFactory(sequelize)

export { sequelize, Character };