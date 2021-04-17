import React from 'react'
import Navbar from './Navbar'
import ProductData from './ProductData'
import DetailBox from './DetailBox'
import classes from './classes.module.css'
class App extends React.Component {
  state={
    selectedWatch:0,
    isHeartBeat:false
  }

  onOptionBtnClick=(pos)=>{
    this.setState({
      selectedWatch:pos
    })
  }

  onFeatureBtnClick=(pos)=>{
    if(pos===0 && this.state.isHeartBeat===true)
    {
      this.setState({
        isHeartBeat:false
      })
    }
    else
    if(pos===1 && this.state.isHeartBeat===false)
    {
      this.setState({
        isHeartBeat:true
      })
    }
    console.log(this.state)
  }

  
  render(){
    return (
      <div className="App">
        <Navbar/>
        <div className={classes.Details}>
          <div className={classes.ProductPreview}>
            <img src={ProductData.colorOptions[this.state.selectedWatch].imageUrl} className={classes.MainWatch} alt="watch"/>
            {
              this.state.isHeartBeat? 
              <div className={classes.FeatureHeartBeat}>
                <p>78</p>
                <i className="fas fa-heartbeat"></i>
              </div>
              :
              <div className={classes.FeatureData}>
                <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
              </div>
            }
            
          </div>
          
          <DetailBox title={ProductData.title} description={ProductData.description} colorOptions={ProductData.colorOptions} 
          featureList={ProductData.featureList} selectedOption={this.state.selectedWatch} onOptionBtnClick={this.onOptionBtnClick} onFeatureBtnClick={this.onFeatureBtnClick} selectedWatch={this.state.selectedWatch} isHeartBeat={this.state.isHeartBeat}/>
        </div>
      </div>
    )
  }
}

export default App;
