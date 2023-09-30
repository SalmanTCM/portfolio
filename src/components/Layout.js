import React from "react";
import Navbar from "./Navbar";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto mt-6">{children}</main>
      <footer className="fixed bottom-0 left-0 p-4 text-white flex justify-between w-full">
        <div className="flex flex-col space-y-4">
          <a
            href="https://www.linkedin.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter size={24} />
          </a>
          <div className="separator"></div>
        </div>
        

        <div className="flex flex-col">
        <p className="text-sm vertical-text text-[12px]">salman.connects@gmail.com</p>
          <div className="separator"></div>
        </div>
      </footer>
      <style jsx>{`
        .separator {
          width: 1px;
          height: 90px;
          background-color: #fff;
          margin: 0 auto;
        }
        .vertical-text {
            margin: 20px auto;
            padding: 10px;
            font-family: var(--font-mono);
            font-size: var(--fz-xxs);
            line-height: var(--fz-lg);
            letter-spacing: 0.1em;
            -webkit-writing-mode: vertical-rl;
            writing-mode: vertical-rl
          }
      `}</style>
    </div>
  );
};

export default Layout;
