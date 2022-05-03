import React from "react";
import "./Services.css";
import { getData } from "../../Data";
import { Typewriter } from "react-simple-typewriter";

const style = {
  color: 'var(--color-orange)',
  fontSize: 'inherit',
  marginLeft: '10px'
}

const Services = () => {
  return (
    <>
      <div className="Service__Body">
        <div className="Service__Wrapper">
          <div className="Service__Box--1">
            <div className="Service__Box--Sub-1">
              <h3>Our 
                <span style={style}>
                  <Typewriter
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={80}
                    delaySpeed={2000}
                    words={['Design', 'Work', 'Project', 'Pride']}
                  />
                </span>
              </h3>
              <div></div>
              <p>
                We have an international experienced O & M divisition, which
                takes prevention and corrective maintenance services for
                furnitures across the globbe. Our team operates and maintains
                furnitures, interior, building artitectures. we offer our
                projects commission expertise along with developing mechanism to
                retrive and manage
              </p>
            </div>
            <div className="Service__Img">
              {getData.map((img) => (
                <img key={img} src={img.imageUrl[2]} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
