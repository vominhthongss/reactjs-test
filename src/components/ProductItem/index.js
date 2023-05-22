import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../store/actions/appSlice";
import "./style.css";

function ProductItem(props) {
  const dispatch = useDispatch();
  const handleDelete = (product) => {
    if (window.confirm("Bạn sẽ xoá sản phẩm này ?") === true) {
      dispatch(deleteProduct(product));
    }
  };
  return (
    <div className={props.isList === true ? "product" : ""}>
      <img src={props.product.image} alt="" />
      <div className="product-info">
        <div>
          <div>
            <span
              className={
                props.isList === true
                  ? "product-name-list"
                  : "product-name-grid"
              }
            >
              Tên sản phẩm: {props.product.name}
            </span>
          </div>
          <div>
            <span className="product-price">
              Giá: {props.product.price} VNĐ
            </span>
          </div>
          <div>
            <span className="product-year">Năm: {props.product.year}</span>
          </div>
          {props.isList === true ? (
            <div>
              <span className="product-description">
                {props.product.description}
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <button
            className="delete"
            onClick={() => handleDelete(props.product)}
          >
            Xoá
          </button>
          <Link className="edit" to={`edit/${props.product.id}`}>
            Sửa
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
