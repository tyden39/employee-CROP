
export interface Filter {
  value?: string;
  activeValue?: string;
}

export interface EmployeeFilter {
  keyword?: string;
  office?: string;
  department?: string;
  type?: string;
  status?: string;
  open?: boolean;
  clearFilter?: boolean;
  active?: boolean;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
}

export interface ResponseList {
  currentPage: number;
  items: [];
  limit: number;
  total: number;
}
