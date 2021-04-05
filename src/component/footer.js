import React ,{Component} from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF ,faTwitter ,faPinterest ,faGooglePlusG ,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';


export default class Footer extends Component{
    render(){
        const data = this.props.data
        return(
            <footer className={'footer'} >
                <div className={'row content'} >
                    <div className={'col-sm-6 col-md-3'} >
                        <h6>Telephone</h6>
                        <p>{data.phone}</p>
                    </div>
                    <div className={'col-sm-6 col-md-3'} >
                        <h6>Email Us</h6>
                        <p>{data.email}</p>
                    </div>
                    <div className={'col-sm-6 col-md-3 media'} >
                        <h6>Follow Us</h6>
                        <i className={'fab fa-facebook-f'}></i>
                        <FontAwesomeIcon icon={faFacebookF} className={'footer-icon'} / >
                        <FontAwesomeIcon icon={faGooglePlusG} className={'footer-icon'} / >
                        <FontAwesomeIcon icon={faTwitter} className={'footer-icon'} / >
                        <FontAwesomeIcon icon={faPinterest} className={'footer-icon'} / >
                        <FontAwesomeIcon icon={faLinkedinIn} className={'footer-icon'} / >
                    </div>
                    <div className={'col-sm-6 col-md-3'} >
                        <h6>Address</h6>
                        <p>{data.address}</p>
                    </div>
                </div>
                <div className={'copyright'} >
                    <h4 className={'text-center font-weight-bolder'} >Copyright</h4>
                    <p className={'text-center'} >Logo Construction <span>&copy;2021</span></p>
                </div>
                <div className={'go-up'} >
                    <i className={'fa fa-angle-up'} ></i>
                    <FontAwesomeIcon icon={faAngleUp} />
                </div>
            </footer>
        );
    }

    componentDidMount(){
        var ht = document.querySelector('html');
        var bd = document.body;
        var sY = window.scrollY;
        document.querySelector('.go-up').onclick = function(){
            window.scrollTo(0,0);
        }
    }
}