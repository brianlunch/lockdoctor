import React, { Component } from 'react'


class OtherForm extends Component  {
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
  <h2>Other Job Details</h2>
  </div>
  <div class="col-1 py-5" >
      <a href="" onClick={this.handleButton} id="current"><h1 id="current">X</h1></a>
    </div>
</div>
<form onSubmit={this.handleButton}  data-toggle="validator" role="form" id="vehicle1" >
<div class="row justify-content-center">



<div id="car htmlFormIDpart2" className="col-6">
<div class="row justify-content-center">
<div class="order-md-1">
    <label  htmlFor="jobdes">Additional Information<span class="text-muted"></span></label>
    <textarea  onChange={this.handleChange} id="jobdes" name="addDetails" class=" form-control" rows="4" cols="50" required></textarea>

  
    <hr class="mb-4"/>

    <button class="btn btn-warning btn-lg btn-block  timebtn" type="submit" id="vehicle1"> Continue</button>
  
  </div>
</div>
</div>

</div>
</ form>
</div>
)
}
}
export default OtherForm