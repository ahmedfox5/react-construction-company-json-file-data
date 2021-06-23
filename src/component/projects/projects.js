import React ,{Component} from 'react';
import Header from './header';
import Project from './project';
import Employees from './../home/employees';
import './projects.css';
import {getProjectsDtata} from './../../api/projects';
import {connect} from 'react-redux';
import {startLoading ,stopLoading} from './../../actions/actions';
import {getProjecsPgDescription} from './../../api/projects';


class Projects extends Component{
    state={
        description:{
            value : "",
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
        this.props.startLoading();
        getProjecsPgDescription().then(response=>{
            this.setState({
                description : response
            });
            this.props.stopLoading();
        })
    }
    render(){
        const projects = this.props.projects.map( pro =>{
            return(
                <Project url={this.props.url} key={pro.id} project={pro} />
            );
        });
        return(
            <div>
                <Header />

                    <br/><br/>

                <div>
                    <h2 className={'font-weight-bolder text-center'} >Our Projects</h2>
                    <br/>
                    <p className={'w-75 m-auto'} > 
                        {this.state.description.value}
                    </p>

                    <br/>

                    <div className={'row justify-content-center'} >
                        {projects}
                    </div>
                </div>

                    <br/><br/>
                
                <Employees url={this.props.url} ourEmployees={this.state.ourEmployees} />

            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        projects : state.projects,
        url : state.url,
    }
}

function mapDispatchToProps(dispatch){
    return{
        startLoading : () => dispatch(startLoading),
        stopLoading : () => dispatch(stopLoading),
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Projects);