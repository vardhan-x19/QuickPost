import { CiCircleRemove } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import { FaRegCircleUser } from "react-icons/fa6";
import { SlDislike } from "react-icons/sl";
import { useDispatch } from 'react-redux';
import { removeLikeItems } from "../Store/defItems";
import { useSelector } from "react-redux";
import { IoBookmark } from "react-icons/io5";
import { savingItems } from "../Store/defItems";
import { removeSave } from "../Store/defItems";
import { likedPost } from "../Store/defItems";
import { disLikePost } from "../Store/defItems";
import { CiBookmark } from "react-icons/ci";
import { addliked } from "../Store/likedItems";
import { likedSavePost } from "../Store/defItems";
import { savedisLikePost } from "../Store/defItems";

function SavedComp({item,key}) {
  

    const dispatch=useDispatch();
    
    const likedposts=()=>{
      dispatch(likedSavePost({ postId: item.userId, Postlikes: item.reactions.likes ,comp:item}));
      dispatch(addliked(item));
     }
     const disLikePosts=()=>{
      dispatch(savedisLikePost({ postId: item.userId, PostDislikes: item.reactions.dislikes , Postlikes: item.reactions.likes,comp:item}));
     }


    const removeItems=()=>{
      dispatch(removeSave({postId:item.userId,comp:item}));
    }
    
    let checked=useSelector(store=>store.defPostItems.saved[item.userId]);
    const savedBtn=()=>{
      dispatch(savingItems({postId:item.userId,comp:item}));
    }
    
    const remSavedbtn=()=>{
      dispatch(removeSave({postId:item.userId,comp:item}));
    }
    return <>
    <div class="card" style={{width: "18rem"} }  >
    <div class="card-body"  >
        <h5>  <CiCircleRemove onClick={removeItems}  ></CiCircleRemove> <FaRegCircleUser /> {item.userId} </h5>
        <h5 class="card-title"> {item.title}</h5>
        <p class="card-text"> {item.body} </p>
        <div className="btnGroup">
        <button type="button" class="btn btn-primary"   onClick={likedposts} >
        <SlLike /> <span  class="badge text-bg-secondary">{item.reactions.likes} </span>
        </button>
        <button onClick={disLikePosts}  type="button" class="btn btn-info"><SlDislike />   <span class="badge text-bg-primary">{item.reactions.dislikes} </span></button>
        <span  >{!checked ?<CiBookmark className="savedbtn" onClick={savedBtn}></CiBookmark>:<IoBookmark className="savedbtn" onClick={remSavedbtn} />}</span> 
        </div>
        <br/>
        {item.tags.map((item)=><span class="badge text-bg-secondary">{item}</span>)}
    </div>
    </div>
    </>
}
export default SavedComp;