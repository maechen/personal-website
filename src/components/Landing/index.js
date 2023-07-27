import Logo from '../../assets/images/logo.png'
import styled, { keyframes } from 'styled-components';
import React from 'react'
import Arrow from '../../assets/images/arrow.png'
import Scroll from '../../assets/images/scroll.png'
import Video from '../../assets/videos/video.mp4'

const HomeContainer = styled.div`
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
    overflow: hidden;
`

const HomeBg = styled.div`
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

const HomeContent = styled.div`
    z-index: 3;
    align-items: center;
`

const HomeLogo =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    img{
        margin-top: -55rem;
        margin-left: 4.5rem;
    }
    @media screen and (max-width: 768px){
        img{
            width: 100%;
            height: auto;
            justify-content: center;
            margin-left: .5rem;
            margin-top: -50rem;
            
        }
    }
`

const MoveUpDown = keyframes`
  0%, 100% {
    bottom: 0;
  }
  50% {
    bottom: 15px;
  }
`;

const ScrollDownWrap = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    margin-left: 41vw; 
    animation: ${MoveUpDown} 1.8s linear infinite;

    @media only screen and (max-width: 600px) {
        margin-bottom: 80px;
        display: grid;
        margin-left: 8.5rem;
    }
`;

const ScrollDown = styled.div`
    img{
        width: 70%;
    }
`;

const ArrowIcon = styled.div`
    img{
        width: 2rem;
        margin-left: 6rem;
    }
`

const VideoBg = styled.video`
    -o-object-fit: cover;
    object-fit: covered;
    filter: opacity(8%);
`


const Landing = () => {
    return (
        <>
            <HomeContainer>
                <HomeBg>
                    <VideoBg autoPlay loop muted src={ Video } type='video/mp4' /> 
                </HomeBg>
                <HomeContent>
                    <HomeLogo> <img src={ Logo } alt="mae chen" /> </HomeLogo>
                    <ScrollDownWrap>
                        <ScrollDown><img src={ Scroll } alt="scroll down" /></ScrollDown>
                        <ArrowIcon><img src={ Arrow } alt="arrow" /></ArrowIcon>
                    </ScrollDownWrap>
                </HomeContent>
            </HomeContainer>
        </>
    )
}

export default Landing

{/* <Nav> 
                        <NavbarContainer>
                            <NavMenu>
                                <NavItem>
                                    <NavLinks to="projects"> <img src={ Projects } alt="projects" /> </NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="about"> <img src={ About } alt="about me" /> </NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="resume"> <img src={ Resume } alt="resume" /> </NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="contact"> <img src={ Contact } alt="contact me" /> </NavLinks>
                                </NavItem>
                            </NavMenu>    
                        </NavbarContainer>
                    </Nav> */}
