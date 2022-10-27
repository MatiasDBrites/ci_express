import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
import _config from "../config/config.js";
const env = process.env.ENV;
const config = _config[env];
dotenv.config();

const db = new Sequelize(
process.env.DB_NAME,
process.env.DB_USER,
process.env.DB_PASSWORD,
{
host: process.env.DB_HOST,
dialect: "postgres",
logging: false,
port: process.env.DB_PORT,
define: {
timestamps: false 
}
});
export default db; 
