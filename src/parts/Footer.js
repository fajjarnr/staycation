import React from "react";

import Button from "elements/Button";
import Logo from "parts/Logo";

export default function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <Logo />
            <p className="brand-tagline">
              we kaboom your beauty holiday instanly and memorable
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">For Beginner</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payment">
                  Use payment
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/term">
                  Term & Condition
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@staycation.id"
                >
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tlp:+6227283848">
                  +6227283848
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Kemang. Jakarta</span>
              </li>
            </ul>
          </div>
          <div className="row">
            <div class="copyrights text-center align-items-center">
              Copyright 2020 All right reserved Staycation
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
