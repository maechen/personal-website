import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import ContactHeader from '../../assets/images/contact_header.png'

const ContactContainer = styled.div`
    padding: 0;
    margin-top: 0rem;
    top: 0;
    justify-content: center;
    align-items: center;  
`

const ContactBg = styled.div`
    background : -moz-radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    background : -webkit-radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    background : -webkit-gradient(radial,50% 50% ,0 , 50% 50%, 676.62 ,color-stop(0,rgba(0, 0, 0, 1) ),color-stop(0.1935,rgba(0, 4, 6, 1) ),color-stop(0.4415,rgba(0, 15, 22, 1) ),color-stop(0.7192,rgba(0, 34, 48, 1) ),color-stop(1,rgba(0, 59, 82, 1) ));
    background : -o-radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    background : -ms-radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Stlye=2);";
    background : radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.Alpha(Stlye=2);
`

const ContactContent = styled.div`
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-left: 25rem;
    margin-top: 3rem;
`

const ContactH1 = styled.div`
    img{
        margin-top: 5rem;
        margin-left: 35rem;
    }
`

const ContactH2 = styled.h2`
    align-items: center;
    justify-content: center;
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 300;
    font-size: 29px;
    color: #fff;
    letter-spacing: 2.3px;
`

const StyledContactForm = styled.div`
    width: 50%;
    color: white;

    form{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        font-size: 17px;
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;

        input{
            width: 100%;
            height: 40px;
            padding: 10px;
            outline: none;
            border-radius: 5px;
            border: 1px solid rgb(220,220,220)
        }
    
        textarea{
            max-width: 100%;
            min-width: 100%;
            width: 100%;
            max-height: 100px;
            min-height: 100px;
            padding: 7px;
            outline: none;
            border-radius: 5px;

        }
    
        lable{
            
        }
    
        input[type="submit"] {
            margin-top: 2rem;
            cursor: pointer;
            background: #B96161;
            color: white;
            border: none;
            margin-bottom: 4rem;
        }
    }
`

const ContactLink = styled.a`
    display: flex;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    padding: 1px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const Column2 = styled.div`
    position: absolute;
    align-items: right;
    
    padding: 0;
    margin-left: 43rem;
    margin-top: -30rem;
`

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9ahgarh', 'template_r5fq80c', form.current, 'WxcFiBQj6Q4b1b7Sx')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <ContactContainer id="contact">
        <ContactBg>
            <ContactH1><img src={ ContactHeader } alt="contact me"/></ContactH1>
            <ContactContent>
            <StyledContactForm>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Email</label>
                    <br />
                    <input type="email" name="user_email" />
                    <br />
                    <label>Subject</label>
                    <br />
                    <input type="email" name="user_subject" />
                    <br />
                    <label>Message</label>
                    <br />
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </StyledContactForm>
            <Column2>
                <ContactH2>GitHub</ContactH2>
                <br />
                <ContactLink
                href="https://github.com/maechen"
                target="_blank"
                >@maechen</ContactLink>
                <br/>
                <br/>
                <ContactH2>LinkedIn</ContactH2>
                <br/>
                <ContactLink
                href="https://www.linkedin.com/in/mae-chen/"
                target="_blank"
                >@mae-chen</ContactLink>
                <br/>
                <br/>
                <ContactH2>PDF Resume</ContactH2>
                <br/>
                <ContactLink
                href="/static/Resume.pdf"
                target="_blank"
                >Click Here</ContactLink>
                <br/>
                <br/>
                <ContactH2>Email</ContactH2>
                <br/>
                <ContactLink
                href="mailto:mchenco7@gmail.com"
                target="_blank"
                >mchenco7@gmail.com</ContactLink>
            </Column2>
            </ContactContent>
        </ContactBg>
    </ContactContainer>
  )
}

export default Contact
