import React from 'react'
import imgLHA from '../assets/IMG_2503.jpg'
/* maybe add links to the list of courses? */
function About() {
  return (
      <div className="mt-8 bg-white p-5 md:p-10 rounded-2xl text-gray-500">
        <h1 className="text-3xl font-bold mb-6 ">About Me</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3"> {/* 1/3 of the width, secures the rezising, but looks a bit odd on smaller screens (due to img properties) */}
            <img src={imgLHA} alt="Lars Harald Aasheim" className="rounded-lg w-full lg:w-auto" />
          </div>
          <div className="md:w-2/3 md:pl-8"> 
            <p className="text-lg text-gray-500 mb-4">
              Hello! Im Lars Harald Aasheim, a Computer Science student at the University of Oslo currently in Berkeley for my exchange semester at University of California Berkeley. </p>
            <p className="text-lg text-gray-500 mb-4">
              This semester I have taken the following courses: </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>COMPSCI H195 - Honors Social Implications of Computer Technology</li>
                <li>COMPSCI 198 - Directed Group Studies for Undergraduates in Linux System Administration</li>
                <li>DATA 88E - Economic Models</li>
                <li>ENGIN 183A - A. Richard Newton Lecture series</li>
                <li>INFO 153A - Front-End Web Architecture</li>
                <li>INFO 213 - Introduction to User Experience Design</li>
                <li>SOCIOL 198 - Directed Group Study for Undergradues: Cross cultural communication</li>
              </ul>
            <p className="text-lg text-gray-500 mb-4">
               I have experience in a range of programming languages including Kotlin, SQL, Python, C, and Java. I have practical experience in developing robust applications in Android Studio with JetpackCompose and Im currently learning HTML,CSS, JS and React through INFO153A. 
               Beyond my technical abilities, I've had the enriching experience of mentoring a visually impaired student in an introductory Java course, which has honed my skills in inclusive teaching and accessibility.
            </p>
            <p className="text-lg text-gray-500">
              When I'm not coding, I enjoy biking, climbing and spending time outdoors. I have also recently found an interest in sailing, the picture is from USA 76 used in the 2003 challenge for the Americas Cup, sailings most prestigues event.
            </p>
          </div>
        </div>
      </div>
  );
}

export default About
