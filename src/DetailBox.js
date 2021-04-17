import classes from './classes.module.css';
import ColorSelector from './ColorSelector'

const DetailBox = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>

            <h2>Select Color</h2>
            <ColorSelector colorOptions={props.colorOptions} onOptionBtnClick={props.onOptionBtnClick}/>
            <h2>Features</h2>
            <button className={classes.Btn}>{props.featureList[0]}</button>
            <button className={classes.Btn}>{props.featureList[1]}</button>
            <br/>
            <button className={classes.Buy}>BUY NOW</button>
        </div>
     );
}
 
export default DetailBox;