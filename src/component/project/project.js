import React ,{Component} from 'react';
import Header from './header';
import ProjectDescription from './projectDescription';
import ProjectImages from './projectImages';
import SectionDescripe from './sectionDescripe';
import {getProjectData} from './../../api/projects';
import {getProject} from './../../api/projects';
import {connect} from 'react-redux';

class Project extends Component{
    state={
        project : {
            id:0,
            title:"",
            description:"",
            img:"",
            sections : [
                {
                    id : 0,
                    description : "",
                    img: ""
                }
            ],
            images : [
                {
                    id : 0 ,
                    img : ""
                }
            ]
        }
    }
    componentDidMount(){
        
        getProject(this.props.match.params.id).then(response => {
            if(response.data.success){
                this.setState({
                    project : response.data.project[0]
                });
                console.log(response.data.project[0]);
            }
        });
    }
    render(){
        return(
            <div>
                <Header />

                    <br/><br/>

                <ProjectDescription title={this.state.project.title} description={this.state.project.description} />

                    <br/><br/>

                <SectionDescripe url={this.props.url} sections={this.state.project.sections} />

                    <br/><br/>

                <ProjectImages url={this.props.url} images={this.state.project.images} />
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        url : state.url,
    }
}


export default connect(mapStateToProps)(Project);