import React from "react";

export default function About() {
  return (
    <div id="about-anchor" className="z-20 mt-0 sm:mt-0 lg:mt-0">
      <section id="about" className="py-16 sm:py-24 lg:py-32">
        <div className="container px-4 sm:px-8 lg:px-16 mx-auto flex flex-col sm:flex-row items-center">
          <div className="lg:w-1/2 sm:w-1/2 w-full sm:w-5/6 p-4 flex flex-col items-center">
            <img
              className="object-cover object-relative w-full h-auto lg:h-full rounded"
              alt="hero"
              src="vic_st.jpeg"
            />
          </div>
          <div className="lg:w-1/2 sm:w-1/2 w-full flex flex-col sm:items-start items-center sm:text-left text-center p-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 font-medium text-white">
              <strong> Hi, I'm Victoria,</strong>
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              With a blend of expertise, hands-on finesse, and genuine passion,
              I transform your ideas into remarkable events and unforgettable experiences.
              Let's explore your objectives, budget, and preferences, crafting exceptional events that consistently exceed expectations, leaving you always delighted.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start">
              <a
                href="#contact"
                className="mt-4 sm:mt-0 inline-flex text-black bg-gold-700 border-0 py-2 px-6 focus:outline-none hover:bg-gold-600 rounded text-lg"
              >
                <strong><h5> Work With Me </h5></strong>
              </a>
              <a
                href="#projects"
                className="mt-4 sm:mt-0 ml-0 sm:ml-4 inline-flex text-gold-700 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gold-600 hover:text-white rounded text-lg"
              >
                <strong><h5>See My Past Work</h5></strong>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}






// // src/components/About.js

// // src/components/About.js

// import React from "react";

// export default function About() {
//   return (
//     <div id="about-anchor" className="z-20 mt-0 sm:mt-0 lg:mt-0">
//       <section id="about" className="min-h-screen py-16 sm:py-24 lg:py-32">
//         <div className="container px-4 sm:px-8 lg:px-16 mx-auto flex flex-col sm:flex-row items-center">
//           <div className="lg:w-1/2 sm:w-1/2 w-full sm:w-5/6 p-4 flex flex-col items-center">
//             <img
//               className="object-cover object-relative w-full h-auto lg:h-full rounded"
//               alt="hero"
//               src="vic_st.jpeg"
//             />
//           </div>
//           <div className="lg:w-1/2 sm:w-1/2 w-full flex flex-col sm:items-start items-center sm:text-left text-center p-4">

//               <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 font-medium text-white">
//                 <strong> Hi, I'm Victoria,</strong>
//               </h1>
//               <p className="mb-8 leading-relaxed text-justify">
//                   {/* <h6><strong>I specialize in delivering unforgettable experiences.</strong></h6> */}
//                   With a blend of expertise, hands-on finesse, and genuine passion,
//                   I transform your ideas into remarkable events and unforgettable experiences.
//                   Let's explore your objectives, budget, and preferences, crafting exceptional events that consistently exceed expectations, leaving you always delighted.
//               </p>



//               <div className="flex justify-center sm:justify-start">
//               <a
//                 href="#contact"
//                 className="inline-flex text-black bg-gold-700 border-0 py-2 px-6 focus:outline-none hover:bg-gold-600 rounded text-lg"
//               >
//                 <strong><h5> Work With Me </h5></strong>
//               </a>
//               <a
//                 href="#projects"
//                 className="ml-0 sm:ml-4 mt-4 sm:mt-0 inline-flex text-gold-700 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gold-600 hover:text-white rounded text-lg"
//               >
//                 <strong><h5>See My Past Work</h5></strong>
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
// //     <div id="about-anchor" className="z-20 mt-16 sm:mt-20 lg:mt-24">
// //       <section id="about" className="py-10 sm:py-16 lg:py-24">
// //         <div className="container px-4 sm:px-8 lg:px-16 mx-auto flex flex-col sm:flex-row items-center">
// //           <div className="lg:w-1/2 sm:w-1/2 w-full sm:w-5/6 p-4 flex flex-col items-center">
// //             <img
// //               className="object-cover object-relative w-full h-auto lg:h-full rounded"
// //               alt="hero"
// //               src="vic_st.jpeg"
// //             />
// //           </div>
// //           <div className="lg:w-1/2 sm:w-1/2 w-full flex flex-col sm:items-start items-center sm:text-left text-center p-4">
// //             <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 font-medium text-white">
// //               Hi, I'm Reed.
// //               <br className="hidden lg:inline-block" />I love to build amazing
// //               apps.
// //             </h1>
// //             <p className="mb-8 leading-relaxed">
// //               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
// //               laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
// //               Laborum, voluptas natus?
// //             </p>
// //             <div className="flex justify-center sm:justify-start">
// //               <a
// //                 href="#contact"
// //                 className="inline-flex text-black bg-gold-700 border-0 py-2 px-6 focus:outline-none hover:bg-gold-600 rounded text-lg"
// //               >
// //                 Work With Me
// //               </a>
// //               <a
// //                 href="#projects"
// //                 className="ml-0 sm:ml-4 mt-4 sm:mt-0 inline-flex text-gold-700 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gold-600 hover:text-white rounded text-lg"
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





// // import React from "react";

// // export default function About() {
// //   return (
// //     <div id="about-anchor" className="z-20 mt-4 sm:mt-10 lg:mt-20">
// //       <section id="about" className="h-screen py-4 sm:py-8 lg:py-16">
// //         <div className="container px-4 sm:px-8 lg:px-16 mx-auto flex flex-col sm:flex-row items-center h-full">
// //           <div className="lg:w-1/2 sm:w-1/2 w-full sm:w-5/6 p-4 flex flex-col items-center">
// //             <img
// //               className="object-cover object-relative w-full h-full lg:h-auto rounded"
// //               alt="hero"
// //               src="vic_st.jpeg"
// //             />
// //           </div>
// //           <div className="lg:w-1/2 sm:w-1/2 w-full flex flex-col sm:items-start items-center sm:text-left text-center p-4">
// //             <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 font-medium text-white">
// //               Hi, I'm Reed.
// //               <br className="hidden lg:inline-block" />I love to build amazing
// //               apps.
// //             </h1>
// //             <p className="mb-8 leading-relaxed">
// //               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
// //               laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
// //               Laborum, voluptas natus?
// //             </p>
// //             <div className="flex justify-center sm:justify-start">
// //               <a
// //                 href="#contact"
// //                 className="inline-flex text-black bg-gold-700 border-0 py-2 px-6 focus:outline-none hover:bg-gold-600 rounded text-lg"
// //               >
// //                 Work With Me
// //               </a>
// //               <a
// //                 href="#projects"
// //                 className="ml-0 sm:ml-4 mt-4 sm:mt-0 inline-flex text-gold-700 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gold-600 hover:text-white rounded text-lg"
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


