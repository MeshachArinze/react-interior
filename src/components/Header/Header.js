import React from "react";
import "./Header.css";
import { getData } from "../../Data";
import {
  FaHome,
  FaFacebook,
  FaMailBulk,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const IconName = (props) => (
  <span className="IconName">{props.idesign.IDesign}</span>
)
const IconCall = (props) => (
  <span className="IconName">{props.number.number}</span>
)
const IconMail = (props) => (
  <span className="IconName">{props.email.email}</span>
)

const Header = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="Header__Body">
          <div className="Header__Wrap">

            <div className="Header__Home">
              <span className="IconHome">{<FaHome />}</span>
              {getData.map((idesign) => <IconName key={idesign} idesign={idesign}/>)}
            </div>

            <div className="Header__Big">
              <div className="Header__Number">
                <span>{<FaWhatsapp />}</span>
                {getData.map((number) => <IconCall key={number} number={number}/>)}
              </div>

              <div className="Header__Mail">
                <span>{<FaMailBulk />}</span>
                {getData.map((email) => <IconMail key={email} email={email}/>)}
              </div>

              <div className="Header__Icons">
                <span>{<FaFacebook />}</span>
                <span>{<FaInstagram />}</span>
                <span>{<FaTwitter />}</span>
              </div>
            </div>

          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Header;
