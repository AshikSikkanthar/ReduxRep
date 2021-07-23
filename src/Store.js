import * as redux from "redux";
import thunk from "redux-thunk";
export const SET_DATA = "SET_DATA";

// const initialState = {
//     count: 0,
//   };

//   const arrayObj=[];
//  export const increment="increment";
//  export const decrement="decrement";
//  export const push="push";
//  export const pop="pop";

//  export const SET_DATA = "SET_DATA";

//   const counterReducer=(state=initialState,action)=>{
//      switch(action.type){
//      case increment:
//          return{
//             ...state,
//             count:state.count+1,
//          }
//          case decrement:
//             return{
//                ...state,
//                count:state.count-1,
//             }
//             default:
//                 return state;
//         }
//   }
  
//   const testReducer=(state=arrayObj,action)=>{
//       switch(action.type){
//           case push:
//               const pushdata=[...state]
//               pushdata.push(action.value)
//               return[...pushdata]
            
//         case pop:
//             const popdata=[...state]
//             popdata.pop()
//             return[...popdata]
//         default:
//             return state;
            
//       }
//   }

  const FetchReducer=(state = {data: null} ,action)=>
  {
      switch(action.type)
      {
          case SET_DATA:
              return{
                  ...state,
                data: action.data,
              };

              case "removeData":
      return { data: null };

                default:
                    return  state;
              }

              };

      
  
 
//   const rootReducer=(state={},action)=>{
//     return{
//         // counter:counterReducer(state.counter,action),
//         // tester:testReducer(state.tester,action)
//     }
//   }

  const rootReducer = redux.combineReducers({
      storage:FetchReducer,
  });
  const store=redux.createStore(rootReducer,redux.applyMiddleware(thunk));
  export default store;