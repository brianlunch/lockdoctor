import React, { Component } from 'react'
import './startForm.css'
class StartForm extends Component  {
constructor() {
super();
this.state = {
name: "React",
type: ""
};
this.handleButton = this.handleButton.bind(this);
//this.hideComponent = this.hideComponent.bind(this);
}
handleButton(e){
  this.setState({
    type:e.target.id,
  }, function () {

      this.props.hideComponent("startForm", this.state);

    }.bind(this));
  e.preventDefault();  
}
render(){
return (
<div>
	<div class="container" id="start_menu" >
		<div class="row justify-content-center">
		  <div class="col-10">
		
		  
		<div class="card-deck text-center col-12 mx-auto">

			<div class="card shadow-sm zoom" id="bookcard">
				<div class="card-body">
					<a href="" className="a" id="booking" onClick={this.handleButton}><img  id="booking" class="icon_button d-block mx-auto" src="https://lockdoctor.ie/images/book.png" alt="" width="250" height="250"/>
					<h1 class="card-title pricing-card-title">Make a Booking</h1>
          </a>
				</div>
			</div>
			<div class="card shadow-sm zoom" id="quotecard">
				<div class="card-body">
					<a href="" className="a"  id="quote" onClick={this.handleButton}><img id ="quote" class="icon_button d-block mx-auto" src="https://lockdoctor.ie/images/quote.png" alt="" width="250" height="250"/>
					<h1 id="quote" class="card-title pricing-card-title">Get a Quote</h1>
          </a>
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
export default StartForm