import React ,{Component} from 'react';
import Header from './header';
import WhoWeAre from './whoWeAre';
import WhatWeDo from './whatWeDo';
import Service from './service';
import Best from './../home/best';
import {getAboutData} from './../../api/about';

export default class About extends Component{

    state={
        about : {
            service : "",
            whoWeAre : "",
            whatWeDo : "",
        },
        best : "",
    }

    componentDidMount(){
        getAboutData().then(response=>{
            this.setState({
                about : response.data.about ,
                best : response.data.home.best
            })
            console.log(this.state);
        })
    }

    render(){
        return(
            <div className={'about'} >
                <Header />

                    <br/><br/>

                <Service service={this.state.about.service} />

                    <br/><br/>
                
                <WhoWeAre whoWeAre={this.state.about.whoWeAre} />

                    <br/><br/>
                
                <WhatWeDo whatWeDo={this.state.about.whatWeDo} />

                    <br/><br/>

                <Best best={this.state.best} />

                    <br/><br/>

                

            </div>
        );
    }
}