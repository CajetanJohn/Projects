import { Link, NavLink } from "react-router-dom";
import { Socials } from "../Components/ContactWidget";

function Footer() {
  return (
    <footer>
      <div className="footer-main-body">
          <div className="footer-summary">
            <h3>cheggshomework</h3>
            <p className="d-none d-md-inline-block">We are a Us based group of learners best at each individual subject, to ensure you get the highest possible grade in that exam, topic, project or Thesis, click <Link to='/About'>here</Link> to check more about us</p>
            <details className="d-flex d-md-none">
              <summary>About Us</summary>
              <span>We are a Us based group of learners best at each individual subject, to ensure you get the highest possible grade in that exam, topic, project or Thesis, click <Link to='/About'>here</Link> to check more about us</span>
            </details>
          </div>
        
          <div className="footer-quick-links">
            <h6 className="d-none d-md-block">Quick links</h6>
            <p className="d-block d-md-none">Quick links</p>
            <ul>
              <NavigateTo to="/">Home</NavigateTo>
              <NavigateTo to="/Service">Services</NavigateTo>
              <NavigateTo to="/Assistance">Help</NavigateTo>
              <NavigateTo to="/Contact">Contact Us</NavigateTo>
            </ul>
          </div>

        <div className="footer-body-others">
          <p><strong>Reach us on</strong></p>
          <Socials/>         
        </div>
    </div>

      <div className="footer-credit-tagdown">
        <span>
          copyright &copy;2023 {" "}
          <Link to="/" >cheggshomework.</Link>
        </span>
      </div>
    </footer>
  );
}

function NavigateTo({ to, children, ...properties }) {
  return (
    <li className="">
      {" "}
      <NavLink to={to} activeclassname="active" {...properties}>
        {" "}
        {children}{" "}
      </NavLink>
    </li>
  );
}
export default Footer;
