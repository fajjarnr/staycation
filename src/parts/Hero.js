import React from "react";

import ImageHero from "assets/images/banner.png";
import IconTraveler from "assets/icons/travel.svg";
import IconCities from "assets/icons/map.svg";
import IconTreasure from "assets/icons/treasure.svg";

import Button from "elements/Button";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget the busy work, <br />
              Start Next Vacation
            </h1>
            <p className="mb-5 font-weight-light text-gray-500 w-75">
              we provide what you need to enjoy your holiday with family. Time
              to make another memorable moment
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show me now
            </Button>

            <div className="row mt-5 align-items-center">
              <div className="col-auto">
                <img
                  width="40"
                  height="40"
                  src={IconTraveler}
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  {props.data.travelers}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img width="40" height="40" src={IconTreasure} alt="Traveler" />
                <h6 className="mt-3">
                  {props.data.treasures}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img width="40" height="40" src={IconCities} alt="Traveler" />
                <h6 className="mt-3">
                  {props.data.cities}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div style={{ width: 555, height: 449 }}>
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
