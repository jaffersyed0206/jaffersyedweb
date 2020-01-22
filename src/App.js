import React, {useState} from 'react';
import './App.css';

function App() {
  const [currentState, setCurrentState] = useState({
    state: {}
  })
  const [jaffmodal, setJaffModal] = useState({
    jaffmodal: false
  })

  const JaffModal = ({modaljaff , data}) => {
    if (modaljaff === true) {
      return (
        <div>
          <div className="jaff-modal">
           <div className="container">
            <div className="jaff-modal-padding">
             <div className="modal-container">
              <div className="container">
               <span className="closebtndark" onClick={() => {
                 setJaffModal({
                   jaffmodal: false
                 })
               }}>&times;</span>
                <h3>{data.title}</h3>
                <h5>{`Status: ${data.subtitle}`}</h5>
                <div className="project-description">
                  <h6>{data.description}</h6>
                </div>
                <h4>GitHub</h4>
                 <h5>{`Front-End: ${data.frontend}`}</h5>
                 <h5>{`Back-End: ${data.backend}`}</h5>
              </div>
             </div>
            </div>
           </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div>
      <JaffModal modaljaff={jaffmodal.jaffmodal} data={currentState.state} />
      <div className="page">
       <div className="container">
       <div className="float-right">
        <div className="row">
         <div className="col-md-6">
          <div className="button-padding">
          <button className="button-grey" onClick={() => {
            window.location.href = "https://github.com/jaffersyed0206"
          }} >GITHUB</button>
          </div>
         </div>
         <div className="col-md-6">
          <div className="button-padding">
          <button className="button-blue" onClick={() => {
            window.location.href = "https://www.linkedin.com/in/jaffer-syed-124a3418b"
          }}>LINKEDIN</button>
          </div>
         </div>
        </div>
       </div>
        <h5>Jaffer Syed</h5>
        <div className="project-container">
         <h2>Side Projects / Work Applications / Work Experience</h2>
         <div className="applications">
          <div className="row">
           <div className="col-md-4"> 
            <div className="card-padding">
            <div className="card-project" onClick={() => {
              setJaffModal({
                jaffmodal: true,
              })
              setCurrentState({
                state: {
                  title: "Vinco Management Application",
                  subtitle: "Side Project",
                  description: "Vinco Management Application, is a project management application that helps teams focus and work together more efficently in a way where they can use other teams within the application as a resource to further approach a team's goal.",
                  frontend: "https://github.com/jaffersyed0206/vinco_frontend",
                  backend: "https://github.com/jaffersyed0206/vinco_backend"
                }
              })
            }}>
              <h5 className="text-center">Vinco Management Application</h5>
            </div>
            </div>
           </div>
           <div className="col-md-4"> 
            <div className="card-padding">
            <div className="card-project" onClick={() => {
              setJaffModal({
                jaffmodal: true
              })
              setCurrentState({
                state: {
                  title: "JPI Programming Services",
                  subtitle: "Side Project",
                  description: "JPI Programming Services, is an application for developers to use both backend and frontend functions and methods for multiple technologies to help with the production for a user's applications.",
                  frontend: "https://github.com/jaffersyed0206/JPI-web-page",
                  backend: "https://github.com/jaffersyed0206/JPI-backend-console"
                }
              })
            }}>
              <h5 className="text-center">JPI Programming Services</h5>
            </div>
            </div>
           </div>
           <div className="col-md-4"> 
            <div className="card-padding">
            <div className="card-project" onClick={() => {
              setJaffModal({
                jaffmodal: true
              })
              setCurrentState({
                state: {
                  title: "Speech Synthesis Application",
                  subtitle: "Work Experience Project",
                  description: "Speech Synthesis Project, allows for users to speak and communicate in a way that does not require actual verbal speech from the user.",
                  frontend: "Non-disclosure project cannot post github.",
                  backend: "Non-disclosure project cannot post github."
                }
              })
            }}>
              <h5 className="text-center">Speech Synthesis Application</h5>
            </div>
            </div>
           </div>
           <div className="col-md-4"> 
            <div className="card-padding">
            <div className="card-project" onClick={() => {
              setJaffModal({
                jaffmodal: true
              })
              setCurrentState({
                state: {
                  title: "Medical Diagnosis Application",
                  subtitle: "Side Project",
                  description: "Medical Diagnosis application allows for users to speak about how they feel without just giving direct symptoms and gaining a list of possible diagnosis by probability.",
                  frontend: "https://github.com/jaffersyed0206/med-machine",
                  backend: "https://github.com/jaffersyed0206/med-machine"
                }
              })
            }}>
              <h5 className="text-center">Medical Diagnosis Application</h5>
            </div>
            </div>
           </div>
           <div className="col-md-4"> 
            <div className="card-padding">
            <div className="card-project" onClick={() => {
              setJaffModal({
                jaffmodal: true
              })
              setCurrentState({
                state: {
                  title: "USF Research Technical Engineer",
                  subtitle: "Work Experience",
                  description: "I work currently as a Research Engineer where I develop software for the institution, and other researchers and conduct studies on the applications and software that me and my team develop.",
                  frontend: "",
                  backend: ""
                }
              })
            }}>
              <h5 className="text-center">USF Research Technical Engineer</h5>
            </div>
            </div>
           </div>
           <div className="col-md-4"> 
            <div className="card-padding">
            <div className="card-project" onClick={() => {
              setJaffModal({
                jaffmodal: true
              })
              setCurrentState({
                state: {
                  title: "Research Database Visualization Application",
                  subtitle: "Side Project",
                  description: "Current side project where I create a database that can visualize the data for members in a team that cannot read a database, data can be seen in one or more graph types such as line graph, bar graph, pie graph, 3D visualization, etc.",
                  frontend: "",
                  backend: ""
                }
              })
            }}>
              <h5 className="text-center">Research Database Visualization Application</h5>
            </div>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
    </div>    
  );
}

export default App;
