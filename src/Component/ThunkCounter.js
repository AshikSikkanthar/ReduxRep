import axios from "axios";
import React from "react";
import { connect } from "react-redux";
// import hdpic from "./Image/hdpic.jpg";
import {
 
  SET_DATA,
} from "../Store";

const ThunkCounter = (props) => {
  // const [data, setData] = useState({});

  // const getData = () => {
  //   axios.get(`https://jsonplaceholder.typicode.com/posts`).then((result) => {
  //     console.log("Data fetched", result.data);
  //     props.setData(result.data);
  //   });
  // };

  const removeData = () => {
    props.removeData();
  };

  return (
    <div>
      
      
      {/* <button onClick={getData}>getData</button> */}
      <button  class="btn btn-success" onClick={props.setData}>getData</button>
      <button  class="btn btn-info" onClick={removeData}>removeData</button>

      

      
       <div className="container" >
        <table class="thunktab">
  <thead>
    <tr>
      
      
      <th scope="col">Body</th>
      <th scope="col">Title</th>
    </tr>
  </thead>
  <tbody>
  
          {props.data.length > 0 &&
            props.data.map((x, i) =>
  
    <tr  key={i}>
      <td>
      {x.body}
      </td>
      <td>
      {x.title}
      </td>
    </tr>
)}
  </tbody>
  </table>
  </div> 

          
   
 

          
         
         
    </div>
    
  );
};

const mapStateToProps = (state) => {
  return {
   
    data: state.storage.data || [],
  };
};

//Thunk
const thunkGetDataFun = (status) => {
  return (dispatch, getState) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((result) => {
      console.log(status,getState());
      console.log("Data fetched", result.data);
      dispatch({ type: SET_DATA, data: result.data });
    });
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
    setData: (result) => {
      dispatch(thunkGetDataFun("Thunk function called"));
    },
    removeData: () => {
      console.log("inside remove");
      dispatch({ type: "removeData" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThunkCounter);