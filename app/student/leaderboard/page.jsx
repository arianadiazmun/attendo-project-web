"use client";

import React, { useState, useEffect, forwardRef } from "react";
import { Dropdown } from "@nextui-org/react";
import StuBar from "@/app/components/StuBar";

export default function Board() {
  const [winners, setWinners] = useState([]);
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const res = await fetch(`https://final-project-api-4010a.web.app/users`);
      let json = await res.json();

      setUsers(json);

      // Slice and set winners after setting users
      const topUsers = json.slice(0, 10);
      setWinners(topUsers);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getUsers();
  }, [setUsers]);
  console.log(winners)

  return (
    <>
      <StuBar />
      <div className="container  px-4 mx-auto sm:px-8 bg-gray-100 shadow-md ">
        <div className="py-8">
          <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h2 className="text-3xl leading-tight text-sky-600 font-semibold">
              Student Leaderboard
            </h2>

            {/* <Dropdown>
              <Dropdown.Button flat>By Grade</Dropdown.Button>
              <Dropdown.Menu
                aria-label="Static Actions"
                // onAction={selectedOption}
              >
                <Dropdown.Item key="9">9th</Dropdown.Item>
                <Dropdown.Item key="10">10th</Dropdown.Item>
                <Dropdown.Item key="11">11th</Dropdown.Item>
                <Dropdown.Item key="12">12th</Dropdown.Item>
                <Dropdown.Item key="0">All</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </div>
          <div className="px-4 py-4 -mx-2 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-lg">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-200  border-b border-gray-200"
                    >
                      Student Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-200 border-b border-gray-200"
                    >
                      Grade
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-200  border-b border-gray-200"
                    >
                      Points
                    </th>
                    {/* <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-200  border-b border-gray-200"
                    >
                      Points
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {winners.map((winner) => (
                    <tr key={winner._id}>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a href="#" className="relative block"></a>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap"></p>
                            {winner.name || winner.full_name}
                          </div>
                        </div>
                      </td>
                      {/* <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {winner.age}
                        </p>
                      </td> */}
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {winner.grade}
                          <sup>th</sup>
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="inline-block px-3 py-1 font-semibold leading-tight text-gray-900">
                          <span
                            aria-hidden="true"
                            className="inset-0 bg-gray-200 rounded-full opacity-50"
                          ></span>
                          <span className="relative ml-4 mr-4 ">
                            {winner.points}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                <div className="flex items-center">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
