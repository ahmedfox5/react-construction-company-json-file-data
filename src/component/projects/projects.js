import React ,{Component} from 'react';
import Header from './header';
import Project from './project';
import Employees from './../home/employees';
import {Link} from 'react-router-dom';
import './projects.css';
import {getProjectsDtata} from './../../api/projects';

export default class Projects extends Component{
    state={
        projectsPg:{
            description:""
        },
        ourEmployees : {
            description : "",
            employees : [
                {
                    id : 0,
                    name : "",
                    image : "",
                    job : ""
                }
            ]
        },
        projects : [
            {
                id:0,
                title : "",
                mainImage:""
            }
        ]
    }
    componentDidMount(){
        getProjectsDtata().then(response=>{
            this.setState({
                projectsPg : response.data.projectsPg,
                ourEmployees : response.data.ourEmployees,
                projects : response.data.projects
            })
        })
    }
    render(){
        const projects = this.state.projects.map(pro=>{
            return(
                <Project key={pro.id} project={pro} />
            );
        });
        return(
            <div>
                <Header />

                    <br/><br/>

                <div>
                    <h2 className={'font-weight-bolder text-center'} >Our Projects</h2>
                    <br/>
                    <p className={'w-75 m-auto'} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo porro perspiciatis exercitationem quae 
                        corporis praesentium quisquam pariatur magni laborum quasi fugiat, suscipit molestiae distinctio 
                        quis saepe Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo porro perspiciatis exercitat
                        quae corporis praesentium quisquam pariatur magni 
                    </p>

                    <br/>

                    <div className={'row justify-content-center'} >
                        {projects}
                    </div>
                </div>

                    <br/><br/>
                
                <Employees ourEmployees={this.state.ourEmployees} />

            </div>
        );
    }
}