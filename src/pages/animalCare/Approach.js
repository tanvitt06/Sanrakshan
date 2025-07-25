import React from 'react'
import Approach1 from "../../assets/approach1.jpg"
import Approach2 from "../../assets/approach2.png"
import Approach3 from "../../assets/approach3.jpg"
import Approach4 from "../../assets/approach4.jpg"
import Approach5 from "../../assets/approach5.webp"
import Approach6 from "../../assets/approach6.jpg"
import "./Approach.css"

export default function Approach() {
  return (
    <div className='approach-sec'>
      <img src={Approach1} alt="approach-pic"/>

      <div className='approach-intro'>
        <h3>Approach Calmly & With Care</h3>
        <p>"A calm mind saves lives."<br/>
        Approaching an injured, scared, or stray animal requires not just compassion, but also patience and emotional control. In moments of distress, animals — much like humans — can become unpredictable, defensive, or even aggressive. A calm approach is not just a matter of kindness; it is a critical safety practice, both for you and the animal.<br/>
        When you come across an animal in need, your energy becomes their environment. If you approach in panic, hurry, or fear, the animal may sense that energy and react with fear or aggression. But if you remain composed, grounded, and gentle, it can create a sense of safety that encourages the animal to trust you.<br/>
        Start by observing from a distance. Look for signs of injury, aggression, fear, or disorientation. Avoid making sudden movements or loud noises — these may startle the animal and cause it to flee or attack out of fear. Keep your body language relaxed and non-threatening. Crouch down if needed, avoid direct eye contact (as it can seem confrontational), and speak in a soft, reassuring tone if you need to communicate vocally.<br/>
        Never approach head-on or from behind. Animals feel safer when they can see your movements clearly. Move slowly and sideways, giving them a clear escape route in case they feel unsafe. Let them smell your hand first if they seem curious or receptive. But always remember: do not force contact. Respect their space, and wait for signs of comfort or acceptance before making any touch.<br/>
        In some cases, especially with injured or sick animals, the safest way to help might be to contact a professional rescuer or a vet. Your calm observation can help you relay important information to rescue teams, which could be critical in saving the animal’s life.<br/>
        Finally, understand that the animal is not just experiencing physical discomfort — it might be in emotional shock. Your composed demeanor can act as the first step toward healing. Kindness shown in moments of fear is never forgotten. Whether or not the animal understands your words, it will always understand your intent.<br/>
        Approach with care. Approach with compassion. Approach as if you are the bridge between their suffering and their safety. Always:</p>

        <div className='approach-txt'>
            <ul>
                <li><strong>Stay Quiet & Observant:</strong>Avoid running or raising your voice. Injured or anxious animals are highly sensitive to sound and movement. The more noise you make, the more threatened they’ll feel. Take a moment to silently observe their body language — Are they limping? Shivering? Growling? Calm observation helps you respond wisely, and assures the animal that you’re not there to hurt them.</li>
            </ul>
            <img src={Approach2} alt="approach-pic"/>
        </div>
        <div className='approach-txt'>
            <ul>
                <li><strong>Avoid Eye Contact:</strong>Looking directly into an animal’s eyes may feel natural to humans, but animals often see it as a threat or challenge. Especially in fearful situations, this can trigger a defensive response. Instead, glance sideways or keep a soft gaze. Your indirect look tells the animal that you’re peaceful and not asserting dominance — it makes them feel safe, not hunted.</li>
            </ul>
            <img src={Approach3} alt="approach-pic"/>
        </div>
        <div className='approach-txt'>
            <ul>
                <li><strong>Crouch Down:</strong>Standing tall can feel threatening to a smaller or scared animal. By crouching or sitting low, you reduce your physical presence and appear more approachable. This small change in posture makes a huge difference — it shows the animal you’re not trying to capture or attack it, but simply be close without causing harm. It helps build early trust.</li>
            </ul>
            <img src={Approach4} alt="approach-pic"/>
        </div>
        <div className='approach-txt'>
            <ul>
                <li><strong>Extend a Hand Gently (if safe):</strong>If the animal appears calm and doesn't back away, slowly stretch out your hand — low to the ground, palm down, fingers relaxed. Don’t touch immediately; let the animal sniff and come closer on its own. This slow, respectful gesture gives them control and shows you mean no harm. A safe approach is always built on permission, not force.</li>
            </ul>
            <img src={Approach5} alt="approach-pic"/>
        </div>
        <div className='approach-txt'>
            <ul>
                <li><strong>Do Not Force Contact:</strong>Even if you’re eager to help, forcing physical contact can backfire. If the animal flinches, growls, or tries to move away — stop immediately. Respect their signals. Forcing a touch can increase their stress or even cause them to bite in fear. Give them space, move slowly, and allow them to choose when (or if) they’re ready for touch.</li>
            </ul>
            <img src={Approach6} alt="approach-pic"/>
        </div>
        <h4><i>Remember, your calmness can make them feel safe.</i></h4>
      </div>
    </div>
  )
}
