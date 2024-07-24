import React, { useState, useEffect } from 'react';
import logo from '../../images/large-dNk4O_UUZ-transformed (1).png';
import { FaBars } from 'react-icons/fa'; // Import the pi-bars icon
import { Link } from 'react-router-dom'

function RegistrationForm() {
  const [isHovered, setIsHovered] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu
  const [showLoginPopup, setShowLoginPopup] = useState(false); // State to control the visibility of the LoginPopup

  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    // Function to toggle the LoginPopup visibility
    const toggleLoginPopup = () => {
      setShowLoginPopup(!showLoginPopup);
    };
    const P2pHeaderStyle = {
      maxHeight: windowWidth < 768 ? '20vh' : '10vh',
      width: 'auto',
      // backgroundColor: '#E9F4FA',
      display: 'flex',
      alignItems: 'center',
      justifyContent:  windowWidth < 320 ? 'centre' : 'flex-start',
      color: '#042642',
      fontFamily: 'monospace',
      borderRadius: '30px',
      // border: '1px solid #04264229',
      marginLeft: '1.5%',
      marginRight: '1.5%',
      marginTop: windowWidth < 450 ? '3%' : '1%',
      flexDirection: windowWidth < 320 ? 'column' : 'row',
    };
    const logoStyle = {
      width: '8%',
      height: '8%',
      filter: 'brightness(1.1) contrast(1.5)',
      marginRight:'2%',
      marginLeft:'1%'
    };
    const titleStyle = {
      fontFamily: "'Libre Baskerville', serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0rem',
      marginLeft:windowWidth < 450 ? '25%' : '1%',
      marginRight:windowWidth < 450 ? '35%' : '40%',
    };
    const renderStyles = () => {
      if (windowWidth < 450) {
        return {
          position: isMenuOpen ? 'fixed' : 'absolute',
          top: 0,
          right: 0,
          marginTop:'10%',
          width: '150px',
          height: '15vh',
          backgroundColor: '#E9F4FA',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap:'20px',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
        };
      } else {
        return {    display: 'flex',
        justifyContent: 'flex-end',
        gap: '15px',
        marginLeft: '1%',
        };
      }
    };
    const colors = ['#27BBAF41', '#974EAD4E', '#09599F50', '#00BFFF4E'];

    const buttonStyle = (button) => ({
      marginRight: '2%',
      padding:'10px',
      background: windowWidth < 450 ? '#00BFFF4E' : (isHovered[button] ? colors[Math.floor(Math.random() * colors.length)] : 'transparent'),
      borderRadius:'20px',
      border: windowWidth < 450 ? '1px solid #04264229' :(isHovered[button] ? '1px solid #04264229' : 'none'),
      fontFamily: isHovered[button] ? "'Tektur', cursive" : "'Tektur', cursive",
      whiteSpace: 'nowrap',
    });
    const renderButtons = () => (
      <div style={renderStyles()}>
        <button 
          style={buttonStyle('demo')} 
          onMouseEnter={() => setIsHovered({...isHovered, demo: true})}
          onMouseLeave={() => setIsHovered({...isHovered, demo: false})}
        >
          Book A Demo
        </button>
        <button 
          style={buttonStyle('brochure')} 
          onMouseEnter={() => setIsHovered({...isHovered, brochure: true})}
          onMouseLeave={() => setIsHovered({...isHovered, brochure: false})}
        >
          Brochure
        </button>
        <button 
          style={buttonStyle('login')} 
          onMouseEnter={() => setIsHovered({...isHovered, login: true})}
          onMouseLeave={() => setIsHovered({...isHovered, login: false})}
          onClick={toggleLoginPopup}
        >
          Admin Login
        </button>
      </div>
    );

 

  

  //form1
  const [formData, setFormData] = useState({
    SCHOOL_NAME: '',
    SYLLABUS_TYPE: '',
    ADH_NAME: '',
    ADH_MOBILE: '',
    ADH_EMAIL: '',
    D_NO: '',
  });

  const [showForm, setShowForm] = useState(false); // State to control form visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleFormVisibility = () => setShowForm(!showForm); // Toggle visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  //form2

  const [anotherFormData, setAnotherFormData] = useState({
    SCHOOL_NAME: '',
    SYLLABUS_TYPE: '',
    ADH_NAME: '',
    ADH_MOBILE: '',
    ADH_EMAIL: '',
    D_NO: '',
  });
  
  const [showAnotherForm, setShowAnotherForm] = useState(false);

  const toggleAnotherFormVisibility = () => setShowAnotherForm(!showAnotherForm);
    
  const handleAnotherSubmit = (e) => {
    e.preventDefault();
    console.log(anotherFormData);
  };
  const handleAnotherChange = (e) => {
    const { name, value } = e.target;
    setAnotherFormData({
      ...anotherFormData,git branch
      [name]: value,
    });
  };


  const styles = {

    formAnimation: {
      animation: showForm ? 'slideIn 0.5s forwards' : 'none', // Apply animation if showForm is true
    },

    body: {
      
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      
    },
    container: {
      maxWidth: '600px',
      margin: '0 0 0 auto', // Adjust margin to move container to the right side
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    header: {
      marginBottom: '20px',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    inputBox: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '10px',
    },
    label: {
      marginBottom: '5px',
    },
    input: {
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    submitButton: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    flexContainer: {
      display: 'flex',
      justifyContent: 'flex-start', // Align items to the start of the container
      gap: '20px', // Space between the button and the form
    },
    pageContainer: {
      display: 'flex',
      flexDirection: 'row',
      height: '100vh', // Full height of the viewport
    },
    buttonContainer: {
        margin:'200px',
      flex: 1, // Take up 1/2 of the space
      padding: '20px', // Adjust as needed
        display: 'flex',
        flexDirection: 'column',
        gap:'10px',
    },
    formContainer: {
      flex: 1,
      padding: '20px',
      transition: 'opacity 0.5s ease', // Smooth transition for opacity
      opacity: showForm ? 1 : 0, // Conditional opacity based on showForm
      display: showForm ? 'block' : 'none', // Ensure the form is not clickable when hidden
    },
    // Other styles...
    buttons:{
      padding: '20px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      margin:'12px',
      width:'200px',

    },
  };

  return (
    <>
    <div style={P2pHeaderStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <div style={titleStyle}>
<p style={{
  margin: '0', 
  fontSize: windowWidth < 900 ? '0.4rem' : (windowWidth < 1000 ? '0.8rem' : '1.2rem'), 
  fontFamily: "'Rubik Doodle Shadow', cursive",
  fontWeight: '900' // Add this line
}}>
  DIGITAL SCHOOLING
</p>
      <p style={{margin: '0', fontWeight: '900', fontSize: windowWidth < 900 ? '0.3rem' : '1rem'}}>
        <span style={{color: '#0E5E9D'}}>P2P </span> 
        <span style={{color: '#F965A0'}}>TECHWORKS</span>
      </p></div>
      {windowWidth < 450 ? (
        <FaBars onClick={() => setIsMenuOpen(!isMenuOpen)} /> // Render the pi-bars icon and toggle the menu on click
      ) : (
        renderButtons()
      )}
      {isMenuOpen && windowWidth < 450 && renderButtons()} 
    </div>
    

    <div style={styles.pageContainer}>
      <div style={styles.buttonContainer}>
        {/* Place your buttons here */}
        <button style={styles.buttons} onClick={toggleFormVisibility}>Teacher Registration</button>   
        <button style={styles.buttons} onClick={toggleAnotherFormVisibility}>Parent Registration</button> 
        {/* Add more buttons as needed */}
      </div>
      {showForm &&(
              <div style={styles.formContainer}>
              <section style={styles.container}>
                <header style={styles.header}>Teacher Registration</header>
                <form className="form" onSubmit={handleSubmit} style={styles.form}>
                  {/* Form fields */}
                  <div style={styles.inputBox}>
                  <label style={styles.label}> SCHOOL_NAME</label>
                  <input
                    type="text"
                    name="SCHOOL_NAME"
                    value={formData.SCHOOL_NAME}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputBox}>
                  <label style={styles.label}> SCHOOL_CODE</label>
                  <input
                    type="text"
                    name="SCHOOL_CODE"
                    value={formData.SCHOOL_CODE}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputBox}>
                  <label style={styles.label}>SYLLABUS_TYPE</label>
                  <input
                    type="text"
                    name="SYLLABUS_TYPE"
                    value={formData.SYLLABUS_TYPE}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputBox}>
                  <label style={styles.label}>ADH_NAME</label>
                  <input
                    type="text"
                    name="ADH_NAME"
                    value={formData.ADH_NAME}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                {/* <div className="column"> */}
                  <div style={styles.inputBox}>
                    <label style={styles.label}>ADH_MOBILE</label>
                    <input
                      type="text"
                      name="ADH_MOBILE"
                      value={formData.ADH_MOBILE}
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.inputBox}>
                    <label style={styles.label}>ADH_EMAIL</label>
                    <input
                      type="text"
                      name="ADH_EMAIL"
                      value={formData.ADH_EMAIL}
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </div>
                
                <div style={styles.inputBox}>
                  <label style={styles.label}>D_NO</label>
                  <input
                    type="text"
                    name="D_NO"
                    value={formData.D_NO}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                {/* <button type="submit" style={styles.submitButton}>Submit</button> */}
                <Link to="/Signup" type="submit" style={styles.submitButton}>Submit</Link>

                </form>
              </section>
            </div>
      

      )}


{showAnotherForm &&(
              <div style={styles.formContainer}>
              <section style={styles.container}>
                <header style={styles.header}>Parent Registration</header>
                <form className="form" onSubmit={handleAnotherSubmit} style={styles.form}>
                  {/* Form fields */}
                  <div style={styles.inputBox}>
                  <label style={styles.label}> SCHOOL_NAME</label>
                  <input
                    type="text"
                    name="SCHOOL_NAME"
                    value={anotherFormData.SCHOOL_NAME}
                    onChange={handleAnotherChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputBox}>
                  <label style={styles.label}> SCHOOL_CODE</label>
                  <input
                    type="text"
                    name="SCHOOL_CODE"
                    value={anotherFormData.SCHOOL_CODE}
                    onChange={handleAnotherChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputBox}>
                  <label style={styles.label}>SYLLABUS_TYPE</label>
                  <input
                    type="text"
                    name="SYLLABUS_TYPE"
                    value={anotherFormData.SYLLABUS_TYPE}
                    onChange={handleAnotherChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.inputBox}>
                  <label style={styles.label}>ADH_NAME</label>
                  <input
                    type="text"
                    name="ADH_NAME"
                    value={anotherFormData.ADH_NAME}
                    onChange={handleAnotherChange}
                    style={styles.input}
                  />
                </div>
                {/* <div className="column"> */}
                  <div style={styles.inputBox}>
                    <label style={styles.label}>ADH_MOBILE</label>
                    <input
                      type="text"
                      name="ADH_MOBILE"
                      value={anotherFormData.ADH_MOBILE}
                      onChange={handleAnotherChange}
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.inputBox}>
                    <label style={styles.label}>ADH_EMAIL</label>
                    <input
                      type="text"
                      name="ADH_EMAIL"
                      value={anotherFormData.ADH_EMAIL}
                      onChange={handleAnotherChange}
                      style={styles.input}
                    />
                  </div>
                
                <div style={styles.inputBox}>
                  <label style={styles.label}>D_NO</label>
                  <input
                    type="text"
                    name="D_NO"
                    value={anotherFormData.D_NO}
                    onChange={handleAnotherChange}
                    style={styles.input}
                  />
                </div>
                {/* <button type="submit" style={styles.submitButton}>Submit</button> */}
                <Link to="/AnotherSignup" type="submit" style={styles.submitButton}>Submit</Link>

                </form>
              </section>
            </div>
      

      )}

    </div>
    </>
  );
}

export default RegistrationForm;