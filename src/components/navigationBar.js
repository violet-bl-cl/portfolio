import styled,{css} from 'styled-components';
import logo from '../media/skyideaLogo.PNG';
import {Route, Link} from 'react-router-dom';
//pages
const MenuBar = styled.div`
    background: white;
    height: 50px;
    width: 100%;
    color: black;
    position: sticky;
    margin:auto;
    transition: 1s;
    top: 0;
`
const TextLeftElem = styled.div`
    margin-top: 10px;
    padding: 5px;
    float:left;
    color: black;
`

const TextRightElem = styled.div`
    margin-top: 10px;
    margin-right: 30px;
    padding: 5px;
    background: skyblue;
    float:right;
    color: white;
    border-radius: 5px;
`

const NavigationMenu = () => {

    return( <MenuBar>
        <TextLeftElem>
            <Link to="/home">
            <img src={logo} style={{height:"20px", width:"50px"}}/>
            </Link>
        </TextLeftElem>
        <TextLeftElem>
            <Link to="/projects">
            PROJECTS 
            </Link>
            </TextLeftElem>
        <TextLeftElem>
            <Link to="/lineArt">
            2D ART
            </Link>
            </TextLeftElem>
        <TextLeftElem>
            <Link to="/meshArt">
            3D ART
            </Link>
            </TextLeftElem>
        <TextRightElem>
            <Link to="/contact">CONTACT ME</Link>
            </TextRightElem>
        </MenuBar>)
}
export default NavigationMenu;