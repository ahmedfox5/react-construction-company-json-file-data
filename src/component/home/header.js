import React ,{Component} from 'react';
import './header.css';
import {Link} from 'react-router-dom';

export default class Header extends Component{

    render(){
        const header = this.props.header;
        return(
            <div className={'header'}>
                <div className={'header-content'} >
                    <h1 className='title-after'>Welcome</h1>
                    <p className={'text-justify'}>
                        {header.value}
                    </p>
                    <br/>
                    <div className={'row'}>
                        <div className={'col-6 d-flex justify-content-end view-more'} >
                            <Link to='/about'><button>View more</button></Link>
                        </div>
                        <div className={'col-6 d-flex justify-content-start'} >
                        <Link to='/contact-us'><button>Contact us</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}