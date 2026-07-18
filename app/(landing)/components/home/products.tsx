import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";

const productList = [
  {
    name: "SportsOn Product 1",
    category: "Shoes",
    price: 450000,
    imgUrl: "football-shoes (1) 1.png",
  },
  {
    name: "SportsOn Product 2",
    category: "Tennis",
    price: 250000,
    imgUrl: "tennis-racket 1-1.png",
  },
  {
    name: "SportsOn Product 3",
    category: "TShirt",
    price: 230000,
    imgUrl: "sportshirt 1-1.png",
  },
  {
    name: "SportsOn Product 4",
    category: "Shoes",
    price: 440000,
    imgUrl: "shoes 2.png",
  },
  {
    name: "SportsOn Product 5",
    category: "Shoes",
    price: 550000,
    imgUrl: "shoes 2-1.png",
  },
  {
    name: "SportsOn Product 6",
    category: "Tennis",
    price: 650000,
    imgUrl: "tennis-racket 1.png",
  },
    {
    name: "SportsOn Product 3",
    category: "TShirt",
    price: 230000,
    imgUrl: "sportshirt 1.png",
  },
      {
    name: "SportsOn Product 3",
    category: "Set Tennis",
    price: 230000,
    imgUrl: "set.png",
  },
];

const ProductsSection = () => {
  return (
    <section id="products-section" className="container mx-auto mt-32">
      <h2 className="font-bold italic text-4xl text-center mb-11">
        <span className="text-primary-blue">OUR </span>PRODUCTS
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {productList.map((product, index) => (
          <Link
            href="#"
            key={index}
            className="p-1.5 bg-white hover:drop-shadow-xl duration-300"
          >
            <div className="bg-blue-tint aspect-square w-full flex justify-center items-center relative">
              <Image
                src={`/images/products/${product.imgUrl}`}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square object-contain"
              />
              <Button className="w-10 h-10 p-2! absolute right-3 top-3 ">
                <FiPlus size={24} />
              </Button>
            </div>
            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between mb-8">
              <div className="text-gray-500">{product.category}</div>
              <div className="font-medium text-primary-blue">
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumSignificantDigits: 3,
                }).format(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
