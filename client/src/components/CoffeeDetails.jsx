import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const singleCoffee = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } =
    singleCoffee;
  console.log("Single Coffee", singleCoffee);
  return (
    <div>
      <Link to="/">
        <button className="flex items-center space-x-2 cursor-pointer p-5">
          <ArrowLeft /> <span>Back to home</span>
        </button>
      </Link>
      <div className="bg-[#F4F3F0] py-20 ps-48 flex items-center rounded-2xl mt-11">
        <div className="h-[455px] w-[351px] ">
          <img className="w-full" src={photo} alt="" />
        </div>
        <div className="ms-28">
          <h2 className="font-semibold text-[#1B1A1A] text-[20px]">
            Name: <span className="font-normal text-[#5C5B5B]"> {name}</span>
          </h2>
          <h3 className="font-semibold text-[#1B1A1A] text-[20px]">
            Chef: <span className="font-normal text-[#5C5B5B]"> {chef}</span>
          </h3>
          <h4 className="font-semibold text-[#1B1A1A] text-[20px]">
            Supplier:
            <span className="font-normal text-[#5C5B5B]"> {supplier} Taka</span>
          </h4>
          <h4 className="font-semibold text-[#1B1A1A] text-[20px]">
            Taste:
            <span className="font-normal text-[#5C5B5B]"> {taste} Taka</span>
          </h4>
          <h4 className="font-semibold text-[#1B1A1A] text-[20px]">
            Category:
            <span className="font-normal text-[#5C5B5B]"> {category} Taka</span>
          </h4>
          <h4 className="font-semibold text-[#1B1A1A] text-[20px]">
            Details:
            <span className="font-normal text-[#5C5B5B]"> {details} Taka</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
