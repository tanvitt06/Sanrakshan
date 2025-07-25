import React from 'react'
import Safety1 from "../../assets/safety1.jpg"
import Safety2 from "../../assets/safety2.avif"
import Safety3 from "../../assets/safety3.jpg"
import Safety4 from "../../assets/safety4.png"
import Safety5 from "../../assets/safety5.jpg"
import Safety6 from "../../assets/safety6.jpg"
import Safety7 from "../../assets/safety7.jpg"
import "./Safety.css"

export default function Safety() {
  return (
    <div className='safety-sec'>
        <img src={Safety1} alt="safety-pic"/>

        <div className='safety-intro'>
            <h3>Ensure Safety First</h3>
            <div className='safety-txt'>
                <p>Before helping an injured or distressed animal, it's crucial to make sure the surroundings are safe — not just for the animal, but for yourself too. Many times, these animals are scared, confused, or even in pain, and their reactions can be unpredictable. If you approach too quickly or without caution, you might end up getting hurt or scaring the animal even more.<br/>
                This first step is about being observant, calm, and careful. Look around for anything that could be dangerous like traffic, broken glass, or people crowding. Your calmness can help keep the situation under control while you prepare to assist the animal properly.</p>
                <img src={Safety2}/>
            </div>
        </div>

        <div className='safety-points'>
            <h3>✅Safety Guidelines</h3>
            <ul>
                <h4>Maintain a Safe Distance</h4>
                <li>Never run towards an injured animal. Always approach slowly and from the side rather than head-on.</li>
                <li>Observe the animal's body language — if it’s growling, backing away, or showing signs of fear or aggression, stay further back.</li>
                <li>Give the animal space to breathe and feel less threatened.</li>
            </ul>
            <ul>
                <h4>Check for Surrounding Hazards</h4>
                <li>Before stepping closer, look around carefully. Are there speeding vehicles, electric wires, fire, or broken glass nearby?</li>
                <li>If you're on a busy road, first ensure the area is blocked or safe for you to stand in.</li>
                <li>Avoid trying to help in unsafe conditions — your safety should never be compromised.</li>
            </ul>
            <ul>
                <h4>Avoid Direct Physical Contact</h4>
                <li>Never touch the animal with bare hands, especially if it's bleeding, vomiting, or showing signs of infection.</li>
                <li>Use gloves, a thick cloth, or even your jacket to create a barrier if contact is necessary.</li>
                <li>Injured animals may bite or scratch when in pain, even if they’re normally friendly.</li>
            </ul>
        </div>

        <div className='safety-tip'>
            <h3>Safety Tips-</h3>
            <div className='tip-sec'>
                <img src={Safety3} alt="safety-tip-pic"/>
                <img src={Safety4} alt="safety-tip-pic"/>
                <img src={Safety5} alt="safety-tip-pic"/>
            </div>
            <div className='tip-sec'>
                <img src={Safety6} alt="safety-tip-pic"/>
                <img src={Safety7} alt="safety-tip-pic"/>
            </div>
        </div>
    </div>
  )
}