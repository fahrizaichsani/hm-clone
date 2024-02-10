import { User, UserInput } from "@/types";
import { db } from "../config/mongoDb";
import { hashPass } from "../helpers/bcrypt";


export class UserModel {
  static async register(newUser: UserInput) {
    const productCollection = db.collection("users");
    newUser.password = hashPass(newUser.password)
    const result = await productCollection.insertOne(newUser)
    return {
        _id: result.insertedId,
        ...newUser
    } as User
  }
}
