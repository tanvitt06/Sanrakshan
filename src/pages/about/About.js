import React from "react";
import Slider from "react-slick";
import "./About.css";
import about1 from "../../assets/about1.webp";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.webp";
import about4 from "../../assets/about4.jpg";
import about5 from "../../assets/about5.png";
import about6 from "../../assets/about6.jpg";
import about7 from "../../assets/about7.avif";
import feedbackImg1 from "../../assets/feedbackImg1.jpg";
import feedbackImg2 from "../../assets/feedbackImg2.jpg";
import feedbackImg3 from "../../assets/feedbackImg3.webp";
import feedbackImg4 from "../../assets/feedbackImg4.jpg";
import feedbackImg5 from "../../assets/feedback-img5.jpg";

export default function About() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive:[
      {
        breakpoint: 768,
        settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
        }
      }
    ]
  };

  const feedbacks = [
  {
    name: "Priya Agarwal",
    message: "Sanrakshan has truly earned a special place in my heart. One day, I saw a puppy lying injured near my street. While most people passed by without stopping, I decided to reach out to Sanrakshan. Within just 20 minutes, their team arrived, attended to the puppy with such care, and ensured it received proper treatment. They kept me informed about its recovery journey, and today, that same puppy is safe and sound. Their dedication, compassion, and quick action reminded me that kindness still exists in this world.",
    images: feedbackImg1,
  },
  {
    name: "Ravi Mehta",
    message: "I came across Sanrakshan through a friend when I saw a kitten stuck in a drain near my college. I had no idea whom to call, and I was panicking. But Sanrakshan responded immediately and guided me calmly. Within no time, their volunteers rescued the kitten. The way they handle each case — with urgency and empathy — is truly commendable. I’ve been following them since then, and their stories continue to inspire me every single day.",
    images: feedbackImg2,
  },
  {
    name: "Anjali Verma",
    message: "For me, Sanrakshan is hope. It’s that reminder we all need — that even in a world full of noise, there are people who still choose empathy. Their team works round the clock, sometimes with limited resources, but they never give up on an animal in need. I feel proud to support them in any way I can.",
    images: feedbackImg3,
  },
  {
    name: "Rajeev Sharma",
    message: "Sanrakshan is a blessing for voiceless lives. I had once seen a cow injured on the highway but didn’t know how to help. I found Sanrakshan online, and they responded without hesitation. Their team coordinated everything — vet, transport, even aftercare. It’s rare to find such dedication these days. The best part is, they kept me informed throughout, which made me feel involved in the rescue too.",
    images: feedbackImg4,
  }  
  ]


  return (
    <div className="about-us">
      <div className="about-intro">
        <img src={about1} alt="goat pic" />
        <div className="intro-txt">
          <h3>
            <i>Who are we?</i>
          </h3>
          <p>
            At Sanrakshan, we are a group of compassionate individuals driven by
            a deep love and respect for animals. We believe that every creature
            deserves to live in safety and dignity. Our journey began with a
            simple goal — to raise awareness about animal suffering and to
            become a voice for the voiceless. Today, we stand together as a
            growing community, united by empathy, working to make a difference
            through knowledge, care, and collective action.
          </p>
        </div>
      </div>

      <div className="about-sec">
        <div className="sec-first">
          <h3>
            <i>What we do?</i>
          </h3>
          <div className="first-item">
            <img src={about2} alt="dog pic" />
            <div className="item-org">
              <h3>Our Organisation</h3>
              <p>
              At Sanrakshan, we strive to make a meaningful difference in the
              lives of animals by creating awareness, sharing real-time rescue
              stories, and encouraging community involvement in animal welfare.
              Our work involves gathering and sharing information from verified
              sources about animal rescues, abuse cases, health updates, and
              preventive care.Through our digital platform, we aim to educate
              people about the importance of kindness towards animals and
              promote responsible behavior in society. We also connect people
              with local rescue teams, NGOs, and shelters to ensure timely help
              reaches those in need. Every article we post, every story we
              highlight, and every message we share is a step toward building a
              more compassionate and informed world where animals are protected,
              valued, and loved.
            </p>
            </div>
          </div>
        </div>
      </div>


      <div className="sec-second">
        <h3><i>Our Vision</i></h3>
        <div className="second-item">
          <img src={about3} alt="cat pic"/>
          <p>Our vision goes beyond rescue — we aim to spark a movement rooted in empathy, awareness, and responsibility. We dream of a society where animals are not just seen, but truly valued; where acts of kindness towards them become part of everyday life. We believe that education and awareness can transform apathy into action. Through our platform, we strive to create a bridge between people and the voiceless lives around them — encouraging support for rescue teams, promoting preventive care, and sharing stories that move hearts. Our ultimate goal is to build a future where no animal suffers silently, where compassion is not optional, but instinctive — and where humanity reclaims its bond with nature in the most humane way possible.</p>
        </div>
      </div>


      <div className="sec-third">
        <div className="third-item">
          <img src={about4} alt="cat pic"/>
          <h3>40</h3>
          <p>Volunteer</p>
        </div>

        <div className="third-item">
          <img src={about6} alt="parrot pic"/>
          <h3>300</h3>
          <p>Rescue Animals</p>
        </div>

        <div className="third-item">
          <img src={about7} alt="donate pic"/>
          <h3>3830</h3>
          <p>Donations</p>
        </div>

        <div className="third-item">
          <img src={about5} alt="rabbit pic"/>
          <h3>500</h3>
          <p>Projects</p>
        </div>
      </div>


      <div className="feedback-int">
        <div className="feedback-sec">
          <h3>What people say</h3>
          <Slider {...settings}>
            {feedbacks.map((item, index) => (
              <div className="sec-msg" key={index}>
                <p>{item.message}</p>
                <div className="msg-name">
                  <img src={item.images} alt={item.name}/>
                  <h4>{item.name}</h4>  
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        <img src={feedbackImg5} alt="cow-img"/>
      </div>
    </div>
  );
}