import React, { Component } from 'react'
import './TimeForm.css'
import DateTimeCustom from '../DateTimeCustom'

class TimeForm extends Component  {
constructor() {
super();
this.state = {
name: "React",
displayDate:false
};
this.handleButton = this.handleButton.bind(this);
this.handleChangeRadio = this.handleChangeRadio.bind(this);
this.toggleDate = this.toggleDate.bind(this);
}

handleChange = (event) => {
    console.log(this.state);
    let x = event.target.name;
    this.setState({[x]: event.target.value});
  }

  handleChangeRadio = (event) => {
    console.log(this.state);
    let x = event.target.name;
    this.setState({[x]: event.target.id});
  }


handleButton(e){
      this.props.hideComponent(e.target.id, this.state);
  e.preventDefault();  
}

toggleDate(e){
    if(e.target.id =="Choose"){
    this.setState({displayDate:true});
    }
    else{
        this.setState({displayDate:false});
    }
}

render(){
return (
<div>

<div class="row">
  <div class="col-1"></div>
  <div class="col-10 py-5 text-center">
  <h2>Vehicle Job Details</h2>
  </div>
  <div class="col-1 py-5" >
      <a href="" onClick={this.handleButton} id="current"><h1 id="current">X</h1></a>
    </div>
</div>
<form onSubmit={this.handleButton}  data-toggle="validator" role="form" id="date" >
<div class="row justify-content-center">


<div id="car htmlFormID" className="col-4">


<div className="row justify-content-center text-left">
<div className="order-md-1" onChange={this.handleChangeRadio}>
   
      <div class="col-md-12 mb-3 inputGroup mx-auto">
        <input className="option-input radio active" id="ASAP" onChange={this.toggleDate} name="when" type="radio" required/>
        <label  htmlFor="radio1">As soon as possible.</label>
      </div>
      <div class="col-md-12 mb-3 inputGroup mx-auto">
        <input className="option-input radio" id="Choose" onChange={this.toggleDate} name="when" type="radio" required/>
        <label  htmlFor="radio2">Choose a date & time</label>
      </div>
      {this.state.displayDate && <DateTimeCustom/>}
      <br/>
      <button class="btn btn-warning btn-lg btn-block mb-10 timebtn" type="submit">Continue</button>
  </div>

    
    
    
</div>
</div>
</div>

</ form>
</div>
)
}
}
export default TimeForm