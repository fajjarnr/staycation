import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import Logo from "parts/Logo";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Logo />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button href="" className="nav-link" type="link">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/browseby")}`}>
                  <Button href="/browseby" className="nav-link" type="link">
                    Browse by
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                  <Button href="/stories" className="nav-link" type="link">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/agent")}`}>
                  <Button href="/agent" className="nav-link" type="link">
                    Agent
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
