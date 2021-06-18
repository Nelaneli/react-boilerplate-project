/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, amount) {
  return { id, date, name, shipTo, amount };
}

const rows = [
  createData(0, 'India', 5944710, 5685636, 116026),
  createData(1, 'Perancis', 5685387, 338555, 109741),
  createData(2, 'Turki', 5354153, 5219797, 49012),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Data Kasus Covid-19 Di Dunia</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Negara</TableCell>
            <TableCell>Jumlah Kasus</TableCell>
            <TableCell>Sembuh</TableCell>
            <TableCell align="right">Kematian</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Lihat semua data kasus covid-19
        </Link>
      </div>
    </React.Fragment>
  );
}
