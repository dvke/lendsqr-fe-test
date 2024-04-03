"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { IoFilterOutline } from "react-icons/io5";
import styles from "./index.module.scss";
import { useState } from "react";
import Pagination from "./pagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const DataTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  console.log(table.getPageCount());

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage: number) => {
    table.setPageIndex(newPage);
    setCurrentPage(newPage);
  };

  return (
    <section className={styles["table-section"]}>
      <div className={styles["table-section__container"]}>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, i) => (
                  <th key={header.id}>
                    <span>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {i !== table.getHeaderGroups()[0].headers.length - 1 && (
                        <>
                          <button>
                            <IoFilterOutline />
                          </button>
                        </>
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length
              ? table.getRowModel().rows.map((row, i) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                        {i !== table.getRowModel().rows.length - 1 && <hr />}
                      </td>
                    ))}
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
      <div className={styles.pagination}>
        <div className={styles["pagination-view"]}>
          <p>Showing</p>
          <div className={styles["pagination-view__dropdown"]}>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>
          <p>out of {data.length}</p>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={table.getPageCount()}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default DataTable;
