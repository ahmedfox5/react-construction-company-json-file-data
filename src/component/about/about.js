import React ,{Component} from 'react';
import Header from './header';
import Service from './service';
import Best from './../home/best';
import AboutTemplate from './aboutTemplate';
import {getAboutData ,getAbout} from './../../api/about';
import {getBest} from './../../api/home';
import {connect} from 'react-redux';
import {startLoading ,stopLoading} from './../../actions/actions';

class About extends Component{

    state={
        about : [
            {
                id: 1,
                name: "",
                title: "",
                description: "",
                img: ""
            }
        ],
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

        getAbout().then( response => {
            if(response.data.success){
                this.setState({
                    about : response.data.about ,
                });

                this.props.stopLoading();
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
        let id = 0;
        const about = this.state.about.map( temp => {
            let classN = "";
            if(id % 2 == 1){
                classN = "order-md-first";
            }
            id++;
            return (
                <div>
                    
                    {temp.name != 'service'? <AboutTemplate url={this.props.url} key={temp.id} templateData={temp} imgDir={classN} /> : ""}

                    <br/><br/>

                </div>
            );
        });
        return(
            <div className={'about'} >
                <Header />

                    <br/><br/>

                <Service url={this.props.url} service={this.state.about[0]} />

                    <br/><br/>

                    {about}


                <Best best={this.state.best} />

                    <br/><br/>

                

            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return{
        startLoading : () => dispatch(startLoading),
        stopLoading : () => dispatch(stopLoading),
    }
}

function mapStateToProps(state){
    return{
        'url' : state.url,
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(About);