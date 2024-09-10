import { useDispatch, useSelector } from 'react-redux';
import styles from "./HomeComps.module.css";
import ReactionComp from '../Comp/ReactionComp';
import EmptyLikeItems from '../Comp/EmptyLikeItems';
function Reactions() {
    const provideItems = useSelector(store=>store.defPostItems.likedItems);
    return (
        <div>
    <div className= {styles.cards} >
    {provideItems.length===0 && <EmptyLikeItems ></EmptyLikeItems>}
    {provideItems.map((item)=> <ReactionComp key={item.id} item={item} ></ReactionComp>)}
    </div>
    </div>
    )
}
export default Reactions;