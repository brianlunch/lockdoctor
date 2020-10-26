import React, { Component } from 'react'


class HomeForm extends Component  {
constructor() {
super();
this.state = {
name: "React"
};

this.handleButton = this.handleButton.bind(this);
this.handleChange = this.handleChange.bind(this);
this.handleChangeRadio = this.handleChangeRadio.bind(this);

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


render(){
return (
<div>

<div class="row">
  <div class="col-1"></div>
  <div class="col-10 py-5 text-center">
  <h2>Home Job Details</h2>
  </div>
  <div class="col-1 py-5" >
      <a href="" onClick={this.handleButton} id="current"><h1 id="current">X</h1></a>
    </div>
</div>
<form onSubmit={this.handleButton}  data-toggle="validator" role="form" id="vehicle1" >
<div class="row justify-content-center">


<div id="car htmlFormID" className="col-4">


<div className="row justify-content-center text-left">
<div className="order-md-1" onChange={this.handleChangeRadio}>
   
      <div class="col-md-12 mb-3 inputGroup mx-auto">
        <input className="option-input radio" id="lost key" name="problem" type="radio" required/>
        <label  htmlFor="radio1">I lost my key</label>
      </div>
      <div class="col-md-12 mb-3 inputGroup mx-auto">
        <input className="option-input radio" id="replace locks" name="problem" type="radio" required/>
        <label  htmlFor="radio2">I want to replace my locks</label>
      </div>
      <div class="col-md-12 mb-3 inputGroup mx-auto">
        <input className="option-input radio" id="locked out" name="problem" type="radio" required/>
        <label  htmlFor="radio3">I'm locked out of my vehicle</label>
      </div>
      <div class="col-md-12 mb-3 inputGroup mx-auto">
        <input className="option-input radio" id="security upgrade" name="problem" type="radio" required/>
        <label  htmlFor="radio4">I want a security upgrade</label>
      </div>
      <div class="col-md-12 mb-3 inputGroup mx-auto">
        <input className="option-input radio" id="faulty lock" name="problem" type="radio" required/>
        <label  htmlFor="radio5">I have a faulty lock</label>
      </div>
      <div class="col-md-12 mb-3 inputGroup mx-auto">
        <input className="option-input radio" id="Other" name="problem" type="radio" required/>
        <label  htmlFor="radio6">Other</label>
      </div>
    
  </div>
</div>
</div>


<div id="car htmlFormIDpart2" className="col-6  my-auto">
<div class="row justify-content-center">
<div class="order-md-1 my-auto">
    <label  htmlFor="jobdes">Additional Information<span class="text-muted"></span></label>
    <textarea  onChange={this.handleChange} id="jobdes" name="addDetails" class=" form-control" rows="4" cols="50" ></textarea>

  
  

    <button class="btn btn-warning btn-lg btn-block timebtn" type="submit" id="vehicle1"> Continue</button>
  
  </div>
</div>
</div>  

</div>
</ form>
</div>
)
}
}
export default HomeForm