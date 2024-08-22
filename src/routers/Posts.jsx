import styles from './Posts.module.css';
import {useNavigate} from 'react-router-dom';
import { addItems } from '../Store/defItems';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
function Posts(params) {
    const dispatch=useDispatch();
    const naviGate=useNavigate();
    const id=useRef();
    const title=useRef();
    const desc=useRef();
    const tags=useRef();
    const btnFunc=()=>{
        console.log("fecth is called");
        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: title.current.value,
              userId: id.current.value,
             body:desc.current.value,
             tags:tags.current.value.split(" "),
             reactions: {likes: 0, dislikes: 0}
            })
          })
          .then(res => res.json())
          .then((data)=>{
            console.log(data);
            dispatch(addItems(data));
           });
           naviGate("/")
        }
           
    return (
        <form className={styles.post} onSubmit={(e)=>e.preventDefault()}>
    <div class="mb-3">
        <label for="exampleInputProfileId" class="form-label">Enter Profile Id </label>
        <input type="text" ref={id} class="form-control" id="exampleInputEmail1" placeholder="Ex:nter id from 1 to 100"  aria-describedby="emailHelp"/>
        <div id="emailHelp" class="form-text">Enter your official Unique Id for Now enter any No 0-100</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Enter Your Title</label>
        <input type="text" ref={title} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Description Of the post</label>
        <textarea ref={desc} className="form-control" id="exampleInputDescription" rows="5" style={{ resize: 'vertical' }} />
    </div>
    <div class="mb-3">
        <label for="exampleInputTags" class="form-label">Enter Mentions/Tags</label>
        <input type="text" ref={tags} class="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type='submit'  class="btn btn-primary" onClick={btnFunc} >Submit</button>
    </form>
    )
}
export default Posts;