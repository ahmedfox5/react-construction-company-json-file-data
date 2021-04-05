import React ,{Component} from 'react';
import './whatWeDo.css';

export default class WhatWeDo extends Component{
    render(){
        const {whatWeDo} = this.props;
        return(
            <div className={'whatWeDo'} >
                <h3 className={'font-weight-bold text-center'}>What We Do?</h3>
                <div className={'row align-items-center'} >
                    <div className={'col-md-6 p-5'} >
                        <p>{whatWeDo.description}</p>
                    </div>

                    <div className={'col-md-6 order-md-first p-4'} >
                        <img src={'/imgs/' + whatWeDo.image} alt='img' />
                    </div>
                </div>
            </div>
        );
    }
}