import React from 'react'
import aware1 from '../../assets/aware1.jpeg'
import aware2 from '../../assets/aware2.avif'
import aware3 from '../../assets/aware3.jpg'
import aware4 from '../../assets/aware4.jpeg'
import aware5 from '../../assets/aware5.jpeg'
import aware6 from '../../assets/aware6.jpg'
import "./Awareness.css"

function Awareness() {
  return (
    <div className='aware-sec'>
      <img src={aware1} alt="aware-pic"/>

      <div className='aware-intro'>
        <div className='aware-intro-txt'>
            <h3>Why Awareness Matters?</h3>
            <p>Every day, thousands of animals suffer in silence — not because help doesn’t exist, but because people don’t realize they need it. Awareness is the first step toward change; it opens minds, touches hearts, and helps people understand the silent pain animals go through — pain that often goes unnoticed in busy lives. When someone learns how even a small act — like offering water to a stray, speaking up against cruelty, or choosing to adopt — can change a life, it creates a ripple effect. Awareness doesn't just inform, it inspires. It turns passive observers into active protectors. The more people know, the more they care. And the more they care, the more lives we can save. That’s why spreading awareness is not just important — it’s powerful, necessary, and life-saving.</p>
        </div>
        <div className='aware-intro-img'>
            <img src={aware2} alt="aware-cat-pic"/>
        </div>
      </div>

      <div className='aware-cards-txt'>
        <h3>Be the Change for Animals -</h3>
        <div className='aware-cards'> 
          <div className='aware-card-sec'>
            <img src={aware3} alt="aware-parrot-pic"/>
            <h4>Recognize Animal Cruelty</h4>
            <p>Animal cruelty includes hitting, starving, ignoring, or abandoning animals. Every day, countless street animals silently suffer. Even small acts of kindness can help reduce their pain and fear.</p>
          </div>
          <div className='aware-card-sec'>
            <img src={aware4} alt="aware-parrot-pic"/>
            <h4>Animal Laws in India</h4>
            <p>India has strict laws against animal cruelty, but many people remain unaware. Learning about these rights empowers us to report abuse and protect the voiceless with confidence.</p>
          </div>
          <div className='aware-card-sec'>
            <img src={aware5} alt="aware-parrot-pic"/>
            <h4>Adopt, Don’t Shop</h4>
            <p>Adopting animals from shelters saves lives. When you adopt, you give a homeless animal love, care, and safety — instead of supporting harmful breeding and pet trade systems.</p>
          </div>
          <div className='aware-card-sec'>
            <img src={aware6} alt="aware-parrot-pic"/>
            <h4>Care for Street Animals</h4>
            <p>Street animals often live without food, shelter, or medical help. Offering water, food, or even calling a rescue can improve their lives and show real compassion.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awareness;