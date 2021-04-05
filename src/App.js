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
    })
  }


  render(){
    return(

        <div className='App' >
          <NavBar />
          
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/projects/project/:id' component={Project} />
            <Route exact path='/employees/employee/:id' component={EmployeeView} />
            <Route path='/contact-us' component={ContactUs} />
          </Switch>
          
          <br/><br/>

          <Footer data={this.state.footer} />
        </div>

    );
  }


}
export default App;
