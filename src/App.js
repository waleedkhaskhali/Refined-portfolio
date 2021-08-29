import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import logo from './bird.jpg'
import {useState} from 'react'
import 'font-awesome/css/font-awesome.min.css';
import realestate from "./Realestate.png";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import five from "./5.png";
import {
  DiReact,
  DiJavascript1,
  DiGit,
  DiBootstrap,
  DiSass,
  DiNodejsSmall,
} from "react-icons/di";
import  {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

function App() {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };


  return (
    <div className="App">
 <div className={`topnav ${isActive ? "responsive" : ""}`}id="myTopnav">
  <a href="#home" class="active" id="homes">Portfolio</a>
  <a href="#portfolio">Projects</a>
  <a href="#about">About</a>
  <a href="#skills">Technologies</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i className="fa fa-bars" onClick={handleToggle}></i>
  </a>
</div>
<header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder" id="home">Waleed Khaskhali</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Front-End Developer</p>
                    <a class="btn btn-light btn-sm" href="#about">Learn More</a>
                </div>
            </div>
        </header>
     <section class="section">
  <div class="container" >
    <div class="row" >
      <div class="col-12 text-center" >
        <h2 class="section-title" id="portfolio">PROJECTS</h2>
      </div>
    </div>
    <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i className="fa fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                
    <div class="row shuffle-wrapper">
    <div class="col-lg-4 col-6 mb-4 shuffle-item">
        <div class="position-relative rounded hover-wrapper">
          <img src={two} alt="portfolio-image" class="img-fluid rounded w-100"></img>
          <div class="hover-overlay">
            <div class="hover-content">
              <a class="btn btn-light btn-sm" href="https://kaskali.netlify.app" target="blank">view project</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-6 mb-4 shuffle-item">
        <div class="position-relative rounded hover-wrapper">
          <img src={four} alt="portfolio-image" class="img-fluid rounded w-100"></img>
          <div class="hover-overlay">
            <div class="hover-content">
              <a class="btn btn-light btn-sm" href="https://waleedstodo.netlify.app" target="blank">view project</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-6 mb-4 shuffle-item">
        <div class="position-relative rounded hover-wrapper">
          <img src={five} alt="portfolio-image" class="img-fluid rounded w-100"></img>
          <div class="hover-overlay">
            <div class="hover-content">
              <a class="btn btn-light btn-sm" href="https://waleed-khaskhali.netlify.app" target="blank">view project</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-6 mb-4 shuffle-item">
        <div class="position-relative rounded hover-wrapper">
          <img src={realestate} alt="" class="img-fluid rounded w-100"></img>
          <div class="hover-overlay">
            <div class="hover-content">
              <a class="btn btn-light btn-sm" href="https://github.com/waleedkhaskhali/Real-Estate" target="blank">view project</a>
            </div>
          </div>
        </div>
      </div>

  
      
    </div>
  </div>
</section>
<section class="page-section text-white mb-0 bg-dark py-5" id="about">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fa fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row">
                    <div class="col-lg-4 ms-auto"><p class="lead">   2019 the year I began coding, It started as a curiosity but later led to
                      a passion. My first experience with coding was with a bootcamp,
                      specifically freeCodeCamp. This was my starting steps to learn the
                      basics of coding and also the reason why I have a passion for web
                      development. </p></div>
                    <div class="col-lg-4 me-auto"><p class="lead">Along with this new found passion I also aquired some
                      cerftificates to bring verability to my name. I found that once I
                      started coding I wasnt able to stop. I always wanted to learn more and
                       more. Because of coding I switched my major to computer science, in
                       abitions of aquiring new and useful skills.</p></div>
                </div>
            </div>
        </section>
        <section class="content-section  text-black text-center" id="services">
             <div class="container px-4 px-lg-5" id="skills">
                <div class="content-section-heading">
                    <h2 class="page-section-heading text-center text-uppercase text-black">SPECIALTY</h2>
                </div>
                <div class="divider-custom">
                 <div class="divider-custom-line"></div>
                 <div class="divider-custom-icon"><i class="fa fa-star"></i></div>
                 <div class="divider-custom-line"></div>
             </div>
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="fa fa-html5" ></i></span>
                        <h4><strong>HTML5</strong></h4>
                        
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="fa fa-css3"></i></span>
                        <h4><strong>CSS3</strong></h4>
                       
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><DiJavascript1 size="3rem" color="white"></DiJavascript1></span>
                        <h4><strong>JAVASCRIPT</strong></h4>
                       
                    </div>
                    
                    <div class="col-lg-3 col-md-6">
                        <span class="service-icon rounded-circle mx-auto mb-3"><DiReact size="3rem" color="white"></DiReact></span>
                        <h4><strong>REACT</strong></h4>    
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><DiGit size="3rem" color="white"></DiGit></span>
                        <h4><strong>GIT</strong></h4>
                       
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><DiBootstrap size="3rem" color="white"></DiBootstrap></span>
                        <h4><strong>BOOTSTRAP</strong></h4>
                       
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><DiSass size="3rem" color="white"></DiSass></span>
                        <h4><strong>SASS</strong></h4>
                       
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                      
                        <span class="service-icon rounded-circle mx-auto mb-3"><DiNodejsSmall size="3rem" color="white"></DiNodejsSmall></span>
                        <h4><strong>NODE</strong></h4>
                       
                    </div>
                </div>
                
            </div>
        </section>
        <section><footer class="text-center text-lg-start bg-dark text-muted">

  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    <div class="me-5 d-none d-lg-block">
      <span>Connect with me:</span>
    </div>

    <div>
 
      <a href="https://www.linkedin.com/in/waleed-khaskhali/" target="blank" class="me-5 text-reset">
      <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </a>
      <a href="https://github.com/waleedkhaskhali" target="blank" class="me-4 text-reset">
        <AiFillGithub size="3rem"></AiFillGithub>
      </a>
    </div>

  </section>

  <section class="">
    <div class="container text-center text-md-start mt-5">

      <div class="row mt-3">

        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Portfolio
          </h6>
          <p>
         Innovating one project at a time
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fa fa-home me-3"></i> 2113 East 33rd st Brooklyn, NY, 11234</p>
          <p>
            <i class="fa fa-envelope me-3"></i>
            wkhaskhalu@gmail.com
          </p>
          <p><i class="fa fa-phone me-3"></i> 1-929-235-4345</p>

        </div>
 
      </div>
 
    </div>
  </section>



</footer></section>   
    </div>
  );
}

export default App;
