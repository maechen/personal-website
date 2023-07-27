import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll'

const TopbarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transtion: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
    
`

const CloseIcon = styled(FaTimes)`
    color: #fff;
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent:
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

const TopbarWrapper = styled.div`
    color: #fff;
`

const TopbarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    margin-top: 20%;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }

`

const TopbarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-family: "Cyber";

    &:hover {
        color: #B96161;
        transition: 0.2s ease-in-out;
    }
`

const Topbar = ({ isOpen, toggle }) => {
  return (
    <TopbarContainer isOpen={ isOpen } onClick={ toggle }>
        <Icon onClick={ toggle }>
            <CloseIcon />
        </Icon>
        <TopbarWrapper>
            <TopbarMenu>
                <TopbarLink to='home' onClick={ toggle }>HOME</TopbarLink>
                <TopbarLink to='projects' onClick={ toggle }>PROJECTS</TopbarLink>
                <TopbarLink to='about' onClick={ toggle }>ABOUT ME</TopbarLink>
                <TopbarLink to='resume' onClick={ toggle }>RESUME</TopbarLink>
                <TopbarLink to='contact' onClick={ toggle }>CONTACT ME</TopbarLink>
            </TopbarMenu>
        </TopbarWrapper>
    </TopbarContainer>
  )
}

export default Topbar
