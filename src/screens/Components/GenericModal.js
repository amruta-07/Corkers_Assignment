import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import styles from '../styles.module.css'; // Import the CSS module
import { Constants } from '../../Utils/Constants';
import { validateData } from '../../Utils/Utils';

const Mystyles = {
    modalTitle: {
        /* background-color: black; */
        color: "#000",
        textAlign: "center",
        marginTop: "10px"
    },
    btnRow: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "10px",
        marginTop: "10px",

    }

}

export default function GenericModal({ open, onClose, handleOperation, type, selectedData }) {
    const [formData, setFormData] = useState({ name: '', address: '', pincode: '', mobileNumber: '', email: '', website: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleClick = () => {
        // Validate the data before performing the operation
        if (type != Constants.DELETE && !validateData(formData)) {
            return;
        }
        handleOperation(formData, type);
        setFormData({ name: '', address: '', pincode: '', mobileNumber: '', email: '', website: '' });
        onClose()
    };

    const message = (type) => {
        switch (type) {
            case Constants.ADD:
                return Constants.EDITING_INFORMATION
            case Constants.EDIT:
                return Constants.EDIT_INFORMATION
            case Constants.DELETE:
                return Constants.ARE_YOU_SURE_TO_DELETE_INFORMATION

        }
    }

    useEffect(() => {
        if (type == Constants.EDIT || type == Constants.DELETE) {
            setFormData({
                ...selectedData
            })
        }


    }, [type, selectedData])

    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth
        style={{
            justifyContent: 'center',
            alignItems:"center",
            margin:"auto",
            display:"flex"
        }}
        >
            <IconButton className={`${styles.modalCloseButton}`}
                style={{
                    position: 'absolute',
                    top: "0px"
                }}
                onClick={onClose}>
                <CancelIcon
                    color='action'
                    style={{
                        color: "#000"
                    }}
                />
            </IconButton>
            <DialogTitle style={Mystyles.modalTitle}>{message(type.toUpperCase())}</DialogTitle>
            <DialogContent className={styles.modalContent}
            sx={{textAlign: 'center'}}
            >
                <input type="text" name="name" value={formData.name} onChange={handleChange} className={styles.modalInput} placeholder="Name" />
                <input type="text" name="address" value={formData.address} onChange={handleChange} className={styles.modalInput} placeholder="Address" />
                <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} className={styles.modalInput} placeholder="Pincode" />
                <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className={styles.modalInput} placeholder="Mobile Number" />
                <input type="text" name="email" value={formData.email} onChange={handleChange} className={styles.modalInput} placeholder="Email" />
                <input type="text" name="website" value={formData.website} onChange={handleChange} className={styles.modalInput} placeholder="Website" />
            </DialogContent>
            <DialogActions style={Mystyles.btnRow}>
                <Button onClick={onClose} className={styles.modalButton} variant="contained" color="primary"
                    style={{
                        backgroundColor: '#222222'
                    }}
                >Cancel</Button>
                <Button onClick={handleClick} className={styles.modalButton} variant="contained" color="primary"
                    style={{
                        marginLeft: '20px'
                    }}
                >{type} </Button>
            </DialogActions>

        </Dialog>
    );
}
