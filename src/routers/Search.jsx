import { useDispatch, useSelector } from 'react-redux';
import styles from "./HomeComps.module.css";
import EmptyMsg from '../Comp/EmptyMsg';
import SearchCard from '../Comp/SearchCard';
import NoSearchComp from '../Comp/NoSearchComp';
function Search() {
    const provideItems= useSelector(store=>store.defPostItems.searchData);
    return (
        <div>
    <div className= {styles.cards} >
    {provideItems.length===0 && <NoSearchComp ></NoSearchComp>}
    {provideItems.map((item)=> <SearchCard key={item.id} item={item} ></SearchCard>)}
    </div>
    </div>
    )
}
export default Search;