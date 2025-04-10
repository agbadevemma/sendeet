export interface TableColumn {
    label: string;
    key?: string;
    formatter?: (value: any) => any;
    rowFormatter?: (data: any) => void;
    className?: string;
    sortFn?: (data: any) => void;
  }
  
  export interface TableProps {
    columns: TableColumn[];
    data: any;
    loading?: boolean;
    emptyDataMsg?: string;
    actionsHeader?: string;
    isAllSelected?:boolean;
    isIndeterminate?:boolean;
    sortConfig?:boolean;
    onSort?:()=>void;
    onSelectItem: (index: number) => void;
    onSelectAll?:()=>void;
    isFetching?: boolean;
    selectedItems: number[];
    emptyRender?: React.ReactNode;
    onRowClick?: (row: any) => void;
    actions?: (row: any) => React.ReactNode;
  }