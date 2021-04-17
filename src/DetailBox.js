import classes from './classes.module.css';
import ColorSelector from './ColorSelector'
import FeatureButtons from './FeatureButtons'
const DetailBox = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>

            <h2>Select Color</h2>
            <ColorSelector selectedWatch={props.selectedWatch} colorOptions={props.colorOptions} onOptionBtnClick={props.onOptionBtnClick}/>
            <h2>Features</h2>
            <FeatureButtons isHeartBeat={props.isHeartBeat} featureList={props.featureList} onFeatureBtnClick={props.onFeatureBtnClick}/>
            <br/>
            <button className={classes.Buy}>BUY NOW</button>
        </div>
     );
}
 
export default DetailBox;