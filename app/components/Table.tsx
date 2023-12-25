import React from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Table() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>E-mail</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EMma</td>
            <td>EMma</td>
            <td>EMma</td>
            <td>EMma</td>
            <td>
              <button>
                <BiEdit />
              </button>
              <button className="ml-3">
                <RiDeleteBinLine />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
