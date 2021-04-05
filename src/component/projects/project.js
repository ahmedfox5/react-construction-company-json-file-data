import React ,{Component} from 'react';
import './project.css';
import {Link} from 'react-router-dom';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class Project extends Component{
    render(){
        const project = this.props.project;
        return(
            <div className={'col-sm-5 col-md-3 m-3 border project'} >
                <img src={'/imgs/' + project.mainImage} alt='img' />
                <div className={'content'} >
                    <Link to={'/projects/project/' + project.id} ><FontAwesomeIcon icon={faSearch} className={'icon'} /></Link>
                    <h6>{project.title}</h6>
                </div>
            </div>
        );
    }
}