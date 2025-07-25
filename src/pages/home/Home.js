import React, { useState, useEffect } from "react";
import { NavLink} from "react-router-dom";
import Slider from "react-slick";
import San1 from "../../assets/San1.png";
import San2 from "../../assets/San2.png";
import San3 from "../../assets/San3.png";
import donate from "../../assets/donate.webp";
import contribute from "../../assets/contribute.jpg";
import awareness from "../../assets/awareness.webp";
import sponsor from "../../assets/sponsor.jpg";
import gal1 from "../../assets/gal1.jpg";
import gal2 from "../../assets/gal2.jpg";
import gal3 from "../../assets/gal3.jpg";
import gal4 from "../../assets/gal4.jpg";
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.jpg";
import home3 from "../../assets/home3.jpg";
import home4 from "../../assets/home4.jpg";
import "./Home.css";

export default function Home() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=animal%20rescue&apiKey=d5f0182da9d14727aafb3753df5785b5"
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
      })
      .catch((error) => console.error("Error fetching news: ", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


  return (
    <div className="home-heroic">
      <div className="home-img">
        <Slider {...settings}>
          <img src={San1} alt="pic1" />
          <img src={San2} alt="pic2" />
          <img src={San3} alt="pic3" />
        </Slider>
      </div>


      <div className="home-body">
        <div className="home-help">
          <p>How you can Help?</p>
          <div className="help-img">
            <div className="help-item">
              <h3>Donate</h3>
              <img src={donate} alt="donate pic" />
              <p>
                Help us by donating funds for the care and rescue of animals.
              </p>
              <NavLink to="/Donate" className="link-line">
                <button className="help-btn">Learn How</button>
              </NavLink>
            </div>

            <div className="help-item">
              <h3>Contribute</h3>
              <img src={contribute} alt="contribute pic" />
              <p>Contribute your skills or time to support our mission.</p>
              <NavLink to="/Contribute" className="link-line">
                <button className="help-btn">Learn How</button>
              </NavLink>
            </div>

            <div className="help-item">
              <h3>Awareness</h3>
              <img src={awareness} alt="awareness pic" />
              <p>
                Spread awareness to educate others and inspire action for animal
                welfare.
              </p>
              <NavLink to="./Awareness" className="link-line">
                <button className="help-btn">Learn How</button>
              </NavLink>
            </div>

            <div className="help-item">
              <h3>Sponsor</h3>
              <img src={sponsor} alt="sponsor pic" />
              <p>
                Support daily needs like food and medicines by sponsoring them.
              </p>
              <NavLink to="/Sponsor" className="link-line">
                <button className="help-btn">Learn How</button>
              </NavLink>
            </div>
          </div>
        </div>


        <div className="home-gall">
          <p>
            Rescues Gallery -{" "}
            <i>"Every rescue has a story — witness their journey to safety."</i>
          </p>
          <div className="gall-cards">
            <div className="card">
              <img src={gal1} alt="pic"/>
              <p>
                This dog was rescued from the streets, injured and starving.
                With timely medical care and nourishment, it is now recovering
                and waiting for a loving home.
              </p>
            </div>

            <div className="card">
              <img src={gal2} alt="pic"/>
              <p>
                Abandoned and frightened, this cat was rescued from an unsafe
                environment. After receiving care and comfort, it is now playful
                and healthy again.
              </p>
            </div>

            <div className="card">
              <img src={gal3} alt="pic"/>
              <p>
                Concerned locals brought this injured pigeon to our shelter
                after finding it unable to fly. With gentle care, treatment, and
                rest, it has now healed and is ready to soar again.
              </p>
            </div>

            <div className="card">
              <img src={gal4} alt="pic"/>
              <p>
                This young squirrel was saved after falling from a tree. With
                proper care and shelter, it has fully recovered and returned to
                nature.
              </p>
            </div>
          </div>
        </div>


        <div className="home-news">
          <p>Recent Rescues</p>
          <div className="news-item">
            {news.slice(0, 4).map((article, index) => (
              <div className="single-news" key={index}>
                <img src={article.urlToImage} alt="news" />
                <div className="news-content">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <a href={article.url} target="_blank" rel="noreferrer">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="home-last">
        <p>Your visit means the world to us. Together, we make a difference.</p>
        <div className="home-logo">
          <img src={home1} alt="logo" />
          <img src={home2} alt="logo" />
          <img src={home3} alt="logo" />
          <img src={home4} alt="logo" />
        </div>
      </div>
    </div>
  );
}
