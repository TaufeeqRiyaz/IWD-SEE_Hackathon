import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../(Footer)/Footer";
import { color } from "framer-motion";
function page() {
  return (
    <div className=" pt-[65px] w-auto h-auto text-white m-auto flex flex-col items-center p-[10px] ">
      <div className=" w-full 1250:w-[1210px] absolute min-h-[70px] flex flex-row items-center justify-start px-[10px] 600:px-[15px] 1250:px-0">
        <Link
          href={"/"}
          className="flex flex-row items-center   justify-start text-slate-200 hover:text-sky-500 cursor-pointer "
        >
          <ArrowLeftIcon className="h-4 w-4  mr-[5px] " />
          <span className=" text-[14px]">Back</span>
        </Link>
      </div>
      <div className=" w-full 1250:w-[900px] h-auto m-auto mt-[25px] pb-[100px] ">
        <div className=" text-gray-400 text-[14px]">Wed Sep 06 2023</div>
        <div className="w-full h-auto font-bold text-[29px] my-[15px] text-slate-200  animate-slowfade ">
          Hey, I&apos;m Taufeeq Riyaz 💻
        </div>
        <div className=" text-gray-300    animate-slideright ">
        I am passionate developer, designer, and tech enthusiast. I am also the founder and design lead of <a className="text-blue-500" href="https://tenacity.social">Tenacity</a>, a community based startup that aims to build innovative and impactful solutions for students and educational institutes to make learning more personalized and fun.
        I am currently pursuing my B.Tech (Hons.) in Computer Science Engineering from RV University in Bengaluru, India.
        </div>
        <div className="w-full h-auto font-bold text-[29px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade  ">
          Work Experience ✨
        </div>

        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200  animate-slowfade  ">
        Founder And Design Lead @ Tenacity 💙
        </div>
        <div className="text-gray-300 my-[15px] animate-slideright">Dec 2022 - Present</div>
        <div className=" text-gray-300  my-[15px]  animate-slideright">
        As the founder of Tenacity, I am responsible for managing all aspects of the product and community, including the technology and design end. I take great care to ensure that the community runs smoothly and that our members have access to the resources and support they need to succeed.
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade  ">
        Peer Mentor - B.Tech(Hons.) and BSc(Hons.) @ RV University 📚
        </div>
        <div className="text-gray-300 my-[15px] animate-slideright">Oct 2022 - Present</div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
        As a Peer Mentor at RV University, I had the opportunity to work closely with students, providing guidance, support, and mentorship to help them reach their full potential. My primary goal was to assist students in web technologies course and to develop the skills needed to succeed both in the classroom and in the professional world. I provided one-on-one mentoring to students who needed additional support, helping them to overcome challenges and achieve their goals.
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade ">
          Tech and Design @ Emporia Business Club 💵
        </div>
        <div className="text-gray-300 my-[15px] animate-slideright">Sep 2022 - Apr 2023 · 8 mos</div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
        Responsible for making ads for marketing campaigns, designing and developing websites
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200  animate-slowfade ">
        Microsoft Azure Intern (Future Ready Talent) @ Microsoft ☁️
        </div>
        <div className="text-gray-300 my-[15px] animate-slideright">May 2022 - Jul 2022 · 3 mos</div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
          Completed the following paths - <br /> <br />
          Azure Fundamentals (AZ-900) <br />
          Azure Administrator (AZ-104) <br />
          Azure Developer (AZ-204) <br />
          Azure Security Technologies (AZ-500) <br />
          Azure AI Fundamentals (AI-900) <br />
          Azure AI Engineer Associate (AI-102) <br />
          Microsoft Power BI Data Analyst (PL-300) <br /><br />
          
          Industry Sessions <br /> <br />
          Completed a project which showcases how to use various services provided by Azure to solve real-world problems.
        </div>
                <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200  animate-slowfade ">
        Chief Experiment Officer @ Spenny 💰
        </div>
        <div className="text-gray-300 my-[15px] animate-slideright">May 2022 - Jul 2022 · 3 mos</div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
          As an intern, I had the opportunity to work with the founder and founding team of Spenny. During my time there, I was able to learn a lot about entrepreneurship, marketing, and design. I was assigned weekly tasks that were designed to help the company acquire new customers and improve its marketing efforts.

One of my primary responsibilities was to assist with the design of websites, posters, and social media posts. I worked closely with the team to create visually appealing designs that were in line with the company&apos;s branding and marketing goals.

In addition to my design responsibilities, I also assisted with various tasks related to customer acquisition. This included conducting market research and reaching out to potential customers.
<br /> <br />
About Spenny - 
Every time you do a transaction online, Spenny tracks it and rounds up the amount to the nearest 10, and adds the difference to a cart (Rs. 8 in case you spend Rs. 72). When this cart reaches Rs. 100 or 500 (depending on your preferred multiplier), Spenny automatically invests it into a diversified portfolio, hence giving you returns on your spare change.
        </div>
        <Link
          href={"/"}
          className=" flex flex-row items-center text-slate-200 font-normal cursor-pointer text-[14px] my-[30px] "
        >
          Go Back To
          <span className=" text-sky-500 ml-[5px] cursor-pointer  hover:underline  ">
            Homepage
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default page;
