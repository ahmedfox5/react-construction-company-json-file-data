import React ,{Component} from 'react';
import './sectionDescripe.css';

export default class SectionDescripe extends Component{
    render(){
        const sections = this.props.sections.map(sec => {
            const id = sec.id;
            var classN = "";
            if(id % 2 == 1){
                classN = "order-md-first";
            }
            return(
                <div key={sec.id} className={'row align-items-center section-descripe'}>
                    <div className={'col-md-6 p-5'} >
                        <p>
                            {sec.description}
                        </p>
                    </div>

                    <div className={'col-md-6 p-5 ' + classN} >
                        <img src={this.props.url + 'imgs/' + sec.img} alt={'img'} />
                    </div>
                </div>
            );
        });
        return(
            <di>
                {sections}
            </di>
            
        );
    }
}