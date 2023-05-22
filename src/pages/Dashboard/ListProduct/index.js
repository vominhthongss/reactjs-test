import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../../store/actions/appSlice";
import ProductItem from "../../../components/ProductItem/index";
import { useState } from "react";
import './style.css';

function List() {
  const products = useSelector((state) => state.app.products);
  const [isList, setIsList] = useState(true);
  const gridView = products.map((product, index) => {
    return (
      <div className="grid-item">
        <ProductItem key={index} product={product} />
      </div>
    );
  });
  const listView = products.map((product, index) => {
    return (
      <div className="list-item">
        <ProductItem key={index} product={product} isList={true} />
      </div>
    );
  });
  const handleToggleGridView= ()=>{
    setIsList(!isList);
  }
  return (
    <div>
      <div>
          <Link className="add" to={"add"}>+ Thêm sản phẩm</Link>
        
        <button onClick={handleToggleGridView}>
          {isList ? "Grid view" : "List view"}
        </button>
      </div>
      <div className="container">
        <div className={isList ? "list-container" : "grid-container"}>
          {isList ? listView : gridView}
        </div>
      </div>
    </div>
  );
}

export default List;
