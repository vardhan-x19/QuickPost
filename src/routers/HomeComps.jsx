import { useDispatch, useSelector } from 'react-redux';
import styles from "./HomeComps.module.css";
import EmptyMsg from '../Comp/EmptyMsg';
import Card from '../Comp/Card';
function HomeComps() {
    const provideItems= useSelector(store=>store.defPostItems.data);
    return (
        <div>
    <div className= {styles.cards} >
    {provideItems.length===0 && <EmptyMsg ></EmptyMsg>}
    {provideItems.map((item)=> <Card key={item.id} item={item} ></Card>)}
    </div>
    </div>
    )
}
export default HomeComps;