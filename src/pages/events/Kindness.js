import React from 'react'
import kindness1 from '../../assets/kind1.webp'
import kindness2 from '../../assets/kind2.jpg'
import kindness3 from '../../assets/kind3.jpg'
import kindness4 from '../../assets/kind4.jpg'
import kindness5 from '../../assets/kind5.jpg'
import kindness6 from '../../assets/kind6.jpeg'
import kindness7 from '../../assets/kind7.jpg'
import kindness8 from '../../assets/kind8.jpeg'
import kindness9 from '../../assets/kind9.jpeg'
import kindness10 from '../../assets/kind10.jpeg'
import "./Kindness.css"

export default function Kindness() {
  return (
    <div className='kindness-sec'>
      <img src={kindness1} alt="kindness-pic"/>


      <div className='kindness-intro'>
        <h3><strong>Kindness at School:</strong> Nurturing Compassion in Young Hearts</h3>
        <div className='kindness-des'>
          <ul>
            <li><strong>Date:</strong>March 2025</li>
            <li><strong>Location:</strong>Saraswati School, Udaipur</li>
            <li><strong>Event Type:</strong>Awareness Workshop on Animal Welfare</li>
          </ul>
          <div className='kindness-des-sec'>
            <p>In March 2025, the classrooms of Saraswati School, Udaipur, turned into spaces of learning beyond textbooks — with a special awareness workshop titled Kindness at School. This initiative aimed to instill empathy and responsibility towards animals among school students through creative, interactive, and thought-provoking activities.<br/>
            The objective was to help children understand the importance of being kind to stray animals and how their actions — however small — can bring about meaningful change in the lives of voiceless beings.</p>
            <img src={kindness2} alt="kindness-pic"/>
          </div>
        </div>

        <div className='kindness-evt'>
          <h4>What Happened During the Event:</h4>
          <div className='kindness-evt-sec'>
            <ul>
              <li>Volunteers conducted engaging storytelling sessions focused on animals and empathy.</li>
              <li>Fun activities like "Draw Your Favourite Animal" encouraged creative thinking and connection.</li>
              <li>Students were taught what to do when they see an injured or scared animal.</li>
              <li>Role-plays and Q&A rounds helped break fear and spread awareness in a friendly manner.</li>
              <li>A brief session on animal safety and rescue was also held for the school staff.</li>
            </ul>
            <img src={kindness3} alt="kindness-pic"/>
          </div>
        </div>

        <div className='kindness-impact'>
          <h4>Impact:</h4>
          <div className='kindness-impact-sec'>
            <ul>
              <li>Over 200 students participated and enthusiastically pledged to be kinder to animals.</li>
              <li>Teachers appreciated the initiative and discussed adding regular animal welfare sessions in the curriculum.</li>
              <li>Students shared their own experiences with animals and showed eagerness to help them in need.</li>
              <li>Several parents later reached out to appreciate the awareness their children brought home.</li>
            </ul>
            <img src={kindness4} alt="kindness-pic"/>
          </div>
          <p>Kindness at School sowed the seeds of empathy in young minds — a step towards raising a generation that grows up not just with knowledge, but with compassion. Because kindness begins where learning never ends.</p>
        </div>
      </div>

      <div className='kindness-images'>
        <h3>Glimpse Of Events</h3>
        <div className='kindness-img-sec'>
          <img src={kindness5} alt="kindness-pic"/>
          <img src={kindness6} alt="kindness-pic"/>
          <img src={kindness7} alt="kindness-pic"/>
        </div>
        <div className='kindness-img-sec'> 
          <img src={kindness8} alt="kindness-pic"/>
          <img src={kindness9} alt="kindness-pic"/>
        </div>
        <div className='kindness-img-sec'>
          <img src={kindness10} alt="kindness-pic"/>
        </div>
      </div>
    </div>
  )
}
