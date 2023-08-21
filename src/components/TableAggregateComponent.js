import React, { useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// State
import useTableAggregateComponentState from "./state/useTableAggregateComponentState";

const TableAggregateComponent = () => {
  const {
    total,
    users,
    limit,
    page,
    handleFindUsers,
    handleLimit,
    handlePage,
  } = useTableAggregateComponentState();

  useEffect(() => {
    handleFindUsers();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
       <Typography variant="h2" mt={5} gutterBottom>
        Aggregation
        </Typography>
      <Paper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">User Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Birthdate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users &&
                users.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.lastName}</TableCell>
                    <TableCell>{row.userName}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.birthdate}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={total}
          rowsPerPage={limit}
          page={page}
          onPageChange={handlePage}
          onRowsPerPageChange={handleLimit}
        />
      </Paper>
    </Box>
  );
};

export default TableAggregateComponent;
