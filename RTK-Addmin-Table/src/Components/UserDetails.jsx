import React from "react";
import Delete from "./Delete";
import { MdDeleteOutline } from "react-icons/md";
import { fakeData } from "../api/FakeData";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Store/slices/userSlice";

function UserDetails() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });

  const addNewData = (payload) => {
    dispatch(addUser(payload));
  };
  return (
    <div className=" w-full">
      <div className=" max-w-3xl mx-auto px-3">
        <div className="flex justify-between items-center">
          <h1 className=" text-xl font-bold">Users Details</h1>
          <button
            onClick={() => addNewData(fakeData())}
            className=" px-3 py-1.5 bg-blue-500 text-white rounded-md"
          >
            Add New User
          </button>
        </div>
        <ul className=" py-3">
          {data.map((name , index) => {
            return (
              <li key={index} className="flex justify-between items-center border-b mb-3">
                <h1>{name}</h1>
                <button onClick={() => dispatch(removeUser(index))}>
                  <MdDeleteOutline
                    size={25}
                    className=" bg-red-500 text-white px-1 rounded-md"
                  />
                </button>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center py-3">
          <Delete />
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
