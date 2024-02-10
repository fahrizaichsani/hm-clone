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

//user interface
export interface User {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
}

//user input interface
export interface UserInput extends Omit<User, "_id"> {}

//myresponse interface
export interface MyResponse {
  error?: string;
  message?: string;
  access_token?: string;
}
