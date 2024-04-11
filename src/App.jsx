import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function App() {
  return (
    <div className="bg-[#1B1A55] h-[100vh]">
      <nav className="bg-[#4338ca] w-full pt-[30px] pb-[40px] rounded-bl-full items-center text-center">
        <div className="flex flex-row justify-around ">
          <h1 className="text-[30px] font-bold text-white">devjobs</h1>
          <span className="flex flex-row  gap-5">
            <span>
              <MdLightMode className="text-white text-[20px]" />
            </span>
            <span>
              <MdDarkMode className="text-white text-[20px]" />
            </span>
            <span></span>
          </span>
        </div>
      </nav>
      <div className="flex w-full justify-center">
        <div className="bg-[#070F2B] w-[56%] p-5 mt-[-30px] flex flex-row gap-5 justify-around">
          <span className="flex gap-4 items-center justify-center">
            <FaSearch className="text-[#4338ca] text-[30px] font-bold" />
            <span className="text-slate-500 font-bold">
              Filter By Title, companies,expertise...
            </span>
          </span>
          <span className="flex gap-4 items-center justify-center">
            <FaLocationDot className="text-[#4338ca] text-[30px] font-bold" />
            <span className="text-slate-500 font-bold">
              Filter By Location ...
            </span>
          </span>
          <span className="flex gap-4 items-center justify-center">
            <div className="bg-slate-500 h-5 w-5 rounded-sm"></div>
            <span className="text-slate-500 font-bold t-">
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
    </div>
  );
}

export default App;
