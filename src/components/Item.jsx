import { useNavigate } from "react-router-dom";

function Item({ item }) {
  const navigate = useNavigate();

  return (
    <div className="itemCard">
      <img src={item.images[0]} alt={"item.title"} />
      <p>{item.title}</p>
      <p>Precio: ${item.price}</p>
      <button onClick={() => navigate(`/item/${item.id}`)}>Ver mas</button>
    </div>
  );
}

export default Item;
