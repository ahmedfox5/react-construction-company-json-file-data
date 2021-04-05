import React ,{Component} from 'react';
import './service.css';
import {Link} from 'react-router-dom';

export default class Service extends Component{
    render(){
        const service = this.props.service;
        return(
            <div className={'about-service'} >
                <div className={'row align-items-center'} >
                    <div className={'col-md-6 p-5'} >
                        <h2 className={'font-weight-bold'} >
                            {service.title}
                        </h2>
                        <p>
                            {service.description}
                        </p>
                        <br/>
                        <Link to='/contact-us'><button>Contact Us</button></Link>
                    </div>
                    <div className={'col-md-6 p-3 order-md-first'} >
                        <img src={'/imgs/' + service.image} alt='img' />
                    </div>
                </div>
            </div>
        );
    }
}