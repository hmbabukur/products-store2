import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import ProductCard from '../components/ProductsCard';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useContext(CartContext)!;

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="grid lg:grid-cols-5 gap-8 py-6 px-14 md:px-10 w-full max-w-screen overflow-x-hidden">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} onAddToCart={addToCart}/>
      ))}
    </div>
  );
}

export default ProductList;
