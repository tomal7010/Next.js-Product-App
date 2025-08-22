import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-[300px] w-full">
      <Image
        src="/banner.png"
        alt="Store Banner"
        layout="fill"
        objectFit="cover"
        className="brightness-95"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Our Store 🛒
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Find the best products at unbeatable prices.
        </p>
        <Link href={"/products"}>
        <button className="bg-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer">
          Shop Now
        </button>
        </Link>

      </div>
    </div>
  );
}
