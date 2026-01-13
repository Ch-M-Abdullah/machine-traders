import "./Card.css"

export default function Card({img, name, price=0}: {img: string, name: string, price?: number}) {

  return (
    <div className="product-card-container">
        <img className="product-img" src={img} alt="" />
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
    </div>
  )
}
