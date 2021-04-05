import React ,{Component} from 'react';
import Header from './header';
import Location from './location';
import Message from './message';


export default class ContactUs extends Component{
    render(){
        return(
            <div>
                <Header />

                    <br/><br/>

                <Location />

                    <br/><br/>
                
                <Message />

                
            </div>
        );
    }
}