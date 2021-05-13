exports.mongo = {
    PASS: process.env.MONGO_PASS || 'NcRgOBvKwgh4076k',
    USER: process.env.MONGO_USER || 'clean',
    TENANT: process.env.TENANT || 'TEST'
}

exports.dev = {
    DB: process.env.DB || "mongo"
}