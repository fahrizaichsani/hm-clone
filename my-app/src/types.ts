import { ObjectId } from "mongodb";

//product interface
export interface Product {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

//slug params interface
export interface DetailProductProps {
  params: {
    slug: string;
  };
}