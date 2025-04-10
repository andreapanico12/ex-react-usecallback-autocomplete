

function ProductCard({product}) {

  return (
    <div className="product-card">
    <img className="product-image"src={product.image} alt={product.name}/>
    <div className="product-info">
      <h3 className="product-title">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price}€</p>
    </div>
  </div>
  )
}

export default ProductCard