import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Link } from "react-router-dom";
import supabase from "../server/supabase"
import {useState, useEffect } from 'react';




export default function BasicTable() {
  const [posts, setPosts] = useState([])

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
  return (
    <TableContainer component={Paper}>
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
                {row.firstname}{row.lastname}
              </TableCell>
              <TableCell align="right">{row.job}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.missing}</TableCell>
              <TableCell align="right">{row.created_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
