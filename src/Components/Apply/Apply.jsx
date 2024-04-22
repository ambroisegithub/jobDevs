import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Apply() {
  const { id } = useParams(); // Get the job ID from the URL
  const [job, setJob] = useState(null); // State to store the job details

  useEffect(() => {
    // Fetch job details
    fetch(`https://devjobsbackend.onrender.com/api/v1/job/jobs/${id}`)
      .then((response) => response.json())
      .then((data) => setJob(data))
      .catch((error) => console.error("Error fetching job:", error));
  }, [id]); // Depend on the job ID to refetch if it changes

  if (!job) {
    return <div>Loading job details...</div>;
  }
  return (
    <div>
      <div className="bg-[#121721] h-[100vh] overflow-x-hidden">
        <nav className="  bg-[#5964E0] w-full  pr-[190px] pl-[190px] pb-[70px] pt-10 rounded-bl-full h-[100px] flex items-center text-center ">
          <div className="w-full  text-center items-center">
            <h1 className="float-left text-white font-bold text-[30px]                                                                                                                                                                                                                                                                     ">
              Devjob
            </h1>
            <div className="flex flex-row gap-10 float-right  text-white text-center text-lg">
              <MdLightMode className="text-[25px]" />
              <MdDarkMode className="text-[25px]" />
              <FaLocationDot className="text-[25px]" />
            </div>
          </div>
        </nav>
        <div className="flex w-full justify-center">
          <div className="bg-[#19202D] w-[50%]  mt-[-30px] flex flex-row gap-5 h-[120px] rounded-md">
            <span className="bg-[#E99210] h-full w-[15%] flex justify-center items-center font-bold text-[30px] text-white">
              Scoot
            </span>
            <span className="w-[50%]   h-full flex flex-col pl-5 justify-center">
              <p className="text-white font-bold text-2xl pb-2">Scoot</p>
              <p className="text-slate-500">scoot.com</p>
            </span>
            <span className="flex items-center">
              <button className="bg-slate-700 p-5 pl-7 pr-7 rounded-md text-white text-bold">
                Company Site
              </button>
            </span>
          </div>
        </div>
        <section>
          <main className="mt-10 w-full p-2   flex justify-center">
            <div className="flex flex-col h-auto w-[50%] bg-slate-700 p-10">
              <div className="flex flex-row items-center">
                <div className="w-full">
                  <div className="text-slate-400 gap-2">
                    <span>{job.postedAt}</span>
                    <span className="font-bold mr-2 ml-2 text-3xl">.</span>
                    <span>{job.contract}</span>
                  </div>
                  <div className="pt-2 pb-2">
                    <h1 className="text-white font-bold text-[20px]">
                      {job.position}
                    </h1>
                  </div>
                  <div className="">
                    <p className="text-[#5964E0]">{job.location}</p>
                  </div>
                </div>

                <div className="w-[20%] bg-[#5964E0] items-end flex justify-center rounded-md cursor-pointer">
                  <button className="text-white text-bold p-3 font-bold">
                    Apply Job
                  </button>
                </div>
              </div>

              <div className="pt-10">
                {/* description */}
                <p className="text-slate-400  text-[18px]">{job.description}</p>
              </div>
              <div className="pt-10">
                {/* Requirements */}
                <h1 className="pb-5 font-bold text-[20px] text-white">
                  Requirements
                </h1>
                <p className="text-slate-400 text-[18px]">
                  {job.requirements.content}
                </p>
                {job.requirements.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <p className="text-[#5964E0] text-[30px] font-bold">.</p>
                    <p className="text-slate-400 text-[18px] w-full mt-4">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              {/* Job Assistance */}
              <div className="pt-10 pb-10 text-white">
                <h1 className="pb-5 font-bold text-[20px]">What You Will Do</h1>
                <p className="text-slate-400 text-[18px]">
                  {job.jobAssistance.content}
                </p>
                {job.jobAssistance.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <p className="text-[#5964E0] text-[20px] font-bold">
                      {index + 1}
                    </p>
                    <p className="text-slate-400 text-[18px] w-full">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </main>

          <div className=" flex justify-center w-full  bg-slate-700 p-10 mt-10 items-center pr-0 pl-0">
            <div className="flex  w-[50%] items-center justify-between">
              <div>
                <h1 className="text-white font-bold">
                  Senior Software Engineer
                </h1>
                <p className="text-slate-500 pt-1 font-bold text-[15px]">
                  So Digital Inc.
                </p>
              </div>
              <button className="flex text-white  bg-[#5964E0] text-[20px] p-2 pr-5 pl-5 rounded-md">
                Apply Job
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Apply;
