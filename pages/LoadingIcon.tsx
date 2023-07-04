import React from "react";

const LoadingIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-gray-500"></div>
    </div>
  );
};

export default LoadingIcon;
