exports.mongo = {
    PASS: process.env.MONGO_PASS,
    USER: process.env.MONGO_USER
}

exports.dev = {
    DB: process.env.DB || "mongo"
}