import { ProductModel } from "@/db/models/Product";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const products = await ProductModel.getAllProduct();
  return NextResponse.json({data: products});
}
