import React from 'react'
import styled from 'styled-components'
import ResumeHeader from '../../assets/images/resume_header.png'

const ResumeContainer = styled.div`
    padding: 0;
    margin-top: 0rem;
    top: 0;
    justify-content: center;
    align-items: center;  
`

const ResumeBg = styled.div`
    background : -moz-radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    background : -webkit-radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    background : -webkit-gradient(radial,50% 50% ,0 , 50% 50%, 676.62 ,color-stop(0,rgba(0, 0, 0, 1) ),color-stop(0.1935,rgba(0, 4, 6, 1) ),color-stop(0.4415,rgba(0, 15, 22, 1) ),color-stop(0.7192,rgba(0, 34, 48, 1) ),color-stop(1,rgba(0, 59, 82, 1) ));
    background : -o-radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    background : -ms-radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Stlye=2);";
    background : radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.Alpha(Stlye=2);
`

const ResumeContent = styled.div`
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-left: 25rem;
    margin-top: 2rem;
`

const ResumeH1 = styled.div`
    img{
        margin-top: 3rem;
        margin-left: 31rem;
    }
`

const ResumeH2 = styled.h2`
    align-items: center;
    justify-content: center;
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 300;
    font-size: 29px;
    color: #fff;
    letter-spacing: 2.3px;
`

const ResumeH3 = styled.h3`
    align-items: center;
    justify-content: center;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: #fff;
    letter-spacing: 2.3px;
    margin-left: 3rem;
`

const ResumeP = styled.p`
    align-items: center;
    justify-content: center;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #fff;
    padding: 1px;
    margin-left: 3rem;
`

const ResumePI = styled.p`
    align-items: center;
    justify-content: center;
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    color: #fff;
    padding: 1px;
    margin-left: 3rem;
`

const Resume = () => {
  return (
    <ResumeContainer id="resume">
        <ResumeBg>
            <ResumeH1><img src={ ResumeHeader } alt="resume"/></ResumeH1>
            <ResumeContent>
                <ResumeH2>Skills</ResumeH2>
                <br />
                <br />
                <ResumeH3>Languages / Web</ResumeH3>
                <br />
                <ResumeP>C++, Python, Javascript, C#, React, HTML, CSS, and SCSS</ResumeP>
                <br/>
                <br/>
                <ResumeH3>Other</ResumeH3>
                <br />
                <ResumeP>Linux, Git, Github, Adobe Illustrator, Adobe Photoshop, and Figma </ResumeP>
                <br />
                <br />
                <br />
                <ResumeH2>Education</ResumeH2>
                <br />
                <br />
                <ResumeH3>University of Colorado Boulder</ResumeH3>
                <br />
                <ResumeP>Computer Science BS, Minor in Business</ResumeP>
                <ResumeP>GPA: 3.932</ResumeP>
                <br />
                <br />
                <ResumeH3>Relevant Courses</ResumeH3>
                <br />
                <ResumeP>Data Structures, Global Engineering, Linear Algebra, Discrete Math, Calculus 2, Physics 1</ResumeP>
                <br />
                <br />
                <br />
                <ResumeH2>Leadership</ResumeH2>
                <br />
                <br />
                <ResumeH3>Rocky Mountain AI Interest Group</ResumeH3>
                <ResumePI>Executive Director</ResumePI>
                <br />
                <ResumeP>• Organize and moderate meetings by constructing monthly agendas and inviting speakers.</ResumeP>
                <ResumeP>• Publicize meetings through media and review draft outgoing emails to members.</ResumeP>
                <br />
                <br />
                <ResumeH3>CU Boulder Women of Color in STEM</ResumeH3>
                <ResumePI>Treasurer</ResumePI>
                <br />
                <ResumeP>• Efficiently manage the budget by applying for funds from the school’s computer science department.</ResumeP>
                <ResumeP>• Organize and create receipts on Excel to submit semester budget reports.</ResumeP>
                <br />
                <br />
                <ResumeH3>Scholars of Finance</ResumeH3>
                <ResumePI>VP of Member Experience</ResumePI>
                <br />
                <ResumeP>• Committed to weekly meetings about public and private markets, equity, direct lending, and securities.</ResumeP>
                <ResumeP>• Completed 7-week leadership development program about ethics in finance and personal values</ResumeP>
                <br />
                <br />
                <ResumeH3>Business and Engineering Women in Technology</ResumeH3>
                <ResumePI>Scholar</ResumePI>
                <br />
                <ResumeP>• Developed leadership skills around failure, management, and communication in weekly seminars. </ResumeP>
                <ResumeP>• Engaged in workshops about D.E.I. and the intersections of business and engineering. </ResumeP>
                <br />
                <br />
                <ResumeH3>Herbst Fellowship</ResumeH3>
                <ResumePI>Fellow</ResumePI>
                <br />
                <ResumeP>• Published personal essay in Spring 2023 Colorado Engineering Magazine on how Generative AI</ResumeP>
                <ResumeP>impacts the modernexperience of what it means to be human.</ResumeP>
                <br />
                <br />
                <br />
            </ResumeContent>
        </ResumeBg>
    </ResumeContainer>
  )
}

export default Resume
