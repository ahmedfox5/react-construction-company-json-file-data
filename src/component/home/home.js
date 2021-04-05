import React ,{Component} from 'react';
import Header from './header';
import Services from './services';
import Statistics from './statistics';
import Best from './best';
import HomeProjects from './home-projects';
import Employees from './employees';
import {getHomeData} from './../../api/home';

export default class Home extends Component{
    state = {
        home : {
            header : "",
            service : "",
            statistics : "",
            best : "",
            recentWorks : ""
        },
        projects : [
            {
                id : 0 ,
                title : "" ,
                mainImage : "",
            }
        ],
        ourEmployees : {
            description : "",
            employees : [
                {
                    id:0,
                    name:"",
                    job:"",
                    image:""
                }
            ]
        }
            
        

    }
    componentDidMount(){
        getHomeData().then(response => {
            this.setState({
                home : response.data.home ,
                projects : response.data.projects,
                ourEmployees : response.data.ourEmployees
            });
            console.log(response.data);
        });
    }
    render(){
        return(
            <div>
                <Header header={this.state.home.header} />

                    <br/><br/><br/>

                <Services service={this.state.home.service} />

                    <br/><br/>

                <Statistics statistics={this.state.home.statistics} />

                    <br/><br/>

                <Best best={this.state.home.best} />

                    <br/><br/>

                <HomeProjects recentWorks={this.state.home.recentWorks} projects={this.state.projects} />

                    <br/><br/>

                <Employees ourEmployees={this.state.ourEmployees} />



            </div>
        )
    }
    
}