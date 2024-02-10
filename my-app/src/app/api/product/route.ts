import { Product } from "@/db/models/Product";

export async function GET(request: Request) {
  const products = await Product.getAllProduct();
  return Response.json(products);
}
