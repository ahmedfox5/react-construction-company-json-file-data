import React ,{Component} from 'react';
import Project from './../projects/project';
import './projects.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class HomeProjects extends Component{

    render(){
        const projects = this.props.projects.map(pro => {
            return(
                <Project url={this.props.url} key={pro.id} project={pro} />
            )
        })
        
        return(
            <div className='home-projects' >
                <h2 className={'text-center font-weight-bolder'}>Recent Works</h2>
                <p className={'text-center m-auto w-75'}>
                    {this.props.recentWorks.value}
                </p>
                <Link style={{textDecoration : 'none'}} to='/projects' ><button>View All Works</button></Link>
                <div className={'row justify-content-center'} >
                    {projects}
                </div>
            </div>
        );
    }

    componentDidUpdate(){
        console.log(this.props);
    }
}

function mapStateToProps(state){
    return {
        projects : state.projects
    }
}

export default connect(mapStateToProps)(HomeProjects);