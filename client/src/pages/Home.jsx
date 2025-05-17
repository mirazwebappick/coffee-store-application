import { Link, useLoaderData } from "react-router";
import CoffeeCard from "../components/CoffeeCard";
import { Coffee } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);

  return (
    <div>
      <div className="text-center">
        <h2 className="font-normal text-[20px] text-[#1B1A1A]">
          --- Sip & Savor ---
        </h2>
        <h3 className="font-normal text-[#331A15] text-[55px] mt-2">
          Our Popular Products
        </h3>
        <Link to={"/addCoffee"}>
          <button className="py-2.5 px-5 rounded-xl border-2 border-[#331A15] bg-[#E3B577] cursor-pointer mt-4 flex mx-auto items-center space-x-3">
            <span className="text-white text-[24px]">Add Coffee</span>{" "}
            <Coffee className=" stroke-[#331A15]" />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {coffees.map((coffee) => (
          <CoffeeCard
            coffees={coffees}
            setCoffees={setCoffees}
            key={coffee._id}
            coffee={coffee}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
