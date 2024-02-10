import { Product } from "@/types"
import { db } from "../config/mongoDb"

export class ProductModel {
    static async getAllProduct() {
        const productCollection = db.collection("products")
        const result = await productCollection.find().toArray() as Product[]
        return result
    }

    static async getProductBySlug(slug: string) {
        const productCollection = db.collection("products")
        const result = await productCollection.findOne({
            slug: slug
        }) as Product
        return result
    }
}

