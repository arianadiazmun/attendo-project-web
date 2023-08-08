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
  console.log(winners);

  return (
    <>
      <StuBar />
      <div className="container  px-4 mx-auto sm:px-8 bg-gray-100 shadow-md ">
        <div className="py-8">
          <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h2 className="text-3xl leading-tight text-sky-600 font-semibold">
              Top 10 Students
            </h2>
          </div>
          <div className="px- py-4 -mx- overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-lg">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-2 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-200  border-b border-gray-200"
                    >
                      Place
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-200  border-b border-gray-200"
                    >
                      Student Name
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-200 border-b border-gray-200"
                    >
                      Grade
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-200  border-b border-gray-200"
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
                  {winners.map((winner, index) => (
                    <tr key={winner._id}>
                      <td className="px-10 py-2 text-sm bg-amber-400 bg-opacity-10 border-b border-gray-200 w-1/12">
                        <p className=" text-amber-500 whitespace-no-wrap">
                          {index + 1}
                          {index < 3 && (
                            <svg
                          
                              viewBox="0 0 36 32"
                              xmlns="http://www.w3.org/2000/svg"
                              stroke="currentColor"
                              className="inline-block w-6 h-6 ml-2"
                            
                            >
                              <path d="m16 3c-1.644531 0-3 1.355469-3 3 0 1.125.632813 2.113281 1.5625 2.625l-2.9375 5.875-4.59375-3.28125c.601563-.550781.96875-1.347656.96875-2.21875 0-1.644531-1.355469-3-3-3s-3 1.355469-3 3c0 1.347656.925781 2.46875 2.15625 2.84375l1.84375 10.15625v5h20v-5l1.84375-10.15625c1.230469-.375 2.15625-1.496094 2.15625-2.84375 0-1.644531-1.355469-3-3-3s-3 1.355469-3 3c0 .871094.367188 1.667969.96875 2.21875l-4.59375 3.28125-2.9375-5.875c.929688-.511719 1.5625-1.5 1.5625-2.625 0-1.644531-1.355469-3-3-3zm0 2c.5625 0 1 .4375 1 1s-.4375 1-1 1-1-.4375-1-1 .4375-1 1-1zm-11 3c.5625 0 1 .4375 1
                               1s-.4375 1-1 1-1-.4375-1-1 
                               .4375-1 1-1zm22 0c.5625 0 1 
                               .4375 1 1s-.4375 1-1 1-1-.4375-1-1 
                               .4375-1 1-1zm-11 2.25 3.09375 6.1875 
                               1.5.375 5-3.5625-1.40625 7.75h-16.375l-1.40625-7.75
                                5 3.5625 1.5-.375zm-8 12.75h16v2h-16z" />
                                
                            </svg>
                          )}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 w-1/4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a href="#" className="relative block"></a>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap w-4/12/"></p>
                            {winner.name || winner.full_name}
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 w-1/6">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {winner.grade}
                          <sup>th</sup>
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 w-1/12">
                        <div className="inline-block px-3 py-1 font-semibold leading-tight text-sky-500">
                          <span
                            aria-hidden="true"
                            className="inset-0 bg-gray-200 rounded-full opacity-70"
                          >
                            <span className="relative ml-4 mr-4 ">
                              {winner.points}
                            </span>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
