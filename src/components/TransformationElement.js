import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const TransformationElement = (props) => {
    const {transformation} = props
    return ( 
        <div className="transformationelement">
            <div className="transformationelement__imagescontainer">
                <div className="transformationelement__firstimage"><LazyLoadImage effect="blur" src={transformation.before} alt="before" height="100%" width="100%"/></div>
                <div className="transformationelement__secondimage"><LazyLoadImage effect="blur" src={transformation.after} alt="after" height="100%" width="100%"/></div>
            </div>
            <div className="transformationelement__datacontainer" style={transformation.id % 2 === 0 ?{backgroundColor: '#E3524A'}:{backgroundColor: 'black'}}>
                <div className="transformationelement__datacontainer__upper">
                    <div className="transformationelement__name">{transformation.name}</div>
                    <div className="transformationelement__kgdiff">{transformation.kg_diff} kg</div>
                </div>
                <div className="transformationelement__datacontainer__lower">
                    <div className="transformationelement__description">{transformation.description}</div>
                </div>
            </div>

            
        </div>
     );
}
 
export default TransformationElement;