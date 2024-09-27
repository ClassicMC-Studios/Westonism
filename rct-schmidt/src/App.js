import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main">
      <h1>A. Edward and Louise <span className="primary bold">Schmidt</span> Family</h1><br/>
      <p class="quote italic">This site is for sharing contact information, birthdays, or anything else that would be of general interest for the family. <span className="bold">Contact us</span> if you would like to add something new to the site.</p>
      <div className="grid-2">
        <p className="grid-item">Click <a href="#" className="a-simple">here</a> to go to the contact information page to view or update addresses, birthdays, etc.</p>
        <p className="grid-item">Click <a href="#" className="a-simple">here</a> to go to the family history page to read about our family.</p>
      </div>
      <div className="grid-3">
        <p className="grid-item italic border">2011 Getogether Photos	</p>
        <p className="grid-item italic border">Reunion 2007 Photos & Video	</p>
        <p className="grid-item italic border">Dan Schmidt Family 1989-2001 Video Summary</p>
      </div>
      <div className="grid-6">
        <img src="https://family.schmidtsoftware.com/images/30px-Flag_of_the_Habsburg_Monarchy_svg.png" className="opac-hover grid-item" width="40px" height="30px"/>
        <img src="https://family.schmidtsoftware.com/images/22px-Flag_of_the_United_States_svg.png" className="opac-hover grid-item" width="40px" height="30px"/>
        <img src="https://family.schmidtsoftware.com/images/30px-Flag_of_Germany_svg.png" className="opac-hover grid-item" width="40px" height="30px"/>
        <img src="https://family.schmidtsoftware.com/images/40px-Flag_of_Switzerland_svg.png" className="opac-hover grid-item" width="30px" height="30px"/>
        <img src="https://family.schmidtsoftware.com/images/40px-Flag_of_France_svg.png" className="opac-hover grid-item" width="40px" height="30px"/>
        <img src="https://family.schmidtsoftware.com/images/20px-Flag_of_Italy_svg.png" className="opac-hover grid-item" width="40px" height="30px"/>
      </div>
      <p className="italic">This page was updated 17 Apr 2024 by Dan Schmidt</p>
    </div>
  );
}

export default App;
