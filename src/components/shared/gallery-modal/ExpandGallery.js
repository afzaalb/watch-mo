import React from "react";

const ExpandGallery = () => (
  <span className="expand-preview position-absolute w-100 h-100 p-2 d-flex flex-column align-items-center justify-content-center">
    <span>
      <svg
        className="mr-2"
        id="i-fullscreen"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="24"
        height="24"
        fill="none"
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M4 12 L4 4 12 4 M20 4 L28 4 28 12 M4 20 L4 28 12 28 M28 20 L28 28 20 28" />
      </svg>
      Expand
    </span>
  </span>
);

export default ExpandGallery;
