import { clsx } from "clsx";
import LoadingSpinner from "../LoadingSpinner";
import { TableColumn, TableProps } from "../types";
import Checkbox from "@/components/Checkbox";
import SendAlt from "@/icons/send-alt";
import ArrowUp from "@/icons/arrow-up";

const Table = ({
  columns,
  data = [],
  loading,
  isFetching,
  emptyRender,
  actions,
  onRowClick,
  actionsHeader,
  isAllSelected,
  isIndeterminate,
  selectedItems = [],
  onSort,
  onSelectAll,
  onSelectItem,
}: TableProps) => {
  const getDataValue = (row: any, column: TableColumn) => {
    if (column.rowFormatter) return column.rowFormatter(row);
    let value = row[column.key as string];
    if (
      (value === undefined || value === null || value === "") &&
      !column.formatter
    )
      return "-";

    return column.formatter ? column.formatter(value) : value;
  };

  const isDataEmpty = Array.isArray(data) && data.length === 0;
  const showEmptyRender = !loading && isDataEmpty && emptyRender;

  const getTableHeightClass = () => {
    if (loading) return "min-h-[300px]";
    if (showEmptyRender) return "min-h-[400px]";
    if (isDataEmpty) return "min-h-[300px] md:min-h-[200px]";
    return "";
  };

  return (
    <div className="w-full">
      <div
        className={`w-full ${isDataEmpty ? "mb-24" : "mb-4"} overflow-y-hidden`}
      >
        <div className={`-my-2 relative  ${getTableHeightClass()}`}>
          <div className="absolute z-20 flex justify-center top-16 w-full">
            {loading && (
              <div className="mt-20">
                <LoadingSpinner />
              </div>
            )}
            {!loading && !data?.length && !emptyRender && (
              <p className="text-center mt-20 text-gray-400 text-xl">
                No Entry found
              </p>
            )}

            {showEmptyRender && <div className="mt-14">{emptyRender}</div>}
          </div>

          <div className="relative top-0 inline-block min-w-full py-2 align-middle">
            <table
              className={`min-w-full relative ${
                isFetching ? "opacity-10 animate-pulse" : ""
              }`}
            >
              <thead className="text-grey-600 rounded sticky top-0 z-10">
                <tr className="bg-[#F9FAFB]">
                  {columns?.map((column: TableColumn, index: number) => (
                    <th
                      key={`${column.key}-${index}`}
                      scope="col"
                      className="pl-6 pr-2 py-2  text-left text-sm font-semibold first:rounded-l-lg text-gray-700 sm:pl-3 "
                    >
                      <div className="flex gap-4">
                        {index === 0 && (
                          <Checkbox
                            checked={isAllSelected}
                            indeterminate={isIndeterminate}
                            onClick={onSelectAll}
                          />
                        )}
                        {column.label}
                        <div
                          // onClick={() => handleSort("campaign")}
                          // className={` transition-transform duration-300   ${
                          //   sortConfig?.key === "campaign" &&
                          //   sortConfig.direction === "asc"
                          //     ? "transform rotate-180"
                          //     : ""
                          // }`}
                        >
                          <ArrowUp color={"#5D6679"} />
                        </div>
                        {column.sortFn && (
                          <span
                            className="cursor-pointer mt-1"
                            onClick={column.sortFn}
                          >
                            {/* <MdOutlineUnfoldMore className='h-4 w-4 text-gray-500' /> */}
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                  {actions && (
                    <th className="py-3.5 pr-3 text-sm font-semibold text-gray-700 ">
                      {actionsHeader}
                    </th>
                  )}
                </tr>
              </thead>

              <tbody className="bg-white">
                {Array.isArray(data) &&
                  data.map((row: any, rowIndex: number) => (
                    <tr
                      key={rowIndex}
                      onClick={() => onRowClick?.(row)}
                      className={`${"border-b cursor-pointer border-b-grey-50 hover:bg-gray-50"} ${
                        onRowClick ? "cursor-pointer" : ""
                      }`}
                    >
                      {columns.map((column: TableColumn, index: number) => (
                        <td
                          key={`${column.key}-${index}`}
                          className={clsx(
                            column.className ? column.className : "",
                            "whitespace-nowrap text-nowrap py-4 pl-4 pr-3 sm:pl-3   text-gray-600 text-sm"
                          )}
                        >
                          <div className="flex w-full items-center gap-4">
                            {index === 0 && (
                              <Checkbox
                                checked={selectedItems.includes(rowIndex)}
                                onClick={() => {
                                  onSelectItem(rowIndex);
                                }}
                              />
                            )}
                            {index == 0 && (
                              <div
                                className={`h-5 w-5 p-4 flex items-center justify-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.10),_0px_0px_0px_1px_rgba(185,_189,_199,_0.20)] border ${
                                  row.status === "Draft" &&
                                  "bg-grey-50 border-[#475467]"
                                }  ${
                                  row.status === "Active" &&
                                  "border-warning-500 bg-warning-50"
                                }
                         ${
                           row.status === "Completed" &&
                           "bg-success-50 border-success-500 "
                         } rounded-lg`}
                              >
                                <SendAlt
                                  color={
                                    row.status === "Active"
                                      ? "#DD9316"
                                      : row.status === "Completed"
                                      ? "#0F973D"
                                      : "#667085"
                                  }
                                />
                              </div>
                            )}
                            <span className="break-normal break-words whitespace-normal text-nowrap font-medium">
                              {getDataValue(row, column)}
                            </span>
                          </div>
                        </td>
                      ))}
                      {actions && (
                        <td className="relative whitespace-nowrap py-4  text-right text-sm  sm:pr-3">
                          {actions(row)}
                        </td>
                      )}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
