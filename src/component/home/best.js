import React ,{Component} from 'react';
import './best.css';

import { faUser ,faClipboardList ,faPhoneAlt ,faRocket} from '@fortawesome/free-solid-svg-icons';
import { faGem , faComment} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Best extends Component {
    render() {
        const best = this.props.best;
        return(
            <div className={'best pt-4'} >
                <h2 className={'text-center font-weight-bolder'}>Our Services</h2>
                <p className={'text-center m-auto w-75'}>
                    {best.description}
                </p>
                <br/>
                <div className={'row justify-content-center pt-3'} >
                    <div className={'col-sm-5 col-md-3 m-3 one-best '} >
                        <h6 className={'font-weight-bolder'}>
                            {/* <i className={'far fa-user '} ></i> */}
                            <FontAwesomeIcon icon={faUser} className={'mr-2'} />
                            Expert Technicans</h6>
                            <p>
                                {best.expertTechnicans}
                            </p>
                    </div>
                    <div className={'col-sm-5 col-md-3 m-3 one-best '} >
                        <h6 className={'font-weight-bolder'}>
                            <FontAwesomeIcon icon={faClipboardList} className={'mr-2'} />
                            Professional services</h6>
                            <p>
                                {best.professionalServices}
                            </p>
                    </div>
                    <div className={'col-sm-5 col-md-3 m-3 one-best '} >
                        <h6 className={'font-weight-bolder'}>
                            <FontAwesomeIcon icon={faPhoneAlt} className={'mr-2'} />
                            Great Support</h6>
                            <p>
                                {best.greatSupport}
                            </p>
                    </div>

                    <div className={'col-sm-5 col-md-3 m-3 one-best '} >
                        <h6 className={'font-weight-bolder'}>
                            <FontAwesomeIcon icon={faRocket} className={'mr-2'} />
                            Technical Skills</h6>
                            <p>
                                {best.technicalSkills}
                            </p>
                    </div>
                    <div className={'col-sm-5 col-md-3 m-3 one-best '} >
                        <h6 className={'font-weight-bolder'}>
                            <FontAwesomeIcon icon={faGem} className={'mr-2'}/>
                            Highly Recomended</h6>
                            <p>
                                {best.highlyRecomended}
                            </p>
                    </div>
                    <div className={'col-sm-5 col-md-3 m-3 one-best '} >
                        <h6 className={'font-weight-bolder'}>
                            <FontAwesomeIcon icon={faComment} className={'mr-2'} />
                            Positive Reviews</h6>
                            <p>
                                {best.positiveReviews}
                            </p>
                    </div>
                </div>
            </div>
        );
    }
}