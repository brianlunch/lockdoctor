import React, { Component } from 'react'

class DetailsForm extends Component  {
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
    e.preventDefault();  
    this.props.hideComponent("current", this.state);
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
<div class="row justify-content-center text-left">
<div class="col-8">
<form onSubmit={this.handleButton}  data-toggle="validator" role="form" >
<div class="row">
      
    
      
      <div class="col-md-6 mb-3">
        <label for="firstName">First name</label>
        <input type="text" class="form-control" name="firstName" placeholder="" required onChange={this.handleChange}/>
        <div class="invalid-feedback">
          Valid first name is required.
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="lastName">Last name</label>
        <input type="text" class="form-control" name="lastName" placeholder="" required onChange={this.handleChange}/>
        <div class="invalid-feedback">
          Valid last name is required.
        </div>
      </div>
    </div>
<div class="row">
<div class="col-6 mb-3">
      <label for="phone">Phone number</label>
      <input type="phone" class="form-control" name="phone" placeholder="Enter your phone number" required onChange={this.handleChange}/>
      <div class="invalid-feedback">
        Please enter a valid phone number.
      </div>
    </div>

    <div class="col-6 mb-3">
      <label for="email">Email <span class="text-muted">(Optional)</span></label>
      <input type="email" class="form-control" name="email" placeholder="you@example.com" onChange={this.handleChange}/>
      <div class="invalid-feedback">
        Please enter a valid email address.
      </div>
    </div>

</div>
   <div class="row">
   <div class="col-6 mb-3">
      <label for="address">Address</label>
      <input type="text" class="form-control" name="address" placeholder="Street" required onChange={this.handleChange}/>
      <div class="invalid-feedback">
        Please enter your address.
      </div>
    </div>

    <div class="col-6 mb-3">
      <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
      <input type="text" class="form-control" name="address2" placeholder="City" onChange={this.handleChange}/>
    </div>

   </div>

    
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="county">County</label>
        <select class="custom-select d-block w-100" name="county" onChange={this.handleChange} required>
          <option value="">Choose...</option>
          <option>Antrim</option>
          <option>Armagh</option>
          <option>Carlow</option>
          <option>Clare</option>
          <option>Cork</option>
          <option>Derry</option>
          <option>Donegal</option>
          <option>Down</option>
          <option>Dublin</option>
          <option>Fermanagh</option>
          <option>Galway</option>
          <option>Kerry</option>
          <option>Kildare</option>
          <option>Kilkenny</option>
          <option>Laois</option>
          <option>Leitrim</option>
          <option>Limerick</option>
          <option>Longford</option>
          <option>Louth</option>
          <option>Mayo</option>
          <option>Meath</option>
          <option>Monaghan</option>
          <option>Offaly</option>
          <option>Roscommon</option>
          <option>Sligo</option>
          <option>Tipperary</option>
          <option>Tyrone</option>
          <option>Waterford</option>
          <option>Westmeath</option>
          <option>Wexford</option>
          <option>Wicklow</option>
        </select>
        <div class="invalid-feedback">
          Please select a valid county.
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="zip">Eircode <span class="text-muted">(Optional)</span></label>
        <input type="text" class="form-control" name="zip" placeholder="" onChange={this.handleChange}/>
        <div class="invalid-feedback">
          Eircode required.
        </div>
      </div>
    </div>
    <hr class="mb-4"/>
    <button class="btn btn-success btn-lg btn-block" type="submit" >Submit</button>
</ form>
</div>
</div>
)
}
}
export default DetailsForm