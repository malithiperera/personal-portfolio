// src/components/About.js

import React from "react";

export default function About() {
  return (
    <section id="about" className="relative">
  
      <div className="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center  ml-10">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-5xl mb-4 font-medium text-white">
            Hello, I am <span  className="text-button">Malithi Perera</span>
           
          </h1>
          <h2 className="hidden lg:inline-block  title-font sm:text-2xl text-3xl mb-4 font-medium text-white">Develop a passion for learning. .
          
          </h2>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-transparent border-2 border-button py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-full">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={require('./image.png')} 
          />
        </div>
        
      </div>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
         <a 
         
         >
          facebook

         </a>
        </div>
    </section>
  );
}