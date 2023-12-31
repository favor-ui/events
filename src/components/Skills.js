import { CheckIcon as BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <div id="skills-anchor" className="z-20 mt-12 sm:mt-20 lg:mt-28">
      <section id="skills" className="text-gray-400 bg-gray-900 body-font mt-5 pt-10">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              <strong>Skills &amp; Technologies</strong>
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <BadgeCheckIcon className="text-gold-700 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



// export default function Skills() {
//   return (
//     <section id="skills">
//       <div className="container px-5 py-10 mx-auto">
//         <div className="text-center mb-20">
//           <ChipIcon className="w-10 inline-block mb-4" />
//           <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
//             Skills &amp; Technologies
//           </h1>
//           <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
//             ipsa delectus eum quo voluptas aspernatur accusantium distinctio
//             possimus est.
//           </p>
//         </div>
//         <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
//           {skills.map((skill) => (
//             <div key={skill} className="p-2 sm:w-1/2 w-full">
//               <div className="bg-gray-800 rounded flex p-4 h-full items-center">
//                 <BadgeCheckIcon className="text-gold-700 w-6 h-6 flex-shrink-0 mr-4" />
//                 <span className="title-font font-medium text-white">
//                   {skill}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }