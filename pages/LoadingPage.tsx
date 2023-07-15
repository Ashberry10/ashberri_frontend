// import React from "react";

// const LoadingPage = () => {
//   return (
//     <div className="flex items-center justify-center h-">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-gray-800"></div>
//     </div>
//   );
// };

// export default LoadingPage;



import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to demonstrate loading behavior
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="flex items-center justify-center h-screen">
        <div className="flex items-center justify-center h-120">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-gray-500"></div>
        </div>
      </div>
    </Transition>
  );
};

export default LoadingPage;
