import { Product, Wishlist, WishlistInput } from "@/types";
import { db } from "../config/mongoDb";
import { ObjectId } from "mongodb";

export class WishlistModel {
  static async getAllWishlist(idUser: string) {
    const wishlistCollection = db.collection("wishlists");
    const result = (await wishlistCollection.find({
      userId: new ObjectId(idUser)
    }).toArray()) as Wishlist[];
    return result;
  }

  static async getWishlistById(_id: string) {
    const wishlistCollection = db.collection("wishlists");
    const result = (await wishlistCollection.findOne({
      _id: new ObjectId(_id),
    })) as Wishlist | null;
    return result;
  }

  static async addWishlist(body: WishlistInput) {
    const wishlistCollection = db.collection("wishlists");
    const result = await wishlistCollection.insertOne({
        userId: new ObjectId(body.userId),
        productId: new ObjectId(body.productId)
    });

    return {
      _id: result.insertedId,
      ...body,
    } as Wishlist
  }
}
