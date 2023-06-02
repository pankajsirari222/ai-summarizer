import React, { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      setArticle(newArticle);
      console.log(newArticle);
    }
  };

  return (
    <section className="w-full mt-16 max-w-xl">
      {/* Input */}
      <div className="flex flex-col w-full gap-2">
        <form
          className=" flex relative justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
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

        {/* Browse URL History */}
      </div>
    </section>
  );
};

export default Demo;
