exports.mongo = {
    PASS: process.env.MONGO_PASS || 'NcRgOBvKwgh4076k',
    USER: process.env.MONGO_USER || 'clean'
}

exports.dev = {
    DB: process.env.DB || "mongo"
}