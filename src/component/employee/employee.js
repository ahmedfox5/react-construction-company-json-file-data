import React ,{Component} from 'react';
import Header from './header';
import Project from './../projects/project';
import {getEmployeeData} from './../../api/employee';
import {getEmployee} from './../../api/employee';
import {connect} from "react-redux";

class EmployeeView extends Component{
    state={
        employee : {
            id : 0,
            name: "",
            job: "",
            img: "",
            description:"",
            projects: [
                {
                    id: 1,
                    title: "",
                    img: "",
                    description: ""
                }
            ]
        },
    }

    componentDidMount(){

        getEmployee(this.props.match.params.id).then( response => {
            if(response.data.success){
                this.setState({
                    employee : response.data.employee,
                });
            }
        });
    }

    render() {
        const employee = this.state.employee;
        const theProjects = this.state.employee.projects.map( project => {
            return <Project url={this.props.url} project={project} />
        });
        return(
            <div className={'employee-view'} >
                <Header />
                    
                    <br/>
                
                <div className={'emplyee-info p-4 m-2'} >
                    <h3>Name: {employee.name}</h3>
                    <h5>Job: {employee.job}</h5>
                    <br/>
                    <div className={'row p-3 m-2 justify-content-center align-items-center '} >
                        <div className={'col-md-5 m-2 text-justify'} >
                            <p>
                                {employee.description}
                            </p>
                        </div>

                        <div className={'col-md-5 m-2'} >
                            <img src={ this.props.url + 'imgs/employees/' + employee.img} alt='img' className={' w-100'} />
                        </div>
                    </div>

                    <br/><br/>

                    <h3 className={'text-center'} >Projects he work in</h3>

                    <div className={'row justify-content-center'} >
                        {theProjects}
                    </div>

                </div>
                
            </div>
        );   
    }
}

function mapStateToProps(state){
    return{
        url : state.url,
    }
}

export default connect(mapStateToProps)(EmployeeView);