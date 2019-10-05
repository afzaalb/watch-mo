import React from "react";
import { ArrowLeft, Video } from "react-bytesize-icons";

const HeadWithTitle = ({ title }) => (
  <li className="inline-fix">
    <a
      href="javascript:void(0)"
      onClick={() => window.history.back()}
      className="bold px-3"
      title="Go back"
    >
      <ArrowLeft
        className="align-middle"
        width="20"
        height="20"
        strokeWidth="2"
      />
    </a>
    <span
      className="bold d-inline-block text-truncate align-middle with-movie-title"
      title={title}
    >
      <Video className="align-middle" width="20" height="20" strokeWidth="2" />
      <span className="pl-2">{title}</span>
    </span>
  </li>
);

export default HeadWithTitle;
