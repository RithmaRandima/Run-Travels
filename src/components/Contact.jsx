import React from "react";
import contactImg from "../assets/contact.jpeg";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700 font-bold">Send a Messages</h2>
      <p className="text-center text-shadow-black p-4 pt-0 font-bold text-amber-300 text-[40px]">
        We're Standing by
      </p>
      <div className="grid md:grid-cols-2">
        <img
          src={contactImg}
          alt=""
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
        />
        <form action="">
          <div className="grid grid-cols-2">
            <input className="border m-2 p-2" type="text" placeholder="First" />
            <input className="border m-2 p-2" type="text" placeholder="Last" />
            <input className="border m-2 p-2" type="text" placeholder="Email" />
            <input className="border m-2 p-2" type="text" placeholder="Phone" />
            <input
              className="border col-span-2 m-2 p-2"
              type="text"
              placeholder="Address"
            />
            <textarea
              className="border col-span-2 m-2 p-2"
              cols={30}
              rows={10}
            ></textarea>
            <button className="col-span-2 m-2 bg-black px-6 py-1 font-bold text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
