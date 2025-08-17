import { useEffect, useState } from "react";
import styles from '../styles/card.module.css';

export default function ShoppingCard({ id }){
    const [item, setItem] = useState({});
    useEffect(() => {
        const fetchData = async () => {const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const item = await res.json();
        setItem(item);}
        fetchData();
    }, [id]);

    return (
        <article className={styles.article}>
            <img src={item.image} className={styles.img}></img>
            <p>{item.title}</p>
        </article>
    )
}