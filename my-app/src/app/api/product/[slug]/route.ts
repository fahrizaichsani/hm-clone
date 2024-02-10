import { ProductModel } from "@/db/models/Product";
import { DetailProductProps } from "@/types";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: DetailProductProps) {
  const products = await ProductModel.getProductBySlug(params.slug);
  
  return NextResponse.json(products);
}
