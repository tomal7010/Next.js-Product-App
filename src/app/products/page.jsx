import dbConnect from "@/lib/dbConnect";
import Link from "next/link";

export const dynamic = "force-dynamic"; // 👈 সবসময় fresh render হবে

export default async function ProductsPage() {
  const collection = await dbConnect("products");
  const products = await collection.find({}).toArray();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-red-600">All Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product._id.toString()}
              className="border rounded-lg shadow-md p-6 hover:shadow-lg transition flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold">${product.price}</p>

              <Link href={`/product/${product._id}`}>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                  See Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
