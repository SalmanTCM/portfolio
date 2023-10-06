import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Skill = () => {
  const skills = [
    { name: "React", icon: <FaLinkedin className="text-4xl text-blue-500" /> },
    { name: "Next.js", icon: <FaLinkedin className="text-4xl text-gray-500" /> },
    { name: "Bootstrap", icon: <FaLinkedin className="text-4xl text-purple-500" /> },
    { name: "Tailwind CSS", icon: <FaLinkedin className="text-4xl text-cyan-500" /> },
    { name: "Python", icon: <FaLinkedin className="text-4xl text-yellow-500" /> },
    { name: "Django", icon: <FaLinkedin className="text-4xl text-green-500" /> },
    { name: "PHP", icon: <FaLinkedin className="text-4xl text-indigo-500" /> },
    { name: "Laravel", icon: <FaLinkedin className="text-4xl text-red-500" /> },
    { name: "Docker", icon: <FaLinkedin className="text-4xl text-blue-600" /> },
    { name: "Selenium", icon: <FaLinkedin className="text-4xl text-green-600" /> },
    { name: "UI Path", icon: <FaLinkedin className="text-4xl text-yellow-600" /> },
    { name: "MySQL", icon: <FaLinkedin className="text-4xl text-blue-500" /> },
    { name: "GraphQL", icon: <FaLinkedin className="text-4xl text-pink-500" /> },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust the threshold as needed
  });

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-7 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-[#0A192F] p-4 rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer transform m-2"
            initial={{
              x: index % 7 === 0 ? -100 : 100, // Start a new row
              opacity: 0,
            }}
            animate={{
              x: inView ? 0 : index % 7 === 0 ? -100 : 100, // Start a new row
              opacity: inView ? 1 : 0,
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            ref={ref}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
          >
            <div className="text-center">
              <span className="mt-2 text-white">{skill.icon}</span>
              <span className="mt-2 text-white">{skill.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skill;




// import React from "react";
// import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

// const Skill = () => {
//   const skills = [
    // { name: "React", icon: <FaLinkedin className="text-4xl text-blue-500" /> },
    // { name: "Next.js", icon: <FaLinkedin className="text-4xl text-gray-500" /> },
    // { name: "Bootstrap", icon: <FaLinkedin className="text-4xl text-purple-500" /> },
    // { name: "Tailwind CSS", icon: <FaLinkedin className="text-4xl text-cyan-500" /> },
    // { name: "Python", icon: <FaLinkedin className="text-4xl text-yellow-500" /> },
    // { name: "Django", icon: <FaLinkedin className="text-4xl text-green-500" /> },
    // { name: "PHP", icon: <FaLinkedin className="text-4xl text-indigo-500" /> },
    // { name: "Laravel", icon: <FaLinkedin className="text-4xl text-red-500" /> },
    // { name: "Docker", icon: <FaLinkedin className="text-4xl text-blue-600" /> },
    // { name: "Selenium", icon: <FaLinkedin className="text-4xl text-green-600" /> },
    // { name: "UI Path", icon: <FaLinkedin className="text-4xl text-yellow-600" /> },
    // { name: "MySQL", icon: <FaLinkedin className="text-4xl text-blue-500" /> },
    // { name: "GraphQL", icon: <FaLinkedin className="text-4xl text-pink-500" /> },
//   ];

//   return (
//     <div className="container mx-auto my-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="bg-[#0A192F] p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out cursor-pointer transform hover:-translate-y-2"
//           >
//             <div className="text-center">
//               {skill.icon}
//               <span className="mt-2 text-white">{skill.name}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

//  export default Skill;
