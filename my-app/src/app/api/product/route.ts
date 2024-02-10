import { ProductModel } from "@/db/models/Product";

export async function GET(request: Request) {
  const products = await ProductModel.getAllProduct();
  return Response.json(products);
}
