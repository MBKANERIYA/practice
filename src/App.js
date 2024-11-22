import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_PRODUCT_PENDING, GET_PRODUCT_PENDING, POST_PRODUCT_PENDING } from "./redux/main/action";

function App() {

  let [product, setProduct] = useState({ name: "", price: "" })

  let dispatch = useDispatch()

  let result = useSelector((state) => state.productReducer.product)
  console.log(result);

  let addData = () => {
    dispatch({ type: POST_PRODUCT_PENDING, payload: product })
    console.log(product);
  }

  let handleData = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  let deleteData = (id) => {
    dispatch({ type: DELETE_PRODUCT_PENDING, payload: id })
    console.log(id);

  }

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_PENDING })
  }, [])

  return (
    <div className="App">
      <input name="name" value={product.name} onChange={handleData} />
      <input name="price" value={product.price} onChange={handleData} />
      <button onClick={addData}>Add</button>

      <table style={{ border: "1px solid black" }}>
        <thead style={{ border: "1px solid black" }}>
          <tr style={{ border: "1px solid black" }}>
            <th style={{ border: "1px solid black" }}>Name</th>
            <th style={{ border: "1px solid black" }}>Price</th>
          </tr>
        </thead>
        <tbody style={{ border: "1px solid black" }}>
          {result.map((val, index) => (
            <tr key={index} style={{ border: "1px solid black" }}>
              <td style={{ border: "1px solid black", padding: "10px" }}>{val.name}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{val.price}</td>
              <td style={{ border: "1px solid black", padding: "10px" }}><button onClick={() => deleteData(val.id)}>DELETE</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
