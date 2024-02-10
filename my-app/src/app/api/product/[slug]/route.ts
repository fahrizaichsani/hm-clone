import { ProductModel } from "@/db/models/Product";
import { DetailProductProps } from "@/types";

export async function GET(request: Request, { params }: DetailProductProps) {
  const products = await ProductModel.getProductBySlug(params.slug);
  return Response.json(products);
}
