"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components";
import { sellerList } from "@/constants";
import ModalSendMessage from "./ModalSendMessage";

const SearchBar = () => (
  <div className="flex md:flex-row flex-col  md:space-x-5 md:space-y-0 space-y-3  items-center mb-4 ">
    <div className="flex items-center justify-center bg-white border border-gray-100 shadow rounded overflow-hidden ">
      <div className="font-montserrat text-sm text-[#222222] leading-[19px] outline-none border-r">
        <select
          name="product"
          id=""
          className="px-3 mr-3 bg-white font-montserrat text-sm text-[#222222] leading-[19px] outline-none"
        >
          <option value="a" selected>
            Products
          </option>
        </select>
      </div>
      <div className="flex items-center justify-center font-montserrat text-sm text-[#222222] leading-[19px] outline-none">
        <FontAwesomeIcon icon={faSearch} className="ml-3 " />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none border-none p-2 md:min-w-72"
        />
      </div>
    </div>
    <div className="flex">
      <div className="px-3 bg-secondary rounded-lg font-montserrat text-sm text-[#222222] leading-[19px] outline-none">
        <select name="country" id="" className="p-2 rounded bg-transparent">
          <option value="a" selected>
            Pakistan
          </option>
        </select>
      </div>
      <div className="px-4 bg-white rounded-lg">
        <select
          name="country"
          id=""
          className="py-2 px-3 rounded shadow border border-gray-100 bg-transparent font-montserrat text-sm text-[#222222] leading-[19px] outline-none"
        >
          <option value="a" selected>
            All Industries
          </option>
        </select>
      </div>

      <div>
        <button className="bg-primary px-4 py-2 rounded shadow font-montserrat text-sm text-[#222222] leading-[19px] outline-none">
          Search
        </button>
      </div>
    </div>
  </div>
);

const SearchSeller = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="p-5">
        <SearchBar />
        {sellerList.length > 0 && (
          <>
            <div className="mb-4">
              <p className="font-montserrat text-2xl text-[#747474] leading-[31px]">
                {" "}
                Found {sellerList.length} sellers in Pakistan
              </p>
            </div>
            <div className="grid md:grid-cols-1 gap-4">
              {sellerList.map((seller) => (
                <Card
                  key={seller.id}
                  item={seller}
                  isSeller
                  onClick={toggleModal}
                />
              ))}
            </div>

            {isModalOpen && <ModalSendMessage onClick={toggleModal} />}
          </>
        )}
      </div>
    </>
  );
};

export default SearchSeller;
