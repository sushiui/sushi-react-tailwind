import React, { ReactNode, useEffect, useRef, useState } from "react";
import RcTable from "rc-table";
import { Sorter, TableProps } from "./Table.types";
import { ColumnType, DefaultRecordType } from "rc-table/lib/interface";
import Spin from "../Spin/Spin";

const arrowClassName = "text-16px material-icons-outlined";
const arrowStyle = { display: "flex", lineHeight: "6px" };

function TableInner<RecordType extends DefaultRecordType>(
  { columns, dataSource, emptyText, loading, status, ...props }: TableProps<RecordType>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const [sort, setSort] = useState<string[]>(Array(columns?.length).fill(""));
  const data = useRef<any>(dataSource);
  const [RcData, setRcData] = useState<any>(dataSource);
  const [RcColumns, setRcColumns] = useState<ColumnType<RecordType>[]>();

  useEffect(() => {
    data.current = dataSource || [];
    sortData(getSortedIndex());
  }, [dataSource]);

  useEffect(() => {
    sortData(getSortedIndex());
  }, [columns]);

  useEffect(() => {
    generateRcColumns();
  }, [sort, columns]);

  const generateRcColumns = () => {
    const cols =
      columns?.map((column, index) => ({
        ...column,
        title: column.sorter ? <HeaderWithSorter title={column.title} index={index} /> : column.title,
        className: index === columns.length - 1 ? "last-th" : "",
      })) || [];

    setRcColumns([...cols]);
  };

  const getSortedIndex = () => sort.findIndex((s) => s !== "");

  const onSorterClick = (index: number) => {
    const s = Array(columns?.length).fill("");
    s[index] = sort[index] === "" ? "ascend" : sort[index] === "ascend" ? "descend" : "";
    setSort([...s]);
    sortData(index, s);
  };

  const sortData = (index: number, sortState: string[] = sort) => {
    const sorter = columns?.[index]?.sorter;
    if (index === -1 || !sorter || typeof sorter === "boolean" || sortState[index] === "") {
      setRcData([...data.current]);
    } else {
      const sortedData = [...data.current].sort((a: any, b: any) => {
        const compareResult = sorter.compare(a, b);
        if (compareResult !== 0) return sortState[index] === "ascend" ? compareResult : -compareResult;
        return 0;
      });
      setRcData([...sortedData]);
    }
  };

  const HeaderWithSorter = ({ title, index }: { title: ReactNode; index: number }) => (
    <div className="flex items-center cursor-pointer" onClick={() => onSorterClick(index)}>
      <div className="w-full">{title}</div>
      <div className="text-center flex-col">
        <span className={`${arrowClassName} ${sort[index] === "ascend" ? "" : "text-dark-35"}`} style={arrowStyle}>
          arrow_drop_up
        </span>
        <span className={`${arrowClassName} ${sort[index] === "descend" ? "" : "text-dark-35"}`} style={arrowStyle}>
          arrow_drop_down
        </span>
      </div>
    </div>
  );

  const EmptyNode = () => <div className="text-center">{emptyText || "No Data"}</div>;
  const LoadingNode = () => <div className="h-5"></div>;

  return (
    <div className={loading ? "relative pointer-events-none" : ""} ref={ref}>
      {loading && <Spin className={"absolute top-50% left-50% -mt-10px -ml-10px"} />}
      <RcTable
        {...props}
        columns={RcColumns}
        data={RcData}
        emptyText={loading ? <LoadingNode /> : <EmptyNode />}
        className={loading ? "ss-table opacity-40" : status === "error" ? "ss-table ss-table-error" : "ss-table"}
      />
    </div>
  );
}

const Table = React.forwardRef(TableInner) as <RecordType extends DefaultRecordType>(
  props: TableProps<RecordType> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof TableInner>;

export default Table;
