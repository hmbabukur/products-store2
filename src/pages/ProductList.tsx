import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import ProductCard from '../components/ProductsCard';
import { useQuery } from "@tanstack/react-query";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

async function fetchProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
}

function ProductList() {
  const { data: products, isLoading, isError, error } = useQuery<Product[]>({
    queryKey: ["products"], 
    queryFn: fetchProducts,
  });

  const { addToCart } = useContext(CartContext)!;

  if (isLoading){
    return <p className='text-center text-xl mt-10'>Loading Products...</p>;
  }

  if (isError){
    return <p className=' text-center text-xl mt-10 text-red-500'>Error message: {error.message}</p>
  }

  return (
    <div className="grid lg:grid-cols-5 gap-8 py-6 px-14 md:px-10 w-full max-w-screen overflow-x-hidden">
      {products?.map((product: Product) => (
        <ProductCard key={product.id} product={product} onAddToCart={addToCart}/>
      ))}
    </div>
  );
}

export default ProductList;
