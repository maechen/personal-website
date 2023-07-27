import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import styled from 'styled-components'
import Video from '../../assets/videos/video.mp4'
import { Link } from 'react-router-dom'

const FooterContainer = styled.div`
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center; 
    background : -moz-radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    background : -webkit-radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    background : -webkit-gradient(radial,50% 50% ,0 , 50% 50%, 676.62 ,color-stop(0,rgba(0, 0, 0, 1) ),color-stop(0.1935,rgba(0, 4, 6, 1) ),color-stop(0.4415,rgba(0, 15, 22, 1) ),color-stop(0.7192,rgba(0, 34, 48, 1) ),color-stop(1,rgba(0, 59, 82, 1) ));
    background : -o-radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    background : -ms-radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Stlye=2);";
    background : radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.Alpha(Stlye=2); 
    height: 10rem;
    overflow: hidden;

`

const FooterBg = styled.div`
    top:0;
    bottom:0;
    right:0;
    left:0; 
    height: 100vh;
    width: 100vw; 
    overflow: hidden;  
    justify-content: center;
    align-items: center;
`

const VideoBg = styled.video`
    -o-object-fit: cover;
    object-fit: covered;
    filter: opacity(8%);
`

const FooterLinksContainer = styled.div`

`

const FooterLinksWrapper = styled.div`

`

const FooterLinkItems = styled.div`
    margin-left: 39rem;
`

const FooterLink = styled.a`
    cursor: pointer;
`

const Github = styled(AiFillGithub)`
    color: #fff;
    position: absolute;
    margin-top: -49rem;
    height: 4rem;
    width: auto;
`

const Linkedin = styled(AiFillLinkedin)`
    color: #fff;
    position: absolute;
    margin-top: -49rem;
    margin-left: 6.8rem;
    height: 4rem;
    width: auto;
`

const FooterP = styled.p`
    position: absolute;
    margin-top: -44.3rem;
    color: #fff;
    margin-left: 28rem;
    font-size: 1.2rem;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 300;
`



const Footer = () => {
  return (
    <>
    <FooterContainer>
        <FooterBg>
            <VideoBg autoPlay loop muted src={ Video } type='video/mp4' />  
        </FooterBg>
        <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                            <FooterLink a href="https://www.linkedin.com/in/mae-chen/"  target="_blank"><Linkedin/></FooterLink>
                            <FooterLink a href="https://github.com/maechen" target="_blank"><Github/></FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterP>Design by Mae Chen • Coded with React and Styled Components</FooterP>
            </FooterLinksContainer>
    </FooterContainer>
      
    </>
  )
}

export default Footer
