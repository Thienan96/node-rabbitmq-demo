import mysql, {Pool , PoolOptions} from 'mysql2';

const poolConfig: PoolOptions = {
    host: '13.228.175.187',
    port: 33306,
    user: 'fplatformadmin',
    password: 'Fplatformadmin123#',
    database: 'evote_dev',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}

const pool: Pool = mysql.createPool(poolConfig);
export default pool;