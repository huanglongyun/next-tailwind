import React from "react";

function SectionHeader() {
  return (
    <div>
      <div className="flex justify-center gap-2 mt-8 text-4xl font-semibold">
        <h3>About</h3>
        <h3 className="text-cyan-600">Me</h3>
      </div>
      <p className="text-center text-gray-400 font-semibold">My introduction</p>
    </div>
  );
}

export default SectionHeader;
