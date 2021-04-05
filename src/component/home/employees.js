import React ,{Component} from 'react';
import './employees.css';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class Employees extends Component{


    state = {
        slides_number:3
    }

    render() {
        const employees = this.props.ourEmployees.employees.map(emp => {
            return(
                <div key={emp.id} className="swiper-slide">
                    <img src={'/imgs/employees/' + emp.image} alt='img' />
                    <div className={'slide-content'} >
                        <h6>{"Name : " + emp.name}</h6>
                        <p>{"Job : " + emp.job}</p>
                        <a href={"/employees/employee/" + emp.id}><FontAwesomeIcon icon={faLink} /></a>
                    </div>
                </div>
            )
        });
        return(
            <div className={'employees'} >
                <h2 className={'text-center font-weight-bolder'}>Our Employees</h2>
                <p className={'text-center m-auto w-75'}>
                    {this.props.ourEmployees.description}
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
        var slides_number = 3;

        function set_slides_number() {
        
            if(window.innerWidth < 768){
                slides_number = 1;
            }else{
                slides_number = 3;
            }
        }


        set_slides_number();
        window.addEventListener('resize' ,set_slides_number);


        SwiperCore.use([Pagination]);
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: slides_number,
            spaceBetween: 30,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
    }
}