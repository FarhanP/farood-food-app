import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-themePink text-center p-4 mt-10 font-semibold">
      <h3>
        © {new Date().getFullYear()} Farood Pvt Ltd. All rights reserved. Made
        with <span className="text-themePurple">&hearts;</span> by{" "}
        <span className="text-themePurple">Fox</span>
      </h3>
    </div>
  );
};

export default Footer;
