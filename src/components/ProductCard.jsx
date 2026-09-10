function ProductCard({
  name,
  price = 0,
  inStock = true,
}) {
  return (
    <article className="card">
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>{inStock ? "In stock" : "Out of stock"}</p>
    </article>
  );
}

export default ProductCard;