import React from 'react'
import ProjHeader from '../../assets/images/project_header.png'
import styled from 'styled-components'

const ProjectsContainer = styled.div`
    padding: 0;
    margin-top: -6.8rem;
    top: 0;
    justify-content: center;
    align-items: center;  
`

const ProjectsBg = styled.div`
    background : -moz-radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    background : -webkit-radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    background : -webkit-gradient(radial,50% 50% ,0 , 50% 50%, 676.62 ,color-stop(0,rgba(0, 0, 0, 1) ),color-stop(0.1935,rgba(0, 4, 6, 1) ),color-stop(0.4415,rgba(0, 15, 22, 1) ),color-stop(0.7192,rgba(0, 34, 48, 1) ),color-stop(1,rgba(0, 59, 82, 1) ));
    background : -o-radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    background : -ms-radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Stlye=2);";
    background : radial-gradient(circle farthest-corner at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 4, 6, 1) 19.35%, rgba(0, 15, 22, 1) 44.15%, rgba(0, 34, 48, 1) 71.92%, rgba(0, 59, 82, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.Alpha(Stlye=2);
`

const ProjectsContent = styled.div`
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-left: 25rem;
    margin-top: 3rem;
`

const ProjectsH1 = styled.div`
    img{
        margin-top: 5rem;
        margin-left: 26.5rem;
    }
`

const ProjectsH2 = styled.h1`
    align-items: center;
    justify-content: center;
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 300;
    font-size: 29px;
    color: #fff;
    letter-spacing: 2.3px;
`

const ProjectsP = styled.p`
    align-items: center;
    justify-content: center;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    padding: 1px;
`


const Projects = () => {
  return (
    <ProjectsContainer id="projects">
        <ProjectsBg>
            <ProjectsH1><img src={ ProjHeader } alt="mae chen"/></ProjectsH1>
            <ProjectsContent>
                <ProjectsH2>IMBD Movie Data</ProjectsH2>
                <br />
                <ProjectsP>• Utilizes C++ to create a movie database using a hash table and a skip list.</ProjectsP>
                <ProjectsP>• Created custom hash function that minimizes collisions to ensure efficient insertion and retrieval of movies.</ProjectsP>
                <ProjectsP>• Implemented probabilistic linked list for efficient search, insertion, and deletion of elements.</ProjectsP>
                <br />
                <br />
                <br />
                <ProjectsH2>Silver Hollow Text Based Adventure Game</ProjectsH2>
                <br />
                <ProjectsP>• HackCU-9 Beginner Track Winner.</ProjectsP>
                <ProjectsP>• Structured and calculated possibilities of player sequence.</ProjectsP>
                <ProjectsP>• Learned how to generate text images in C++ and SSH key to connect to GitHub.</ProjectsP>
                <br />
                <br />
                <br />
                <ProjectsH2>Google Developer Student Club</ProjectsH2>
                <br />
                <ProjectsP>• Built custom Google Chat bot with Python on Google Cloud using the ChatGPT and Image APIs from OpenAI.</ProjectsP>
                <ProjectsP>• Attended coding workshops to gain familiarity with Firebase and Flutter.</ProjectsP>
                <br />
                <br />
                <br />
                <ProjectsH2>Alien Restaurant Command Line Game</ProjectsH2>
                <br />
                <ProjectsP>• Programmed object-oriented classes in C++.</ProjectsP>
                <ProjectsP>• Includes functions that execute random probability and sorting.</ProjectsP>
                <ProjectsP>• Map class employs 2D array to track player position.</ProjectsP>
                <br />
                <br />
                <br />
                <ProjectsH2>High School Capstone Project</ProjectsH2>
                <br />
                <ProjectsP>• Coded real-time frequency processing database in Python.</ProjectsP>
                <ProjectsP>• Employed local API to integrate sound processing database with WinForms application in C#.</ProjectsP>
                <ProjectsP>• Used HTML and CSS to design published website that displays my progress journals and resulting application.</ProjectsP>
                <br />
                <br />
                <br />
                <br />
            </ProjectsContent>
        </ProjectsBg>
    </ProjectsContainer>
  )
}

export default Projects
