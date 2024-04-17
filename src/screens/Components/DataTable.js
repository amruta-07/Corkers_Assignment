import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, IconButton, Button } from '@mui/material';
import { Edit, Delete, Add as AddIcon } from '@mui/icons-material'; // Import Add icon
import styles from '../styles.module.css';
import { Constants } from '../../Utils/Constants';


export default function DataTable({
  handleOpenModal,
  userData,
  setSelectedData
}) {

  const openAddModal = () => {
    handleOpenModal(Constants.ADD)
  }
  const openEditModal = (user) => {
    setSelectedData(user)
    handleOpenModal(Constants.EDIT)
  }

  const openDeleteModal = (user) => {
    setSelectedData(user)
    handleOpenModal(Constants.DELETE)
  }

  return (
    <Box display="flex" justifyContent="center">
      <div style={{ width: '80%', marginTop: '50px' }}>
        <div className={styles.buttonContainer}>
          <Button className={styles.addButton} variant="contained" color="primary" startIcon={<AddIcon />}
            onClick={openAddModal}
          >Add</Button> {/* Add startIcon to add the plus icon */}
        </div>
      <TableContainer component={Paper} >

        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableCell}>ID</TableCell>
              <TableCell className={styles.tableCell}>NAME</TableCell>
              <TableCell className={styles.tableCell}>ADDRESS</TableCell>
              <TableCell className={styles.tableCell}>PINCODE</TableCell>
              <TableCell className={styles.tableCell}>MOBILE NUMBER</TableCell>
              <TableCell className={styles.tableCell}>EMAIL</TableCell>
              <TableCell className={styles.tableCell}>WEBSITE</TableCell>
              <TableCell className={styles.tableCell}>{" "} </TableCell> {/* Actions column for edit and delete icons */}
              <TableCell className={styles.tableCell}>{" "}</TableCell> {/* Actions column for edit and delete icons */}

            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell className={styles.tableCell}>{row.id < 10 ? `0${row.id}` : row.id} </TableCell>
                <TableCell className={styles.tableCell}>{row.name}</TableCell>
                <TableCell className={styles.tableCell}>{row.address}</TableCell>
                <TableCell className={styles.tableCell}>{row.pincode}</TableCell>
                <TableCell className={styles.tableCell}>{row.mobileNumber}</TableCell>
                <TableCell className={styles.tableCell}>{row.email}</TableCell>
                <TableCell className={styles.tableCell}>{row.website}</TableCell>
                <TableCell className={`${styles.tableCell} ${styles.iconCell}`}>
                  <IconButton aria-label="edit"
                    onClick={() => {
                      openEditModal(row)
                    }}
                  >
                    <Edit />
                  </IconButton>
                </TableCell>
                <TableCell className={`${styles.tableCell} ${styles.iconCell}`}>
                  <IconButton aria-label="delete"
                    onClick={() => {
                      openDeleteModal(row)
                    }}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      </div>
    </Box>
  );
}
