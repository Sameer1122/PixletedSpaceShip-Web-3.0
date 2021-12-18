import React from "react";
import Person1 from "../assest/person1.png";
import Person2 from "../assest/person2.png";
import Person3 from "../assest/person3.png";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Team = () => {
  return (
    <section className="bg-greenButon py-16">
      {/* Team Div.. */}
      <div className="w-10/12 mx-auto">
        <h1 className="text-black  text-5xl text-center font-body pb-8">
          Team
        </h1>
        {/*  Team Member*/}
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-x-6 lg:space-x-0 md:space-y-0 ">
          {/* First Team Member*/}
          <div className="space-y-6">
            <img
              src={Person1}
              alt=""
              className=" h-64 w-64 md:h-48 md:w-48 lg:h-64 lg:w-64 rounded-full object-top object-cover"
            />
            <h3 className="font-body border-b border-teamBorder pb-2">
              Athar Malakooti
            </h3>
            <div className="flex justify-between items-center">
              <p className="font-body text-xs text-parralexColor">Manager</p>
              <div className="flex space-x-4 text-teamIcon">
                <CgFacebook className="cursor-pointer transition duration-200 transform hover:scale-110 hover:-translate-y-1 hover:text-blue-800" />
                <BsTwitter className="cursor-pointer transition duration-200 transform hover:scale-110 hover:-translate-y-1 hover:text-blue-500" />
                <BsInstagram className="cursor-pointer transition duration-200 transform hover:scale-110 hover:-translate-y-1 hover:text-red-400" />
              </div>
            </div>
          </div>
          {/* 2nd Team Member*/}
          <div className="space-y-6">
            <img
              src={Person2}
              alt=""
              className=" h-64 w-64 md:h-48 md:w-48 lg:h-64 lg:w-64 rounded-full object-top object-cover"
            />
            <h3 className="font-body border-b border-teamBorder pb-2">
              Benito Noboa
            </h3>
            <div className="flex justify-between items-center">
              <p className="font-body text-xs space-x-4 text-parralexColor">
                Designer
              </p>
              <div className="flex text-teamIcon space-x-4">
                <CgFacebook className="cursor-pointer transition duration-200 transform hover:scale-110 hover:-translate-y-1 hover:text-blue-800" />
                <BsTwitter className="cursor-pointer transition duration-200 transform hover:scale-110 hover:-translate-y-1 hover:text-blue-500" />
                <BsInstagram className="cursor-pointer transition duration-200 transform hover:scale-110 hover:-translate-y-1 hover:text-red-400" />
              </div>
            </div>
          </div>
          {/* 3rd Team Member*/}
          <div className="space-y-6">
            <img
              src={Person3}
              alt=""
              className=" h-64 w-64 md:h-48 md:w-48 lg:h-64 lg:w-64 rounded-full object-top object-cover"
            />
            <h3 className="font-body border-b border-teamBorder pb-2">
              Meng Ru
            </h3>
            <div className="flex justify-between items-center">
              <p className="font-body text-xs text-parralexColor"> Developer</p>
              <div className="flex space-x-4 text-teamIcon">
                <CgFacebook className="cursor-pointer transition duration-200 transform hover:scale-110 hover:-translate-y-1 hover:text-blue-800" />
                <BsTwitter className="cursor-pointer transition duration-200 transform hover:scale-110 hover:-translate-y-1 hover:text-blue-500" />
                <BsInstagram className="cursor-pointer transition duration-200 transform hover:scale-110 hover:-translate-y-1 hover:text-red-400" />
              </div>
            </div>
          </div>
          {/* NextTeam Member*/}
        </div>
      </div>
    </section>
  );
};

export default Team;
