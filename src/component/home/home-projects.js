import React ,{Component} from 'react';
import Project from './../projects/project';
import './projects.css';

export default class HomeProjects extends Component{

    render(){
        const description = this.props.recentWorks.description;
        const theProjects = this.props.projects;
        const projects = this.props.projects.map(pro => {
            return(
                <Project key={pro.id} project={pro} />
            )
        })
        
        return(
            <div className='home-projects' >
                <h2 className={'text-center font-weight-bolder'}>Recent Works</h2>
                <p className={'text-center m-auto w-75'}>
                    {description}
                </p>
                <button>View All Works</button>
                <div className={'row justify-content-center'} >
                    {projects}
                </div>
            </div>
        );
    }
}