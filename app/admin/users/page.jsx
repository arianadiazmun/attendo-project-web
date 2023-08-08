"use client";

import React, { useState, useEffect, forwardRef } from "react";
import NavBar from "@/app/components/NavBar";
import { Dropdown } from "@nextui-org/react";
import UserForm from "./form";


export default function UserList() {
  const [users, setUsers] = useState([]);
  async function getUsers(grades) {
    // console.log(grades);//is displaying the current value of grade meaning 0
    try {
      //block of code is a try vamos a intentar que sea exitoso de linea 11-19
      const res = await fetch(`https://final-project-api-4010a.web.app/users`); //stating a constant that is equal to a promise that wont continue executing code until the fetch is done
      let json = await res.json(); //defining a var that is equal to the value that fetch returned, .json is parsing the data that it was obtained from the org fetch

      if (grades !== 0) {
        //this is saying if grades is not equal to 0 then execute the following block of code  .... osea si if es verdadero el siguiente blocke es ejecutado
        console.log("filtered"); //this is just displaying its filtered in the console
        json = json.filter((user) => user.grade == grades); //if its set to 0 this wont be executed
      } //json is the original array that we parsed in line 12 ,is being updated to the result obtained from function filter

      setUsers(json); //we are setting the state to the original array
    } catch (err) {
      // if the try doesnt work we are catching an error
      console.error(err); // we are displaying the error
    }
  }
  useEffect(() => {
    getUsers(0); //if i call the getUsers function and set it to 0 is telling line 14 to not execute the following block of code
  }, [setUsers]);

  function selectedOption(grade) {
    getUsers(parseInt(grade));
    // console.log("executed", parseInt(grade));
    // const newList = usersByGrade(parseInt(grade));
    // setUsers(newList);
    // console.log(newList);
  }

  function userCounter(actionType, user) {
    const data = user;
    if (actionType === "adding") {
      data.points = Number(data.points) + 1;
    } else {
      data.points = Number(data.points) - 1;
    }
    //action type has to posibble values addding and substracting then

    console.log(data);

    fetch(`https://final-project-api-4010a.web.app/users/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }

  function handleDelete(user) {
    fetch(`https://final-project-api-4010a.web.app/users/${user._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }

  return (
    <>
      <NavBar />
      <UserForm setUsers={setUsers} />

      <div className="container  px-4 mx-auto sm:px-8 bg-gray-100 shadow-md ">
        <div className="py-8">
          <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h2 className="text-3xl leading-tight text-sky-600 font-semibold">
              User List
            </h2>

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
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-lg">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-200  border-b border-gray-200"
                    >
                      Full Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-200 border-b border-gray-200"
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-200  border-b border-gray-200"
                    >
                      Grade
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-200  border-b border-gray-200"
                    >
                      Points
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-200  border-b border-gray-200"
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
                        <div className="inline-block px-3 py-1 font-semibold leading-tight text-gray-900">
                          <span
                            aria-hidden="true"
                            className="inset-0 bg-gray-200 rounded-full opacity-50"
                          ></span>

                          <button
                            onClick={() => {
                              userCounter("substracting", user);
                            }}
                          >
                            -
                          </button>
                          <span className="relative ml-4 mr-4 ">
                            {user.points}
                          </span>
                          <button
                            onClick={() => {
                              userCounter("adding", user);
                            }}
                          >
                            +
                          </button>

                        </div>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <button
                          onClick={() => {
                            handleDelete(user);
                          }}
                          className="text-gray-600 transition hover:text-red-600"
                        >
                          <span className="sr-only">Remove item</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
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
