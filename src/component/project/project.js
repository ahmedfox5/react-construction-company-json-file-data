import React ,{Component} from 'react';
import Header from './header';
import ProjectDescription from './projectDescription';
import ProjectImages from './projectImages';
import SectionDescripe from './sectionDescripe';
import {getProjectData} from './../../api/projects';


export default class Project extends Component{
    state={
        project : {
            id:0,
            title:"",
            description:"",
            sections : [
                {
                    id : 0,
                    description : "",
                    sectionImage: ""
                }
            ],
            projectImages : []
        }
    }
    componentDidMount(){
        getProjectData(this.props.match.params.id).then(response => {
            console.log(response);
            this.setState({
                project : response
            })
        });
    }
    render(){
        return(
            <div>
                <Header />

                    <br/><br/>

                <ProjectDescription title={this.state.project.title} description={this.state.project.description} />

                    <br/><br/>

                <SectionDescripe sections={this.state.project.sections} />

                    <br/><br/>

                <ProjectImages images={this.state.project.projectImages} />
                
            </div>
        );
    }
}