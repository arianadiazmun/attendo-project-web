import { useState } from "react";


export default function UserForm({setUsers}) {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [grade, setGrade] = useState();
  const [points, setPoints] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, age, grade, points };
    fetch("https://ariana-final-project.web.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
      })
      .catch((err) => {
        console.error("Error submitting form", err);
      });
  };

  return (
    <>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="text-4xl font-semibold text-sky-600 pt-40">
                Add a new student user
              </p>

              <div className="mt-8">
                <a href="../student/leaderboard" className="text-gray-400">
                  Preview student leaderboard
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

            <div className="rounded-lg bg-gray-100 p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form className="space-y-4" type="submit" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name"></label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-md"
                    placeholder="Full Name"
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"/>
                  <div>
                    <label htmlFor="age"></label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-md"
                      placeholder="Age"
                      type="text"
                      id="age"
                      onChange={e => setAge(e.target.value)}
                    />
                  </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"/>
                  <div>
                    <label htmlFor="points"></label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-md"
                      placeholder="Points"
                      type="number"
                      id="points"
                      onChange={e => setPoints(e.target.value)}
                    />
                  </div>

                  <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                    <div>
                      <input
                        onClick={() => setGrade("9")}
                        class="peer sr-only"
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
                        <span class="text-sm"> 9th </span>
                      </label>
                    </div>

                    <div>
                      <input
                        onClick={() => setGrade("10")}
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
                        <span class="text-sm"> 10th </span>
                      </label>
                     
                </div>

                <div>
              <input
               onClick={() => setGrade("11")}
                className="peer sr-only"
                id="option3"
                type="radio"
                tabIndex="-1"
                name="option"
              />

              <label
                htmlFor="option3"
                className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-gray-200 peer-checked:bg-sky-600 peer-checked:text-white cursor-pointer  hover:bg-gray-300 "
                tabIndex="0"
              >
                <span className="text-sm"> 11th </span>
              </label>
            </div>
          
            <div>
              <input
               onClick={() => setGrade("12")}
                className="peer sr-only"
                id="option4"
                type="radio"
                tabIndex="-1"
                name="option"
              />

              <label
                htmlFor="option4"
                className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-gray-200 peer-checked:bg-sky-600 peer-checked:text-white cursor-pointer  hover:bg-gray-300 "
                tabIndex="0"
              >
                <span className="text-sm"> 12th </span>
              </label>
            </div>
          

                

                {/* //ADD Image upload to form */}

                <div className="mt-4 ">
                  <button onClick={handleSubmit}
                    type="submit"
                    className="inline-block w-full rounded-lg bg-sky-600 px-5 py-3 font-medium text-white sm:w-auto hover:bg-sky-500"
                  >
                    Add student
                  </button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
