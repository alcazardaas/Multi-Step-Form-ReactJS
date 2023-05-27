import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function SummaryTable({ data, columns }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
            <TableCell key={index}>{column.name}</TableCell>
          ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
          <TableRow key={index}>
            {columns.map((column, columnIndex) => (
              <TableCell key={columnIndex}>
                <strong>{column.name}</strong>: {item[column.property]}
              </TableCell>
            ))}
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}