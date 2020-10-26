import React, { Component } from 'react'
import './VehicleForm.css'

class VehicleForm extends Component  {
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
  <h2>Vehicle Job Details</h2>
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
        <input className="option-input radio" id="spare key" name="problem" type="radio" required/>
        <label  htmlFor="radio2">I need a spare key</label>
      </div>
      <div class="col-md-12 mb-3 inputGroup mx-auto">
        <input className="option-input radio" id="locked out" name="problem" type="radio" required/>
        <label  htmlFor="radio3">I'm locked out of my vehicle</label>
      </div>
      <div class="col-md-12 mb-3 inputGroup mx-auto">
        <input className="option-input radio" id="faulty key" name="problem" type="radio" required/>
        <label  htmlFor="radio4">My key is faulty</label>
      </div>
      <div class="col-md-12 mb-3 inputGroup mx-auto">
        <input className="option-input radio" id="stolen key" name="problem" type="radio" required/>
        <label  htmlFor="radio5">My key was stolen</label>
      </div>
      <div class="col-md-12 mb-3 inputGroup mx-auto">
        <input className="option-input radio" id="vehicle won't start" name="problem" type="radio" required/>
        <label  htmlFor="radio6">My vehicle won't start</label>
      </div>
    
  </div>
</div>
</div>


<div id="car htmlFormIDpart2" class="col-6">
<div class="row justify-content-center">
<div class="order-md-1">
  
  
    <div class="row">
      <div class="col-md-4 mb-3">


      <label  htmlFor="carReg">Vehicle Registration</label>
        <input type="text" class=" form-control" id="carReg" name="carReg" placeholder="Example: 141D1000" require onChange={this.handleChange}/>
       
      </div>
    
      <div class="col-md-4 mb-3">
        <label  htmlFor="vehicleMake">Vehcile Manufacturer</label>
          <select class="custom-select d-block w-100" id="vehicleMake" name="vehicleMake" require onChange={this.handleChange}>
            <option value="">Choose...</option>
            <option>Abarth</option>
            <option>Alfa Romeo</option>
            <option>Aston Martin</option>
            <option>Audi</option>
            <option>Bentley</option>
            <option>Benz</option>
            <option>BMW</option>
            <option>Buick</option>
            <option>Bugatti</option>
            <option>Cadillac</option>
            <option>Chevrolet</option>
            <option>Chrysler</option>
            <option>Citroen</option>
            <option>Corvette</option>
            <option>DAF</option>
            <option>Dacia</option>
            <option>Daewoo</option>
            <option>Daihatsu</option>
            <option>Datsun</option>
            <option>De Lorean</option>
            <option>Dino</option>
            <option>Dodge</option>
            <option>Donkervoort</option>
            <option>DS</option>
            <option>Farboud</option>
            <option>Ferrari</option>
            <option>Fiat</option>
            <option>Fisker</option>
            <option> htmlFord</option>
            <option>GM</option>
            <option>GEM</option>
            <option>GMC</option>
            <option>Honda</option>
            <option>Hummer</option>
            <option>Hyundai</option>
            <option>Infiniti</option>
            <option>Iveco</option>
            <option>Isuzu</option>
            <option>Jaguar</option>
            <option>Jeep</option>
            <option>Kia</option>
            <option>KTM</option>
            <option>Koenigsegg</option>
            <option>Lamborghini</option>
            <option>Lancia</option>
            <option>Landwind</option>
            <option>Land Rover</option>
            <option>Lexus</option>
            <option>Lincoln</option>
            <option>Ligier</option>
            <option>Lotus</option>
            <option>Maserati</option>
            <option>Mazda</option>
            <option>McLaren</option>
            <option>Mercedes-Benz</option>
            <option>Mercury</option>
            <option>Mini</option>
            <option>Mitsubishi</option>
            <option>Nissan</option>
            <option>Oldsmobile</option>
            <option>Opel</option>
            <option>Peugeot</option>
            <option>Pontiac</option>
            <option>Porsche</option>
            <option>Regal</option>
            <option>Renault</option>
            <option>Rolls-Royce</option>
            <option>Rover</option>
            <option>Saab</option>
            <option>Saturn</option>
            <option>Seat</option>
            <option>Smart</option>
            <option>Skoda</option>
            <option>Spyker</option>
            <option>Subaru</option>
            <option>Suzuki</option>
            <option>SsangYong</option>
            <option>Toyota</option>
            <option>Tesla</option>
            <option>Vauxhall</option>
            <option>Volkswagen</option>
            <option>Volvo</option>
            <option>Other...</option>
          </select>
        <div class="invalid-feedback">
          Valid vehicle manufacturer is required.
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <label  htmlFor="vehicleModel">Vehicle Model</label>
        <input type="text" className="form-control" id="vehicleModel" name="vehicleModel" placeholder=""  require onChange={this.handleChange}/>
      </div>
    </div>
   <br/>
    <label  htmlFor="jobdes">Additional In information<span class="text-muted"> (Optional)</span></label>
    <textarea  onChange={this.handleChange} id="jobdes" name="addDetails" class=" form-control" rows="4" cols="50"></textarea>

  
    <hr class="mb-4"/>

    <button class="btn btn-warning btn-lg btn-block col-6 timebtn" type="submit" id="vehicle1"> Continue</button>
  
  </div>
</div>
</div>

</div>
</ form>
</div>
)
}
}
export default VehicleForm