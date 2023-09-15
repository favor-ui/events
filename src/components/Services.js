import React, { useEffect } from "react";
import { services } from "../data";

export default function Services() {
  useEffect(() => {
    // After rendering, scroll to the "services" section to ensure it's visible below the navbar.
    const servicesElement = document.getElementById("services");
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div id="services-anchor" style={{ zIndex: 1 }}>
      <section id="services" className="text-gray-400 bg-gray-900 body-font mt-16 pt-16">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Services
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {services.map((service, index) => (
              <div key={index} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 p-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <p className="text-white">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}








// import React, { useEffect } from "react";
// import { services } from "../data";

// export default function Services() {
//   useEffect(() => {
//     // After rendering, scroll to the "services" section to ensure it's visible below the navbar.
//     const servicesElement = document.getElementById("services");
//     if (servicesElement) {
//       servicesElement.scrollIntoView({ behavior: "smooth" });
//     }
//   }, []);

//   return (
//     <section id="services" className="mt-16 pt-16"> {/* Add top padding */}
//       <div className="container px-5 py-10 mx-auto">
//         <div className="text-center mb-20">
//           <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
//             Services
//           </h1>
//         </div>
//         <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
//           {services.map((service, index) => (
//             <div key={index} className="p-2 sm:w-1/2 w-full">
//               <div className="bg-gray-800 p-4 rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
//                 <p className="text-white">{service}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// import React from "react";
// import { services } from "../data";

// export default function Services() {
//   return (
//     <section id="services">
//       <div className="container px-5 py-10 mx-auto">
//         <div className="text-center mb-20">
//           <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
//             Services
//           </h1>
//         </div>
//         <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
//           {services.map((service, index) => (
//             <div key={index} className="p-2 sm:w-1/2 w-full">
//               <div className="bg-gray-800 p-4 rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
//                 <p className="text-white">{service}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }







