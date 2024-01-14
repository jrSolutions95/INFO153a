import React from 'react'
import imgEUvsMeta from '../assets/euvsmeta.jpg'
import imgGG from '../assets/gardeng.jpg'
import imgTodoist from '../assets/todoistremake.jpg'

function Projects() {
  return (/* uses one of the generic cards from here: https://daisyui.com/components/card/  */
    <div className="mt-8 bg-white p-5 md:p-10 rounded-2xl text-gray-500">
        <h1 className="text-3xl font-bold mb-6 ">My projects</h1>
        <div className="flex flex-wrap justify-center gap-10">

          <div className="card w-96 bg-white shadow-xl">
            <figure><img src={imgEUvsMeta} alt="photo eu vs meta" /></figure>
            <div className="card-body">
              <h2 className="card-title">Should Social Media Users Have to Pay for Privacy?</h2>
              <p>An article written for the final project in CS H195, where we looked at Metas newest subscription model where users are forced to pay to avoid targeted advertisement.</p>
              <div className="card-actions justify-end">
               <a href="https://medium.com/@mmbell_78295/should-social-media-users-have-to-pay-for-privacy-a41353ff2c85" target="blank">
                <button className="btn btn-primary bg-blue-900 text-white">View More</button>
              </a>
          </div>
            </div>
          </div>

          <div className="card w-96 bg-white shadow-xl">
            <figure><img src={imgGG} alt="photo_gg" /></figure>
            <div className="card-body">
              <h2 className="card-title">Garden Genius</h2>
              <p>An app developed in Spring of 2023 that helps people with garden work and the planting of flowers based on the weather.
              </p>
              <p>Uses JetpackCompose and the Norwegian Metrological Institute weather APIs. Won "Best App" at the IN2000 awards</p>
              <div className="card-actions justify-end">
                <a href="https://github.uio.no/ariansh/IN2000-app/releases" target='blank'>
                <button className="btn btn-primary bg-blue-900 text-white">View More</button>
                </a>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-white shadow-xl">
            <figure><img src={imgTodoist} alt="photo_gg" /></figure>
            <div className="card-body">
              <h2 className="card-title">Remake of Todoist app</h2>
              <p>A webpage assignment as from INFO153A, the task was to remake a fully functional webpage version of the pouplar planning app "ToDoist". 
              </p>
              <p>Uses HTML, CSS and JavaScript</p>
              <div className="card-actions justify-end">
                <a href="https://github.com/UCB-INFO-FRONTEND-WEBARCH/assignment-2-jrSolutions95" target='blank'>
                <button className="btn btn-primary bg-blue-900 text-white">View More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Projects
