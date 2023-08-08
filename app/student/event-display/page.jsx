"use client";
import StuBar from "@/app/components/StuBar";
import React from "react";
import { useState, useEffect } from "react";

export default function EventDisplay() {
  const [events, setEvents] = useState([]);

  async function getEvents(types) {
    try {
      const res = await fetch(`https://final-project-api-4010a.web.app/events`);
      let json = await res.json();

      console.log(types);
      setEvents(json);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    //making sure event displays when page loads
    getEvents();
  }, [setEvents]);

  function format12HourTime(isoDate) {
    //looks at the given time and figures out the hour and minutes.
    const date = new Date(isoDate); //PM or AM
    const hours = date.getHours(); //Decides format
    const minutes = date.getMinutes(); //Minutes looks good
    const ampm = hours >= 12 ? "PM" : "AM"; //Format time and date like 2:30PM
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  return (
    <>
      <StuBar />
      <h2 className="text-3xl leading-tight text-sky-600 font-semibold pb-10 py-8 pl-12">
        Upcoming Events 
      </h2>
      {events.map((event) => (
        <section
          key={event.id}
          className="text-gray-600 body-font overflow-hidden"
        >

          <div className="container px-5 py-6 mx-auto">
            <div className="-my-8 divide-y-2  from-inherit from-purple-600 to divide-blue-600 divide-opacity-40">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="text-2xl font-medium text-gray-900 title-font mb-2">
                  {event.title}
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    {new Date(event.date).toLocaleDateString()} -{" "}
                    {format12HourTime(new Date(event.date))}
                  </span>
                </div>
                <div className="flex item md:flex-grow pl-4">
                  <p className="title-font text-gray-500">
                    {event.description}
                  </p>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap"></div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
