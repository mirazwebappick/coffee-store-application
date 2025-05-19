import { Eye, Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const User = () => {
  const initialUser = useLoaderData();
  const [user, setUser] = useState(initialUser);

  const handleDelete = (id) => {
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
        fetch(`http://localhost:3000/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount) {
              const remainingUser = user.filter((user) => user?._id !== id);
              setUser(remainingUser);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                timer: 1200,
              });
            }
          });
        console.log("object id", id);
      }
    });
  };

  return (
    <div>
      <h2>User: {user.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {user.map((user, index) => (
              <tr key={user?._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>{user?.phone}</td>
                <td>{user?.email}</td>
                <th className="space-x-2">
                  <button className="btn  btn-xs">
                    <Eye />
                  </button>
                  <button className="btn  btn-xs">
                    <Pencil />
                  </button>
                  <button
                    onClick={() => handleDelete(user?._id)}
                    className="btn  btn-xs"
                  >
                    <Trash2 />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
