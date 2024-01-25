'use client'
import React, { useState } from "react";
import { productList } from "@/constants";
import { Card } from "@/components";
import { AddProductForm, EmptyProductState } from "@/containers";

const Product = () => {
  const [showForm, setshowForm] = useState(false);

  const toggleShowForm = () => {
    setshowForm((prevState) => !prevState);
  };
  return (
    <>
      {/* if product list is empty, return empty state  */}
      {productList.length > 0 ? (
        <div className="p-5">
          <p className="py-5 font-montserrat text-2xl text-[#030303] font-medium leading-[31px]">
            Products - 0/10
          </p>
          <div className="grid md:grid-cols-1 gap-4">
            {productList.map((product) => (
              <Card key={product.id} item={product} />
            ))}
            Ï
          </div>
        </div>
      ) : (
        <>
          {showForm ? (
            <AddProductForm toggleShowForm={toggleShowForm} />
          ) : (
            <EmptyProductState toggleShowForm={toggleShowForm} />
          )}
        </>
      )}
    </>
  );
};

export default Product;
