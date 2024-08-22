import { CiCircleRemove } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import { FaRegCircleUser } from "react-icons/fa6";
import { SlDislike } from "react-icons/sl";
import { useDispatch } from 'react-redux';
import { removeLikeItems } from "../Store/defItems";
function ReactionComp({item,key}) {
  

    const dispatch=useDispatch();
    
    const removeItems=()=>{
      dispatch(removeLikeItems(item.userId));
    }

    return <>
    <div class="card" style={{width: "18rem"} }  >
    <div class="card-body"  >
        <h5>  <CiCircleRemove onClick={removeItems}  ></CiCircleRemove> <FaRegCircleUser /> {item.userId} </h5>
        <h5 class="card-title"> {item.title}</h5>
        <p class="card-text"> {item.body} </p>
        <div className="btnGroup">
        <button type="button" class="btn btn-primary" disabled={true} >
        <SlLike /> <span  class="badge text-bg-secondary">{item.reactions.likes+1} </span>
        </button>
        <button  type="button" class="btn btn-info"><SlDislike />   <span class="badge text-bg-primary">{item.reactions.dislikes} </span></button>
        </div>
        <br/>
        {item.tags.map((item)=><span class="badge text-bg-secondary">{item}</span>)}
    </div>
    </div>
    </>
}
export default ReactionComp;