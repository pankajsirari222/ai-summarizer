import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  return (
    <section className="w-full mt-16 max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className=" flex relative justify-center items-center"
          onSubmit={() => {}}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input
            type="url"
            placeholder="Enter a URL"
            value=""
            onChange={() => {}}
            required
            className="url_input peer"
          />

          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700"
          >
            <img
              src="https://ik.imagekit.io/medpal/submit_1_.png?updatedAt=1685692665399"
              alt="submit"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
