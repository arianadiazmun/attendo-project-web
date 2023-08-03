"use client";
import NavBar from "@/app/components/NavBar";
import React, { useState, useEffect } from "react";
import { Dropdown } from "@nextui-org/react";


export default function EventList() {
  const [events, setEvents] = useState([]);
  async function getEvents() {
    try {
      const res = await fetch(`https://ariana-final-project.web.app/events`);
      const json = await res.json();
      console.log(json);
      setEvents(json);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getEvents();
  }, []);

  return (

    <>
  <NavBar/>



<section className="">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
       

        <div className="mt-8">
          {/* <a href="./student/EventDisplay???" TODO** redirect to student event view/> */}
          <p className="text-2xl font-bold text-sky-600">
            Add a new upcoming event
          </p>
        </div>
      </div>

      <div className="rounded-lg bg-gray-100 p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-md"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-md"
                type="date"
                id="date"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-md"
                placeholder="Phone Number"
                type="time"
                id="time"
              />
            </div>
          </div>


          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-md"
              placeholder="Description"
              rows="8"
              id="description"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-sky-600 px-5 py-3 font-medium text-white sm:w-auto"
            >
             Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>






    <div className="container max-w-3xl px-4 mx-auto sm:px-8">
      <div className="py-8">
        <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
          <h2 className="text-2xl leading-tight">Events</h2>
          <Dropdown>
      <Dropdown.Button flat>By Time</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="sport">10:00AM</Dropdown.Item>
        <Dropdown.Item key="sport">11:00AM</Dropdown.Item>
        <Dropdown.Item key="non-sport">4:00PM</Dropdown.Item>
        <Dropdown.Item key="non-sport">5:00PM</Dropdown.Item>
        <Dropdown.Item key="non-sport">6:00PM</Dropdown.Item>
        <Dropdown.Item key="non-sport">7:00PM</Dropdown.Item>
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
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-100 border-b border-gray-200">Title</th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-100 border-b border-gray-200"
                    >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-100 border-b border-gray-200"
                    >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-100 border-b border-gray-200"
                    >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-100 border-b border-gray-200"
                    ></th>
                </tr>
              </thead>
              <tbody>
                    {events.map(event => (
                      <>
                <tr>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="relative block"></a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap"></p>{event.title}
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">{event.description}</p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">{event.date} </p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-gray-900">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-gray-200 rounded-full opacity-50"
                      ></span>
                      <span className="relative">{event.time}</span>
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
                
                </>
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
