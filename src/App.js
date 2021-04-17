import React from 'react'
import Navbar from './Navbar'
import ProductData from './ProductData'
import DetailBox from './DetailBox'
import classes from './classes.module.css'
class App extends React.Component {
  state={
    selectedWatch:0
  }

  onOptionBtnClick=(pos)=>{
    this.setState({
      selectedWatch:pos
    })
  }
  render(){
    return (
      <div className="App">
        <Navbar/>
        <div className={classes.Details}>
          <img src={ProductData.colorOptions[this.state.selectedWatch].imageUrl} className={classes.MainWatch} alt="watch"/>
          <DetailBox title={ProductData.title} description={ProductData.description} colorOptions={ProductData.colorOptions} featureList={ProductData.featureList} selectedOption={this.state.selectedWatch} onOptionBtnClick={this.onOptionBtnClick}/>
        </div>
      </div>
    )
  }
}

export default App;
