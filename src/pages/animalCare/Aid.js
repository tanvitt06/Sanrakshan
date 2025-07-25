import React from 'react'
import aid1 from "../../assets/aid1.jpg"
import aid2 from "../../assets/aid2.webp"
import aid3 from "../../assets/aid3.jpg"
import aid4 from "../../assets/aid4.webp"
import aid5 from "../../assets/aid5.webp"
import aid6 from "../../assets/aid6.jpg"
import "./Aid.css"

export default function Aid() {
  return (
    <div className='aid-sec'>
        <img src={aid1} alt="aid-pic"/>


        <div className='aid-intro'>
          <h3><strong>Basic First Aid</strong>(When Rescue is Delayed)</h3>
          <p>If professional help is delayed, your quick action can help ease pain, prevent infection, or even save a life.</p>

          <div className='aid-txt'>
            <h4>🐶For Dogs</h4>
            <div className='aid-txt-sec'>
              <div className='aid-txt-secs'>
                <p><strong>Common Scenarios:</strong>Minor injuries, road accidents, limping, bleeding, dehydration</p>
                <p><strong>First Aid Steps:</strong></p>
                <ul>
                  <li><strong>Bleeding Wound:</strong>Clean gently with saline or clean water. Wrap with a clean cloth. Avoid applying powders or creams without vet guidance.</li>
                  <li><strong>Fracture/Limping:</strong>Do not force the dog to walk. Use a towel or bedsheet to gently lift and move it to shade or shelter.</li>
                  <li><strong>Heatstroke:</strong>Move to a shady spot, place a wet towel on paws and belly. Offer small sips of water — not ice water.</li>
                  <li><strong>Bite wounds:</strong>If bitten by another dog, rinse wound and avoid touching it directly. Keep the dog isolated until help comes.</li>
                </ul>
              </div>
              <img src={aid2} alt="aid-dog-pic"/>
            </div>
          </div>

          <div className='aid-txt'>
            <h4>🐱For Cats</h4>
            <div className='aid-txt-sec'>
              <div className='aid-txt-secs'>
                <p><strong>Common Scenarios:</strong>Cuts, limping, shock, fear-based hiding</p>
                <p><strong>First Aid Steps:</strong></p>
                <ul>
                  <li><strong>Small cuts/scratches:</strong>Gently clean with lukewarm water. Do not apply Dettol, alcohol, or any strong disinfectant.</li>
                  <li><strong>Hiding in shock:</strong>Let them hide, but monitor from a distance. Place food/water nearby. Speak softly and avoid trying to pull them out.</li>
                  <li><strong>Eye discharge/infection:</strong>Wipe with a soft, damp cloth. Don’t use human eye drops.</li>
                  <li><strong>Breathing issues:</strong>Don’t panic. Keep the cat in a calm space away from noise. Contact vet/rescue immediately.</li>
                </ul>
              </div>
              <img src={aid3} alt="aid-cat-pic"/>
            </div>
          </div>

          <div className='aid-txt'>
            <h4>🕊️For Birds</h4>
            <div className='aid-txt-sec'>
              <div className='aid-txt-secs'>
                <p><strong>Common Scenarios:</strong>Fallen fledglings, wing injury, bleeding, unconsciousness</p>
                <p><strong>First Aid Steps:</strong></p>
                <ul>
                  <li><strong>If a baby bird falls:</strong>Place it gently in a small basket/box with soft cloth and keep it high where predators can’t reach. Observe if parent birds return.</li>
                  <li><strong>Injured wings:</strong>Don’t stretch the wing. Wrap bird loosely in cloth to restrict movement and keep it in a dark, quiet space.</li>
                  <li><strong>Bleeding:</strong> Apply gentle pressure with sterile gauze. Do not use cotton (it sticks)</li>
                  <li><strong>Unconscious bird:</strong>Place in ventilated, warm box in silence. Sometimes they revive from shock in 20–30 mins.</li>
                </ul>
              </div>
              <img src={aid4} alt="aid-bird-pic"/>
            </div>
          </div>

          <div className='aid-txt'>
            <h4>🐿️For Squirrels</h4>
            <div className='aid-txt-sec'>
              <div className='aid-txt-secs'>
                <p><strong>Common Scenarios:</strong>Fallen from tree, bleeding, unconscious</p>
                <p><strong>First Aid Steps:</strong></p>
                <ul>
                  <li><strong>Fallen baby squirrel:</strong>Gently place it in a soft cloth inside a small open box. Keep it warm. Mother squirrels often return in 30–60 mins if nearby.</li>
                  <li><strong>Bleeding wound:</strong>Clean the area using clean water or saline. Do not use Dettol or strong antiseptics. Wrap in a soft cloth and avoid movement.</li>
                  <li><strong>Shock/unconscious:</strong>Keep in dark box with soft cloth. Do not shake or try to "wake up."</li>
                </ul>
              </div>
              <img src={aid5} alt="aid-squirrel-pic"/>
            </div>
          </div>

          <div className='aid-txt'>
            <h4>🐄For Large or Stray Animals (Cows, Goats, etc.)</h4>
            <div className='aid-txt-sec'>
              <div className='aid-txt-secs'>
                <p><strong>Common Scenarios:</strong>Road accidents, limping, bleeding, choking</p>
                <p><strong>First Aid Steps:</strong></p>
                <ul>
                  <li><strong>Bleeding injuries:</strong>Cover with a clean cloth. If bleeding is heavy, tie a clean cloth above the wound (tourniquet style) temporarily.</li>
                  <li><strong>Fractures or unable to stand:</strong>Do not force them to move. Give shade, water and alert local NGO or vet.</li>
                  <li><strong>Maggot wounds (open wounds with worms):</strong>If trained, you can sprinkle neem powder or turmeric around the wound. Do not poke.</li>
                </ul>
              </div>
              <img src={aid6} alt="aid-bird-pic"/>
            </div>
          </div>
        </div>


        <div className='aid-lastSec'>
          <h3>🔔Final Note</h3>
          <ul>
            <li>Always wear gloves or use a cloth while handling injuries.</li>
            <li>Never feed milk to birds or injured animals.</li>
            <li>Keep a basic first aid kit for animals: saline, gloves, clean cloth, Betadine, scissors, soft towel.</li>
          </ul>
        </div>
    </div>
  )
}