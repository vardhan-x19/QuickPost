import { useDispatch, useSelector } from 'react-redux';
import styles from "./HomeComps.module.css";
import SavedComp from '../Comp/SavedComp';
import EmptySaveMsg from '../Comp/EmptySaveMsg';
function Saved() {
    const provideItems = useSelector(store=>store.defPostItems.savedItems);
    return (
        <div>
    <div className= {styles.cards} >
    {provideItems.length===0 && <EmptySaveMsg ></EmptySaveMsg>}
    {provideItems.map((item)=> <SavedComp key={item.id} item={item} ></SavedComp>)}
    </div>
    </div>
    )
}
export default Saved;