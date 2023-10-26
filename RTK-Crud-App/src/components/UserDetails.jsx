import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { Link } from "react-router-dom";
import { removeUser } from "../store/slices/UserSlices";

function UserDetails() {
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch()
  return (
    <div className="w-full">
      <div className=" max-w-3xl mx-auto flex justify-center pb-3">
        <Link to='/addnewuser'>
        <Button child='Add New User'/>
        </Link>
        </div> 
      <div className=" max-w-3xl mx-auto flex justify-center">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr className=" border-b" key={item.id}>
                  <td className="">#{item.id} </td>
                  <td className="px-5">{item.name} </td>
                  <td className="px-5">{item.email} </td>
                  <td className="flex justify-center space-x-1">
                    <Link to={`/edituser/${item.id}`}><Button child='Edit'/></Link>
                    <Button child='Delete' varient='red' onClick={() => dispatch(removeUser(item.id))}/>
                    </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserDetails;
