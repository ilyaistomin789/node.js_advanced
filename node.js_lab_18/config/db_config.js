const config = {
    dialect: 'mssql',
    host: 'localhost',
    port: 1433,
    logging: console.log,
    omitNull: true,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
module.exports = config;
