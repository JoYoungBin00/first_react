import styles from "./cards.module.css"
export default function ProductCard({ name, price, brand }) {
  return (
    <article className={styles.card}>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{brand}</p>
    </article>
  );
}

