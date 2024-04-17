import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export function Apply() {
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
                  <div className=" text-slate-400 gap-2">
                    <span>1w ago</span>
                    <span className="font-bold mr-2 ml-2 text-3xl">.</span>
                    <span>Part Time</span>
                  </div>
                  <div className="pt-2 pb-2">
                    <h1 className="text-white font-bold text-[30px]">
                      Senior Software Engineer
                    </h1>
                  </div>
                  <div className="">
                    <p className="text-[#5964E0]">United Kingdom</p>
                  </div>
                </div>

                <div className="w-[20%] bg-[#5964E0] items-end flex justify-center rounded-md cursor-pointer">
                  <button className="text-white text-bold p-3 font-bold">
                    Apply Job
                  </button>
                </div>
              </div>
              <div className="pt-10">
                <p className="text-slate-400  text-[18px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero
                  sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
                  Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate
                  volutpat, eros pede semper est, vitae luctus metus libero eu
                  augue. Morbi purus libero, faucibus adipiscing, commodo quis,
                  gravida id, est. Sed lectus. Praesent elementum hendrerit
                  tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus
                  a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
                  sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum
                  et, dapibus sed, urna.
                </p>
              </div>

              <div className="pt-10 pb-10 text-white">
                <h1 className="pb-5 font-bold text-[20px]">Requirements</h1>

                <p className="text-slate-400  text-[18px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero
                  sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
                  Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate
                  volutpat, eros pede semper est, vitae luctus metus libero eu
                  augue. Morbi purus libero, faucibus adipiscing, commodo quis,
                  gravida id, est. Sed lectus. Praesent elementum hendrerit
                  tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus
                  a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
                  sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum
                  et, dapibus sed, urna.
                </p>
              </div>

              <div className=" text-white flex">
                <div className="flex items-center gap-6">
                  <p className="text-[#5964E0]  text-[30px] font-bold">.</p>
                  <p className="text-slate-400  text-[18px] w-full mt-4">
                    Morbi interdum mollis sapien. Sed
                  </p>
                </div>
              </div>

              <div className=" text-white flex">
                <div className="flex items-center gap-6">
                  <p className="text-[#5964E0]  text-[30px] font-bold">.</p>
                  <p className="text-slate-400  text-[18px] w-full mt-4">
                    Morbi interdum mollis sapien. Sed
                  </p>
                </div>
              </div>

              <div className=" text-white flex">
                <div className="flex items-center gap-6">
                  <p className="text-[#5964E0]  text-[30px] font-bold">.</p>
                  <p className="text-slate-400  text-[18px] w-full mt-4">
                    Morbi interdum mollis sapien. Sed
                  </p>
                </div>
              </div>

              <div className=" text-white flex">
                <div className="flex items-center gap-6">
                  <p className="text-[#5964E0]  text-[30px] font-bold">.</p>
                  <p className="text-slate-400  text-[18px] w-full mt-4">
                    Morbi interdum mollis sapien. Sed
                  </p>
                </div>
              </div>

              <div className="pt-10 pb-10 text-white">
                <h1 className="pb-5 font-bold text-[20px]">What You Will Do</h1>

                <p className="text-slate-400  text-[18px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero
                  sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
                  Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate
                  volutpat, eros pede semper est, vitae luctus metus libero eu
                  augue. Morbi purus libero, faucibus adipiscing, commodo quis,
                  gravida id, est. Sed lectus. Praesent elementum hendrerit
                  tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus
                  a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
                  sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum
                  et, dapibus sed, urna.
                </p>
              </div>

              <div className=" text-white flex mb-4">
                <div className="flex items-center gap-6">
                  <p className="text-[#5964E0]  text-[20px] font-bold">1</p>
                  <p className="text-slate-400  text-[18px] w-full">
                    Morbi interdum mollis sapien. Sed
                  </p>
                </div>
              </div>

              <div className=" text-white flex mb-4">
                <div className="flex items-center gap-6">
                  <p className="text-[#5964E0]  text-[20px] font-bold">2</p>
                  <p className="text-slate-400  text-[18px] w-full">
                    Morbi interdum mollis sapien. Sed
                  </p>
                </div>
              </div>

              <div className=" text-white flex mb-4">
                <div className="flex items-center gap-6">
                  <p className="text-[#5964E0]  text-[20px] font-bold">3</p>
                  <p className="text-slate-400  text-[18px] w-full">
                    Morbi interdum mollis sapien. Sed
                  </p>
                </div>
              </div>
              <div className=" text-white flex mb-4">
                <div className="flex items-center gap-6">
                  <p className="text-[#5964E0]  text-[20px] font-bold">4</p>
                  <p className="text-slate-400  text-[18px] w-full">
                    Morbi interdum mollis sapien. Sed
                  </p>
                </div>
              </div>
            </div>
          </main>

          <div className=" flex justify-center w-full  bg-slate-700 p-10 mt-10 items-center">
            <div className="flex  bg-white w-[50%] items-center">
              <h1 className="float-start">Senior Software Engineer</h1>
              <button className="text-white font-bold bg-[#5964E0] text-[20px] p-5">
                Apply Job
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
