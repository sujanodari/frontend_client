import React from "react";

import constants from "../../config/constants";
interface IProps {
  total: number | undefined;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  offset: number;
}

const Paginations = (props: IProps) => {
  let pageNumbers: Array<Number> = [];
  let number: number | undefined;
  let limit = constants.pagination.limit;

  const paginate = (pageNumber: number) => {
    props.setOffset((pageNumber - 1) * limit);
  };

  number = Math.ceil((props.total as number) / limit);
  for (let i = 1; i <= number; i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      {pageNumbers.length > 1 && (
        <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <button
                onClick={() => paginate(number as number)}
                className="page-button"
              >
                {number}
              </button>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Paginations;
