import React, { useEffect, useState } from 'react'
import sponsor1 from '../../assets/sponsor1.jpg'
import sponsor2 from '../../assets/sponsor2.jpg'
import sponsor3 from '../../assets/sponsor3.png'
import sponsor4 from '../../assets/sponsor4.png'
import sponsor5 from '../../assets/sponsor5.jpeg'
import sponsor6 from '../../assets/sponsor6.webp'
import sponsor7 from '../../assets/sponsor7.jpeg'
import "./Sponsor.css"

export default function Sponsor() {
  const [form, setForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [like, setLike] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setError("");

    if(!name.trim()){
      setError("Please Enter Name");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email.trim() || !emailRegex.test(email)){
      setError("Please Enter valid Email");
      return;
    }

    if(!like.trim()){
      setError("Please Enter Sponsor");
      return;
    }

    setSuccess(true);
    setForm(false);
    
    setName("");
    setEmail("");
    setLike("");
    setMsg("");
  };

  const handleClose=()=>{
    setForm(false);
  }

  useEffect(()=>{
    if(form){
      document.body.style.overflow = "hidden";
    } else{
      document.body.style.overflow = "auto"
    }
  }, [form]);

  useEffect(()=>{
    if(success){
      const timer = setTimeout(()=>{
        setSuccess(false);
      }, 3000);
      return ()=> clearTimeout(timer);
    }
  },[success]);

  return (
    <div className='sponsor-sec'>
      <img src={sponsor2} alt="sponsor-pic"/>
      <div className='sponsor-intro'>

        <h3>Support that Makes Us Stronger</h3>
        <div className='sponsor-intro-txt'>
          <p>At Sanrakshan, every rescue story begins with a helping hand — and that’s where our supporters come in.<br/>
          From individuals who donate with love to organizations that stand with our mission, each sponsor strengthens the backbone of our work. Their support ensures that injured animals receive urgent care, abandoned souls find safe shelter, and street animals are treated with the dignity they deserve.<br/>
          It’s not just about funding — it’s about faith. Faith in a cause that believes every life matters. Faith in the power of kindness.<br/>
          These supporters help us do more, reach further, and dream bigger. Because of them, Sanrakshan continues to grow as a force of compassion — one paw, one life, one rescue at a time.</p>
          <img src={sponsor1} alt="sponsor-pic"/>
        </div>
      </div>

      <div className='sponsor-supports'>
        <h3>Our Proud Sponsors</h3>
        <div className='sponsor-sec-first'>
          <div className='support-sec'>
            <img src={sponsor3} alt="sponsor-pic"/>
            <h4>PawPrints Angel Fund</h4>
          </div>
          <div className='support-sec'>
            <img src={sponsor4} alt="sponsor-pic"/>
            <h4>Animal Aid Unlimited</h4>
          </div>
            <div className='support-sec'>
            <img src={sponsor5} alt="sponsor-pic"/>
          <h4>Anonymous Paw Buddy</h4>
          </div>
        </div>
        <div className='sponsor-sec-second'>
          <div className='support-sec'>
            <img src={sponsor6} alt="sponsor-pic"/>
            <h4>MeowMart Pet Supplies</h4>
          </div>
          <div className='support-sec'>
            <img src={sponsor7} alt="sponsor-pic"/>
            <h4>Happy Tails Veterinary Clinic</h4>
          </div>
        </div>
      </div>

      <div className='sponsor-become'>
        <h3>Become a Sponsor</h3>
        <p>Want to make a lasting impact? Join our mission as a proud sponsor. Whether you're a brand, local business, or an individual — your support fuels change.</p>
        <button onClick={()=>setForm(true)}>Click Here</button>
      </div>

      {form && (
        <>
          <div className='modal-sec'></div>
          <div className='form-modal'>
            <div className='form-sec'>
              <h3>Become a Sponsor</h3>

              {error && <div className='error-popUp'>*{error}*</div>}

              <div className='form-input'>
                <h4>Name</h4>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' required/>

                <h4>Email</h4>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email' required/>

                <h4>What would you like to Sponsor?</h4>
                <input type="text" value={like} onChange={(e)=>setLike(e.target.value)} placeholder='E.g., Dog food, Medicine, Transport...' required/>

                <h4>Any Mesaage</h4>
                <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder='Message(optional)'></textarea>
              </div>
            

              <div className='form-btn'>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </>
      )}

      {success && (
        <>
        <div className='modal-sec'></div>
          <div className='success-modal'>
            <div className='success-sec'>
              <h3>Submitted Successfully!</h3>
            </div>
          </div>
        </>
      )}

    </div>
  );
}