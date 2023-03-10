
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {UnitsImagesModal} from './unitsImagesModal/unitsImagesModal';
import styles from './unitsTable.module.css'


export function UnitsTable({ units }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Unit ID</TableCell>
            <TableCell align="left">Unit type</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Build up area</TableCell>
            <TableCell align="left">For sale</TableCell>
            <TableCell align="left">Gallery</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {units.map((unit) => (
            <TableRow
              key={unit._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             <TableCell align="left" className={styles.table_text}>{unit.unit_id}</TableCell>
              <TableCell align="left" className={styles.table_text}>

              {+unit.unit_type===0&&'apartment'}
              {+unit.unit_type===1&&'town house'}
              {+unit.unit_type===2&&' twin house'}
              {+unit.unit_type===3&&'chalet'}
              {+unit.unit_type===4&&'penthouse'}
              {+unit.unit_type===5&&'duplex'}
                
                </TableCell>
              <TableCell align="left" className={styles.table_text}>{unit.total_price}</TableCell>
              <TableCell align="left" className={styles.table_text}>{unit.bua}</TableCell>
              <TableCell align="left" className={styles.table_text}>
                {
                  unit.for_sale ? <span className={styles.for_sale}>
                    FOR SALE
                  </span> : <span className={styles.not_for_sale}>
                    NOT FOR SALE
                  </span>
                }
              </TableCell>
              <TableCell align="left" className={styles.table_text}>
              <UnitsImagesModal imagesArr={unit?.photos}/>  
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}