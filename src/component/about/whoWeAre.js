import React ,{Component} from 'react';
import './whoWeAre.css';

export default class WhoWeAre extends Component{
    render(){
        const {whoWeAre} = this.props
        return(
            <div className={'whoWeAre'} >
                <h3 className={'font-weight-bold text-center'}>Who We Are?</h3>
                <div className={'row align-items-center'} >
                    <div className={'col-md-6 p-5'} >
                        <p>{whoWeAre.description}</p>
                    </div>

                    <div className={'col-md-6 p-4'} >
                        <img src={'/imgs/' + whoWeAre.image} alt='img' />
                    </div>
                </div>
            </div>
        );
    }
}