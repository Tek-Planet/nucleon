import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
   
  },
});

function createData(id, job, client, status ) {
  return { id, job, client, status};
}

const rows = [

  

  createData(1, 'Erection of 100,000  gallon Braithwaite Water Tank, Bayelsa', 'JOPRESTEP WATER SOLUTION', 'Completed'),
  createData(2, 'Erection of Security guard houses for NLNG', 'CANDIX ENGINEERING NIG LTD', 'Completed'),
  createData(3, 'Erection of 75,000 gallon Braithwaite Water Tank, Arochukwu', 'JOPRESTEP WATER SOLUTION', 'Completed'),
  createData(4, 'Replacement of sections of 4” lines and Repair of Damaged Braval Water line', 'LIBROD ENERGY SERVICES', 'Completed'),
  createData(5, 'Design Development of Methanol Plant', 'IRON OX METAL WORKS LTD', 'Completed'),
  createData(6, 'Fabrication of tools box, skids and shaker platform', 'LIBROD ENERGY SERVICES', 'Completed'),
  createData(7, 'Supply of Scaffold Tubes and Accessories', 'LIBROD ENERGY SERVICES', 'Completed'),


];



const Porfolio = () => {
  const classes = useStyles();

  return (
    <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>JOBS EXECUTED</h1>

            <div>
            <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className='tableHeader'>S/N</TableCell>
            <TableCell className='tableHeader' align="center">JOBS</TableCell>
            <TableCell className='tableHeader' align="center">CLIENT</TableCell>
            <TableCell  className='tableHeader' align="center">STATUS</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableText' component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className='tableText' align="center">{row.job}</TableCell>
              <TableCell className='tableText' align="center">{row.client}</TableCell>
              <TableCell className='tableText' align="center">{row.status}</TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
          </div>
      </div>
   </section>
  )
}

export default Porfolio
