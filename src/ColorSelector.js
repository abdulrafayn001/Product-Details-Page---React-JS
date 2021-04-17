import classes from './classes.module.css';

const ColorSelector = (props) => {
    const selectColor=props.colorOptions.map((item,pos)=>{
        return (
          <img onClick={()=>{ return (props.onOptionBtnClick(pos))}} className={classes.WatchOption} src={item.imageUrl} alt="watches" key={pos}/>
        )
      })
    return (
        <div className={classes.ColorOptions}>
            {selectColor}
        </div>
     );
    }
 
export default ColorSelector;