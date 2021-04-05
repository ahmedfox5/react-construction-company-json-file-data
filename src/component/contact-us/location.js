import React ,{Component} from 'react';
import './location.css';

export default class Location extends Component{
    render(){
        return(
            <div className={'location'}>
                <h3 className={'text-center font-weight-bold'} >Our Location</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27377.435875567524!2d31.351761401018404!3d30.937551330315866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f799eb01b9b9a9%3A0x352a40c1d78955a6!2z2KjYsdisINmG2YjYsSDYp9mE2K3Zhdi12Iwg2YXYsdmD2LIg2KPYrNiMINin2YTYr9mC2YfZhNmK2Kk!5e0!3m2!1sar!2seg!4v1616557826235!5m2!1sar!2seg" width="900" height="350"  loading="lazy"></iframe>
            </div>
        );
    }
}