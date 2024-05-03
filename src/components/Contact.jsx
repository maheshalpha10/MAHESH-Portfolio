import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import msg_icon from "../../public/assets/msg-icon.png";
import mail_icon from "../../public/assets/mail-icon.png";
import phone_icon from "../../public/assets/phone-icon.png";
import location_icon from "../../public/assets/location-icon.png";
import white_arrow from "../../public/assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "587b22e2-f3b8-495d-b383-c47f61c5e708");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(" Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contacts">
          <div className="contacts-col">
            <h3 id="text">
              Send us a message <img src={msg_icon} alt="" />
            </h3>
            <p>We are avaliable 24X7</p>
            <ul>
              <li>
                <img src={mail_icon} alt="" /> mahheshjnv266@gmail.com
              </li>
              <li>
                <img src={phone_icon} alt="" /> +916390533183
              </li>
              <li>
                <img src={location_icon} alt="" /> Mardapur Saidabad Handia Prayagraj Uttar Pradesh (221508) 
              </li>
            </ul>
          </div>
          <div className="contacts-col">
            <form onSubmit={onSubmit}>
              <level>Your Name </level>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
              <level>Phone Number </level>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Mobile No.."
                required
              />
              <level>Message </level>
              <textarea
                name="message"
                rows="6"
                placeholder="Enter Your Message"
                required
              />
              <button type="submit" className="btn dark-btn">
                Submit now <img src={white_arrow} alt="" />
              </button>
            </form>
            <span>{result}</span>
          </div>
        </div>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/mahesh4793yadav" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61554245326816" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/mahesh-singh-yadav-813495278?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bk6iJKM2USFehBOZLxIbkdw%3D%3D" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://x.com/Maheshs13355633?t=5h-mjROBm7LSIVh_zV7_eg&s=09" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/maheshalpha10" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:maheshjnv266@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
         
        </div>
        <h3 id="text"> 2024 Copyright &copy; MAHESH SINGH YADAV - All rights reserved.</h3>
      </div>
      
    </>
  );
};

export default Contact;
