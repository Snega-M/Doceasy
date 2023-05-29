import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
// import { contactConfig } from "../content_option"
import { contactConfig } from "../services/content_option"


const Contact = () => {
    return(
      <>
      <div className="background-image" style={{ backgroundImage: `url('./images/bg (1).jpg')`, marginTop:'50px' }}>
      <Container>
        <h1 className="overlay-text" style={{fontSize:'55px', marginTop:'0px'}}>
        Connect With Us - Queries, Ideas or Feedback
         </h1>
      </Container>
    </div>
 <Container style={{marginTop:'0px', padding:'100px'}}>
     
     <Row className="mb-5 mt-3" style={{textAlign:'center'}}>
       <Col lg="12">
         <h1 className="display-4 mb-4 text-center" style={{fontWeight:'500'}}>Contact  <span style={{color:'green'}}>Us</span></h1>
         <hr className="t_border my-4 ml-0 text-left" />
       </Col>
     </Row>
     <Row className="sec_sp">
       <Col lg="5" className="mb-5">
         <h3 className="color_sec py-4" style={{fontWeight:'600',color:'black'}}>Get in touch</h3>
         
         <p>{contactConfig.description}</p>
       </Col>
       <Col lg="7" className="d-flex align-items-center">
         <form  className="contact__form w-100" action="https://formsubmit.co/dyuvaraj2003@gmail.com" method="POST">
           <Row>
             <Col lg="6" className="form-group">
               <input
                 className="form-control"
                 id="name"
                 name="name"
                 placeholder="Name" 
                 type="text"
                 required 
               />
             </Col>
             <Col lg="6" className="form-group">
               <input
                 className="form-control rounded-0"
                 id="email"
                 name="email"
                 placeholder="Email"
                 type="email" 
                 required 
               />
             </Col>
           </Row>
           <br />
          <textarea
             className="form-control rounded-0"
             id="message"
             name="message"
             placeholder="Message"
             rows="5" 
             required
           ></textarea>
          
           <br />
           <Row>
             <Col lg="12" className="form-group">
               <button style={{textDecoration:'none',marginLeft: '120px',fontSize:'18px',color:'white', width:'185px',textAlign:'center', fontWeight:'600'}}  className="btn btn-success" type="submit"> 
               Send
               </button>
             </Col>
           </Row>
           <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input>
           <input type="hidden" name="_captcha" value="false"></input>
           <input type="hidden" name="_template" value="table"></input>
         </form>
       </Col>
     </Row>
   </Container>
   <div
        style={{
          height: '370px',
          width: '100%',
          backgroundColor: '#e6e7e4',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:'60px',
          fontSize: '25px',
          fontWeight: '',
          padding:'20px',
          textAlign:'center'
          
        }}
      >
       
       <p>
        <span style={{fontWeight:'bold'}}>Any more questions?</span>
        <br /><br />
       <address>
           Write to us at  {" "}
           <a href={`mailto:${contactConfig.YOUR_EMAIL}`} style={{color:'green', textDecoration:'none', fontWeight:'bold'}}>
             {contactConfig.YOUR_EMAIL}
           </a>
           
         <p>or</p>
           
           {contactConfig.hasOwnProperty("YOUR_FONE") ? (
             <p>
               Call us at  <span style={{color:'green', fontWeight:'bold'}}>{contactConfig.YOUR_FONE}</span> 
             </p>
           ) : (
             ""
           )}
 
          <p>or</p>

          <p>Visit us at <span style={{color:'green', fontWeight:'bold'}}>44/8 Krishna nagar, 1st Main road, Gandhi nagar, Puducherry , Tamilnadu - 605001</span> </p>
           

         </address>
       </p>

        
      </div>

      </>
    );
  };
  
  export default Contact;