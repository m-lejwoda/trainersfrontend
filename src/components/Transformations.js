import '../sass/transformations.css';
import {useEffect} from 'react'
import {connect} from 'react-redux'
import Navbar from './Navbar';
import TransformationElement from './TransformationElement';
import { get_all_transformations } from '../redux/actions/trainerActions'
const Transformations = (props) => {
    
    const {alltransformations,next,get_all_transformations} = props
    console.log(alltransformations)
    const handleLoadMore = () =>{
        console.log(next)
        get_all_transformations(next)
    }
    return (
        <>
            <div className="clienttransformations">
                <Navbar />
                <div className="clienttransformations__titles">
                    <div className="clienttransformations__title--normal">Przemiany Podopiecznych</div>
                    <div className="clienttransformations__title--bold">Gwarancja Sukcesu</div>
                    <div className="clienttransformations__secondtitle--normal">Wiedza i doświadczenie, a przede wszystkim zadowolenie klientów.</div>
                    <div className="clienttransformations__secondtitle--bold">Wybierz Odpowiedni dla Siebie Pakiet i ciesz się niesamowitą sylwetką</div>
                </div>
            </div>
            <div className="clienttransformations__elements">
                {props.alltransformations.map((transformation)=><TransformationElement key={transformation.id} transformation={transformation}/>)}
            </div>
            {next !== null &&<div className="clienttransformations__button"><button onClick={handleLoadMore} className="clienttransformations__btn">Wczytaj więcej</button></div>
            }
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        threetransformations: state.trainer.threetransformations,
        alltransformations: state.trainer.alltransformations,
        next: state.trainer.next
    }
}
export default connect(mapStateToProps,{get_all_transformations})(Transformations);