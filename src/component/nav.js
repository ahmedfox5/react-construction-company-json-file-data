import React ,{Component} from 'react';
import './nav.css';
import{addClass ,removeClass} from './publicFunctions';
import {NavLink} from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class NavBar extends Component{
    state = {
        button_clicked : false ,
    
    }
    render() {
        return(
            <nav className={'row nav-bar'}>

                {/* logo */}
                <div className={'nav-logo col-2 d-flex justify-content-center align-items-center '} >
                    <img src='/imgs/logo.png' alt='logo' />
                </div>

                {/* nav buttons */}
                <div className={' nav-buttons col-md-7 d-flex justify-content-center'} >
                    <NavLink exact to='/' >Home</NavLink>
                    <NavLink to='/about' >About</NavLink>
                    <NavLink to='/projects' >Projects</NavLink>
                    <NavLink to='/contact-us' >Contact Us</NavLink>
                </div>

                {/* nav search */}
                <div className={'nav-search  col-md-3 col-5 d-flex justify-content-center align-items-center'} >
                    <div>
                        <input type='text' placeholder="Search" />
                        <i className={'fa fa-search'} ></i>
                        <FontAwesomeIcon icon={faSearch} className={'nav-search-icon'} />
                    </div>
                </div>

                <button className='nav-button' onClick={()=>{this.navButton()}} >
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

            </nav>
        );
    }

    navButton = (event) => {
        console.log('aaa');
        var button = document.querySelector('.nav-button');
        var buttons = document.querySelector('.nav-buttons');
        if(!this.state.button_clicked){
            addClass( button,'nav-button-clicked');
            removeClass( buttons,'hide-buttons');
            this.setState({
                button_clicked:true
            })
        }else{

            removeClass( button,'nav-button-clicked');
            addClass( buttons,'hide-buttons');
            this.setState({
                button_clicked:false
            })
        }
    }

    checkMobile = () => {
        if(window.innerWidth <= 768){
            addClass( document.querySelector('.nav-buttons'),'hide-buttons');
        }else{
            removeClass( document.querySelector('.nav-buttons'),'hide-buttons');
            removeClass( document.querySelector('.nav-button'),'nav-button-clicked');
            this.setState({
                button_clicked:false
            })
        }
    }

    componentDidMount(){
        var nav = document.querySelector('.nav-bar');
        window.addEventListener('scroll' ,()=>{
            if(window.scrollY > 20){
                addClass(nav ,'nav-after');
            }else{
                removeClass(nav ,'nav-after');
            }
        });

         
        this.checkMobile();

        window.onresize = this.checkMobile;


        var button_clicked = false;
    }
}