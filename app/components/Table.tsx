"use client";
import React, { useState, useEffect } from "react";
import TableRow from "./TableRow";
import { BiSearch } from "react-icons/bi";
import { ClassicSpinner } from "react-spinners-kit";

export default function Table({}: {}) {
  const [employees, setEmployees] = useState<MongoEmployeeDetails[]>([]);
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState("");
  useEffect(() => {
    async function getEmployess() {
      setLoading(true);
      try {
        const response = await fetch("/api/actions");
        const data: MongoEmployeeDetails[] = await response.json();
        const filteredEmployees = data.filter(
          (employee) =>
            employee?.firstname.toLowerCase().includes(term.toLowerCase()) ||
            employee?.lastname.toLowerCase().includes(term.toLowerCase()) ||
            employee?.email.includes(term.toLowerCase())
        );
        setEmployees(filteredEmployees);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    getEmployess();
  }, [term]);

  return (
    <div className="overflow-x-auto">
      <div className="relative mb-3">
        <input
          type="search"
          className="bg-blue-50 outline-none border-none p-2 rounded-[2rem] pl-8"
          placeholder="Search"
          onChange={(e) => setTerm(e.target.value)}
        />
        <BiSearch className="absolute top-[50%] text-[1.2rem] left-2 -translate-y-[50%] text-[#A1A8B2]" />
      </div>
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
      {loading && (
        <div className="flex items-center justify-center p-5 mt-9 text-[#3D4DC8]">
          <ClassicSpinner size = {60} color = "#3D4DC8"/>
        </div>
      )}
    </div>
  );
}
