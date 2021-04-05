import React ,{Component} from 'react';
import './header.css';
import {Link} from 'react-router-dom';

export default class Header extends Component{
    render(){
        return(
            <div className={'contact-us row justify-content-center align-items-center'} >
                <div className={'col-md-6 p-5'} >
                    <h1 className={'font-weight-bold'} >Contact Us</h1>
                </div>

                <div className={'col-md-6 p-5 head-links'} >
                    <Link to='/'> Home </Link> /  Contact-Us 
                </div>
            </div>
        );
    }
}