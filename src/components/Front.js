import React from "react";
//import { Link } from 'react-router-dom';

const Front = () => {
  return (
    <form action="#" class="bg-white-100 shadow-sm rounded-md p-2">
      <>
        <section class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                class="block text-base mt-4 lg:inline-block lg:mt-0 font-bold text-purple-600 hover:text-white mr-4"
              >
                collab.
              </a>
            </div>
            <div class="text-sm text-right lg:flex-grow">
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Sign up
              </a>
            </div>
          </div>
        </section>

        <div class="flex flex-wrap">
          <div class="flex-1 bg-gray-500 h-64"></div>
        </div>
          <div class="flex justify-center">
          <div class="w-full max-w-screen-md">
            <div class="">
              <div class="flex">
                <h1 class="text-md lg:text-xl text-green-600 mb-2 my-6 p-4">
                  Coming Soon
                </h1>
                <div class="min-w-32 bg-white min-h-48 p-3 mb-2 -mt-12  mx-96 font-medium">
                  <div class="w-32 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg ">
                    <div class="block rounded-t overflow-hidden  text-center ">
                      <div class="bg-red-500 text-white py-1">JUL</div>
                      <div class="pt-1 border-l border-r border-white bg-white">
                        <span class="text-5xl font-bold leading-tight">10</span>
                      </div>
                      <div class="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
                        <span class="text-sm">Monday</span>
                      </div>
                      <div class="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white">
                        <span class="text-xs leading-normal">
                          8:00 am to 5:00 pm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 class="text-3xl lg:text-4xl font-bold text-teal-600 my-0 mb-2 lg:mb-6 mx-4">
                Campaign Name
              </h2>
              <div class="flex">
                <p class="text-sm  font-bold text-teal-600 mb-2">From</p>
                <div> - July 10 (Mon), 7:20 PM GMT+5:30 </div>
              </div>

              <div class="flex">
                <p class="text-sm  font-bold text-teal-600 mb-6">To</p>
                <div> - July 10 (Mon), 7:20 PM GMT+5:30</div>
              </div>

              <h3 class="text-xl lg:text-2xl font-bold text-teal-600 mb-2 lg:mb-6">
                Description
              </h3>

              <p class="line-clamp-4">
                Figma is a browser-based UI and UX design application, with
                excellent design,prototyping,and code-generation tools. It's
                currently (arguably) the industry's leading interface design tool,
                with robust features which support teams working on every phase of
                the design process.
              </p>
              <h4 class="text-xl lg:text-2xl font-bold text-teal-600 mb-2 lg:mb-6">
                Registration
              </h4>
              <p>Hello! Please join the campaign, by register below.</p>
            </div>

            <div class="mb-6">
              <label for="name" class="font-bold mb-3 block text-teal-700">
                Name*
              </label>
              <input
                type="text"
                id="name"
                class="bg-gray-200 rounded-md border border-gray-200 p-3 focus:outline-none w-1/2"
                placeholder="  "
                required
              />
            </div>

            <div class="mb-6">
              <label for="email" class="font-bold mb-3 block text-teal-700">
                Email*
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-200 rounded-md border border-gray-200 p-3 focus:outline-none w-1/2"
                placeholder="  "
                required
              />
            </div>

            <div class="mb-6">
              <label for="question" class="font-bold mb-3 block text-teal-700">
                Why should you be a part of this campaign
              </label>
              <input
                type="text"
                id="question"
                class="bg-gray-200 rounded-md border border-gray-200 p-3 focus:outline-none w-1/2 h-36"
                placeholder="campaign pitch.."
                required
              />
            </div>

            <div class="mb-6">
              <label
                for="Social Media"
                class="font-bold mb-3 block text-teal-700"
              >
                Social Media Handels
              </label>

              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-teal-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-youtube"
                  >
                    Youtube
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                    value="  "
                  ></input>
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-teal-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-instagram"
                  >
                    Instagram
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="password"
                    placeholder="Instagram id"
                  ></input>
                </div>
              </div>
            </div>

            <div class="mb-2">
              <label
                for="Deliverables"
                class="font-bold mb-3 block text-teal-700"
              >
                Deliverables
              </label>
            </div>

            <div class="mx-2  grid grid-cols-5 gap-2 p-0">
              <button
                class="ring-0 ring-gray-600 bg-gray-400 
                        w-18 h-8 rounded-lg"
              >
                IG Post
              </button>
              <button
                class="ring-0 ring-gray-600 bg-gray-400 
                        w-18 h-8 rounded-lg"
              >
                IG Story
              </button>
              <button
                class="ring-0 ring-gray-600 bg-gray-400 
                        w-18 h-8 rounded-lg"
              >
                IG Reels
              </button>
              <button
                class="ring-0 ring-gray-600 bg-gray-400 
                        w-30 h-8 rounded-lg"
              >
                Youtube video
              </button>
              <button
                class="ring-0 ring-gray-600 bg-gray-400 
                        w-30 h-8 rounded-lg"
              >
                Facebook Story
              </button>
            </div>

            <div class="mx-2 my-2">
              <button
                class="ring-0 ring-gray-600 bg-gray-400 
                        w-36 h-8 rounded-lg"
              >
                Facebook Post
              </button>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6 my-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <div class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <label
                    for="Est Date"
                    class="font-bold mb-3 block text-teal-700"
                  >
                    Est Date
                  </label>
                </div>
                <input
                  type="Date"
                  id="Date"
                  class="bg-gray-200 rounded-md border border-gray-200 p-3 focus:outline-none w-36"
                  placeholder="Date"
                  required
                />
              </div>

              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <div class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <label
                    for="Est Time"
                    class="font-bold mb-3 block text-teal-700"
                  >
                    Est Time
                  </label>
                </div>
                <input
                  type="Time"
                  id="Time"
                  class="bg-gray-200 rounded-md border border-gray-200 p-3 focus:outline-none w-36"
                  placeholder="Time"
                  required
                />
              </div>
            </div>

            <div class="md:flex md:items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <label for="name" class="font-bold my-3 block text-teal-700">
                Contact Number
              </label>
            </div>

            <div class="mb-6">
              <input
                type="text"
                id="name"
                class="bg-gray-200 rounded-md border border-gray-200 p-3 focus:outline-none w-1/2"
                placeholder="John Doe"
                required
              />
            </div>

            <div class="md:flex md:items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <label
                for="company_size"
                class="font-bold my-3 block text-teal-700"
              >
                City
              </label>
            </div>

            <div class="mb-6">
              <select
                id="company_size"
                class="bg-gray-200 rounded-md border border-gray-200 p-3 focus:outline-none w-1/2"
                required
              >
                <option value="">Select an option</option>
                <option value="1">Agra</option>
                <option value="2">Banglore</option>
                <option value="3">Chandigarh</option>
                <option value="4">Delhi</option>
              </select>
            </div>

            <div>
              <button
                type="Register"
                class="py-3 px-12 bg-purple-500 hover:bg-teal-600 mr-5 rounded-md my-3 text-gray text-lg focus:outline-none w-18"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </>
    </form>
  );
};

export default Front;
