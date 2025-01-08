"use client";
import React, {useEffect , useState} from "react";

interface Product {
  id:string;
  title:string;
  price:string;
  image:string;
  description:string;
  
}

const CartPage = () => {
  const [cart , setCart] = useState<Product[]>([]);

  useEffect(() =>{
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  },[]);

  const removeFromCart =(id:string) => {
    setCart((prevCart) => prevCart.filter((product)=> product.id !== id));
  };

  return (
    <div className="min-h-screen mt-16">
      <h1 className="text-3xl font-bold text-center mb-6">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ):(

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {cart.map((product) => (
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
              className="items-center rounded py-2 px-10 bg-red-500 font-bold"
              onClick={() => removeFromCart(product.id)} // Trigger remove from cart
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      )
    }
    </div>
  )
}

export default CartPage;