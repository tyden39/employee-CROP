import axios from "axios";
import { create } from "zustand";
import { EmployeeFilter, Pagination, ResponseList } from "./types";

export const defaultParams = {
  ignore_group: 1,
  is_not_deleted: 1,
  __jwtAuthorization: "9ed3624a593e7773923e2e8e2fa2f660",
  company_id: 1,
};

interface EmployeeStore {
  employeeList: any[];
  loading: boolean,
  pagination: Pagination,
  sortBy: string,
  sortType: string,
  filter?: EmployeeFilter,
  fetchEmployee: (currentFilter?: EmployeeFilter) => void,
  setFilter: (newFilter: EmployeeFilter) => void,
}

const useEmployeeStore = create<EmployeeStore>((set, get) => ({
  pagination: {
    page: 1,
    limit: 20,
    total: 0,
  },
  filter: {
    open: false,
    clearFilter: false
  },
  loading: false,
  sortBy: "id",
  sortType: "DESC",
  employeeList: [],
  fetchEmployee: async (newFilter?: EmployeeFilter) => {
    const { filter, pagination, sortBy, sortType } = get();

    const params = {
      ...defaultParams,
      keyword: filter?.keyword || "",
      office_id: filter?.office || "",
      department_id: filter?.department || "",
      type: filter?.type || "",
      status: filter?.status || "",
      page: pagination.page || 1,
      limit: pagination.limit || 20,
      sort_by: sortBy,
      sort_type: sortType,
      ...newFilter,
    };

    set(state => ({...state, loading: true}))

    try {
      const res = await axios.get<ResponseList>(
        "https://api.cropany.com/v1/employees",
        { params: params }
      );
      set((state) => ({
        ...state,
        loading: false,
        filter: newFilter ? newFilter : state.filter,
        employeeList: res.data.items,
        pagination: {
          page: res.data.currentPage,
          limit: res.data.limit,
          total: res.data.total,
        },
      }));
    } catch (e: any) {
      console.log(e)
    }
  },
  setFilter: (newFilter: EmployeeFilter) => {
    set(state => ({...state, filter: {...state.filter, ...newFilter}}))
  },
}));

export default useEmployeeStore;
