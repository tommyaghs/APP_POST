import { PaginationProps } from '../app/interfaces';

function PaginationComponent({ currentPage, totalPages, handlePageChange }: PaginationProps) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="d-flex justify-content-center mt-4 fixed-bottom">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${isFirstPage ? 'disabled' : ''}`}>
            <button
              className="btn pointer glass-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              Indietro
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`page-item ${index + 1 === currentPage ? 'current-page-button' : ''}`}>
              <button className="btn glass-btn" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ),
)}
          <li className={`page-item ${isLastPage ? 'disabled' : ''}`}>
            <button
              className="btn pointer glass-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={isLastPage}
            >
              Avanti
            </button>
          </li>
        </ul>
      </nav>
    </div>
          )}

export default PaginationComponent;
