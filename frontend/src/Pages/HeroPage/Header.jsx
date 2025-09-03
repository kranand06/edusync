import React from "react";

function Header() {
  return (
    <div className='min-h-screen flex px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48 items-center'>
      <div className="w-full md:w-1/2 flex   p-6 bg-theme flex-col justify-center gap-6">
        <div className="text-6xl font-bold text-theme-2">
          <h1>Learn Together,</h1>
          <h1><span className="text-primary">Succeed</span> Together</h1>
        </div>
        <p>Welcome to <span className="text-theme-1 font-semibold">edu</span><span className="text-primary font-semibold">Connect</span>, the all-in-one platform designed to bring students and educators closer through seamless collaboration and resource sharing. With <span className="text-theme-1 font-semibold">edu</span><span className="text-primary font-semibold">Connect</span>, you can easily access study materials, share notes, find past exam papers, and stay on top of assignments—all in one place. Our Academic Resource Hub keeps you organized, with personalized notifications to help you meet deadlines. Connect through real-time chat for both individual and group discussions, and enjoy a dedicated space for anonymous confessions, complete with robust privacy controls. </p>
      </div>
    </div>
  );
}

export default Header;
