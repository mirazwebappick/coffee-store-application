import { Eye, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, chef, price, photo, _id } = coffee;
  const handleCoffeeDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data after deleted", data);
            if (data.deletedCount) {
              const remainingCoffee = coffees.filter(
                (coffee) => coffee._id !== _id
              );
              setCoffees(remainingCoffee);
              toast.success("User Deleted Successful!");
            }
          });
      }
    });
  };
  return (
    <div className="">
      <div className="p-8 rounded-xl bg-[#F5F4F1] flex justify-between items-center">
        <div className="">
          <img className="" src={photo} alt="" />
        </div>
        <div className="">
          <h2 className="font-semibold text-[#1B1A1A] text-[20px]">
            Name: <span className="font-normal text-[#5C5B5B]">{name}</span>
          </h2>
          <h3 className="font-semibold text-[#1B1A1A] text-[20px]">
            Chef: <span className="font-normal text-[#5C5B5B]">{chef}</span>
          </h3>
          <h4 className="font-semibold text-[#1B1A1A] text-[20px]">
            Price:
            <span className="font-normal text-[#5C5B5B]">{price} Taka</span>
          </h4>
        </div>
        <div className="space-y-3">
          <div>
            <Link to={`/coffee-details/${_id}`}>
              <button className="bg-[#D2B48C] p-2.5 rounded-xl text-white cursor-pointer">
                <Eye />
              </button>
            </Link>
          </div>
          <div>
            <Link to={`/update-coffee/${_id}`}>
              <button className="bg-[#3C393B] p-2.5 rounded-xl text-white cursor-pointer">
                <Pencil />
              </button>
            </Link>
          </div>
          <div
            onClick={() => handleCoffeeDelete(_id)}
            className="bg-[#EA4744] p-2.5 rounded-xl text-white cursor-pointer"
          >
            <Trash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
