import React, { useState } from "react";
import { projects } from "../data";
import VideoPlayer from "../components/VideoPlayer";
import { convertGoogleDriveLink } from "./googleDriveUtils"; // Import the utility function

export default function Projects() {
  const [videoMuted, setVideoMuted] = useState(true);

  const toggleVideoMute = () => {
    setVideoMuted(!videoMuted);
  };

  const handleVideoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.muted = !video.muted;
      video.controls = !video.controls;
    }
  };

  return (
    <div id="projects-anchor" className="z-20 mt-12 sm:mt-20 lg:mt-28">
      <section id="projects" className="text-gray-400 bg-gray-900 body-font pt-16">
        <div className="container px-4 sm:px-8 lg:px-16 mx-auto text-center lg:px-40 relative z-0">
          <div className="flex flex-col w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              <strong>EVENTS I have planned</strong>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Impact Africa Summit 2021/2022/2023, Xcene Research 6th, 7th & 8th Anniversary, Investigators Meeting Uganda, Team Bonding, Corporate Social Responsibility, Baby Shower, Birthday Celebrations, Wedding Engagement, Pitch Event, Business Fair, Press conference, Mood boards & Proposals.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-full p-4"
                onClick={(e) => handleVideoClick(e)}
              >
                <div className="flex relative h-96"> {/* Set a fixed height for all media containers (e.g., h-96) */}
                  {project.type === "image" ? (
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={project.source}
                    />
                  ) : project.type === "video" ? (
                    <div
                      className="absolute inset-0 w-full h-full object-cover object-center cursor-pointer"
                      onClick={toggleVideoMute}
                    >
                      <VideoPlayer
                        videoSrc={convertGoogleDriveLink(project.source)}
                        posterSrc={project.poster}
                        autoPlay
                        loop
                        muted={videoMuted}
                        controls={!videoMuted}
                      />
                    </div>
                  ) : null}
                  {/* Conditionally render the description */}
                  {project.type === "image" && (
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed">{project.description}</p>
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}





// import React, { useState } from "react";
// import { projects } from "../data";
// import VideoPlayer from "../components/VideoPlayer";
// import { convertGoogleDriveLink } from "./googleDriveUtils"; // Import the utility function

// export default function Projects() {
//   const [videoMuted, setVideoMuted] = useState(true);

//   // const toggleVideoMute = () => {
//   //   setVideoMuted(!videoMuted);
//   // };

//   const handleVideoClick = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     const video = e.currentTarget.querySelector("video");
//     if (video) {
//       video.muted = !video.muted;
//       video.controls = !video.controls;
//     }
//   };

//   return (
//     <div id="projects-anchor" className="z-20 mt-12 sm:mt-20 lg:mt-28">
//       <section id="projects" className="text-gray-400 bg-gray-900 body-font pt-16">
//         <div className="container px-4 sm:px-8 lg:px-16 mx-auto text-center lg:px-40 relative z-0">
//           <div className="flex flex-col w-full mb-20">
//             <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
//               <strong>EVENTS I have planned</strong>
//             </h1>
//             <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//               Impact Africa Summit 2021/2022/2023, Xcene Research 6th, 7th & 8th Anniversary, Investigators Meeting Uganda, Team Bonding, Corporate Social Responsibility, Baby Shower, Birthday Celebrations, Wedding Engagement, Pitch Event, Business Fair, Press conference, Mood boards & Proposals.
//             </p>
//           </div>
//           <div className="flex flex-wrap -m-4">
//             {projects.map((project) => (
//               <a
//                 href={project.link}
//                 key={project.image}
//                 className="sm:w-1/2 w-full p-4"
//               >
//                 <div className="flex relative h-96"> {/* Set a fixed height for all media containers (e.g., h-96) */}
//                   {project.type === "image" ? (
//                     <img
//                       alt="gallery"
//                       className="absolute inset-0 w-full h-full object-cover object-center"
//                       src={project.source}
//                     />
//                   ) : project.type === "video" ? (
//                     <div
//                       className="absolute inset-0 w-full h-full object-cover object-center cursor-pointer"
//                       onClick={(e) => handleVideoClick(e)}
//                     >
//                       <VideoPlayer
//                         videoSrc={convertGoogleDriveLink(project.source)}
//                         posterSrc={project.poster}
//                         autoPlay
//                         loop
//                         muted={videoMuted}
//                         controls={!videoMuted}
//                       />
//                     </div>
//                   ) : null}
//                   {/* Conditionally render the description */}
//                   {project.type === "image" && (
//                     <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                       <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
//                         {project.subtitle}
//                       </h2>
//                       <h1 className="title-font text-lg font-medium text-white mb-3">
//                         {project.title}
//                       </h1>
//                       <p className="leading-relaxed">{project.description}</p>
//                     </div>
//                   )}
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }









// import React, { useState } from "react";
// import { projects } from "../data";
// import { convertGoogleDriveLink } from "./googleDriveUtils"; // Import the utility function

// export default function Projects() {
//   const [videoMuted, setVideoMuted] = useState(true);

//   const toggleVideoMute = () => {
//     setVideoMuted(!videoMuted);
//   };

//   return (
//     <div id="projects-anchor" className="z-20 mt-12 sm:mt-20 lg:mt-28">
//       <section id="projects" className="text-gray-400 bg-gray-900 body-font pt-16">
//         <div className="container px-4 sm:px-8 lg:px-16 mx-auto text-center lg:px-40 relative z-0">
//           <div className="flex flex-col w-full mb-20">
//             <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
//               <strong>EVENTS I have planned</strong>
//             </h1>
//             <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//               Impact Africa Summit 2021/2022/2023, Xcene Research 6th, 7th & 8th Anniversary, Investigators Meeting Uganda, Team Bonding, Corporate Social Responsibility, Baby Shower, Birthday Celebrations, Wedding Engagement, Pitch Event, Business Fair, Press conference, Mood boards & Proposals.
//             </p>
//           </div>
//           <div className="flex flex-wrap -m-4">
//             {projects.map((project) => (
//               <a
//                 href={project.link}
//                 key={project.image}
//                 className="sm:w-1/2 w-full p-4"
//               >
//                 <div className="flex relative">
//                   {project.type === "image" ? (
//                     <img
//                       alt="gallery"
//                       className="absolute inset-0 w-full h-full object-cover object-center"
//                       src={project.source}
//                     />
//                   ) : project.type === "video" ? (
//                     <video
//                       autoPlay
//                       loop
//                       muted={videoMuted}
//                       onClick={toggleVideoMute}
//                       className="absolute inset-0 w-full h-full object-cover object-center cursor-pointer"
//                     >
//                       <source src={convertGoogleDriveLink(project.source)} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   ) : null}
//                   <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                     <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
//                       {project.subtitle}
//                     </h2>
//                     <h1 className="title-font text-lg font-medium text-white mb-3">
//                       {project.title}
//                     </h1>
//                     <p className="leading-relaxed">{project.description}</p>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





// import React, { useState } from "react";
// import { projects } from "../data";

// export default function Projects() {
//   const [videoMuted, setVideoMuted] = useState(true);

//   // Function to toggle video mute state
//   const toggleVideoMute = () => {
//     setVideoMuted(!videoMuted);
//   };

//   return (
//     <div id="projects-anchor" className="z-20 mt-12 sm:mt-20 lg:mt-28">
//       <section id="projects" className="text-gray-400 bg-gray-900 body-font pt-16">
//         <div className="container px-4 sm:px-8 lg:px-16 mx-auto text-center lg:px-40 relative z-0">
//           <div className="flex flex-col w-full mb-20">
//             <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
//               <strong>EVENTS I have planned</strong>
//             </h1>
//             <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//               Impact Africa Summit 2021/2022/2023, Xcene Research 6th, 7th & 8th Anniversary, Investigators Meeting Uganda, Team Bonding, Corporate Social Responsibility, Baby Shower, Birthday Celebrations, Wedding Engagement, Pitch Event, Business Fair, Press conference, Mood boards & Proposals.
//             </p>
//           </div>
//           <div className="flex flex-wrap -m-4">
//             {projects.map((project) => (
//               <a
//                 href={project.link}
//                 key={project.image}
//                 className="sm:w-1/2 w-full p-4"
//               >
//                 <div className="flex relative">
//                   {project.type === "image" ? (
//                     <img
//                       alt="gallery"
//                       className="absolute inset-0 w-full h-full object-cover object-center"
//                       src={project.source}
//                     />
//                   ) : project.type === "video" ? (
//                     <video
//                       autoPlay
//                       loop
//                       muted={videoMuted} // Set the muted state
//                       onClick={toggleVideoMute} // Toggle mute on click
//                       className="absolute inset-0 w-full h-full object-cover object-center cursor-pointer" // Add cursor-pointer
//                     >
//                       <source src={project.source} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   ) : null}
//                   <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                     <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
//                       {project.subtitle}
//                     </h2>
//                     <h1 className="title-font text-lg font-medium text-white mb-3">
//                       {project.title}
//                     </h1>
//                     <p className="leading-relaxed">{project.description}</p>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





// import React from "react";
// import { projects } from "../data";

// export default function Projects() {
//   return (
//     <div id="projects-anchor" className="z-20 mt-12 sm:mt-20 lg:mt-28">
//       <section id="projects" className="text-gray-400 bg-gray-900 body-font pt-16">
//         <div className="container px-4 sm:px-8 lg:px-16 mx-auto text-center lg:px-40 relative z-0">
//           <div className="flex flex-col w-full mb-20">
//             <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
//               <strong>EVENTS I have planned</strong>
//             </h1>
//             <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//               Impact Africa Summit 2021/2022/2023, Xcene Research 6th, 7th & 8th Anniversary, Investigators Meeting Uganda, Team Bonding, Corporate Social Responsibility, Baby Shower, Birthday Celebrations, Wedding Engagement, Pitch Event, Business Fair, Press conference, Mood boards & Proposals.
//             </p>
//           </div>
//           <div className="flex flex-wrap -m-4">
//             {projects.map((project) => (
//               <a
//                 href={project.link}
//                 key={project.image}
//                 className="sm:w-1/2 w-full p-4"
//               >
//                 <div className="flex relative">
//                   {project.type === "image" ? (
//                     <img
//                       alt="gallery"
//                       className="absolute inset-0 w-full h-full object-cover object-center"
//                       src={project.source}
//                     />
//                   ) : project.type === "video" ? (
//                     <video
//                       autoPlay
//                       loop
//                       muted
//                       className="absolute inset-0 w-full h-full object-cover object-center"
//                     >
//                       <source src={project.source} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   ) : null}
//                   <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                     <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
//                       {project.subtitle}
//                     </h2>
//                     <h1 className="title-font text-lg font-medium text-white mb-3">
//                       {project.title}
//                     </h1>
//                     <p className="leading-relaxed">{project.description}</p>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





// import React from "react";
// import { projects } from "../data";

// export default function Projects() {
//   return (
//     <div id="projects-anchor" className="z-20 mt-12 sm:mt-20 lg:mt-28">
//       <section id="projects" className="text-gray-400 bg-gray-900 body-font pt-16">
//         <div className="container px-4 sm:px-8 lg:px-16 mx-auto text-center lg:px-40 relative z-0">
//           <div className="flex flex-col w-full mb-20">
//             <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
//             <strong>EVENTS I have planned</strong>
//             </h1>
//             <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> Impact Africa Summit 2021/ 2022/ 2023,Xcene Research 6th, 7th & 8th Anniversary, Investigators Meeting Uganda, Team Bonding, Corporate Social Responsibility, Baby Shower, Birthday Celebrations, Wedding Engagement, Pitch Event, Business Fair, Press conference, Mood boards & Proposals.
//             </p>
//           </div>
//           <div className="flex flex-wrap -m-4">
//             {projects.map((project) => (
//               <a
//                 href={project.link}
//                 key={project.image}
//                 className="sm:w-1/2 w-full p-4">
//                 <div className="flex relative">
//                   <img
//                     alt="gallery"
//                     className="absolute inset-0 w-full h-full object-cover object-center"
//                     src={project.image}
//                   />
//                   <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                     <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
//                       {project.subtitle}
//                     </h2>
//                     <h1 className="title-font text-lg font-medium text-white mb-3">
//                       {project.title}
//                     </h1>
//                     <p className="leading-relaxed">{project.description}</p>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
