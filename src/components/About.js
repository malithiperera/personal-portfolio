import {AcademicCapIcon} from "@heroicons/react/solid"

const About = () => {
    return ( 

        <section id="about">
  
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap ml-10 ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col  md:text-left mb-16 md:mb-0 items-center text-center">
        <div className="text-center mb-20">
        <AcademicCapIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-button mb-4 text-center">
            About  me
          </h1>
         
        </div>
          <h2 className="hidden lg:inline-block  title-font sm:text-2xl text-3xl mb-4 font-medium text-white">Develop a passion for learning. .
       
          </h2>
          <h3 className="mb-8 leading-relaxed text-xl text-white text-center">
            Hello, I am Malithi Perera from Sri Lanka.Currenlty Undergraduate in Computer Science(Hons) 
            in  University of Colombo School of Computing one the top rated University in Sri Lanka.
            I Intersting in Coding and Web Developing. 
          
          </h3>
          
      
        
      </div>
   
        </div>
        </section>
     );
}
 
export default About;