import { FaLocationDot } from "react-icons/fa6";

import { useContext } from "react";

import { ThemeContext } from "../../ThemeContext";
// Adjust the import path as necessary
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://devjobsbackend.onrender.com/api/v1/job/jobs/")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);

  const themeClass =
    theme === "light" ? "bg-[#121721] text-white" : "bg-[#fff] text-white";
  const cardClass =
    theme === "light"
      ? "bg-[#2c374d] bg-opacity-50"
      : "bg-[#fff] bg-opacity-50";
  const textClass = theme === "light" ? "text-slate-500" : "text-black";

  return (
    <div className={themeClass}>
      <div className="h-[100vh] overflow-x-hidden">
        {/* Header */}
        <nav className="bg-[#5964E0] w-full pr-[190px] pl-[190px] pb-[70px] pt-10 rounded-bl-full h-[100px] flex items-center text-center">
          <div className="w-full text-center items-center">
            <h1 className="float-left text-white font-bold text-[30px]">
              Devjob
            </h1>
            <div className="flex flex-row gap-10 float-right text-white text-center text-lg">
              <MdLightMode
                className="text-[25px]"
                onClick={() => toggleTheme()}
              />
              <MdDarkMode
                className="text-[25px]"
                onClick={() => toggleTheme()}
              />
              <FaLocationDot className="text-[25px]" />
            </div>
          </div>
        </nav>
        {/* Search bar */}
        <div className="flex w-full justify-center">
          <div className="bg-[#19202D] w-[80%] mt-[-30px] flex flex-row gap-5 justify-around">
            <span className="flex gap-4 h-full border-r-[1px] border-gray-700 w-full">
              <div className="flex p-4 gap-2 justify-start items-start">
                <FaSearch className="text-[#4338ca] text-[30px] font-bold" />
                <span className={textClass}>
                  Filter By Title, companies,expertise...
                </span>
              </div>
            </span>
            <span className="flex gap-4 h-full border-r-[1px] border-gray-700 w-[70%]">
              <div className="flex p-4 gap-2 justify-center items-center">
                <FaLocationDot className="text-[#4338ca] text-[30px] font-bold" />
                <span className={textClass}>Filter By Location ...</span>
              </div>
            </span>
            <span className="flex gap-4 items-center justify-center w-[80%] h-full">
              <span className={textClass}>
                <p>Filter By Title, companies,expertise ...</p>
              </span>
              <span>
                <button className="bg-[#4338ca] text-white font-bold pl-8 pr-8 pt-3 pb-3 rounded-md">
                  Search
                </button>
              </span>
            </span>
          </div>
        </div>
        {/* Home */}
        <main className="pr-[30px] pl-[30px] mt-10 w-full p-2 lg:pr-[190px] lg:pl-[190px] md:pr-[70px] md:pl-[70px]">
          {/* job divs */}

          <div className="flex flex-wrap pb-0">
            {loading ? (
              <p>Loading...</p>
            ) : (
              jobs.map((job) => (
                <Link
                  to={`/${job.id}`}
                  key={job.id}
                  className="w-full md:w-1/2 lg:w-1/3 p-4 mb-10"
                >
                  {" "}
                  {/* Wrap with Link */}
                  <div className="">
                    <div className="">
                      <div className={`${cardClass} mb-4 h-full rounded-lg`}>
                        <img
                          src={job.logo}
                          alt={`${job.company} logo`}
                          className="flex justify-center text-center items-center bg-yellow-600 w-[70px] h-[70px] mb-2 ml-10 mt-[-30px] rounded-[15px] text-white font-bold"
                        />
                        <div className="p-6 pl-10">
                          <div className="flex flex-row gap-3 text-sm text-slate-500 font-bold pb-4">
                            <span className={textClass}>{job.postedAt}</span>
                            <span>. {job.contract}</span>
                          </div>
                          <div>
                            <h1
                              className={`text-white font-bold text-[20px] pb-4 cursor-pointer ${textClass}`}
                            >
                              {job.position}
                            </h1>
                          </div>
                          <div>
                            <p
                              className={`text-slate-500 font-bold pb-4 cursor-pointer ${textClass}`}
                            >
                              {job.company}
                            </p>
                          </div>
                          <div
                            className={`text-[#5964E0] cursor-pointer ${textClass}`}
                          >
                            <p>{job.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-[#5964E0] text-white p-3 font-bold rounded-md mb-10 pl-5 pr-5">
              Load More
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
