const { object, number, string } = require("superstruct");

exports.userSchema = object({
  surname: string(),
  lastname: string(),
  dni: number(),
});
