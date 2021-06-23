import React ,{Component} from 'react';
import './projectImages.css';

export default class ProjectImages extends Component{
    render(){
        const images = this.props.images.map(img => {
           return (
            <div key={Math.random()} className={'col-md-5 p-4 m-1'} >
                <img src={this.props.url + 'imgs/projects/' + img.img} alt='img' />
            </div>
           ); 
        });
        return(
            <div className={'project-images'}>
                <h4 className={'font-weight-bold text-center'}>Project Images</h4>
                <div className={'row justify-content-center'} >
                    {images}
                </div>
            </div>
        );
    }
}