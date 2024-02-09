import { db } from "../config/mongoDb"

export class Product {
    static async getAllProduct() {
        const productCollection = db.collection("products")
        const result = await productCollection.find().toArray()
        return result
    }
}

