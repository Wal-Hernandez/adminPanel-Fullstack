import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginatedUsers } from "../../redux/actions/paginatedUsers";

export const Pagination = () => {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state);
  //Paginado Normal
  const [pageCurrent, setPageCurrent] = useState(1);

  let itemsPerPage = 4;
  function setPagination(event) {
    setPageCurrent((pageCurrent) => Number(event.target.id));
  }
  let indiceFinal = pageCurrent * itemsPerPage;
  let indiceInicial = indiceFinal - itemsPerPage;

  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allUsers.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  let numerosRenderizados = pageNumbers.map((number) => {
    return (
      <button
        key={number}
        id={number}
        onClick={setPagination}
        style={
          number === pageCurrent
            ? { backgroundColor: "#FFDE59" }
            : { backgroundColor: "#00000000" }
        }
        className="btn-pag"
      >
        {number}
      </button>
    );
  });

  //Prev y Next
  const [paginado, setPaginado] = useState(0);

  let pageLimit = 10; /// porque si, vamos de 10 en 10
  //Definamos dos funciones mas, prev y next
  /*   function prevPage() {
    setPageCurrent((pageCurrent) => {
      if (pageCurrent > 1) {
        return pageCurrent - 1;
      }
      return 1;
    });
    setPaginado((paginado) => {
      if (pageCurrent > 1) {
        return Math.floor((pageCurrent - 2) / pageLimit);
      }
      return 0;
    });
  }
  function nextPage() {
    setPageCurrent((pageCurrent) => {
      if (pageCurrent < pageNumbers.length) {
        return pageCurrent + 1;
      }
      return pageNumbers.length;
    });
    setPaginado((   paginado) => Math.floor(pageCurrent / pageLimit));
  } */
  let sliceOfnumerosRederizados = numerosRenderizados.slice(
    pageLimit * paginado,
    pageLimit * (paginado + 1)
  );

  let paginatedResults = allUsers.slice(indiceInicial, indiceFinal);

  useEffect(() => {
    dispatch(paginatedUsers(paginatedResults));
  }, [pageCurrent, allUsers]);

  return (
    <div className="pag">
      {/*    {pageCurrent > 1 ? (
      <span onClick={prevPage} class="flecha-nueva material-symbols-outlined">
        arrow_back_ios
      </span>
    ) : (
      ""
    )} */}
      {sliceOfnumerosRederizados}
      {/*   {pageCurrent < pageNumbers.length ? (
      <span onClick={nextPage} class="flecha-nueva material-symbols-outlined">
        arrow_forward_ios
      </span>
    ) : (
      ""
    )} */}
    </div>
  );
};
