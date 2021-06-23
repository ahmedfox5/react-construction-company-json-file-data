import React ,{Component} from 'react';
import './aboutTemplate.css';

export default class AboutTemplate extends Component{
    render(){
        const {templateData} = this.props;
        return(
            <div className={'aboutTemplate'} >
                <h3 className={'font-weight-bold text-center'}>{templateData.name}</h3>
                <div className={'row align-items-center'} >
                    <div className={'col-md-6 p-5'} >
                    <h4 className={'font-weight-bold text-center'}>{templateData.title}</h4>
                        <p>{templateData.description}</p>
                    </div>

                    <div className={'col-md-6 p-4 ' + this.props.imgDir} >
                        <img src={this.props.url + 'imgs/' + templateData.img} alt='img' />
                    </div>
                </div>
            </div>
        );
    }
}