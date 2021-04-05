import React ,{Component} from 'react';

export default class ProjectDescription extends Component{
    render(){
        return(
            <div>
                <h4 className={'text-center font-weight-bold'} >Project title : {this.props.title}</h4>
                <h4 className={' font-weight-bold p-4 p-3'} >Project Description : </h4>
                <p className={'text-justify w-75 m-auto'} >
                    {this.props.description} 
                </p>
            </div>
        );
    }
}