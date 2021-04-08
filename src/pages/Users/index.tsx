import React, { useEffect, useState } from "react";
import {
  Backdrop,
  Button,
  CircularProgress
} from "@material-ui/core";

import { IUser } from "../../interfaces/IUser";
import HttpClient from "../../services/Request";
import constants from "../../config/constants";
import { DataGrid } from "@material-ui/data-grid";
import Paginations from "../../component/Pagination";

interface IProps {}

const Users = (props: IProps) => {
  const [isAppLoading, setIsAppLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [offset, setOffset] = useState<number>(0);
  const [users, setUsers] = useState<IUser[]>([]);
  const [total, setTotal] = useState<number>();
  const [selectedRow, setSelectedRow] = useState();

  const getAllUsers = async () => {
    const httpClient = new HttpClient();
    try {
      const users = await httpClient.get({
        endpoint: `/users?limit=${constants.pagination.limit}&&offset=${offset}`,
      });
      setUsers(users.data?.data as IUser[]);
      setTotal(users.data?.paging.total);
      setIsAppLoading(false);
    } catch (err) {
      setError(err);
    }
  };

const handleViewMoreUserDetail = ()=>{
console.log(selectedRow)
}

  useEffect(() => {
    getAllUsers();
  }, [offset, getAllUsers]);

  const handleSelectionChange = (selection: any) => {
    setSelectedRow(selection.row);
  };

  const columns = [
    { field: "name", headerName: "Name", width: 300 },
    { field: "age", headerName: "Age", width: 300 },
    { field: "gender", headerName: "Gender", width: 300 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "phone", headerName: "Phone No", width: 300 },
    {
      field: "id",
      headerName: "Actions",
      width: 430,
      renderCell: (params: any) => (
        <strong>
          <Button onClick={handleViewMoreUserDetail} className="user-button" fullWidth variant="contained">
            Vew Detail
          </Button>
        </strong>
      ),
    },
  ];

  return (
    <>
    {isAppLoading ? (
        <Backdrop open={true}>
          <CircularProgress color="inherit" size={80} />
        </Backdrop>
      ) : 
      users.length ? (
        <>
          <div className="table">
            <h3>Users Table</h3>
            <DataGrid
              className="table-paper"
              rows={users}
              autoHeight={true}
              columns={columns}
              pageSize={constants.pagination.limit}
              checkboxSelection={false}
              onRowEnter={handleSelectionChange}
              hideFooter={true}
            />
          </div>
          <Paginations total={total} setOffset={setOffset} offset={offset} />
        </>
      ) : (
        <div>No users</div>
      )}
    </>
  );
};
export default Users;
