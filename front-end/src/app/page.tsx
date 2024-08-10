"use client";
import { LoginButton } from "@/components/button/login-button";
import { CommonPage } from "@/components/common-page/common-page";

export default function Landing() {
  return (
    <CommonPage>
      <div className="justify-between px-12 py-8 md:px-16 md:py-10 lg:px-24 lg:py-14">
        <div className="flex flex-col self-stretch justify-center gap-6 flex-1 lg:max-w-[50.7rem] mt-8">
          <h1
            className={
              "text-slate-800 font-extrabold text-[2rem] leading-10 md:text-[3.5rem] md:leading-[4rem] lg:text-[5rem] lg:leading-[5rem]"
            }
          >
            The best ticket APP
          </h1>

          <p className="text-slate-800 font-light text-md md:text-base lg:text-xl lg:leading-10">
            Login and manage the tickets
          </p>
          <LoginButton />
        </div>
      </div>
    </CommonPage>
  );
}
