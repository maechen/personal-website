import React from 'react'
import styled from 'styled-components'
import AboutHeader from '../../assets/images/about_header.png'
import Me from '../../assets/images/me.png'

const AboutContainer = styled.div`
    padding: 0;
    margin-top: 0rem;
    top: 0;
    justify-content: center;
    align-items: center; 
`

const AboutBg = styled.div`
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

const AboutContent = styled.div`
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-left: 25rem;
    margin-top: -41rem;
    overflow: hidden;
`

const AboutH1 = styled.div`
    img{
        margin-top: 4rem;
        margin-left: 35rem;
    }
`

const Portrait = styled.div`
    img{
        margin-left: 57rem;
        margin-top: -4rem;
    }
`

const AboutH2 = styled.h1`
    align-items: center;
    justify-content: center;
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 300;
    font-size: 29px;
    color: #fff;
    letter-spacing: 2.3px;
`

const AboutP = styled.p`
    align-items: center;
    justify-content: center;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    padding: 1px;
`

const Email = styled.a`
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

const About = () => {
  return (
    <AboutContainer id="about">
        <AboutBg>
            <AboutH1><img src={ AboutHeader } alt="about me"/></AboutH1>
            <Portrait><img src={ Me }/></Portrait>
            <AboutContent>
                <AboutP>Hi there, I'm Mae Chen! Whenever I'm asked, "why do you like coding?" I always say because it is a super</AboutP>
                <AboutP>power. Coding allows me to create whatever I want: from solving real world problems and helping others to</AboutP>
                <AboutP>just expressing myself. </AboutP>
                <br />
                <AboutP>I am interested in becoming a Software Engineer or Full Stack Developer. I also love business, so I am</AboutP>
                <AboutP>exploring Quant Trading and Product Management.</AboutP>
                <br />
                <AboutP>Outside of programming, I am still a creative individual. I've been dancing since I was 5 years old,</AboutP>
                <AboutP> and Hip Hop is my favorite style. I also love to create media content. From videos to photos, I like</AboutP>
                <AboutP> to think I have a pretty good eye. On top of that, I have a pretty good ear. I love to sing, and I</AboutP>
                <AboutP>play the violin!</AboutP>
                <br />
                <AboutP>My personal mission is to have a positive impact on a large community by genuinely connecting</AboutP> 
                <AboutP>with others. I will take initiative and responsibility for my actions, anticipate challenges and</AboutP> 
                <AboutP>opportunities, and set clear goals. I will also prioritize understanding others before seeking</AboutP> 
                <AboutP>to be understood, fostering strong relationships and communication. Through these</AboutP>
                <AboutP>values, I aim to shape the world around me for the better and to create a fulfilling life</AboutP>
                <AboutP>with no regrets.</AboutP>
                <br />
                <br />
                <br />
                <AboutH2>Contact Details</AboutH2>
                <br />
                <AboutP>(720) 254 - 7526</AboutP>
                <Email 
                href="mailto:mchenco7@gmail.com"
                target="_blank"
                >mchenco7@gmail.com</Email>
                <br />
                <br />
                <br />
                <br />
            </AboutContent>
            
        </AboutBg>
    </AboutContainer>
  )
}

export default About
