

import React from 'react';
import Card from 'react-bootstrap/Card';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import salvik from '../images/salvik4.5.jpg';
import ishita from '../images/ishita1.jpg';
import Shrija from '../images/shrija.jpg';
import arjun from '../images/arjun.jpg'
import indrila from '../images/indrila.jpg'
import Puja from '../images/puja.jpg'

import '../css/aboutUs.css';  // Import the CSS file

function AboutUs() {
  return (
    <div className="about-us-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${require('../images/2.jpg')})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          position: 'fixed',
          width: '100%',
          zIndex: '-1'
        }}
      ></div>
      <div className="content">
        <Title />
        <Navbar />

        <div className='container' style={{ color: 'black', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <div className='container'>
            <header>
              <h1 style={{ fontWeight: 'bold', textAlign: 'center', margin: '0px', color: 'black', marginTop: '20px' }}>About Us</h1>
            </header>

            <section className="mission">
              <div className="container">
                <h2>Our Mission</h2>
                <p>
                  E-Crime Report Hub is committed to providing a secure and accessible platform for victims of crimes to
                  report incidents online and manage their cases effectively. Our mission is to bridge the gap between law
                  enforcement and the community, ensuring a swift and just response to criminal activities.
                </p>
              </div>
            </section>
            <section className="values">
              <div className="container">
                <h2>Our Core Values</h2>
                <ul>
                  <li><strong>Integrity:</strong> We uphold the highest standards of honesty and ethics in all our
                    interactions.</li>
                  <li><strong>User-Centricity:</strong> Our users' needs and concerns are at the heart of our platform's
                    design and operation.</li>
                  <li><strong>Transparency:</strong> We operate with transparency, ensuring that our users are
                    well-informed throughout the process.</li>
                  <li><strong>Community Impact:</strong> We are committed to making our communities safer by facilitating
                    crime reporting and prevention.</li>
                </ul>
              </div>
            </section>
            <section className="why-choose-us">
              <div className="container">
                <h2>Why Choose Us</h2>
                <p>
                  When you choose E-Crime Report Hub, you benefit from:
                </p>
                <ul>
                  <li>Efficient online FIR filing and case management.</li>
                  <li>Experienced professionals dedicated to your safety.</li>
                  <li>Timely updates on your case status.</li>
                  <li>A user-friendly platform accessible from anywhere.</li>
                  <li>Community-focused initiatives for safer neighborhoods.</li>
                </ul>
              </div>
            </section>
            <section className="team">
              <div className="container">
                <h2 style={{ textAlign: 'center' }}>Our Team</h2>
                <div className="team-members" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <div className="team-member" style={{ flex: '0 0 25%', border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
                    <img className="team-member-img" src={salvik} alt="John Doe" />
                    <h3>Salvik Bhowal</h3>
                    <p>Data Engineer <br />
                      (Team Lead)</p>
                    <p>An aspiring data professional passionate about leveraging data to drive insights and informed decision-making. Skilled in Data Engineering, Data Analysis, programming.
                    </p>
                  </div>
                  <div className="team-member" style={{ flex: '0 0 25%', border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
                  <img className="team-member-img" src={ishita} alt="John Doe" />
                    <h3>Ishita Shaw</h3>
                    <p>Backend Developer</p>
                    <p>She's responsible for overseeing an organization's technological vision, strategy, and implementation to align with business objectives, leading the development and execution of technology initiatives, ensuring innovation and efficiency within the company.</p>
                  </div>
                  <div className="team-member" style={{ flex: '0 0 25%', border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
                  <img className="team-member-img" src={Shrija} alt="John Doe" />
                    <h3>Shrija Shaw</h3>
                    <p>Automation Engineer</p>
                    <p>My strength is that I am patient,determined,focused . I have always been a fast learner and I love to keep up my process of learning to figure out better ways of solving problems. Moreover, I love to compete with my own past performances  rather than competing with my peers, as I believe that improvement is always better than perfection.</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="team">
              <div className="container">
               
                <div className="team-members" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <div className="team-member" style={{ flex: '0 0 25%', border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
                    <img className="team-member-img" src={arjun} alt="John Doe" />
                    <h3>Arjun Prasad</h3>
                    <p> Quality Assurance Engineer</p>
                    <p>A quick learner, focused and passionate individual responsible for managing data and stats throughout the organization. Skilled in Data Analysis and Data Management.
                    </p>
                  </div>
                  <div className="team-member" style={{ flex: '0 0 25%', border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
                  <img className="team-member-img" src={Puja} alt="John Doe" />
                    <h3>Puja Roy</h3>
                    <p>Fullstack Developer</p>
                    <p>She is responsible for managing the entire lifecycle of product development, from conceptualization to launch, ensuring that products meet market needs and align with business objectives. She leads cross-functional teams to drive innovation, oversees design and development processes, and ensures timely delivery and high-quality standards for all products.</p>
                  </div>
                  <div className="team-member" style={{ flex: '0 0 25%', border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
                  <img className="team-member-img" src={indrila} alt="John Doe" />
                    <h3>Indrila Maitra</h3>
                    <p>Frontend Developer</p>
                    <p>I am passionate about leveraging technology to solve real-world problems. Skilled in software development, and web technologies. Eager to contribute to innovative projects and continue learning in the ever-evolving field of computer science.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <footer style={{ height: '35px', position: 'auto', left: '0', bottom: '0', width: '100%', backgroundColor: 'rgba(13, 2, 2, 1)', color: 'white', textAlign: 'center', padding: '10px' }}>
          <p>&copy; 2024 E-Crime Report Hub</p>
        </footer>
      </div>
    </div>
  );
}

export default AboutUs;
