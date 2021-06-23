import React,{Component} from 'react';
import './loading.css';
import {Spinner} from 'spin.js';
import {connect} from 'react-redux';

class Spin extends Component{

    componentDidMount(){

    }

    render(){
        return(
            <div>
                {this.props.loading == 'true' ? <div id='spinner'></div> : ""} 
            </div>
        )
    }
} 

function mapStateToProps (state){
    return{
        loading : state.loading
    }
}

export default connect(mapStateToProps)(Spin);