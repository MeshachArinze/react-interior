import React from "react";
import { getData } from "../../Data";
import LinkButton from "./LinkButton";
import "./About.css";

const About = ({texts, count, index, letter, currentTexts}) => {


  function Type() {
    if (count === texts.length) {
      count = 0;
    }

    currentTexts = texts[count];
    letter = currentTexts.slice(0, ++index);

    if (letter.length === currentTexts.length) {
      count++;
      index = 0;
    }
    setTimeout(Type, 1000);
  }

  Type();
  return (
    <>
      <div className="About__Body" id="about">
        <div className="About__Wrap">
          <div className="About__Type">
            <span>Our Design</span>
            <span className="typing"></span>
          </div>
          <div className="About__Box">
            <div className="About__Sub">
              <div className="About__Hold">
                <div className="About__Img">
                  {getData.map((img) => (
                    <img
                      key={img}
                      style={{ width: "100%" }}
                      src={img.imageUrl[1]}
                      alt=""
                    />
                  ))}
                </div>
                <div className="About__Smart">
                  <h2>SMART CHAIR</h2>
                  <div></div>
                  <span>
                    To give you what you desire and to bring that comfort to
                    your home. we are open for deals
                  </span>
                  <LinkButton/>
                </div>
              </div>
              <div className="About__Hold">
                <div className="About__Img">
                  {getData.map((img) => (
                    <img key={img} src={img.imageUrl[2]} alt="" />
                  ))}
                </div>
                <div className="About__Smart">
                  <h2>SMART CHAIR</h2>
                  <div></div>
                  <span>
                    To give you what you desire and to bring that comfort to
                    your home. we are open for deals
                  </span>
                  <LinkButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
