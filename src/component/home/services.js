import React ,{Component} from 'react';
import './services.css';

export default class Services extends Component{
    render() {
        const service = this.props.service;
        return(
            <div className={'services'}>
                <h2 className={'text-center font-weight-bolder'}>Our Services</h2>
                <p className={'text-center m-auto w-75'}>
                    {service[0].value}
                </p>
                <div className={'row text-center mt-5'}>
                    <div className={'col-sm-6 col-md-3 p-3 service'} >
                        <div><img src={this.props.url + 'imgs/hook.png'} alt='img' /></div>
                        <h4>Construction</h4>
                        <p className={'p-3'}>{service[1].value}</p>
                    </div>
                    <div className={'col-sm-6 col-md-3 p-3 service'} >
                        <div><img src={this.props.url + 'imgs/building.png'} alt='img' /></div>
                        <h4>House Renovation</h4>
                        <p className={'p-3'}>{service[2].value}</p>
                    </div>
                    <div className={'col-sm-6 col-md-3 p-3 service'} >
                        <div><img src={this.props.url + 'imgs/home.png'} alt='img' /></div>
                        <h4>Painting</h4>
                        <p className={'p-3'}>{service[3].value}</p>
                    </div>
                    <div className={'col-sm-6 col-md-3 p-3 service'} >
                        <div><img src={this.props.url + 'imgs/sketch.png'} alt='img' /></div>
                        <h4>Architecture Design</h4>
                        <p className={'p-3'}>{service[4].value}</p>
                    </div>
                </div>
            </div>
        );
    }
}