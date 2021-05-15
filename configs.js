exports.mongo = {
    PASS: process.env.MONGO_PASS || 'pass',
    USER: process.env.MONGO_USER || 'tenant',
    TENANT: process.env.TENANT || 'TEST'
}

const stages = {
    dev:{
        DB: process.env.DB || "mongo"
    }
}
exports.dev = stages['dev']

exports.stage = stages['dev']