const env = process.env;

const dbConfig = {
    database: `mongodb+srv://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}/lab06?retryWrites=true&w=majority`,
    host: "http://localhost",
    mongoConfig: {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
};

module.exports = {
    development: dbConfig,
    production: dbConfig
};