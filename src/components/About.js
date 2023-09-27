import React from "react";

export default function About() {
  return (
    <div id="about-anchor" className="z-20 mt-0 sm:mt-4 lg:mt-8">
      <section id="about" className="min-h-screen py-8 sm:py-16 lg:py-24">
        <div className="container px-4 sm:px-8 lg:px-16 mx-auto flex flex-col sm:flex-row items-center">
          <div className="lg:w-1/2 sm:w-2/3 w-full p-4 flex flex-col items-center">
            <img
              className="object-cover object-relative w-full h-auto lg:h-full rounded"
              alt="hero"
              src="vic_st.jpeg"
            />
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full flex flex-col sm:items-start items-center sm:text-left text-center p-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-4 font-medium text-white">
              <strong>Hi, I'm Victoria,</strong>
            </h1>
            <p className="mb-4 leading-relaxed text-justify text-gray-400">
              With a blend of expertise, hands-on finesse, and genuine passion,
              I transform your ideas into remarkable events and unforgettable
              experiences. Let's explore your objectives, budget, and
              preferences, crafting exceptional events that consistently exceed
              expectations, leaving you always delighted.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
              <a
                href="#contact"
                className="inline-flex text-white bg-gold-700 border-0 py-2 px-6 mb-2 sm:mb-0 sm:mr-4 focus:outline-none hover:bg-gold-600 rounded text-lg"
              >
                <strong>Work With Me</strong>
              </a>
              <a
                href="#projects"
                className="inline-flex text-gold-700 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gold-600 hover:text-white rounded text-lg"
              >
                <strong>See My Past Work</strong>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}






// import React from "react";

// export default function About() {
//   return (
//     <div id="about-anchor" className="z-20 mt-0 sm:mt-4 lg:mt-8">
//       <section id="about" className="min-h-screen py-8 sm:py-16 lg:py-24">
//         <div className="container px-4 sm:px-8 lg:px-16 mx-auto flex flex-col sm:flex-row items-center">
//           <div className="lg:w-1/2 sm:w-1/2 w-full sm:w-2/3 p-4 flex flex-col items-center">
//             <img
//               className="object-cover object-relative w-full h-auto lg:h-full rounded"
//               alt="hero"
//               src="vic_st.jpeg"
//             />
//           </div>
//           <div className="lg:w-1/2 sm:w-1/2 w-full sm:w-1/3 flex flex-col sm:items-start items-center sm:text-left text-center p-4">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-medium text-white">
//               <strong>Hi, I'm Victoria,</strong>
//             </h1>
//             <p className="mb-4 leading-relaxed text-justify text-gray-400">
//               With a blend of expertise, hands-on finesse, and genuine passion,
//               I transform your ideas into remarkable events and unforgettable
//               experiences. Let's explore your objectives, budget, and
//               preferences, crafting exceptional events that consistently exceed
//               expectations, leaving you always delighted.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
//               <a
//                 href="#contact"
//                 className="inline-flex text-white bg-gold-700 border-0 py-2 px-6 mb-2 sm:mb-0 sm:mr-4 focus:outline-none hover:bg-gold-600 rounded text-lg"
//               >
//                 <strong>Work With Me</strong>
//               </a>
//               <a
//                 href="#projects"
//                 className="inline-flex text-gold-700 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gold-600 hover:text-white rounded text-lg"
//               >
//                 <strong>See My Past Work</strong>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }






// // import React from "react";

// // export default function About() {
// //   return (
// //     <div id="about-anchor" style={{ zIndex: 20, marginTop: "20px" }}>
// //       <section id="about" className="mt-16 pt-16">
        
// //         <div className="container px-10 py-15 mx-auto flex md:flex-row flex-col items-center">
// //           {/* Container for the image */}
// //           <div className="lg:w-1/2 md:w-1/2 w-5/6 mt-4 p-4 flex flex-col items-center">
// //             <img
// //               className="object-cover object-relative w-full h-80 lg:h-auto rounded"
// //               alt="hero"
// //               src="vic_st.jpeg" // Replace with the path to your image
// //             />
// //           </div>

// //           {/* Container for the content with equal padding */}
// //           <div className="lg:w-1/2 md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center mt-4 p-4">
// //             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
// //               Hi, I'm Reed.
// //               <br className="hidden lg:inline-block" />I love to build amazing
// //               apps.
// //             </h1>
// //             <p className="mb-8 leading-relaxed">
// //               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
// //               laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
// //               Laborum, voluptas natus?
// //             </p>
// //             <div className="flex justify-center">
// //               <a
// //                 href="#contact"
// //                 className="inline-flex text-black bg-gold-700 border-0 py-2 px-6 focus:outline-none hover:bg-gold-600 rounded text-lg"
// //               >
// //                 Work With Me
// //               </a>
// //               <a
// //                 href="#projects"
// //                 className="ml-4 inline-flex text-gold-700 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gold-00 hover:text-white rounded text-lg"
// //               >
// //                 See My Past Work
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }


