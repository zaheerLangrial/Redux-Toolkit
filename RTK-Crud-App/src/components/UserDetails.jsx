import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";

function UserDetails() {
  const data = useSelector((state) => state.user);
  console.log(data);
  return (
    <div className="w-full">
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
                  <td className="flex space-x-1">
                    <Button child='Edit'/>
                    <Button child='Delete' varient='red' />
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
