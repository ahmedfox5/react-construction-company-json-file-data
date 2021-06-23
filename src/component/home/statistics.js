import React ,{Component} from 'react';
import './statistics.css';
import {smoothCounting} from './../publicFunctions';


export default class Statistics extends Component{
    state={
        countingDone:false,

    }
    render() {
        const statistics = this.props.statistics;
        return(
            <div className={'statistics p-5 '} >
                <div className={'p-1 m-auto content row '}>
                    <div className={'col-sm-6 col-md-3 '} >
                        <div className={'row statistic'} >
                            <div className={'col-5 '} >
                                <img src='/imgs/laborers.png' alt='img' />
                            </div>
                        </div>

                        <div className={'row statistic'} >
                            <div className={'col-5'} >
                                <h1 className={'font-weight-bolder text-center' } id='counter1'>{statistics[0].value}</h1>
                            </div>
                            <div className={'col-7'} >
                                <p>Satisfied</p>
                                <h4 className={'font-weight-bolder'} >Client</h4>
                            </div>
                        </div>

                    </div>
                    <div className={'col-sm-6 col-md-3 '} >
                        <div className={'row statistic'} >
                            <div className={'col-5 '} >
                                <img src='/imgs/building (1).png' alt='img' />
                            </div>
                        </div>

                        <div className={'row statistic'} >
                            <div className={'col-5'} >
                                <h1 className={'font-weight-bolder text-center'} id='counter2'>{statistics[1].value}</h1>
                            </div>
                            <div className={'col-7'} >
                                <p>Worldwide</p>
                                <h4 className={'font-weight-bolder'} >Branches</h4>
                            </div>
                        </div>

                    </div>
                    <div className={'col-sm-6 col-md-3'} >
                        <div className={'row statistic'} >
                            <div className={'col-5 '} >
                                <img src='/imgs/derrick.png' alt='img' />
                            </div>
                        </div>

                        <div className={'row statistic'} >
                            <div className={'col-5'} >
                                <h1 className={'font-weight-bolder text-center'} id='counter3'>{statistics[2].value}</h1>
                            </div>
                            <div className={'col-7'} >
                                <p>Total</p>
                                <h4 className={'font-weight-bolder'} >Projects</h4>
                            </div>
                        </div>

                    </div>
                    <div className={'col-sm-6 col-md-3 '} >
                        <div className={'row statistic'} >
                            <div className={'col-5'} >
                                <img src='/imgs/water-meter.png' alt='img' />
                            </div>
                        </div>

                        <div className={'row statistic'} >
                            <div className={'col-5'} >
                                <h1 className={'font-weight-bolder text-center'} id='counter4'>{statistics[3].value}</h1>
                            </div>
                            <div className={'col-7'} >
                                <p>Work</p>
                                <h4 className={'font-weight-bolder'} >Finished</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){

        
        
        window.addEventListener('scroll' ,()=>{
            if(document.querySelector('.statistics')){
                if(document.querySelector('.statistics').getBoundingClientRect().top < window.innerHeight - 20 && !this.state.countingDone && document.querySelector('.statistics').getBoundingClientRect().top > 0){
                    new smoothCounting('#counter1' ,2020);
                    new smoothCounting('#counter2' ,2000);
                    new smoothCounting('#counter3' ,2000);
                    new smoothCounting('#counter4' ,2000);
    
                    this.setState({
                        countingDone:true,
                    })
                }
            }
        });
        

        
    }
}