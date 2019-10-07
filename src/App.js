import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Sallys Resume">
        <h1>Sally here, welcome to my Resumé</h1>
      </header>
      <main>
        
        <section>
          <h4>Contact me</h4>
            <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" className="App-logo" alt="logo" />
            <p>Sally Suzie Shannon</p>
            <a href="mailto:Sally@suzie.com">Sally@SallySuzie.com</a>
            <p>(555)555-5555</p>
        </section>

        <section>
          <h4>Education</h4>
          <ul>
            <li>B.A Deconstructing meaning and tone from text / School of Life</li>
            <li>Engineering Immersion / Thinkful</li>
          </ul>
        </section>

        <section>
          <h4>Experience</h4>
          <ul>
            <li>Bob's Burgers</li>
            <li>Dunder Mifflin Paper Company</li>
          </ul>
        </section>
      </main>





       
      
    </div>
  );
}

export default App;
