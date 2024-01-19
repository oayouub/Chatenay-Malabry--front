import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useEffect, useState } from 'react';
import supabase from "../server/supabase";
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';



export default function BasicTable() {
  const [posts, setPosts] = useState([])
  const [getId, setGetId] = useState(null)

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.grey[700],
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  useEffect(() => {
    async function getPosts() {
        const { data, error } = await supabase
            .from('users')
            .select('*');
        if (error) {console.error(error);
        } else {
            setPosts(data);
        }
    }
    getPosts();
    console.log('posts2', posts)
  }, []);
console.log('id',getId)

const getUsureColor = (usure) => {
  if (usure >= 0 && usure <= 33) {
    return '#91D091';
  } else if (usure >= 33 && usure <= 66) {
    return '#FFBD80';
  } else if (usure >= 66   && usure <= 100) {
    return '#DA7A7A';
  } else {
    return 'inherit'; // Default color if usure is not in any specified range
  }
};

  return (
    <TableContainer component={Paper} sx={{width: '1200px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>NAME</StyledTableCell>
            <StyledTableCell align="right">METIER</StyledTableCell>
            <StyledTableCell align="right">STATUS</StyledTableCell>
            <StyledTableCell align="right" >USURE %</StyledTableCell>
            <StyledTableCell align="right">MODIFICATION</StyledTableCell>
            <StyledTableCell align="right">Voir</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.firstname} {row.lastname}
              </StyledTableCell>
              <StyledTableCell align="right">{row.job}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right" sx={{ display:'flex', justifyContent:'end'}}><div style={{borderRadius:'100px',padding:'5px 10px' ,backgroundColor: getUsureColor(row.usure), width:'fitContent'}}>{row.usure + " %"}</div></StyledTableCell>
              <StyledTableCell align="right">{(new Date(row.created_at)).getDate() + "/" + (new Date(row.created_at)).getMonth() + 1 + "/" + (new Date(row.created_at)).getFullYear()}</StyledTableCell>
              <StyledTableCell align="right"><Link to={`/profile/${row.id}`}>Voir</Link></StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
