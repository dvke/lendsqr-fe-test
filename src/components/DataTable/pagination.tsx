import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  };

  const generatePageButtons = () => {
    const buttons = [];
    if (totalPages <= 4) {
      // Show all page buttons if totalPages is less than or equal to 10
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i - 1)}
            className={currentPage === i - 1 ? `${styles.active}` : ""}
          >
            {i}
          </button>
        );
      }
    } else {
      // Show 7 page buttons with ellipses for compact pagination
      for (let i = 1; i <= 3; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i - 1)}
            className={currentPage === i - 1 ? `${styles.active}` : ""}
          >
            {i}
          </button>
        );
      }
      buttons.push(
        <button key="more" className={styles.disabled}>
          …
        </button>,
        <button
          key={totalPages - 1}
          onClick={() => handlePageChange(totalPages - 2)}
          className={currentPage === totalPages - 2 ? `${styles.active}` : ""}
        >
          {totalPages - 1}
        </button>,
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages - 1)}
          className={currentPage === totalPages - 1 ? `${styles.active}` : ""}
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles["pagination-btn"]}
        disabled={currentPage === 0}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <FaChevronLeft />
      </button>
      {generatePageButtons()}
      <button
        className={styles["pagination-btn"]}
        disabled={currentPage === totalPages - 1}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
