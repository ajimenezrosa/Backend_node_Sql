import sql from 'mssql';
import config from '../config';

const dbSettings = {
    user:    config.dbUser,         
    password:  config.dbPassword,  
    server:  config.dbServer,       
    database: config.dbDataBase,    
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};


/**
 * Servicios_moviles    
 * 0Z0bDc3VMqIrxkZrSpAU_
 */
export async function getConections() {

    try {
        const pool =  await  sql.connect(dbSettings)
        return pool;
        // const result = await pool.request().query('SELECT 1');
        // console.log(result);
                
    } catch (error) {
        console.log(error);
    }

}

getConections();


export { sql }