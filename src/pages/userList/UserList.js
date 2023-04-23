import { DeleteOutline } from "@mui/icons-material";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { deleteUser, getUsers } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";

const UserList = () => {
  const {users,dispatch} = useContext(UserContext)

    useEffect(()=>{
      getUsers(dispatch)
    },[dispatch])

    const handleDelete = (id) => {
      deleteUser(id,dispatch);
    }

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "userName",
      headerName: "Name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userName">
            <img className="userImg" src={params.row.profilePic} alt="" />
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/portal/user/${params.row._id}`} state={{user : params.row}}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" onClick ={() => handleDelete(params.row._id)} />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default UserList;
