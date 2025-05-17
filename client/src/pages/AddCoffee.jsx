import React from "react";
import toast from "react-hot-toast";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("data after Database", data);
          toast.success("User added successful!");
          // form.reset();
        }
      });
  };
  return (
    <div className="">
      <div className="px-28 bg-[#F4F3F0] py-16 rounded-lg">
        <div className="text-center px-8 space-y-8">
          <h2 className="font-bold text-5xl">Add New Coffee</h2>
          <p className="text-xl font-normal text-[#1B1A1AB2]">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <fieldset className="">
              <label htmlFor="name" className="font-semibold text-[#1B1A1ACC]">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full p-3 bg-white rounded-lg outline-none mt-4"
                placeholder="Enter coffee name"
              />
            </fieldset>

            <fieldset className="">
              <label htmlFor="chef" className="font-semibold text-[#1B1A1ACC]">
                Chef
              </label>
              <input
                id="chef"
                name="chef"
                type="text"
                className="w-full p-3 bg-white rounded-lg outline-none mt-4"
                placeholder="Enter coffee chef"
              />
            </fieldset>

            <fieldset className="">
              <label
                htmlFor="supplier"
                className="font-semibold text-[#1B1A1ACC]"
              >
                Supplier
              </label>
              <input
                id="supplier"
                name="supplier"
                type="text"
                className="w-full p-3 bg-white rounded-lg outline-none mt-4"
                placeholder="Enter coffee supplier"
              />
            </fieldset>

            <fieldset className="">
              <label htmlFor="taste" className="font-semibold text-[#1B1A1ACC]">
                Taste
              </label>
              <input
                id="taste"
                name="taste"
                type="text"
                className="w-full p-3 bg-white rounded-lg outline-none mt-4"
                placeholder="Enter coffee taste"
              />
            </fieldset>

            <fieldset className="">
              <label
                htmlFor="category"
                className="font-semibold text-[#1B1A1ACC]"
              >
                Category
              </label>
              <input
                id="category"
                name="category"
                type="text"
                className="w-full p-3 bg-white rounded-lg outline-none mt-4"
                placeholder="Enter coffee category"
              />
            </fieldset>

            <fieldset className="">
              <label
                htmlFor="details"
                className="font-semibold text-[#1B1A1ACC]"
              >
                Details
              </label>
              <input
                id="details"
                name="details"
                type="text"
                className="w-full p-3 bg-white rounded-lg outline-none mt-4"
                placeholder="Enter coffee details"
              />
            </fieldset>

            <fieldset className="">
              <label htmlFor="photo" className="font-semibold text-[#1B1A1ACC]">
                Photo
              </label>
              <input
                id="photo"
                name="photo"
                type="text"
                className="w-full p-3 bg-white rounded-lg outline-none mt-4"
                placeholder="Enter photo URL"
              />
            </fieldset>

            <fieldset className="">
              <label htmlFor="price" className="font-semibold text-[#1B1A1ACC]">
                Price
              </label>
              <input
                id="price"
                name="price"
                type="text"
                className="w-full p-3 bg-white rounded-lg outline-none mt-4"
                placeholder="Enter coffee price"
              />
            </fieldset>
          </div>

          <input
            className="w-full p-3 bg-[#D2B48C] text-[20px] font-semibold rounded-lg outline-none mt-6 border-2 border-[#331A15] cursor-pointer"
            type="submit"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
