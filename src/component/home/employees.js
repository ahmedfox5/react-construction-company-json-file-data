import React ,{Component} from 'react';
import './employees.css';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {getEmployees} from './../../api/employee';


export default class Employees extends Component{

    
    state = {
        slides_number:3,
        employees : [
            {
                id:0,
                name:"",
                job:"",
                description:"",
                img:""
            }
        ],
    }

    render() {
        const employees = this.state.employees.map(emp => {
            return(
                <div key={emp.id} className="swiper-slide">
                    <img src={this.props.url + 'imgs/employees/' + emp.img} alt='img' />
                    <div className={'slide-content'} >
                        <h6>{"Name : " + emp.name}</h6>
                        <p>{"Job : " + emp.job}</p>
                        <Link to={"/employees/employee/" + emp.id}><FontAwesomeIcon icon={faLink} /></Link>
                    </div>
                </div>
            )
        });
        return(
            <div className={'employees'} >
                <h2 className={'text-center font-weight-bolder'}>Our Employees</h2>
                <p className={'text-center m-auto w-75'}>
                    {this.props.description}
                </p>

                <br/>



                <div className="swiper-container">
                    <div className="swiper-wrapper">

                        {employees}
                    
                    </div>
                    {/* <!-- Add Pagination --> */}
                    <div className="swiper-pagination"></div>
                </div>
                <br/><br/>




            </div>
        );
    }

    

    componentDidMount(){

         var set_slides_number = () => {
            if(window.innerWidth < 768){
                this.setState({
                    slides_number : 1
                });
            }else{
                this.setState({
                    slides_number : 3
                });
            }
        }
        set_slides_number();
        

        getEmployees().then( response => {
            if(response.data.success){
                this.setState({
                    employees : response.data.employees
                });
            }
            buildSlider();
        });


        const buildSlider = () => {
            SwiperCore.use([Pagination]);
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: this.state.slides_number,
                spaceBetween: 30,
                pagination: {
                el: '.swiper-pagination',
                clickable: true,
                },
            });
        }
        // setTimeout(() => {
        //     buildSlider();
        // }, 2000);
    }

}