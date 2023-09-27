import React, { useState, useEffect } from "react";
import VideoPlayer from "../components/VideoPlayer";
import posterSvg from "./vic_port.svg";
import { contact } from "../data"; // Import the data source for con_media

// Define the encode function
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

// Define the URL conversion function for Google Drive links
function convertGoogleDriveLink(link) {
  const parts = link.split("/");
  const fileId = parts[parts.length - 2];
  return `https://drive.google.com/uc?id=${fileId}`;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <div id="contact-anchor" className="z-20 mt-10 sm:mt-16 lg:mt-20">
      <section id="contact" className="text-gray-400 bg-gray-900 body-font mt-16 pt-16">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              <strong>Contact Us</strong>
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full lg:w-1/3">
              <div className="bg-gray-800 rounded p-4 h-full">
                {contact.map((con_item) => (
                  <div key={con_item.source} className="h-full">
                    {con_item.type === "video" ? (
                      <VideoPlayer
                        videoSrc={
                          con_item.source.includes("drive.google.com")
                            ? convertGoogleDriveLink(con_item.source)
                            : con_item.source
                        }
                        posterSrc={posterSvg}
                        muted={true}
                        autoPlay={true}
                        onClick={() => {}}
                        className="cursor-pointer"
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full lg:w-2/3">
              <div className="bg-gray-800 rounded p-4 h-full">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 md:h-auto text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out mb-4"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="text-white bg-gold-700 border-0 py-2 px-6 focus:outline-none hover:bg-gold-600 rounded text-lg mx-auto block"
                  >
                    <strong>Send Email</strong>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}









// import React, { useEffect } from "react";
// import VideoPlayer from "../components/VideoPlayer"; // Import the VideoPlayer component
// import posterSvg from "./vic_port.svg"


// // Define the encode function
// function encode(data) {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }

// export default function Contact() {
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [message, setMessage] = React.useState("");

//   useEffect(() => {
//     // After rendering, scroll to the "contact" section to ensure it's visible below the navbar.
//     const contactElement = document.getElementById("contact");
//     if (contactElement) {
//       contactElement.scrollIntoView({ behavior: "smooth" });
//     }
//   }, []);

//   function handleSubmit(e) {
//     e.preventDefault();
//     // Use the encode function to format the data
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({ "form-name": "contact", name, email, message }),
//     })
//       .then(() => alert("Message sent!"))
//       .catch((error) => alert(error));
//   }

//   return (
//     // <div id="contact-anchor" style={{ zIndex: 1, position: "under" }}>
//     <div id="contact-anchor"  className="z-20 mt-12 sm:mt-20 lg:mt-28">
//       <section id="contact" className="text-gray-400 bg-gray-900 body-font mt-16 pt-16"> {/* Add top padding */}
//         <div className="container px-5 py-10 mx-auto">
//           <div className="text-center mb-20">
//             <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
//               <strong>Contact Us</strong>
//             </h1>
//           </div>
//           <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
//             {/* Video Container */}
            
//             <div className="p-2 sm:w-1/2 w-full lg:w-1/3">
//                 <div className="bg-gray-800 rounded p-4 h-full">
//                   {/* Use the VideoPlayer component with videoSrc and posterSrc props */}
//                   <VideoPlayer
//                     videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
//                     posterSrc={posterSvg} // Replace with your poster image source
//                   />
//                 </div>
//               </div>
//             {/* Contact Form Container */}
//             <div className="p-2 sm:w-1/2 w-full lg:w-2/3">
//               <div className="bg-gray-800 rounded p-4 h-full">
//                 <form onSubmit={handleSubmit}> {/* Use onSubmit to call handleSubmit */}
//                   <label htmlFor="name" className="leading-7 text-sm text-gray-400">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                   <label htmlFor="email" className="leading-7 text-sm text-gray-400">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <label
//                     htmlFor="message"
//                     className="leading-7 text-sm text-gray-400"
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 md:h-auto text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out mb-4"
//                     onChange={(e) => setMessage(e.target.value)}
//                   />
//                   <button
//                     type="submit"
//                     className="text-white bg-gold-700 border-0 py-2 px-6 focus:outline-none hover:bg-gold-600 rounded text-lg mx-auto block"
//                   >
//                     <strong>Send Email</strong>
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }







// import React from "react";

// export default function Contact() {
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [message, setMessage] = React.useState("");

//   function encode(data) {
//     return Object.keys(data)
//       .map(
//         (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
//       )
//       .join("&");
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({ "form-name": "contact", name, email, message }),
//     })
//       .then(() => alert("Message sent!"))
//       .catch((error) => alert(error));
//   }

//   return (
//     <section id="contact" className="mt-16">
//       <div className="container px-5 py-10 mx-auto">
//         <div className="text-center mb-20">
//           <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
//             Contact Us
//           </h1>
//         </div>
//         <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
//           {/* Video Container */}
//           <div className="p-2 sm:w-1/2 w-full lg:w-1/3">
//             <div className="bg-gray-800 rounded p-4 h-full">
//               {/* Place your video player component here */}
//               {/* Example: */}
//               {/* <video
//                 src="your-video-source.mp4"
//                 controls
//                 className="w-full h-auto"
//               ></video> */}
//             </div>
//           </div>
//           {/* Contact Form Container */}
//           <div className="p-2 sm:w-1/2 w-full lg:w-2/3">
//             <div className="bg-gray-800 rounded p-4 h-full">
//               <label htmlFor="name" className="leading-7 text-sm text-gray-400">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <label htmlFor="email" className="leading-7 text-sm text-gray-400">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <label
//                 htmlFor="message"
//                 className="leading-7 text-sm text-gray-400"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 md:h-auto text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out mb-4"
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-auto block"
//               >
//                 Send Email
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }










// import React from "react";

// export default function Contact() {
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [message, setMessage] = React.useState("");

//   function encode(data) {
//     return Object.keys(data)
//       .map(
//         (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
//       )
//       .join("&");
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({ "form-name": "contact", name, email, message }),
//     })
//       .then(() => alert("Message sent!"))
//       .catch((error) => alert(error));
//   }

//   return (
//     <section id="contact" className="mt-16">
//       <div className="container mx-auto flex flex-col md:flex-row items-center">
//         {/* Container for the content */}
//         <div className="w-full md:w-1/2 p-4 bg-gray-800 rounded-lg text-gray-100">
//           <h2 className="text-white text-3xl mb-4 font-medium title-font text-center">
//             Contact Us
//           </h2>
//           <div className="relative mb-4">
//             <label htmlFor="name" className="leading-7 text-sm text-gray-400">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="relative mb-4">
//             <label htmlFor="email" className="leading-7 text-sm text-gray-400">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="relative mb-6">
//             <label
//               htmlFor="message"
//               className="leading-7 text-sm text-gray-400"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 md:h-auto text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mx-auto block"
//           >
//             Send Email
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
