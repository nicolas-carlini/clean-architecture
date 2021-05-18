import { object, number, string } from "superstruct"

export const userSchema = object({
  surname: string(),
  lastname: string(),
  dni: number(),
});
