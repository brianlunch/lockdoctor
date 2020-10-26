import React, { Component } from 'react'
import './issueForm.css'

class IssueForm extends Component  {
constructor() {
super();
this.state = {
name: "React",
product: ""
};
this.handleButton = this.handleButton.bind(this);
//this.hideComponent = this.hideComponent.bind(this);
}
handleButton(e){
  this.setState({
    product:e.target.id,
  }, function () {

      this.props.hideComponent(this.state.product, this.state);

    }.bind(this));
  e.preventDefault();  
}
render(){
return (
<div>
	

<div class="container">
<div id="servicesID" class="allForm" >
  <div class="container">
  
  <div class="row">
  <div class="col-1" ></div>

    <div class="col-10  text-center">
    <h2>How can we help?</h2>
    </div>


    <div class="col-1 " >
      <a href="" onClick={this.handleButton} id="current"><h1 id="current">X</h1></a>
    </div>


  </div>
  <div class="card-deck mb-3 text-center">
    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <a href="" id="home" onClick={this.handleButton}><img id="home" class="icon_button d-block mx-auto" src="https://lockdoctor.ie//images/home.png" alt="" width="250" height="250"/></a>
        <h1 class="card-title pricing-card-title">Home</h1>
      </div>
    </div>
    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <a href="" id="vehicle" onClick={this.handleButton}><img id="vehicle" class="icon_button d-block mx-auto" src="https://lockdoctor.ie//images/car.png" alt="" width="250" height="250"/></a>
        <h1 class="card-title pricing-card-title">Vehicle</h1>
      </div>
    </div>
    <div class="card mb-4 shadow-sm">
      <div class="card-body">
        <a href="" id="other" onClick={this.handleButton}><img id="other" class="icon_button d-block mx-auto" src="https://lockdoctor.ie//images/other.png" alt="" width="250" height="250"/></a>
        <h1 class="card-title pricing-card-title">Other</h1>
      </div>
    </div>
  </div>
  </div>
</div>
</div>

</div>
)
}
}
export default IssueForm