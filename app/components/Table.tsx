import React from "react";
import TableRow from "./TableRow";

export default function Table({
  employees,
}: {
  employees: MongoEmployeeDetails[];
}) {
  return (
    <div className="overflow-x-auto">
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
          {employees.map((employee) => (
            <TableRow
              id={employee._id}
              key={employee._id}
              firstname={employee.firstname}
              lastname={employee.lastname}
              dataurl={employee.avatar}
              position={employee.position}
              email={employee.email}
              phone={employee.phone}
            />
          ))}
        </tbody>
      </table>
      {employees.length === 0 && <p className="mt-3">No Employee found</p>}
    </div>
  );
}
