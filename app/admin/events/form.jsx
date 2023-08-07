
import { useState } from "react";

export default function EventForm({ setEvents }) {
  const [title, setTitle] = useState();
  const [dateTime, setDateTime] = useState();
  const [description, setDescription] = useState();
  const [type, setType] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();


    const data = { date: dateTime, title, description, type };
    console.log(data);
    fetch("https://final-project-api-4010a.web.app/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => { 
        setEvents(data);
        alert("Event was added ✅✅")
      })
      .catch((err) => {
        console.error("Error submitting form", err);
        alert
      });
  };

  function formatDate(time) {
    // console.log(time)
    const result = new Date(time);
    setDateTime(result.toISOString());
    console.log(result);
  }

  return (
    <>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="text-4xl font-semibold text-sky-600 pt-40">
                Add an upcoming event
              </p>

              <div className="mt-8">
                <a href="../student/event-display" className="text-gray-500">
                  Preview student event list
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <div className="rounded-lg bg-gray-100 p-8 shadow-lg lg:col-span-3 lg:p-12 bg-opacity-80">
              <form className="space-y-4" type="submit" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="title"></label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-md"
                    placeholder="Title"
                    type="text"
                    id="name"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="date"></label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-md"
                      type="datetime-local"
                      id="date"
                      onChange={(e) => formatDate(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                    <div>
                      <input
                        onClick={() => setType("sport")}
                        className="peer sr-only"
                        id="option1"
                        type="radio"
                        tabindex="-1"
                        name="option"
                      />

                      <label
                        htmlFor="option1"
                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-gray-200 peer-checked:bg-sky-600 peer-checked:text-white cursor-pointer  hover:bg-gray-300 "
                        tabindex="0"
                      >
                        <span class="text-sm">Sport</span>
                      </label>
                    </div>

                    <div>
                      <input
                        onClick={() => setType("non-sport")}
                        className="peer sr-only"
                        id="option2"
                        type="radio"
                        tabindex="-1"
                        name="option"
                      />

                      <label
                        htmlFor="option2"
                        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-gray-200  peer-checked:bg-sky-600 peer-checked:text-white cursor-pointer hover:bg-gray-300"
                        tabindex="0"
                      >
                        <span class="text-sm"> Non-Sport </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message"></label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-md"
                    placeholder="Description"
                    rows="8"
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                {/* //ADD Image upload to form */}

                <div className="mt-4">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="inline-block w-full rounded-lg bg-sky-600 px-5 py-3 font-medium text-white sm:w-auto hover:bg-sky-500"
                  >
                    Add Event
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
