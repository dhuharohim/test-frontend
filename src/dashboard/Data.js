import React from "react";
import Logo from "../../src/assets/myroti.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function Data() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();

  const deleteToken = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="h-screen flex flex-row justify-center items-center bg-app-background bg-center bg-no-repeat bg-cover h-100 bg-roti-bg">
        <div className="grid grid-rows-12">
          <div className="flex flex-row bg-center justify-self-center">
           
          </div>

          <div className="glassmorphism-25 grid h-100 flex-row lg:flex-row  bg-opacity-10 rounded-3xl overflow-hidden w-full justify-self-center shadow-lg m-4 lg:m-6">
            <div className="justify-self-center pt-1 text-2xl font-bold" style={{ opacity:0.7 }}>
                
            <img src={Logo} className="" style={{ width:200, opacity:0.6 }} />
            </div>
            <div className="justify-self-center mt-20 text-2xl font-medium" style={{ opacity:0.7 }}>
            Dashboard
            </div>
            <div className="justify-self-center mt-2 text-2xl font-medium" style={{ opacity:0.7 }}>
            Input
            </div>
            <div class="grid justify-items-center mt-20">
        <button
          className=" hover:bg-blue-700 text-black font-bold py-2 px-4  focus:outline-none focus:shadow-outline rounded-full "
          style={{ backgroundColor: "#DDACA2" }}
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
        >
          <div style={{ opacity: 0.7 }}>Logout</div>
        </button>
      </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
