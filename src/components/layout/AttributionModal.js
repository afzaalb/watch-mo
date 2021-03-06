import React from "react";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import tmdbLogo from "../../assets/images/tmdb.svg";
import watchMoLogo from "../../assets/images/wmo-light.png";
import { repoClickHandler } from "../../utils";
import Github from "react-bytesize-icons/GitHub";
import Twitter from "react-bytesize-icons/Twitter";
import Portfolio from "react-bytesize-icons/Portfolio";

const AttributionModal = ({ isAttributionShown, toggleAttribution }) => (
  <Modal
    centered
    show={isAttributionShown}
    bsPrefix="attribution-modal modal"
    scrollable={false}
    onHide={toggleAttribution}
  >
    <Modal.Header closeButton>
      <Modal.Title className="d-flex align-items-center">
        <Portfolio strokeWidth="3" width="36" className="align-middle mr-3" />
        <span>Attribution</span>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ListGroup>
        <ListGroup.Item>
          Made with:{" "}
          <div className="d-flex mt-1 attr-logos">
            <img
              width="112"
              height="48"
              className="mr-2"
              src={tmdbLogo}
              alt="Powered by TMDb API"
              title="This product uses the TMDb API but is not endorsed or certified by TMDb."
            />
            <img
              title="Made with ReactJS"
              width="48"
              height="48"
              className="mr-2"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              alt="Made with ReactJS"
            />
            <svg
              title="Bootstrap 4"
              className="d-block"
              width="48"
              height="48"
              viewBox="0 0 612 612"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
            >
              <title>Bootstrap</title>
              <path
                fill="currentColor"
                d="M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z"
              ></path>
              <path
                fill="currentColor"
                d="M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z"
              ></path>
            </svg>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="c-hand" onClick={repoClickHandler}>
          Get Code: <Github width="48" className="align-middle" />
          <img
            className="ml-2"
            width="113"
            height="36"
            src={watchMoLogo}
            alt="Code Repository"
          />
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="https://twitter.com/afzaalopera"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Twitter width="48" className="align-middle" />
          </a>
        </ListGroup.Item>
        <ListGroup.Item disabled>&copy; 2021.</ListGroup.Item>
      </ListGroup>
    </Modal.Body>
  </Modal>
);

export default AttributionModal;
