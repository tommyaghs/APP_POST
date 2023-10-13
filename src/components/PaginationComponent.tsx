import React from 'react';
import { PaginationProps } from '../app/interfaces';

function PaginationComponent({ currentPage, totalPages, handlePageChange }: PaginationProps) {
  return (
    <div className="d-flex justify-content-center mt-4 fixed-bottom">
      <nav>
        <ul className="pagination ">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="btn pointer glass-btn" onClick={() => handlePageChange(currentPage - 1)}>
              Indietro
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
              <button className="btn glass-btn" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="btn pointer glass-btn" onClick={() => handlePageChange(currentPage + 1)}>
              Avanti
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PaginationComponent;