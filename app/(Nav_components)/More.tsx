"use client";
import React from "react";
import {
  ChevronDownIcon,
  BookOpenIcon,
  NewspaperIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import ChooseColour from "./ChooseColour";
import { useDispatch, useSelector } from "react-redux";
import {
  setStarMode,
  StarMode_data,
  setStarColur,
  StarColur_data,
} from "../../Redux-store/Redux-action";
import { useState, useEffect, useRef } from "react";
function More() {
  const starmode = useSelector(StarMode_data);
  const colour = useSelector(StarColur_data);
  const dispatch = useDispatch();
  const [open, setopen] = useState<boolean>(false);
  let MenuRef = useRef<HTMLDivElement>(null);
  const StarModeStatus = () => {
    const status = localStorage.getItem("starMode");
  
    if (status === "active") {
      dispatch(setStarMode("disable"));
      localStorage.setItem("starMode", "disable");
    } else {
      dispatch(setStarMode("active"));
      localStorage.setItem("starMode", "active");
    }
  };

  const onColourChange = (e: string) => {
    dispatch(setStarColur(e));
    localStorage.setItem("colour", e);
  };

  useEffect(() => {
    let handler = (e: any) => {
      if (!MenuRef.current?.contains(e.target)) {
        setopen(false);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <div className="Nav_text flex flex-row group relative ">
      <div onClick={() => setopen(true)} className=" flex flex-row">
        More
        <ChevronDownIcon className=" w-[18px] h-[18px]  text-gray-300 translate-y-[2px] group-hover:text-[#0000009e] group-hover:text-gray-50 ml-[10px]" />
      </div>
      <div
        ref={MenuRef}
        className={`w-[400px] h-auto rounded-[10px] bg-[#0c0728]  p-[20px] absolute right-[-150px] animate-slideup0  mt-[43px] ${
          open ? "flex" : " hidden"
        } flex-col   items-center justify-center `}
      >
        <div className="w-[100px] h-[25px] absolute top-[-22px]  "></div>
        <div className=" absolute top-[-13px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-triangle-fill text-[#0c0728] "
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"
            />
          </svg>
        </div>
        <a href="https://taufeeqriyaz.medium.com/list/5-year-old-series-by-taufeeq-riyaz-6a776126f84d" target="_blank">
        <div className="w-full h-auto hover:bg-[#221d41] rounded-[8px] flex flex-row py-[13px] px-[15px] ">
          <div className="mr-[10px]">
            <BookOpenIcon className="h-6 w-6 text-sky-500" />
          </div>
          <div className=" flex flex-col">
            <span className=" font-bold text-gray-200 text-[16px] ">
            5 Year Old Series Blogs
            </span>
            <p className=" mt-[5px] text-[14px] text-gray-300 ">
              Explaining complex topics to a 5 year old
            </p>
          </div>
        </div>
        </a>
        <Link
          href={"AboutMe"}
          className="w-full h-auto hover:bg-[#221d41] rounded-[8px] flex flex-row py-[13px] px-[15px] "
        >
          <div className="mr-[10px]">
            <NewspaperIcon className="h-6 w-6 text-sky-500" />
          </div>
          <div className=" flex flex-col">
            <span className=" font-bold text-gray-200 text-[16px] ">About</span>
            <p className=" mt-[5px] text-[14px] text-gray-300 ">
              Learn more about me, my work, and how I can help you with your
              projects and goals.
            </p>
          </div>
        </Link>
        <a
          href="https://lu.ma/taufeeq"
          target="_blank"
          className="w-full h-auto hover:bg-[#221d41] rounded-[8px] flex flex-row py-[13px] px-[15px] "
        >
          <div className="mr-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-stars text-sky-500 "
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
            </svg>
          </div>
          <div className=" flex flex-col">
            <span className=" font-bold text-gray-200 text-[16px] ">
              Luma Page
            </span>
            <p className=" mt-[5px] text-[14px] text-gray-300 ">
              Subscribe to get updates when I organize events.
            </p>
          </div>
        </a>
        <a href="https://dsc.gg/tenacity-community" target="_blank">
        <div className="w-full h-auto hover:bg-[#221d41] rounded-[8px] flex flex-row py-[13px] px-[15px] ">
          <div className="mr-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-discord text-sky-500 "
              viewBox="0 0 16 16"
            >
              <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
            </svg>
          </div>
          <div className=" flex flex-col">
            <span className=" font-bold text-gray-200 text-[16px] ">
              Tenacity Discord Server
            </span>
            <p className=" mt-[5px] text-[14px] text-gray-300 ">
              Join the Tenacity community on Discord to ask questions, share your projects,
              and get help from other developers.
            </p>
          </div>
        </div>
        </a>
        <div className="w-full h-auto hover:bg-[#221d41] active:scale-95 transition-all duration-100 select-none rounded-[8px] flex flex-row py-[13px] px-[15px] ">
          <div className="mr-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-star text-sky-500 "
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          </div>
          <div
            onClick={() => StarModeStatus()}
            className="w-full h-auto flex flex-col"
          >
            <div className=" font-bold text-gray-200 text-[16px] flex flex-col items-start  justify-start  ">
              <div>
                <span>Stars Mode : </span>
              </div>
              <div className=" mt-[10px]">
                {starmode === "active" ? (
                  <div className=" text-teal-500  text-[14px] "> Active </div>
                ) : (
                  <div className=" text-rose-500  text-[14px] "> Disable </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto hover:bg-[#221d41]  select-none rounded-[8px] flex flex-row py-[13px] px-[15px] ">
          <div className="mr-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-star text-sky-500 "
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          </div>
          <ChooseColour
            colour={colour}
            onColourChange={onColourChange}
            text_tittle={true}
          />
        </div>
      </div>
    </div>
  );
}

export default More;
