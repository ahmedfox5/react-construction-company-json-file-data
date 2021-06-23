import React ,{Component} from 'react';
import Header from './header';
import Services from './services';
import Statistics from './statistics';
import Best from './best';
import HomeProjects from './home-projects';
import Employees from './employees';
import {getHomeData ,getHomeData2 ,getStatistics ,getBest} from './../../api/home';
import {connect} from 'react-redux';
import {startLoading ,stopLoading} from './../../actions/actions';



function mapStateToProps (state){
    return {
        loading : state.loading,
        url : state.url,
    }
}

function mapDispatchToProps(dispatch){
    return{
        startLoading : () => dispatch(startLoading),
        stopLoading : () => dispatch(stopLoading),
    }
}

class Home extends Component{
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

        homeData : [
            {name : '' ,value : ''},
            {name : '' ,value : ''},
            {name : '' ,value : ''},
            {name : '' ,value : ''},
            {name : '' ,value : ''},
            {name : '' ,value : ''},
            {name : '' ,value : ''},
            {name : '' ,value : ''},
            {name : '' ,value : ''},
            {name : '' ,value : ''},
            {name : '' ,value : ''},
            {name : '' ,value : ''},
            {name : '' ,value : ''},
            {name : '' ,value : ''},
            {name : '' ,value : ''},
            {name : '' ,value : ''},
            {name : '' ,value : ''},
        ],
        statistics : [
            {value : 1},
            {value : 1},
            {value : 1},
            {value : 1},
        ] ,
        best : [
            {value:''},
            {value:''},
            {value:''},
            {value:''},
            {value:''},
            {value:''},
            {value:''},
        ]
    
    }



    componentDidMount(){
        this.props.startLoading();
        getHomeData().then(response => {
            this.setState({
                home : response.data.home ,
                projects : response.data.projects,
            });
        });

        getHomeData2().then( response => {
            this.setState({
                homeData : response.data.home,
            });
            this.props.stopLoading(); /////###$$
        });

        getStatistics().then(response => {
            if(response.data.success){
                this.setState({
                    statistics : response.data.statistics
                });
            }
        });

        getBest().then(response => {
            if(response.data.success){
                this.setState({
                    best : response.data.best
                });
            }
        });


        
    }

    render(){
        return(
            <div>
                <Header header={this.state.homeData[0]} />


                    <br/><br/><br/>

                <Services url={this.props.url} service={this.state.homeData.slice(1 ,6)} />

                    <br/><br/>

                <Statistics statistics={this.state.statistics} />

                    <br/><br/>

                <Best best={this.state.best} />

                    <br/><br/>

                <HomeProjects url={this.props.url} recentWorks={this.state.homeData[6]}  />

                    <br/><br/>

                <Employees url={this.props.url} description={this.state.homeData[7].value} />



            </div>
        )
    }
    
}

export default connect(mapStateToProps ,mapDispatchToProps)(Home);