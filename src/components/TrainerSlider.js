import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { connect } from 'react-redux'
import '../sass/swiper.css';


class TrainerSlider extends Component {
    render() {
        const {trainers} = this.props
        return (
            <div className="carousel__element">
                {(trainers && trainers.length>0) &&
                <Carousel  showThumbs={false} swipeable={true} showArrows={true} infiniteLoop={true} autoPlay={true} useKeyboardArrows={true}>
                    {trainers.map((trainer)=><div key={trainer.id} className="carousel__container"><img className="carousel__img" src={trainer.trainer_picture} alt={trainer.first_name + " " + trainer.last_name}/><div className="carousel__title">{trainer.first_name + " " + trainer.last_name}</div><div className="carousel__secondtitle">{trainer.specialization}</div></div>)}
                </Carousel>
    }
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        trainers: state.trainer.trainers
    }
}

export default connect(mapStateToProps)(TrainerSlider);