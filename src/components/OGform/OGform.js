import React, { Component } from 'react'
import DetailsForm from '../DetailsForm/DetailsForm'
import HomeForm from '../HomeForm/HomeForm'
import IssueForm from '../issueForm/issueForm'
import StartForm from '../startForm/startForm'
import TimeForm from '../TimeForm/TimeForm'
import VehicleForm from '../VehicleForm/VehicleForm'
import OtherForm from '../OtherForm/OtherForm'
import './OGform.css'
class OGform extends Component {
constructor() {
super();
this.state = {
name: "React",
startForm: true,
homeForm: false,
issueForm: false,
otherForm: false,
detailsForm: false,
timeForm: false,
vehicleForm: false,
lastName: false,
addDetails: false,
address: false,
address2: false,
carReg: false,
county: false,
displayDate: false,
email: false,
firstName: false,
phone: false,
problem: false,
product: false,
type: false,
vehicleMake: false,
vehicleModel: false,
when: false,
zip: false,
};
this.hideComponent = this.hideComponent.bind(this);

}
hideComponent(name, info) {
console.log(name);
switch (name) {
case "current":
this.setState({ startForm: true,
issueForm: false,
homeForm:false,
vehicleForm:false,
otherForm:false,
timeForm:false,
detailsForm:false
});
break;
case "startForm":
this.setState({ startForm: false,
issueForm: true,
homeForm:false,
vehicleForm:false,
otherForm:false,
timeForm:false,
detailsForm:false
});
break;
case "home":
this.setState({ startForm: false,
issueForm: false,
homeForm:true,
vehicleForm:false,
otherForm:false,
timeForm:false,
detailsForm:false
});
break;
case "vehicle":
this.setState({ startForm: false,
issueForm: false,
homeForm:false,
vehicleForm:true,
otherForm:false,
timeForm:false,
detailsForm:false
});
break;
case "other":
this.setState({ startForm: false,
issueForm: false,
homeForm:false,
vehicleForm:false,
otherForm:true,
timeForm:false,
detailsForm:false
});
break;
case "vehicle1":
this.setState({ startForm: false,
issueForm: false,
homeForm:false,
vehicleForm:false,
otherForm:false,
timeForm:true,
detailsForm:false
});
break;
case "date":
this.setState({ startForm: false,
issueForm: false,
homeForm:false,
vehicleForm:false,
otherForm:false,
timeForm:false,
detailsForm:true
});
break;
default:
}
this.setState(info);
console.log(this.state)
}

render() {
const { startForm, issueForm, homeForm, vehicleForm,otherForm, timeForm, detailsForm} = this.state;
return (
<div className="formDiv" id="contact">
   <h1 className = "display-4 formTitle">Book Online</h1>
   {startForm && 
   <StartForm hideComponent={this.hideComponent}/>
   }
   {issueForm && 
   <IssueForm hideComponent={this.hideComponent}/>
   }
   {homeForm && 
   <HomeForm hideComponent={this.hideComponent}/>
   }
   {vehicleForm&& 
   <VehicleForm hideComponent={this.hideComponent}/>
   }
   {otherForm&&
   <OtherForm hideComponent={this.hideComponent}/>
   }
   {timeForm && 
   <TimeForm hideComponent={this.hideComponent}/>
   }
   {detailsForm&&
   <DetailsForm hideComponent={this.hideComponent}/>
   }
   <div>
   </div>
</div>
);
}
}
export default OGform