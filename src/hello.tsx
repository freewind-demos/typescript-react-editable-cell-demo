import React from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditableCell from './EditableCell';

function validator(num: number): boolean {
  return num > 5;
}

export default function Hello() {
  return <div>
    <h1>Hello React</h1>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell className='cell'>
              <EditableCell editable={true} value={23} validator={validator}
                            onChange={x => console.log(x)}
              />
            </TableCell>
            <TableCell className='cell'>
              <EditableCell editable={true} value={23} validator={validator}
                            onChange={x => console.log(x)}
              />
            </TableCell>
            <TableCell className='cell'>
              <EditableCell editable={true} value={23} validator={validator}
                            onChange={x => console.log(x)}
              />
            </TableCell>
            <TableCell>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

  </div>
};
