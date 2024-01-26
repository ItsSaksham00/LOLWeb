import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Headings from '../../components/Headings'
import { faEnvelopeOpen, faFaceAngry, faMap, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './index.css'
import { faFacebookF, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Lottie from 'lottie-react';
import SubAnimationData from '../../assets/formSent.json'


const Contact = () => {
    useEffect(() => emailjs.init("JBsTlbuqTy-adWyuG"), []);

    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();
const [loading, setLoading] = useState(false);
const [SubmittedConfirm, setSubmittedConfirm] = useState(false)

const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_7b87kkl";
    const templateId = "template_9qdtbmg";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        subject: subjectRef.current.value,
        message: messageRef.current.value
      });
      {
        setSubmittedConfirm(!SubmittedConfirm)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    nameRef.current.value = ''
      emailRef.current.value = ''
      subjectRef.current.value = ''
      messageRef.current.value = ''
  };

    return(
        <>
        <div className='ContactContainer'>
             <Headings frontHeading={'Get In touch'} backHeading={'Contact'} />

             <div className="contactDetails">
                    <div className='contDetailPara'>
                    <h1 className="ContTopic">
                            Don't be shy !
                        </h1>
                        <p>Feel free to get in touch with me. I am always open to
                            discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    </div>
                    <div className='contDetailPoints'>
                        <ul>
                            <li>
                                <FontAwesomeIcon className='ContaIcon' icon={faMap} />
                                <div className='pointDetail'>
                                    <h2>Address Point</h2>
                                    <p>Itahari Sunsari, Nepal</p>
                                </div>
                            </li>
                            <li>
                                <FontAwesomeIcon className='ContaIcon'  icon={faEnvelopeOpen} />
                                <div className='pointDetail'>
                                    <h2>Mail Me</h2>
                                    <p>mrsaksham12@gmail.com</p>
                                </div>
                            </li>
                            <li>
                                <FontAwesomeIcon className='ContaIcon' icon={faPhone} />
                                <div className='pointDetail'>
                                    <h2>Call Me</h2>
                                    <p>+977 9800000000</p>
                                </div>
                            </li>
                        </ul>
                    </div>  
                    <div className="contSocialLinks">
                            <div className='linksContainer'>
                                <a target='_blank' href='https://www.facebook.com/skxm0/'>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </div>
                            <div className='linksContainer'>
                                <a target='_blank' href='https://www.instagram.com/notsaks_00/'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                            <div className='linksContainer'>
                                <a target='_blank' href='https://www.linkedin.com/in/sakshamkth'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <div className='linksContainer'>
                                <a target='_blank' href='https://github.com/ItsSaksham00'>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                    </div>
             </div>

             <div className="contactForm">
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <input ref={nameRef} type="text" required placeholder='Your Name' />
                        </li>
                        <li>
                            <input ref={emailRef} type="email" required placeholder='Your Email'/>
                        </li>
                        <li>
                            <input ref={subjectRef} type="text" required placeholder='Your Subject'/>
                        </li>
                        <li>
                            <textarea ref={messageRef} type="text" required placeholder='Your Message' ></textarea>
                        </li>

                        <li>
                        <button className='submitBtn' type='submit' disabled={loading} style={{backgroundColor:'transparent',}}>
                            <div className='btnText'>Send Message</div>
                                <div className='IconBox'>
                                    <FontAwesomeIcon icon={faPaperPlane} className='BtnIcon' />
                                </div>
                            </button>
                        </li>
                    </ul>
                            
                </form>
             </div>
        </div>

        {
            SubmittedConfirm && (
                    <div className="submittedBox">
                    <Lottie animationData={SubAnimationData} loop={false} style={{backdropFilter:'blur(1px)',animation:'zoomOut .3s linear forwards',animationDelay:'4s'}} />
                  </div>
    

            )
        }
        </>
    );
}

export default Contact;