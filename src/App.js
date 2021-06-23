import './App.css';
import React ,{Component} from 'react';
import {Route ,Switch} from 'react-router-dom';
import NavBar from './component/nav';
import Footer from './component/footer';
import Home from './component/home/home';
import About from './component/about/about';
import Projects from './component/projects/projects';
import Project from './component/project/project';
import ContactUs from './component/contact-us/contactUs';
import EmployeeView from './component/employee/employee';
import {getFooterData} from './api/app';
import Spin from './component/loading';
import {getRecentProjects} from './api/projects';
import {connect} from 'react-redux';
import ScrollToTop from './component/ScrollToTop';



class App extends Component{


  state = {
    footer:{
      phone:"",
      email:"",
      media:{
        facebook : "",
        googlePlus : "",
        twitter : "",
        pinterest : "",
        linkedIn : "",
      },
      address:"",
    }
  }

  componentDidMount(){
    getFooterData().then(response => {
      this.setState({
        footer : response.data.footer,
      })
    });

    getRecentProjects().then(response => {
      if(response.data.success){
          this.props.setProjects(response.data.projects);
      }
    });
  }


  render(){
    return(

        <div className='App' >
          <Spin />
          <NavBar />
          
          <Switch>
            <ScrollToTop>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/projects/project/:id' component={Project} />
              <Route exact path='/employees/employee/:id' component={EmployeeView} />
              <Route path='/contact-us' component={ContactUs} />
            </ScrollToTop>
          </Switch>
          
          <br/><br/>

          <Footer data={this.state.footer} />
        </div>

    );
  }


}

function mapDispatchToProps(dispatch){
  return{
    setProjects : (data) => dispatch({
      type : 'SETPROJECTS',
      data : data
    })
  }
}

export default connect(null ,mapDispatchToProps)(App);
