import React from "react";
import { Product } from '../types/product';

const ProductOne = 'https://react-demo.tailadmin.com/assets/product-01-c483c307.png'
const ProductTwo = 'https://react-demo.tailadmin.com/assets/product-02-7399ae73.png'
const ProductThree = 'https://react-demo.tailadmin.com/assets/product-03-16b7c2c9.png'
const ProductFour = 'https://react-demo.tailadmin.com/assets/product-04-89ad00c9.png'

const productData: Product[] = [
  {
    image: ProductOne,
    name: 'Apple Watch Series 7',
    category: 'Electronics',
    price: 296,
    sold: 22,
    profit: 45,
  },
  {
    image: ProductTwo,
    name: 'Macbook Pro M1',
    category: 'Electronics',
    price: 546,
    sold: 12,
    profit: 125,
  },
  {
    image: ProductThree,
    name: 'Dell Inspiron 15',
    category: 'Electronics',
    price: 43,
    sold: 64,
    profit: 247,
  },
  {
    image: ProductFour,
    name: 'HP Probook 450',
    category: 'Electronics',
    price: 499,
    sold: 72,
    profit: 103,
  },
];

type Props = {
  scope?: string;
  module?: string;
};

const TableTwo: React.FC<Props> = ({scope, module}: Props) => {
  return (
    <div className="outline outline-purple-400 relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {scope && module && (
        <div className="absolute top-0 left-px text-xs font-semibold">
          mf-scope: {scope} - (mf-module: {module})
        </div>
      )}
      <div className="py-6 px-4 md:px-6 xl:px-8">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-8">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Product Name</p>
        </div>
        <div className="col-span-2 sm:!flex hidden items-center">
          <p className="font-medium">Category</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Price</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Sold</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Profit</p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-8"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:!flex-row sm:!items-center">
              <div className="h-12 w-14 rounded-md">
                <img src={product.image} alt="Product" />
              </div>
              <p className="text-sm text-black dark:text-white">
                {product.name}
              </p>
            </div>
          </div>
          <div className="col-span-2 sm:!flex hidden items-center text-center">
            <p className="text-sm text-black dark:text-white">
              {product.category}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              ${product.price}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{product.sold}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-green-400">${product.profit}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
