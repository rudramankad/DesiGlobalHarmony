import React, { useState } from "react";

export function Nav() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const decoLinks = [
    {
      name: "Contact Us",
      to: "/",
    },
    {
      name: "Q&A ?",
      to: "/",
    },
    {
      name: "About",
      to: "/",
    },
  ];

  return (
    <>
      <nav
        className={`flex items-center justify-between box-border w-full absolute p-[2rem]`}
      >
      <a href="/" title="Go to home page"> 
  <span>
    <span style={{color: 'orange', fontSize:'30px', fontWeight: 'bold'}}>Desi</span>
    <span style={{color: 'white', fontSize:'30px', fontWeight: 'bold'}}>Global</span>
    <span style={{color: 'green', fontSize:'30px', fontWeight: 'bold'}}>Harmony</span>
  </span>


            <g fill="none" fillRule="evenodd">
              <title>❤️DesiGolobalHarmony</title>
              <path
                d="M31.5 49.6C55 41.5 59 20.4 56 1c0-.7.6-1.2 1.2-1C79.7 11 105 35 105 71c0 27.6-21.4 52-52.5 52a50 50 0 0 1-28.2-92.7c.6-.4 1.4 0 1.4.7.3 3.7 1.3 13 5.4 18.6h.4z"
                fill="white"
              ></path>
              <path
                d="M171.2 101.1l1.7-2 5.3 16.8-.7.7c-4 3.7-10 5.6-17.7 5.6h-.3c-7 0-12.5-2-16.3-5.7-3.8-3.8-5.8-9.5-5.8-16.7V54h-13.5V35.5h13.5V13.2h20.8v22.3h16.5V54h-16.6v41.3c0 1.9.5 8 6.3 8 3 0 5.8-1.1 6.8-2.3zm11 19.2V35.6H203v84.7h-20.8zM192.5 1A12.5 12.5 0 1 1 180 13.6C180 6.8 185.7 1 192.5 1zm66.4 32.5c18 0 27.9 9.8 27.9 27.7v59H266V66.2c-.4-9.6-5-14-14.8-14-8.8 0-15.9 5.4-19.5 10v58h-20.8V35.7h20.8v9c6-5.8 15.6-11 27.2-11zM356 44.4V4.6h20.8v115.8H356v-8.8a34.3 34.3 0 0 1-24.7 10.7c-22.7 0-37.9-17.8-37.9-44.3 0-26.6 15.2-44.4 37.9-44.4A34 34 0 0 1 356 44.4zm0 17.9a25.6 25.6 0 0 0-19.6-10c-12.9 0-21.5 10.3-21.5 25.7 0 15.3 8.6 25.6 21.5 25.6 7.5 0 15.7-4 19.6-9.8V62.3zm69.4-28.7c24.6 0 41.7 19 41.7 46v5.7h-62.9c2.1 11.9 11.5 19.5 24.3 19.5 8.1 0 17-3.5 22.1-8.6L452 95l9.9 14.2-1 .9a48.6 48.6 0 0 1-34.1 12.2c-26 0-44.3-18.3-44.3-44.4a42.8 42.8 0 0 1 43-44.3zm-21.3 36h42.7c-1.2-12.7-11.7-18.5-21.4-18.5-14.6 0-20.1 11-21.3 18.6zm113.3-36h1.5v21l-1.8-.3c-1.5-.3-3.4-.5-5.3-.5-6.7 0-16 4.7-19.5 9.7v56.7h-20.8V35.6h20.9V45c6.9-7.2 16-11.4 25-11.4z"
                fill="white"
              ></path>
            </g>
          
        </a>

        <div
          className={`flex items-center transition-all justify-center h-screen w-full absolute left-0 top-0  bg-black/50 backdrop-blur-md z-1 lg:flex lg:ml-0 lg:h-0 lg:static lg:justify-end ${
            isMenuClicked ? "ml-0" : "ml-[-100%]"
          }`}
        >
          <ul className="flex items-center flex-col lg:flex-row">
            {decoLinks.map((link, index) => (
              <li className="my-5 lg:my-0 lg:ml-10" key={index}>
                <a
                  className="text-white text-[20px] underline lg:no-underline font-[200] hover:text-darkPink hover:underline"
                  href={link.to}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/login"
                className="bg-white rounded-[30px] text-black text-xl lg:ml-10 my-7 lg:my-0 text-[20px] font-bold py-3 px-6"
              >
                Login
              </a>
            </li>
          </ul>
        </div>

        <div
          className={`lg:hidden`}
          onClick={() => {
            setIsMenuClicked(!isMenuClicked);
          }}
        >
          <div
            className={` transition-all rounded-md h-1 w-9 before:content-[''] before:absolute before:h-1 before:bg-white before:w-9  after:content-[''] after:absolute after:h-1 after:w-9  after:bg-white 
                  ${
                    isMenuClicked
                      ? "bg-transparent rotate-[360deg] after:rotate-[-45deg]  before:rotate-45 before:translate-y-0 after:translate-y-0"
                      : "bg-white before:translate-y-[-10px] after:translate-y-[10px]"
                  }
                  `}
          ></div>
        </div>
      </nav>
    </>
  );
}
