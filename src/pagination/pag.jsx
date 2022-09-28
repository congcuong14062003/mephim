import { useState, useCallback, useEffect } from "react";
import "./pag.scss";

export default function Pagination(props) {
  const [numberpage, setNumberPage] = useState(1);
  const sendDataPage = useCallback(
    (e) => {
      setNumberPage(e);
      props.parentCallbackPag(e);
    },
    [props]
  );

  useEffect(() => {
    const listPag = document.querySelectorAll(".list-pag");
    listPag.forEach((item) => {
      item.addEventListener("click", () => {
        document.querySelector(".list-pag.active").classList.remove("active");
        item.classList.add("active");
      });
    });
  },[]);

  return (
    <ul className="pagination">
      <li onClick={() => sendDataPage(numberpage * 1 - 1)}>&laquo;</li>
      <li
        onClick={(e) => sendDataPage(e.target.textContent)}
        className="list-pag active"
      >
        1
      </li>
      <li
        onClick={(e) => sendDataPage(e.target.textContent)}
        className="list-pag"
      >
        2
      </li>
      <li
        onClick={(e) => sendDataPage(e.target.textContent)}
        className="list-pag"
      >
        3
      </li>
      <li
        onClick={(e) => sendDataPage(e.target.textContent)}
        className="list-pag"
      >
        4
      </li>
      <li
        onClick={(e) => sendDataPage(e.target.textContent)}
        className="list-pag"
      >
        5
      </li>
      <li
        onClick={(e) => sendDataPage(e.target.textContent)}
        className="list-pag"
      >
        6
      </li>
      <li onClick={() => sendDataPage(numberpage * 1 + 1)}>&raquo;</li>
    </ul>
  );
}
