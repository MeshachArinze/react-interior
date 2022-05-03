import React, { memo } from "react";
import { getData } from "../../Data";
import "./Projects.css";

const Projects = () => {
  const x = true;
  const y = false;
  const z = true;
  return (
    <>
      <div className="Project__Body">
        <div className="Project__Home">
          <div className="Project__Flex">
            <div className="Project__Img">
              {getData.map((img) => (
                <img key={img} src={img.imageUrl[3]} alt="" />
              ))}
            </div>
            <div className="Project__Name">
              <h3>{y ? "" : "Good Design"}</h3>
              <div></div>
              <p>
                {x
                  ? "We export most of our materials to other countries outside Nigeria."
                  : ""}
              </p>
              <a href="#more" className="btn btn--white btn--animated">{z ? "Know More" : "Know Less"}</a>
            </div>
          </div>
          <div className="Project__Box">
            <div className="Project__Box-1">
              <div className="Project__Img-1">
                {getData.map((img) => (
                  <img key={img} src={img.imageUrl[2]} alt="" />
                ))}
              </div>
              <div className="Project__Name-1">
                <h3>{y ? "" : "Good Design"}</h3>
                <div></div>
                <p>
                  {x
                    ? "We export most of our materials to other countries outside Nigeria."
                    : ""}
                </p>
                <a href="#more" className="btn btn--white btn--animated">{z ? "Know More" : "Know Less"}</a>
              </div>
            </div>
          </div>

          <div className="Project__Box">
            <div className="Project__Box-2">
              <div className="Project__Img-1">
                {getData.map((img) => (
                  <img key={img} src={img.imageUrl[1]} alt="" />
                ))}
              </div>
              <div className="Project__Name-1">
                <h3>{y ? "" : "Good Design"}</h3>
                <div></div>
                <p>
                  {x
                    ? "We export most of our materials to other countries outside Nigeria."
                    : ""}
                </p>
                <a href="#more" className="btn btn--white btn--animated">{z ? "Know More" : "Know Less"}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Projects);
