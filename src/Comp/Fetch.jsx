import { useDispatch, useSelector } from "react-redux";
import { fetchingDone } from "../Store/fetch";
import { addDefItems } from "../Store/defItems";
import { useEffect } from "react";
import Load from "./Load";

const Fetch=()=>{

    const dispatch= useDispatch();
    const fetchCheck= useSelector(store=>store.fetching);

     useEffect(()=>{
        if(fetchCheck) return ;
        const controller= new AbortController();
        const signal=controller.signal;
        fetch('https://dummyjson.com/posts',{signal})
        .then(res => res.json())
        .then((data)=>{
           
          dispatch( addDefItems(data.posts));
            dispatch(fetchingDone());
        }
        );
        return ()=>{
          controller.abort;
        }
      }
      ,dispatch.fetchCheck);

      console.log(fetchCheck);
      

    return (
        <>
        {!fetchCheck && <Load></Load>}
        </>
    )
}
export default Fetch;