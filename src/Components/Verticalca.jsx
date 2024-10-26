import React from 'react';
import './Verticalca.css'; // Import the CSS
import p1 from '../Assets/p-1.jpg';
import p2 from '../Assets/p-2.jpg';
import p3 from '../Assets/p-3.jpg';
import p4 from '../Assets/p-4.jpg';
import p5 from '../Assets/p-5.jpg';
import p6 from '../Assets/p-6.jpg';
import p7 from '../Assets/p-7.jpg';
import p8 from '../Assets/p-8.jpg';
import p9 from '../Assets/p-9.jpg';


function Vertcalca() {
  const friendSuggestions1 = [
    { image: p1},
    { image: p2 },
    { image: p3 },
    { image: p1 },
    { image: p2 },
    { image: p4 },
    { image: p3 },
    { image: p1 },
    { image: p2 },
    { image: p3 },
    { image: p1 },
  ];

  const friendSuggestions2 = [
    { image: p5},
    { image: p6 },
    { image: p7 },
    { image: p8 },
    { image: p9 },
    { image: p5 },
    { image: p7 },
    { image: p8 },
    { image: p9 },
    { image: p5 },
    { image: p6 },
  ];

  const slideLeft1 = () => {
    document.getElementById('suggestion-cards-1').scrollLeft -= 300;
  };

  const slideRight1 = () => {
    document.getElementById('suggestion-cards-1').scrollLeft += 300;
  };

  const slideLeft2 = () => {
    document.getElementById('suggestion-cards-2').scrollLeft -= 300;
  };

  const slideRight2 = () => {
    document.getElementById('suggestion-cards-2').scrollLeft += 300;
  };

  return (
    <div className="profile-page">
      {/* Friend Suggestions Section 1 */}
      <div className="friend-suggestions">
        <button className="slide-btn left-btn" onClick={slideLeft1}>{'<'}</button>
        <div className="suggestion-cards" id="suggestion-cards-1">
          {friendSuggestions1.map((person, index) => (
            <div key={index} className="suggestion-card">
              <img src={person.image} alt={person.name} />
            </div>
          ))}
        </div>
        <button className="slide-btn right-btn" onClick={slideRight1}>{'>'}</button>
      </div>

      {/* Friend Suggestions Section 2 */}
      <div className="friend-suggestions">
        <button className="slide-btn left-btn" onClick={slideLeft2}>{'<'}</button>
        <div className="suggestion-cards" id="suggestion-cards-2">
          {friendSuggestions2.map((person, index) => (
            <div key={index} className="suggestion-card">
              <img src={person.image} alt={person.name} />
            </div>
          ))}
        </div>
        <button className="slide-btn right-btn" onClick={slideRight2}>{'>'}</button>
      </div>
    </div>
  );
}

export default Vertcalca;
