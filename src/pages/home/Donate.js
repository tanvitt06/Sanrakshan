import React, { use, useEffect, useState } from 'react'
import donate2 from '../../assets/donate2.svg'
import donate3 from '../../assets/donate3.png'
import donate4 from '../../assets/donate4.jpg'
import scanner from '../../assets/scanner.png'
import "./Donate.css"

export default function Donate() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [showUpi, setShowUpi] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState("");

  const [upi, setUpi] = useState("");


  const handleDonate=(e)=>{
    e.preventDefault();
    setError("");

    if(!name.trim() || !amount.trim()){
      setError("Please Enter Name and Amount");
      return;
    }

    if(Number(amount.trim())<= 0){
      setError("Please Enter valid Amount");
      return;
    }

    setShowUpi(true);
  };

  const handleDonePayment = () =>{
    setShowUpi(false);
    setShowThankYou(true);
    setName("");
    setAmount("");
  }

  const handleClose=()=>{
    setShowUpi(false);
  }

  useEffect(()=>{
    if(showThankYou){
      const timer = setTimeout(()=>{
        setShowThankYou(false);
      }, 3000);
      return ()=> clearTimeout(timer);
    }
  }, [showThankYou]);

  useEffect(()=>{
    if(showUpi){
      document.body.style.overflow = "hidden";
    } else{
      document.body.style.overflow = "auto"
    }
  }, [showUpi]);

  return (
    <div className='donate-sec'>
      <img src={donate2} alt="dog-donate-pic"/>

      <div className='donate-second'>
        <div className='donate-sec-txt'>
          <h3>Why Donate?</h3>
          <p>Every day, thousands of animals suffer in silence — injured on the streets, abandoned by their owners, or left hungry without shelter.<br/>
          They cannot ask for help, but your kindness can become their hope.<br/>
          By donating, you’re not just giving money — you’re giving life, love, and a second chance to an innocent soul.<br/>
          Your contribution helps us rescue animals in distress, provide them with life-saving medical care, and ensure they have food, shelter, and affection.<br/>
          Even the smallest donation has the power to change a life.<br/>
          Together, we can build a safer world where animals are not just surviving, but truly living — with dignity, care, and compassion.</p>
        </div>
        <div className='donate-sec-img'>
          <img src={donate3} alt="donate-pic"/>
        </div>
      </div>

      <div className='donate-third'>
        <div className='donate-third-txt'>
          <h3>Where your Donation Goes?</h3>
          <p>🩺 <strong>Medical Treatment:</strong> Your money helps in vaccination, surgeries, and emergency care.<br/></p>
          <p>🍲 <strong>Food & Nutrition:</strong> We provide daily meals to rescued animals.<br/></p>
          <p>🏠 <strong>Shelter Maintenance:</strong> Ensuring safe and clean space for animals to rest and recover.<br/></p>
          <p>📢 <strong>Awareness & Outreach:</strong> Educating communities about animal rights and cruelty prevention.<br/></p>
          <p>👥 <strong>Volunteer Support:</strong> Enabling more hands to care for the voiceless.</p>
        </div>
        <div className='donate-third-img'>
          <img src={donate4} alt="donate-pic"/>
        </div>
      </div>

      <div className='donate-form'>
        <div className='form-heading'>
          <h4>Name</h4>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Enter Your Name' required/>
        </div>
        <div className='form-heading'>
          <h4>Amount</h4>
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter Amount" required/>
        </div>
      </div>

      {error && <div className='error-msg'>*{error}*</div>}

      <div className='donate-btn'>
        <button onClick={handleDonate}>Donate</button>
      </div>

      {showUpi && (
        <>
        <div className='modal-sec'></div>
        <div className="upi-modal">
          <div className="upi-sec">
            <h3>UPI Payment</h3>
            <p>Scan QR or pay using UPI Id:</p>
            <div className='upi-img'>
              <input type="text" value={upi} onChange={(e)=>setUpi(e.target.value)}placeholder='Enter UPI Id' required/>
              <img src={scanner} alt="scan-pic"/>
            </div>
            <div className='upi-btn'>
              <button onClick={handleDonePayment}>Done</button>
              <button onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
        </>
      )}

      {showThankYou && (
        <>
        <div className='modal-sec'></div>
          <div className='thank-modal'>
            <div className='thank-sec'>
              <h3>Thank You For Donation</h3>
              <p>Your donation means the world to us and the animals!</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}