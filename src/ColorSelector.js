import classes from './classes.module.css';

const ColorSelector = (props) => {
    const selectColor=props.colorOptions.map((item,pos)=>{
        const classArr=[classes.WatchOption]
        if(pos===props.selectedWatch)
        {
          classArr.push(classes.selectedWatchoption);
        }
        return (
          <img onClick={()=>{ return (props.onOptionBtnClick(pos))}} className={classArr.join(' ')} src={item.imageUrl} alt="watches" key={pos}/>
        )
      })
    return (
        <div className={classes.ColorOptions}>
            {selectColor}
        </div>
     );
    }
 
export default ColorSelector;