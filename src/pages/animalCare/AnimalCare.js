import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./AnimalCare.css";
import care1 from '../../assets/care1.jpg';
import care2 from '../../assets/care2.webp';
import care3 from '../../assets/care3.jpg';
import care4 from '../../assets/care4.webp';
import care5 from '../../assets/care5.webp';
import care6 from '../../assets/care6.jpg';
import care7 from '../../assets/care7.webp';
import care8 from '../../assets/care8.avif';
import care9 from '../../assets/care9.jpg';
import care10 from '../../assets/care10.jpg';

export default function AnimalCare() {
  const [report, setReport] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [happen, setHappen] = useState("");
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setError("");

    if(!name.trim()){
      setError("Please Enter Name");
      return;
    }

    if(!/^\d{10}$/.test(phone.trim())){
      setError("Please Enter valid Phone No.");
      return;
    }

    if(!location.trim()){
      setError("Please Give Your Location");
      return;
    }
    
    if(!type.trim()){
      setError("Please tell which type of Animal it is?");
      return;
    } 

    if(!happen.trim()){
      setError("Please tell what happened to the Animal");
      return;
    } 

    setReport(false);
    setSubmit(true);
    
    setName("");
    setPhone("");
    setLocation("");
    setType("");
    setHappen("");
  };

  const handleClose=()=>{
    setReport(false);
  };

  useEffect(()=>{
    if(report){
      document.body.style.overflow = "hidden";
    } else{
      document.body.style.overflow = "auto"
    }
  }, [report]);

  useEffect(()=>{
    if(submit){
      const timer = setTimeout(()=>{
        setSubmit(false);
      }, 2000);
      return ()=> clearTimeout(timer);
    }
  },[submit]);

  return (
    <div className='animal-sec'>
      <div className='care-intro'>
        <img src={care1} alt="hen-img"/>
        <div className='care-txt'>
          <h3>Emergency Animal Care Guide</h3>
          <p>In times of distress, every second counts — especially when it comes to helping a helpless, injured, or sick animal. While rescue teams and veterinary professionals play a critical role, your immediate response can make all the difference between life and death. This guide is designed to empower individuals with the knowledge of basic animal first aid, quick response tips, and safe handling methods. Whether you're witnessing a roadside injury, a burn, poisoning, or a helpless creature crying for help, this section provides simple, clear, and actionable steps you can take while waiting for professional assistance.<br/>
          At Sanrakshan, we believe that compassion is most powerful when paired with awareness. Let's prepare ourselves to be not just bystanders, but protectors — one small act of care at a time.</p>
        </div>
      </div>


      <div className='care-first'>
        <div className='first-txt'>
          <h3>Be the Reason they Survive</h3>
          <p>Knowing how to act in an emergency can make a life-saving difference. Even small actions taken quickly and carefully can reduce pain, prevent further injury, and prepare the animal for better treatment.<br/>
          <br/> 
          Below are some essential steps you can follow when you come across an animal in need — especially when help is delayed or unavailable.</p>
        </div>
      </div>


      <div className='care-second'>
        <div className='care-item'>
          <img src={care2} alt="snake-pic"/>
          <h4>Ensure safety first</h4>
          <Link to="./Safety">
            <button>See How</button>
          </Link>
        </div>

        <div className='care-item'>
          <img src={care3} alt="tortoise-pic"/>
          <h4>Approach Calmly</h4>
          <Link to="./Approach">
            <button>See How</button>
          </Link>
        </div>

        <div className='care-item'>
          <img src={care5} alt="squirrel-pic"/>
          <h4>Provide Basic First Aid</h4>
          <Link to="./Aid">
            <button>See How</button>
          </Link>
        </div>

        <div className='care-item'>
          <img src={care4} alt="frog-pic"/>
          <h4>Help & Stay Around</h4>
          <Link to="./Help">
            <button>See How</button>
          </Link>
        </div>
      </div>


      <div className='care-third'>
        <h3>Did You Know -</h3>
        <div className='third-fact'>
          <img src={care6} alt="dog-pic"/>
          <p>Dogs can hear sounds at frequencies as high as 65,000 Hz — nearly twice as much as humans. That’s why fireworks and loud noises can deeply disturb them. Always provide a quiet and safe corner for them during storms or celebrations. Their sensitivity to sound makes them excellent emotional companions — they can often sense your sadness even before you speak.</p>
        </div>

        <div className='third-fact'>
          <img src={care7} alt="cat-pic"/>
          <p>Cats have over 20 muscles in each ear that allow them to rotate them 180 degrees. While they may seem aloof, they use purring not only to express comfort but also to heal themselves — the frequency of a cat’s purr can promote tissue regeneration and reduce pain. Even small wounds in stray cats should be taken seriously — they often hide their pain.</p>
        </div>

        <div className='third-fact'>
          <img src={care8} alt="birds-pic"/>
          <p>Birds are nature’s messengers — their sudden absence from an area often signals environmental imbalance. Many urban birds suffer due to glass collisions, polluted water, and lack of food. Even placing a small bowl of water and some grains can make a huge difference during summer. A simple act like this can save lives every day.</p>
        </div>

        <div className='third-fact'>
          <img src={care9} alt="cow-pic"/>
          <p>Cows have best friends and get stressed when separated from them. Scientific studies have shown that cows form strong social bonds and can even recognize more than 100 individual faces. Despite being gentle creatures, they often face cruelty on roads and in industries. Understanding their emotional intelligence helps us treat them with the compassion they deserve.</p>
        </div>
        
        <div className='third-fact'>
          <img src={care10} alt="elephant-pic"/>
          <p>Elephants are one of the most emotionally intelligent animals. They mourn the loss of their herd members, remember watering holes even after decades, and protect their young fiercely. Yet, many suffer in silence due to poaching and forced captivity. Protecting an elephant is not just saving a species — it's preserving generations of memory, emotion, and legacy.</p>
        </div>
      </div>

      <div className='care-btn'>
        <button onClick={()=>setReport(true)}>Report Animal</button>
      </div>

      {report && (
        <>
          <div className='modal-sec'></div>
          <div className='report-modal'>
            <div className='report-modal-sec'>
              <h3>Report Animal</h3>

              {error && <div className='report-error'>*{error}*</div>}

                <div className='report-input'>
                  <h4>Name</h4>
                  <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' required/>

                  <h4>Phone No.</h4>
                  <input type="tel" value={phone} maxLength={10} onChange={(e)=>setPhone(e.target.value)} placeholder='Enter Your Number' required/>

                  <h4>Your Location</h4>
                  <input value={location} onChange={(e)=>setLocation(e.target.value)} placeholder='Enter Your Address' required/>

                  <h4>Which Animal it is?</h4>
                  <input type="text" value={type} onChange={(e)=>setType(e.target.value)} placeholder='Type of Animal' required/>

                  <h4>What Happened to Animal?</h4>
                  <textarea type="email" value={happen} onChange={(e)=>setHappen(e.target.value)} placeholder='Write Here!' required></textarea>
                </div>
            

                <div className='report-btn'>
                  <button onClick={handleSubmit}>Submit</button>
                  <button onClick={handleClose}>Close</button>
                </div>
            </div>
          </div>
        </>
      )}

      {submit && (
        <>
          <div className='modal-sec'></div>
            <div className='submit-modal'>
              <div className='submit-sec'>
                <h4>Thank You! We will take action as soon as possible</h4>
              </div>
            </div>
        </>
      )}
    </div>
  )
}
