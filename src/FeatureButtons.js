import classes from './classes.module.css';
const FeatureButtons = (props) => {
    return ( 
        props.featureList.map((item,pos)=>{
            const classArr=[classes.Btn]
            if(pos===(props.isHeartBeat?1:0))
            {
               classArr.push(classes.SelectedBtn) 
            }
            return (<button onClick={()=>{ return(props.onFeatureBtnClick(pos))}} key={pos} className={classArr.join(' ')}>{item}</button>);
        })
     );
}
 
export default FeatureButtons;