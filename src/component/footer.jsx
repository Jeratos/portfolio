import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import Fade from "react-reveal/Fade";


export default function footer() {
  return (
    <>
      <div className="foot color">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24">
                <use></use>
              </svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              © 2024 Company, Inc
            </span>
          </div>

          <ul className="nav col-md-4 px-5 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <Fade down  >

              <a className="text-body-secondary" href="https://github.com/Jeratos" target="_blank">
               
                    <GitHubIcon />
              </a>
              </Fade>
            </li>
            <li className="ms-3">
              <Fade down>

              <a className="text-body-secondary" href="https://www.instagram.com/ayushchouhan417/" target="_blank">
                    <InstagramIcon/>
              </a>
              </Fade>
            </li>
            <li className="ms-3">
              <Fade down>
                
              <a className="text-body-secondary" href="https://x.com/kratos1761185" target="_blank">
                    <XIcon/>
              </a>
            </Fade>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
