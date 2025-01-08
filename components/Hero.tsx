"use client"

import React, {useEffect , useState} from "react"
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  title: string;
  image: string;
  description: string;
  price: string;
}


const HeroSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart , setCart] = useState<Product[]>([]);
  const router = useRouter();

  useEffect (() => {
    const fetchData = async() => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await response.json();
      setProducts(data);
    };
    fetchData();
  },[]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const goToCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/cart");
  };

  return (
    <div className="min-h-screen mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <div
            key={product.id} 
            className="bg-gray-950 rounded shadow p-4 flex flex-col items-center space-y-5"
          >
            
            <img
              src={product.image}
              alt={product.title}
              width={100}
              height={100}
              className="object-cover p-4 rounded-xl"
            />
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-lg font-bold">${product.price}</p>
            <p className="text-lg">{product.description}</p>

            
            <button
              className="items-center rounded py-2 px-10 bg-slate-800 font-bold"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      
      <button
        onClick={goToCart}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Go to Cart
      </button>
    </div>
  );
}

export default HeroSection ;