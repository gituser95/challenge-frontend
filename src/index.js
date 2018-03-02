import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import devices from './devices.json';
import locations from './locations.json';
import "./index.css";

class HibooApp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
      isOpen1: false,
      isOpen2: false,
      devicesNames:Array.of([devices[0].name,devices[0].id],[devices[1].name,devices[1].id],[devices[2].name,devices[2].id]),
      };
  }
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
   toggleModal1 = () => {
    this.setState({
      isOpen1: !this.state.isOpen1
    });
  }
   toggleModal2 = () => {
    this.setState({
      isOpen2: !this.state.isOpen2
    });
  }
 DisplayInfo=(id, name) => {
    var output= new Array();
    var name="The Device : "
    name.concat(name);
     for(var i=0; i<locations.length;i++){
      if (id === locations[i].device_id){
        output.push("   Address"+ ': ' + locations[i].address+"  //// "+ ' Date : '+locations[i].date+"  "); 
      }
    }
   const  ordered=output.reverse();
      return ordered;
            
}
  render() {
    return (
    <div>
      <h1>Hiboo Frontend Challenge 2018</h1>
      <div className="content">
        <table width="100%" border="1">
        <tr id='lol'>
             <th>Device Name</th>
             <th>Last seen date</th>
             <th>Last seen address</th>
        </tr>
        {
           devices.map(function(device){ 
            var Lastaddress=" ";
            var i=0;
            while(i<locations.length && Lastaddress===" "){
               if (device.id === locations[i].device_id){  //&&device.last_seen === locations[i].date
                  Lastaddress=locations[i].address;
              }
              i++;
            }
            return(<tr> <td>{device.name} </td> <td>{device.last_seen}  </td> <td> {Lastaddress}</td></tr>);
          })
        }
        </table>
      </div>
    <div className="App">
      <div class="putcenter">
        <button onClick={this.toggleModal}> <span class="txt">{ this.state.devicesNames[0][0]} </span></button>
         <button onClick={this.toggleModal1}> <span class="txt">{ this.state.devicesNames[1][0] }</span></button>
         <button onClick={this.toggleModal2}> <span class="txt">{ this.state.devicesNames[2][0] }</span></button>
      </div>
    <Modal show={this.state.isOpen}onClose={this.toggleModal} class="modal">
        <div>
         <h2>The Device : {this.state.devicesNames[0][0]}</h2>
        { 
          this.DisplayInfo(this.state.devicesNames[0][1],this.state.devicesNames[0][0]).map(function(outelt){ return(<li>{outelt}</li>);
         })
        }
        </div >
    </Modal>
   <Modal show={this.state.isOpen1}  onClose={this.toggleModal1} class="modal"> 
          <div>
         <h2>The Device : {this.state.devicesNames[1][0]}</h2>
        { 
          this.DisplayInfo(this.state.devicesNames[1][1],this.state.devicesNames[1][0]).map(function(outelt){ return(<li>{outelt}</li>);
         })
        }
        </div>
    </Modal>
   <Modal show={this.state.isOpen2} onClose={this.toggleModal2} class="modal"> 
         <div >
         <h2>The Device : {this.state.devicesNames[2][0]}</h2>
        { 
          this.DisplayInfo(this.state.devicesNames[2][1],this.state.devicesNames[2][0]).map(function(outelt){ return(<li>{outelt}</li>);
         })
        }
        </div>
          </Modal>
      </div>
    </div>
    );
  }
}
// ========================================

ReactDOM.render(
  <HibooApp />,
  document.getElementById('root')
);

