import { useForm } from 'react-hook-form';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import $ from 'jquery';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//import "../bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap-grid.css'; //impacts works slider
import 'bootstrap/dist/css/bootstrap-utilities.css'; 
//import 'bootstrap/dist/css/bootstrap-grid.min.css.map'; no need no affect
//import 'bootstrap/scss/_forms.scss'; 



import "./contact3.scss"

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };
  
  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    const number = 0;
    const leng = 128;

    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  function generateBalls() {
    for (var i = 0; i < Math.floor(window.innerWidth / 10); i++) {
      $(".gooey-animations").append(`
      <div class="ball"></div>
    `);
      var colors = ["#dc143c", "#dc143c"];
      $(".ball")
        .eq(i)
        .css({
          bottom: "0px",
          left: Math.random() * window.innerWidth - 50,
          "animation-delay": Math.random() * 10 + "s",
          transform: "translateY(" + Math.random() * 10 + "px)",
          "background-color": colors[i % 2]
        });
    }
  }

 generateBalls();
   
  window.addEventListener("resize", function (e) {
    $(".gooey-animations .ball").remove();
    generateBalls();
  });

  return (
    <div className="containerBox" id="contact">
      <div className="smallerBox">
      <div className="left">
        <div className="imgContainer">
            <img src="assets/cum3.gif" alt="" />
        </div>
      </div>
      <div className="right">
        <h1 className='mainP'>Contact Me</h1>
        <div className='ContactForm'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <div className='contactForm'>
                  <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                    {/* Row 1 of form */}
                    <div className='row formRow'>
                      <div className='col-6'>
                        <input
                          type='text'
                          name='name'
                          {...register('name', {
                            required: { value: true, message: 'Please enter your name' },
                            maxLength: {
                              value: 30,
                              message: 'Please use 30 characters or less'
                            }
                          })}
                          className='form-control formInputT'
                          placeholder='Name'
                        ></input>
                        {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                      </div>
                      <div className='col-6'>
                        <input
                          type='email'
                          name='email'
                          {...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                          })}
                          className='form-control formInputT'
                          placeholder='Email address'
                        ></input>
                        {errors.email && (
                          <span className='errorMessage'>Please enter a valid email address</span>
                        )}
                      </div>
                    </div>
                    {/* Row 2 of form */}
                    <div className='row formRow'>
                      <div className='col'>
                        <input
                          type='text'
                          name='subject'
                          {...register('subject', {
                            required: { value: true, message: 'Please enter a subject' },
                            maxLength: {
                              value: 75,
                              message: 'Subject cannot exceed 75 characters'
                            }
                          })}
                          className='form-control formInputO'
                          placeholder='Subject'
                        ></input>
                        {errors.subject && (
                          <span className='errorMessage'>{errors.subject.message}</span>
                        )}
                      </div>
                    </div>
                    {/* Row 3 of form */}
                    <div className='row formRow'>
                      <div className='col'>
                        <textarea
                          rows={3}
                          name='message'
                          {...register('message', {
                            required: true
                          })}
                          className='form-control formInputM '
                          placeholder='Message'
                        ></textarea>
                        {errors.message && <span className='errorMessage'>Please enter a message</span>}
                      </div>
                    </div>
                    <button className='submit-btn' type='submit'>
                      Submit
                    </button>
                  </form>
                </div>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="Parent">
        <div className="Column"><CallIcon className="Icon"/>+1 (437) 9850 558</div>
        <div className="Column"><EmailIcon className="Icon"/>arsenmorozz1@gmail.com</div>
        <div className="Column"><LocationOnIcon className="Icon"/>Toronto ON, Canada</div>
      </div>

      <div className="Footer">

        <div className="gooey-animations">
        </div>
        <h3 className="hLeft">This portfolio was made by <span>Arsen Moroz</span></h3>
        <h3 className="hRight">©2022 erudite.</h3>
      </div>

       <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>


      <svg viewBox="0 0 1440 328" width="100vw">
          <defs>
              <clipPath id="wave" clipPathUnits="objectBoundingBox" transform="scale(0.00069444444, 0.00304878048)">
                  <path d="M504.452 27.7002C163.193 -42.9551 25.9595 38.071 0 87.4161V328H1440V27.7002C1270.34 57.14 845.711 98.3556 504.452 27.7002Z"/>
              </clipPath>
          </defs>
      </svg>

                        
    </div>
  );
};

export default ContactForm;