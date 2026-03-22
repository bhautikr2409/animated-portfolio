import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:bhautikrakholiya786@gmail.com" data-cursor="disable">
                bhautikrakholiya786@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:9510466469" data-cursor="disable">
                +91 9510466469
              </a>
            </p>
            <h4>Education</h4>
            <p>Bachelor of Commerce<br/>Saurashtra University (2019 - 2023)</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/bhautikr2409"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/bhautik-rakholiya-aa70ba309/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Bhautik Rakholiya</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
