"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function AddProductForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    longDescription: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      Swal.fire({
        icon: "success",
        title: "Product added!",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/products");
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed to add product",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col max-w-lg p-6 rounded-md sm:p-10 bg-white shadow-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md border-gray-300"
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Short Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md border-gray-300"
            required
          />
          <textarea
            name="longDescription"
            placeholder="Long Description"
            value={formData.longDescription}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md border-gray-300"
            rows={5}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md border-gray-300"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md border-gray-300"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold rounded-md bg-violet-600 text-white hover:bg-violet-700"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
