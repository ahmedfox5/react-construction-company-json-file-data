import React ,{Component} from 'react';
import Header from './header';
import Project from './../projects/project';
import {getEmployeeData} from './../../api/employee';

export default class EmployeeView extends Component{
    state={
        projects : [
            {
                id : 0 ,
                title : "" ,
                mainImage : "",
            }
        ]
    }

    componentDidMount(){
        getEmployeeData().then(response => {
            this.setState({
                projects : response.data.projects
            })
        });
    }

    render() {
        return(
            <div className={'employee-view'} >
                <Header />
                    
                    <br/>
                
                <div className={'emplyee-info p-4 m-2'} >
                    <h3>Name: Employee Name</h3>
                    <h5>Job: Employee job</h5>
                    <br/>
                    <div className={'row p-3 m-2 justify-content-center align-items-center '} >
                        <div className={'col-md-5 m-2 text-justify'} >
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ducimus blanditiis exercitationem! Perspiciatis facere aliquid labore incidunt nihil modi velit, laborum quibusdam! Ex consectetur dolore sapiente, magnam tenetur distinctio molestias magni recusandae iure provident ea voluptate tempore ratione itaque aliquam!
                            </p>
                        </div>

                        <div className={'col-md-5 m-2'} >
                            <img src='/imgs/employees/em1.png' alt='img' className={' w-100'} />
                        </div>
                    </div>

                    <br/><br/>

                    <h3 className={'text-center'} >Projects he work in</h3>

                    <div className={'row justify-content-center'} >
                        <Project project={this.state.projects[0]} />
                        <Project project={this.state.projects[0]} />
                        <Project project={this.state.projects[0]} />
                    </div>

                </div>
                
            </div>
        );   
    }
}
