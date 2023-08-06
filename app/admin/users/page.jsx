"use client";
import React, { useState, useEffect, forwardRef } from "react";
import NavBar from "@/app/components/NavBar";
import { Dropdown } from "@nextui-org/react";
import EventUser from "./form";

export default function UserList() {
  const [users, setUsers] = useState([]);
  async function getUsers(grades) {
    // console.log(grades);//is displaying the current value of grade meaning 0
    try { //block of code is a try vamos a intentar que sea exitoso de linea 11-19
      const res = await fetch(`https://ariana-final-project.web.app/users`);//stating a constant that is equal to a promise that wont continue executing code until the fetch is done
      let json = await res.json();//defining a var that is equal to the value that fetch returned, .json is parsing the data that it was obtained from the org fetch

      if (grades !== 0) {  //this is saying if grades is not equal to 0 then execute the following block of code  .... osea si if es verdadero el siguiente blocke es ejecutado
        console.log("filtered"); //this is just displaying its filtered in the console
        json = json.filter((user) => user.grade === grades);  //if its set to 0 this wont be executed

      } //json is the original array that we parsed in line 12 ,is being updated to the result obtained from function filter 
      


      setUsers(json);//we are setting the state to the original array
    } catch (err) {// if the try doesnt work we are catching an error 
      console.error(err);// we are displaying the error
    }
  }
  useEffect(() => {
    getUsers(0);//if i call the getUsers function and set it to 0 is telling line 14 to not execute the following block of code 
  }, [setUsers]);

  
  

  function selectedOption(grade) {
    getUsers(parseInt(grade));
    // console.log("executed", parseInt(grade));
    // const newList = usersByGrade(parseInt(grade));
    // setUsers(newList);
    // console.log(newList);
  }

  return (
    <>
      <NavBar />
      <EventUser setUsers={setUsers} />

      <div className="container max-w-3xl px-4 mx-auto sm:px-8">
        <div className="py-8">
          <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h2 className="text-2xl leading-tight">Users</h2>

            <Dropdown>
              <Dropdown.Button flat>By Grade</Dropdown.Button>
              <Dropdown.Menu
                aria-label="Static Actions"
                onAction={selectedOption}
              >
                <Dropdown.Item key="9">9th</Dropdown.Item>
                <Dropdown.Item key="10">10th</Dropdown.Item>
                <Dropdown.Item key="11">11th</Dropdown.Item>
                <Dropdown.Item key="12">12th</Dropdown.Item>
                <Dropdown.Item key="0">All</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-100 border-b border-gray-200"
                    >
                      Full Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-100 border-b border-gray-200"
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-100 border-b border-gray-200"
                    >
                      Grade
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-100 border-b border-gray-200"
                    >
                      Points
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-100 border-b border-gray-200"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a href="#" className="relative block"></a>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap"></p>
                            {user.name || user.full_name}
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {user.age}
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {user.grade}
                          <sup>th</sup>
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-gray-900">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-gray-200 rounded-full opacity-50"
                          ></span>
                          <span className="relative">{user.points}</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <a
                          href="#"
                          className="text-sky-600 hover:text-blue-600"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      className=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-base text-sky-600 bg-white border-t border-b hover:bg-gray-100 "
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
                  >
                    4
                  </button>
                  <button
                    type="button"
                    className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      className=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
