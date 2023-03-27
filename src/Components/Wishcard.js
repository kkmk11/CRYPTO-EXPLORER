import React,{useState,useEffect} from 'react'
import { Modal} from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Bars from './Bars';
import Lines from './Lines';
import Pie from './Pie';

const Wishcard = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen=()=>{
    setShowModal(true);
  }

  const handleModalClose=()=>{
    setShowModal(false);
  }
  var newPrice=(props.price).toFixed(4);
  var rupee=(newPrice*82.338).toFixed(4);
  var today=props.price;
  var hour=props.hour;
  var day=props.day;
  var week=props.week;
  var newhour=0;
  if(hour<0){
    hour=-1*hour;
    newhour=today+(today*hour)/100;
  }
  else{
    newhour=today-(today*hour)/100;
  }
  var newday=0;
  if(day<0){
    day=-1*day;
    newday=today+(today*day)/100;
  }
  else{
    newday=today-(today*day)/100;
  }
  var newweek=0;
  if(week<0){
    week=-1*week;
    newweek=today+(today*week)/100;
  }
  else{
    newweek=today-(today*week)/100;
  }
  console.log(newPrice);
    return (
      <>
      <img  width={64} height={64} src={props.url} alt={props.name} />
      <b><p className='text-warning'>{props.name}</p></b>
      <p>Rank : {props.rank}</p>
      <p>Price in $ : {newPrice}</p>
      <p>Price in ₹ : {rupee}</p>
      <p>Market Cap : {props.marketCap}</p>
      <p><button className='but2' onClick={handleModalOpen}>Graphical Statistics : &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} fill="gold" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
                  </svg></button><br/>
                  <Modal show={showModal} onHide={handleModalClose} style={{height:"550px"}}>
                  <Modal.Header className='bg-dark text-light'>
                    <Modal.Title>
                      <h3><img  width={37} height={37} src={props.url} alt={props.name} /> {props.name}</h3>
                    </Modal.Title>
                    <button className='btn btn-success float-end' onClick={handleModalClose}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg></button>
                  </Modal.Header>
                  <Modal.Body>
                  <Tabs className="Tabs">
                       <div className='tab1'>&nbsp;&nbsp;&nbsp;&nbsp;
                       <Tab><button className="btn btn-primary" style={{width:"130px"}}>Line Graph</button></Tab>&nbsp;&nbsp;&nbsp;&nbsp;
                       <Tab><button className="btn btn-primary" style={{width:"130px"}}>Bar Graph</button></Tab>&nbsp;&nbsp;&nbsp;&nbsp;
                       <Tab><button className="btn btn-primary" style={{width:"130px"}}>Pie Chart</button></Tab>&nbsp;&nbsp;&nbsp;&nbsp;
                       </div>
                       <TabPanel>
                        <br/>
                        <br/>
                       <Lines today={today} hour={newhour} day={newday} week={newweek} />
                     </TabPanel>
                      <TabPanel>
                        <br/>
                        <br/>
                       <Bars today={today} hour={newhour} day={newday} week={newweek} />
                     </TabPanel>
                     <TabPanel>
                       <Pie today={today} hour={newhour} day={newday} week={newweek} />
                     </TabPanel>
                   </Tabs>
                  </Modal.Body>
                </Modal>
                  </p>
      </>
      )
}

export default Wishcard
