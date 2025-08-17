import ShoppingCard from "./shoppingCard";
import styles from "../styles/shop.module.css";
import { generateIdList } from "../helper/generateIdList";

export default function ShoppingList(){
    const ids = generateIdList(10);
    console.log(ids)
    return (
        <ul className={styles.ul}>{ids.map(id => <ShoppingCard key={id} id={id}/>)}</ul>
    )
}