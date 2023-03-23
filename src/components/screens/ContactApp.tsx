import React from "react";

function ContactApp() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl text-black  dark:text-white m-4">
        Contact App
      </h1>
      <ul>
          <li className="bg-slate-700 h-full w-80 sm:w-96 rounded p-2 flex items-center">
            <div className="bg-slate-400 rounded-full h-16 w-16 m-2 border-2 border-black">

            </div>
            <ul className="flex flex-col">
              <li className="font-semibold text-lg text-gray-300">Wilmer Rodriguez</li>
              <li className="text-xs font-light text-gray-300">🎂 08/03/1999</li>
              <li className="text-sm text-gray-300">📱 +56 9 5555 8534</li>
              <li className="text-sm text-gray-300">✉ WilmerR09@gmail.com</li>
            </ul>
          </li>
      </ul>
    </div>
  );
}

export default ContactApp;
