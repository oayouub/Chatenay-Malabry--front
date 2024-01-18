import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useEffect, useState } from 'react';
import supabase from "../server/supabase";
import { Link } from 'react-router-dom';



export default function BasicTable() {
  const [posts, setPosts] = useState([])
  const [getId, setGetId] = useState(null)

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
  return (
    <TableContainer component={Paper} sx={{width: '1200px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell align="right">METIER</TableCell>
            <TableCell align="right">STATUS</TableCell>
            <TableCell align="right">USURE</TableCell>
            <TableCell align="right">MODIFICATION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstname} {row.lastname}
              </TableCell>
              <TableCell align="right">{row.job}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.usure}</TableCell>
              <TableCell align="right">{(new Date(row.created_at)).getDate() + "/" + (new Date(row.created_at)).getMonth() + 1 + "/" + (new Date(row.created_at)).getFullYear()}</TableCell>
              <TableCell ><Link to={`/profile/${row.id}`}>Voir</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
