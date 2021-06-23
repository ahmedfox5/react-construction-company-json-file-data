import React ,{Component} from 'react';
import './message.css';
import {Formik ,Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {sendMessage} from './../../api/contact';
import {connect} from 'react-redux';
import {startLoading ,stopLoading} from './../../actions/actions';
import {addClass ,removeClass} from './../publicFunctions';



class Message extends Component{

    state = {
        message : ''
    }

    render(){

        return(

            <div className={'message'}>
                <h3 className={'text-center font-weight-bold'} >Send Message</h3>
                <Formik 
                    initialValues={
                        {
                            firstName:'' ,
                            lastName:'',
                            email:'',
                            phone:'',
                            message:''
                        }
                    }
                    
                    onSubmit={this.onSubmit}
                    enableReinitialize={true}
                    validationSchema={this.sehema()}
                    render={(props)=>{
                        return(
                            <form onSubmit={props.handleSubmit} >
                                <div className={'row justify-content-center'} >
                                    <div className={'col-md-5 m-1'} >
                                        <label>First Name</label><br/>
                                        <Field type='text' name='firstName' placeholder='First name' className={'w-100 p-2 border form-input'} />
                                        <ErrorMessage component='p' name='firstName' />
                                    </div>
                                    <div className={'col-md-5 m-1'} >
                                        <label>Last Name</label><br/>
                                        <Field type='text' name='lastName' placeholder='Last name' className={'w-100 p-2 border form-input'} />
                                        <ErrorMessage component='p' name='lastName' />
                                    </div>
                                </div>

                                <div className={'row justify-content-center'} >
                                    <div className={'col-md-5 m-1'} >
                                        <label>Email Address</label><br/>
                                        <Field type='email' name='email' placeholder='Email Address' className={'w-100 p-2 border form-input'} />
                                        <ErrorMessage component='p' name='email' />
                                    </div>
                                    <div className={'col-md-5 m-1'} >
                                        <label>Phone Number</label><br/>
                                        <Field type='text' name='phone' placeholder='Phone Number' className={'w-100 p-2 border form-input'} />
                                        <ErrorMessage component='p' name='phone' />
                                    </div>
                                </div>

                                <div className={'row justify-content-center'} >
                                    <div className={'col-sm-10 m-1'} >
                                        <label>Message</label><br/>
                                        <Field as='textarea' name='message' placeholder='Message' className={'w-100 p-2 border message-area form-input'} />
                                        <ErrorMessage component='p' name='message' />
                                    </div>
                                </div>

                                <div className={'row justify-content-center'} >
                                    <div className={'col-sm-10 m-1'} >
                                        <Field type='submit' name='submit' value='Send Message' className={'send-button'} />
                                    </div>
                                </div>

                            </form>
                        );
                    }}
                />

                <div className={'notify'} > Successfly sent </div>

            </div>

        );
    }

    notify = () => {
        addClass(document.querySelector('.notify') ,'notify-show');
        setTimeout(() => {
            removeClass(document.querySelector('.notify') ,'notify-show');
        }, 3300);
    }

    onSubmit = (values ,{resetForm}) => {
        this.props.startLoading();
        sendMessage(values).then(response => {
            if(response.data.success){
                this.props.stopLoading();
                resetForm({
                    firstName:'' ,
                    lastName:'',
                    email:'',
                    phone:'',
                    message:''
                });
                this.notify();
            }
            
        });
    }

    sehema = () => {
        const schema = Yup.object().shape({
            firstName : Yup.string().required(),
            lastName : Yup.string().required(),
            email : Yup.string().required().email(),
            phone:Yup.number().required().max(9999999999 ,'not valid phone number'),
            message : Yup.string().required().min(15 ,'Your message is too short')
        });
        return schema;
    }
}


function mapDispatchToProps(dispatch){
    return {
        startLoading : () => dispatch(startLoading),
        stopLoading : () => dispatch(stopLoading),
    }
}

export default connect(null ,mapDispatchToProps)(Message);
