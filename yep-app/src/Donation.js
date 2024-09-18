import React from "react";

export default function Donation() {
  return (
    <div className="w-full min-h-screen">
      <div className="text-xl font-sans">
        <header className="bg-[#01093a] w-full h-32 p-8 flex text-white items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://scontent.fuln4-2.fna.fbcdn.net/v/t39.30808-6/420741966_122102973824189291_7381725976754766432_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=W11nop27Kl0Q7kNvgH1cxa5&_nc_ht=scontent.fuln4-2.fna&_nc_gid=A6pIXq-Y_yKt6m-ONYAMreo&oh=00_AYCXmHn51j9tF8UAzKXIBGrQ4n5N65lXkvqOUEmTF1LCCg&oe=66EE26EA"
              className="w-16 h-16 lg:w-32 lg:h-32"
            />
            <div className="ml-4 font-bold text-sm lg:text-lg">
              Young Engineers Mongolia
            </div>
          </div>

          <div className="flex gap-4 lg:gap-8 text-sm lg:text-lg">
            <p>YEM</p>
            <p>Projects</p>
            <p>Blogs</p>
            <p>Academy</p>
            <p>Donation</p>
          </div>
        </header>
        <main className="flex flex-col w-full items-center justify-center p-6 lg:p-12 flex-col bg-[#fffffb]">
          <h1 className="font-bold text-3xl lg:text-7xl text-[#ff8d23]">
            Donation
          </h1>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-8 w-full justify-center">
            <div className="bg-[#01093a] p-6 rounded-3xl text-white font-bold w-full max-w-lg">
              <p>Why you should donate</p>
              <p>---</p>
              <p>What it will be used for</p>
              <p>---</p>
              <p>Where to donate</p>
              <p>---</p>
            </div>

            <div className="bg-[#01093a] p-6 rounded-3xl text-white font-bold w-full max-w-lg">
              <p>Name</p>
              <input className="text-black rounded-3xl w-full p-2 mt-2 mb-4" />
              <p>Email</p>
              <input className="text-black rounded-3xl w-full p-2 mt-2 mb-4" />
              <p>Amount</p>
              <input className="text-black rounded-3xl w-full p-2 mt-2 mb-4" />

              <button className="p-2 mt-4 text-white rounded-3xl bg-[#ff8d23] w-full">
                Submit
              </button>
            </div>
          </div>
        </main>

        <footer className="w-full bg-[#fff5ee] flex flex-col lg:flex-row justify-between px-8 lg:px-32 py-12 lg:py-24 gap-8">
          <div className="w-full lg:w-1/2">
            <div className="font-bold mb-4">GET IN TOUCH</div>
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-64">
              <div>
                <div className="mb-1">Name</div>
                <div className="border-b border-black w-full lg:w-64"></div>
              </div>
              <div>
                <div className="mb-1">Email</div>
                <div className="border-b border-black w-full lg:w-64"></div>
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-1">Message</div>
              <div className="border-b border-black w-full lg:w-96"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="font-bold mb-4">FOLLOW</div>
            <div className="flex gap-4">
              <p className="underline cursor-pointer">Facebook</p>
              <p className="underline cursor-pointer">Instagram</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
