import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../../store/actions/appSlice";

function List() {
  const products = useSelector((state) => state.app.products);
  const dispatch = useDispatch();
  const handleDelete = (product) => {
    dispatch(deleteProduct(product));
  };

  const list = products.map((x,index) => {
    return (
      <div key={index}>
        {x.id}| {x.name} | {x.year}  | {x.price} | {x.image} | {x.description}  <button onClick={() => handleDelete(x)}>Xoá</button>{" "}
        <Link to={`edit/${x.id}`}>Sửa</Link>
      </div>
    );
  });
  return (
    <div>
      <div>
        <Link to={"add"}>Thêm</Link>{" "}
      </div>
      <div>{list}</div>
    </div>
  );
}

export default List;
