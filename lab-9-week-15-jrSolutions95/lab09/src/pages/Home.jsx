import React from 'react'

function Home() {
  return (
      <div className="mt-8 bg-white p-5 rounded-2xl text-gray-500">
        <h1 className="text-3xl  font-bold mb-4"> Welcome to My Portfolio!</h1>
        <div className="flex-shrink-0">{/* stops squishing */}
          </div>
          <div className="text-lg flex-grow text-gray-500">
            <p className="mb-4">This is a school project in Front End Web-Architecture (INFO153A) at the University of California Berkeley, read about me in the about section or expore my work in the projects section. Reach out to me if you have any questions or opportunities. Thank you for visiting, and I hope you find my portfolio useful.</p>
            <p className="mb-4">If you want to learn more abou the course visit:  
              <a href="https://www.ischool.berkeley.edu/courses/info/153a" 
              className="text-blue-300 hover:text-blue-800" 
              target="blank" > INFO 153A</a>
             </p>

          </div>
        </div>
  );
}

export default Home
