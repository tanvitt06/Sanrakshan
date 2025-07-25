import React from 'react'
import help1 from "../../assets/help1.jpg"
import help2 from "../../assets/help2.webp"
import help3 from "../../assets/help3.jpeg"
import help4 from "../../assets/help4.jpeg"
import "./Help.css"

export default function Help() {
  return (
    <div className='help-sec'>
      <img src={help1} alt="help-pic"/>

      <div className='help-intro'>
        <h3>Help and Stay Around</h3>
        <div className='help-txt-first'>
            <div className='help-first-sec'>
                <p><i>Your presence can be more powerful than you think.</i></p>
                <p>When rescue takes time, your presence matters more than you realize. Staying near the animal ensures it doesn’t wander into more danger or fall unconscious without anyone noticing.<br/>
                Stand at a safe distance — visible, but non-threatening. Offer clean water if possible, shade if it's too hot, and speak gently if the animal is alert. Avoid touching unless absolutely necessary.<br/>
                Most importantly, observe. Changes in breathing, bleeding, or movement should be updated to the rescue team. Also, try to keep others from crowding — silence and space help the animal stay calm.<br/>
                You don’t have to fix everything — just staying close is sometimes enough.</p>
            </div>
            <img src={help2} alt="help-pic"/>
        </div>
      </div>

      <div className='help-txt-second'>
        <h4>What You Can Do:</h4>
        <div className='help-second-sec'>
            <ul>
                <li><strong>Stay at a safe distance:</strong>Be visible to the animal but not too close. Let them know they’re not alone.</li>
                <li><strong>Offer clean water (if safe):</strong>Place a small bowl nearby, especially in heat. Never force them to drink.</li>
                <li><strong>Provide shade or shelter:</strong>Use a cardboard box, umbrella, or cloth to shield them from sun or rain.</li>
                <li><strong>Monitor behavior:</strong>Is the animal moving? Breathing heavily? Bleeding more? This info helps rescuers act faster.</li>
                <li><strong>Update the rescue team:</strong>Share new signs like worsening wounds, fainting, or movement. Timely updates can save time.</li>
                <li><strong>Prevent crowding:</strong>Ask others not to gather around or scare the animal with loud voices or curiosity.</li>
            </ul>
            <img src={help3} alt="help-pic"/>
        </div>
      </div>

      <div className='help-lastSec'>
        <h3>❤️Why Staying Matters:</h3>
        <div className='help-lastSec-txt'>
            <p>Animals in distress often panic or shut down if left alone. Your calm presence can stop them from running away, worsening their injury, or getting attacked by other animals.<br/>
            Staying shows care — it provides comfort, safety, and valuable information to rescuers. You might not speak their language, but they can feel your intention.<br/>
            Being there, even silently, can make the difference between fear and hope.</p>
            <img src={help4} alt="help-pic"/>
        </div>
      </div>
    </div>
  )
}