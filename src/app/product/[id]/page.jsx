import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import React from "react";

export default async function ProductDetailPage({ params }) {
  const { id } = params;

  const collection = await dbConnect("products");
  const product = await collection.findOne({ _id: new ObjectId(id) });

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto px-6 py-16 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold mb-6 text-red-600">Product Details</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-80 object-cover rounded-md mb-6"
      />
      <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
      <p className="text-2xl font-bold mb-4">Price : ${product.price}</p>
      <p className="text-gray-700 mb-4">Details : {product.longDescription}</p>
      
      
    </div>
  );
}
