"use client";
import NavBar from "@/app/components/NavBar";
import React, { useState, useEffect } from "react";
import { Dropdown } from "@nextui-org/react";
import EventForm from "./form";

export default function EventList() {
  const [title, setTitle] = useState();
  const [dateTime, setDateTime] = useState();
  const [description, setDescription] = useState();
  const [type, setType] = useState();

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
  }, [setEvents]);

  function format12HourTime(isoDate) {
    const date = new Date(isoDate);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }
  return (
    <>
      <NavBar />
      <EventForm setEvents={setEvents}/>
      <br />
      <br />
      <br />
      <br />

      <div className="container max-w-full px-4 mx-auto sm:px-8 bg-sky-100">
        <div className="py-8">
          <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h2 className="text-3xl leading-tight text-sky-600 font-semibold">
              Events
            </h2>
            <Dropdown>
              <Dropdown.Button flat>Event Type</Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="sport">Sport</Dropdown.Item>
                <Dropdown.Item key="non-sport">Non-Sport</Dropdown.Item>
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
                      Title
                    </th>
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
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-100 border-b border-gray-200"
                    >
                      Date & Time
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-gray-100 border-b border-gray-200"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <>
                      <tr key={event.id}>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <a href="#" className="relative block"></a>
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap"></p>
                              {event.title}
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {event.description}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {event.type}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {new Date(event.date).toLocaleDateString()} -{" "}
                            {format12HourTime(event.date)}
                          </p>
                        </td>
                        {/* <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-gray-900">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-gray-200 rounded-full opacity-50"
                            ></span>
                            <span className="relative">{event.time}</span>
                          </span>
                        </td> */}
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
