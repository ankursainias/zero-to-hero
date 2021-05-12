import { Link } from "react-router-dom";

const About = () => {
  return (<>
    <div className="about-section paddingTB60 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-6">
            <div className="about-title clearfix">
              <h1>
                About <span>Zero To Hero</span>
              </h1>
              <h3>Lorem ipsum dolor sit amet </h3>
              <p className="about-paddingB">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquet dolor libero, eget venenatis mauris finibus dictum.
                Vestibulum quis elit eget neque porttitor congue non sit amet
                dolor. Proin pretium purus a lorem ornare{" "}
              </p>
              <p>
                sed lobortis pulvinar. Integer laoreet mi id eros porta euismod.
                Suspendisse potenti. Nulla eros mauris, convallis et sem tempus,
                viverra hendrerit sapien
              </p>
              <div className="about-icons">
                <ul>
                  <li>
                    <Link to="https://www.facebook.com/">
                      <i
                        id="social-fb"
                        className="fa fa-facebook-square fa-3x social"
                      ></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://twitter.com/">
                      <i
                        id="social-tw"
                        className="fa fa-twitter-square fa-3x social"
                      ></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://plus.google.com/">
                      <i
                        id="social-gp"
                        className="fa fa-google-plus-square fa-3x social"
                      ></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:bootsnipp@gmail.com">
                      <i
                        id="social-em"
                        className="fa fa-envelope-square fa-3x social"
                      ></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default About;
