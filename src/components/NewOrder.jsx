import axios from "axios";
import { useEffect, useState } from "react";
import {showData,addData} from "../Redux/actions"
import { useDispatch,useSelector } from "react-redux";
// import { store } from "../Redux/store";
export const NewOrder = () => {
  const [alldata,setData] = useState([])
  var username = localStorage.getItem("username")
  const userItem = useSelector((store)=>store.items)
  console.log(userItem,"items")
  let dispatch = useDispatch()

  const [nweproblem,setNewProblme] = useState("")
  const [newbrand,setNewbrand] = useState("")
  // Get data of only this user. store it in redux
  // GET /orders?owner_name=john will give you all order of user john
  //  on submit click create a new order, new order has status `Not Accepted`
useEffect(()=>{
  allData()
  dispatch(showData(alldata))
},[])



  function allData()
  {
    axios.get("http://localhost:8080/orders").then((e)=>{
      setData(e.data.filter((e)=> e.owner_name === username))
      console.log(e.data.filter((e)=> e.owner_name === username))
 
    })
  }
  return (
    <div>
      <div className="form">
        <input
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
          onChange={(e)=>setNewProblme(e.target.value)}
          
        />
        {/* This input is readonly, it's coming from redux */}
        <input
          className="owner-name"
          type="text"
          name="owner_name"
          placeholder="yourname"
          value={username}
          readOnly
        />
        <input
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
          onChange={(e)=>setNewbrand(e.target.value)}
        />
        {/* Create new problem, show it in below form immediately */}
        <button className="submit">submit</button>
      </div>

      <div className="pastOrders">
        {/* this button filters the data below. */}
        {/* it's just a toggle of redux state something like `showUnfinished`  */}
        <button className="filter">
          {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
        </button>

        {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
        <div className="past-orders">
          <span className="id"></span>. <span className="problem"></span>{" "}
          <span className="cost">
            {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
          </span>
          <p className="status">{
            userItem.map((e)=>(
              <>
              <h1><span>{e.id}</span><span>{e.problem}</span><span>{e.satus==="Not Accepted"?null:e.cost+"$"}</span></h1>
              <p>status:{e.status}</p>
              </>
            ))
          } </p>
          <hr />
        </div>
      </div>
    </div>
  );
};
