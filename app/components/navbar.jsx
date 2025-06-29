// // @flow strict
// 'use client';
// import Link from "next/link";


// function Navbar() {
//   return (
//     <nav className="bg-transparent">
//       <div className="flex items-center justify-between py-5">
//         <div className="flex flex-shrink-0 items-center">
//           <Link
//             href="/"
//             className=" text-[#16f2b3] text-3xl font-bold">
            
//           </Link>
//         </div>

//         <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
//           <li>
//             {/* <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
//               <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
//             </Link> */}
//             <button
//               className="block px-4 py-2 no-underline outline-none hover:no-underline"
//               onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
//             >
//               <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
//             </button>
//           </li>
//           <li>
//             {/* <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link> */}
//             <button
//               className="block px-4 py-2 no-underline outline-none hover:no-underline"
//               onClick={() => document.getElementById("education").scrollIntoView({ behavior: "smooth" })}
//             >
//               <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
//             </button>
//           </li>
//           <li>
//             {/* <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link> */}
//             <button
//               className="block px-4 py-2 no-underline outline-none hover:no-underline"
//               onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
//             >
//               <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
//             </button>
//           </li>
//           <li>
//             {/* <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link> */}
//             <button
//               className="block px-4 py-2 no-underline outline-none hover:no-underline"
//               onClick={() => document.getElementById("experience").scrollIntoView({ behavior: "smooth" })}
//             >
//               <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div>
//             </button>
//           </li>
//           <li>
//             {/* <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></Link> */}
//           </li>
//           <li>
//             {/* <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link> */}
//             <button
//               className="block px-4 py-2 no-underline outline-none hover:no-underline"
//               onClick={() => document.getElementById("skills").scrollIntoView({ behavior: "smooth" })}
//             >
//               <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
//             </button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

'use client';
import Link from "next/link";
import { useCallback } from "react";

function Navbar() {
  // Safe scroll handler factory
  const handleScrollTo = useCallback((id) => {
    if (typeof window !== "undefined") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className=" text-[#16f2b3] text-3xl font-bold" />
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          {[
            { id: "about", label: "ABOUT" },
            { id: "education", label: "EDUCATION" },
            { id: "projects", label: "PROJECTS" },
            { id: "experience", label: "EXPERIENCE" },
            { id: "skills", label: "SKILLS" },
          ].map(({ id, label }) => (
            <li key={id}>
              <button
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
                onClick={() => handleScrollTo(id)}
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{label}</div>
              </button>
            </li>
          ))}
          {/* The BLOGS link is commented out, so no action */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
