import React, { useState, useEffect  } from 'react'
import click from '../../assets/click.avif'
import "./Click.css"

export default function Click() {
  const [form, setForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [gender, setGender] = useState("");
  const [select, setSelect] = useState("");
  const [join, setJoin] = useState("");
  const [check, setCheck] = useState([]);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);

  const handleCheckbox=(e)=>{
    const{value, checked} = e.target;
    if(checked){
      setCheck([...value,value]);
    } else{
      setCheck(value.filter((item)=>item!==value));
    }
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    let formErrors = {}

    if(!name.trim()){
      formErrors.name = "Please Enter Name";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!email.trim() || !emailRegex.test(email)){
      formErrors.email = "Please Enter valid Email";
    }

    if(!/^\d{10}$/.test(phone.trim())){
      formErrors.phone = "Please Enter valid Phone No.";
    }

    if(!address.trim()){
      formErrors.address = "Please Enter Address";
    }

    if(!city.trim()){
      formErrors.city = "Please Enter City";
    }

    if(!state.trim()){
      formErrors.state = "Please Enter State";
    }

    if(!/^\d{6}$/.test(pin.trim())){
      formErrors.pin = "Please Enter valid PinCode";
    }

    if(!gender.trim()){
      formErrors.gender = "Please Select Gender";
    }

    if(!select.trim()){
      formErrors.select = "Please Select from Given Options";
    }

    if(!join.trim()){
      formErrors.join = "Please tell why you want to join us";
    }

    if(check.length===0){  
      formErrors.check = "Please Select AtLeast one";
    }

    setError(formErrors);
    if(Object.keys(formErrors).length === 0){
      setForm(false)
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setCity("");
      setState("");
      setPin("");
      setGender("");
      setSelect("");
      setJoin("");
      setCheck("");
    } 
  };

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
      }, 2000);
      return ()=> clearTimeout(timer);
    }
  },[success]);

  return (
    <div className='click-sec'>
      <img src={click} alt="volunteer-pic"/>

      <div className='click-form'>
        <h3>Volunteer Sign Up Form</h3>
        <p>You will be contacted when we receive your application.</p>

        <div className='click-input'>
          <div className='input-tap'>
            <h4>Full Name</h4>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name'/>
            {error.name && <div className='click-error'>*{error.name}*</div>}
          </div>
          <div className='input-tap'>
            <h4>Email</h4>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'/>
            {error.email && <div className='click-error'>*{error.email}*</div>}
          </div>
          <div className='input-tap'>
            <h4>Phone Number</h4>
            <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Enter Your Phone Number'/>
            {error.phone && <div className='click-error'>*{error.phone}*</div>}
          </div>
        </div>

        <div className='click-tap'>
          <div className='click-add'>
            <h4>Address</h4>
            <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='Enter Your Address'/>
            {error.address && <div className='click-error'>*{error.address}*</div>}
          </div>
          <div className='click-input'>
            <div className='input-tap'>
              <h4>City</h4>
              <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='Enter Your City'/>
              {error.city && <div className='click-error'>*{error.city}*</div>}
            </div>
            <div className='input-tap'>
              <h4>State</h4>
              <input type="text" value={state} onChange={(e)=>setState(e.target.value)} placeholder='Enter Your State'/>
              {error.state && <div className='click-error'>*{error.state}*</div>}
            </div>
            <div className='input-tap'>
              <h4>PinCode</h4>
              <input type="number" value={pin} onChange={(e)=>setPin(e.target.value)} placeholder='Enter PinCode'/>
              {error.pin && <div className='click-error'>*{error.pin}*</div>}
            </div>
          </div>
        </div>

        <div className='click-radio'>
          <h4>Gender:</h4>
          {error.gender && <div className='click-error'>*{error.gender}*</div>}
          <label><input type="radio" value={"Male"} checked= {gender==="Male"} onChange={(e)=>setGender(e.target.value)} id="Male" name="gender"/>Male</label>
          <label><input type="radio" value={"Female"} checked={gender==="Female"} onChange={(e)=>setGender(e.target.value)} id="Female" name="gender"/>Female</label>
        </div>

        <div className='click-tab'>
        <div className='click-select'>
          <h4>Where did you hear about us?</h4>
          <select onChange={(e)=>setSelect(e.target.value)} defaultValue="">
            <option value="" disabled>Please Select</option>
            <option value="Family">Family</option>
            <option value="College">College</option>
            <option value="School">School</option>
            <option value="Friend">Friend</option>
            <option value="Other">Other</option>
          </select>
          {error.select && <div className='click-error'>*{error.select}*</div>}
        </div>
        <div className='click-txt'>
          <h4>Why you want to Join Us?</h4>
          <textarea value={join} onChange={(e)=>setJoin(e.target.value)} placeholder='Write here!'></textarea>
          {error.join && <div className='click-error'>*{error.join}*</div>}
        </div>
      </div>

      <div className='click-checkbox'>
        <h4>Preferred Area to Volunteer</h4>
        {error.check && <div className='click-error'>*{error.check}*</div>}
        <div className='checkbox-form'>
          <div className='checkbox-sec'>
            <label><input type="checkbox" value={check} onChange={handleCheckbox} id="Animal Rescue"/>Animal Rescue</label>
            <label><input type="checkbox" value={check} onChange={handleCheckbox} id="Feeding Animals"/>Feeding Animals</label>
            <label><input type="checkbox" value={check} onChange={handleCheckbox} id="Awareness Campaigns"/>Awareness Campaigns</label>
            <label><input type="checkbox" value={check} onChange={handleCheckbox} id="Shelter Cleaning & Care"/>Shelter Cleaning & Care</label>
            <label><input type="checkbox" value={check} onChange={handleCheckbox} id="Medical Help"/>Medical Help</label>
          </div>
          <div className='checkbox-sec'>
            <label><input type="checkbox" value={check} onChange={handleCheckbox} id="Social Media Work"/>Social Media Work</label>
            <label><input type="checkbox" value={check} onChange={handleCheckbox} id="Fundraising"/>Fundraising</label>
            <label><input type="checkbox" value={check} onChange={handleCheckbox} id="Event Volunteering"/>Event Volunteering</label>
            <label><input type="checkbox" value={check} onChange={handleCheckbox} id="Photography/Videography"/>Photography/Videography</label>
            <label><input type="checkbox" value={check} onChange={handleCheckbox} id="Other"/>Other</label>
          </div>
        </div>  
      </div>

      <div className='click-msg'>
        <h4>Any Message</h4>
        <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder='Message (Optional)'></textarea>
      </div>

      <div className='click-btn'>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {success && (
        <>
          <div className='modal-sec'></div>
          <div className='success-modal'>
            <div className='success-sec'>
              <h4>Your Form has been Submitted</h4>
            </div>
          </div>
        </>
      )}
        
      </div>

    </div>
  )
}