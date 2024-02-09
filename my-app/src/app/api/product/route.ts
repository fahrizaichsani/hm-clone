import { Product } from "@/db/models/Product";

export async function GET(request: Request) {
  // logic => get data dari mongodb
  const products = await Product.getAllProduct();
  return Response.json({
    data: products,
  });
}
