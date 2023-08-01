import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import {animateScroll as scroll} from 'react-scroll'

const Nav = styled.nav`
    height: 80px;
    margin-top: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    max-width: 1100px;
`

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display:block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

const NavMenu = styled.ul`
    align-items: center;
    list-style: none;
    text-align: center;
    margin-top: 21%;

    @media screen and (max-width: 768px){
        display: none;
    }
`

const Line = styled.div`
  background : #FFFFFF;
  border-style : Solid;
  border-color : #FFFFFF;
  border-width : 1px;
  transform: rotate(90deg);
  margin-left: -14rem;
  width: 17rem;
  margin-top: 12rem;
`

const Items = styled.div`
    margin-top: -10rem;
`

const NavItem = styled.li`
    margin-bottom: 2.5rem;
    font-size: 30px;
    margin-left: -5.5rem;
    font-family: "Cyber";
    color: #fff;
`

const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    
    &.active {
        color: #B96161;
    }
`

const Sidebar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY  > 400) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    
    return (
        <>
        <Nav scrollNav={scrollNav}> 
          <NavbarContainer>
              <MobileIcon onClick={ toggle }>
                  <FaBars />
              </MobileIcon>
              <NavMenu>
                <Line />
                <Items>
                    <NavItem>
                        <NavLinks to='/' onClick={toggleHome}>HOME</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects'
                        smooth={true} duration={500} spy={true} exact='true'
                        >PROJECTS</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='about'
                        smooth={true} duration={500} spy={true} exact='true' 
                        >ABOUT ME</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='resume'
                        smooth={true} duration={500} spy={true} exact='true' 
                        >RESUME</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'
                        smooth={true} duration={500} spy={true} exact='true' 
                        >CONTACT ME</NavLinks>
                    </NavItem>
                </Items>
              </NavMenu>    
          </NavbarContainer>
        </Nav>
      </>
    )
}

export default Sidebar