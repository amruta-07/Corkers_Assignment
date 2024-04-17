import React, { useState, useEffect } from 'react'
import DataTable from './Components/DataTable'
import styles from './styles.module.css';
import GenericModal from './Components/GenericModal';
import { addUserData, deleteUserData, fetchUserData, updateUserData } from '../Utils/Apiservice';
import { Constants } from '../Utils/Constants';
import { validateData } from '../Utils/Utils';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("")
    const [userData, setUserData] = useState([])
    const [selectedData, setSelectedData] = useState({})

    const handleOpenModal = (type) => {
        console.log(type, "dsf")
        setModalType(type)
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOperation = async (data, type) => {


        if (type === Constants.ADD) {
            // Add new user data
            await addUserData({
                ...data,
                id: String (userData.length + 1),
            });
        } else if (type === Constants.EDIT) {
            // Update existing user data
            await updateUserData(data, data.id);
        } else if (type === Constants.DELETE) {
            // Delete user data
            await deleteUserData(data.id);
        }

        // Refresh the data from the API
        getData();
    };

    const getData = async () => {

        const data = await fetchUserData()
        console.log(data, "d")
        setUserData(data)

    }
    
    useEffect(() => {
        getData()

    }, [])


    return (
        <div className={styles.container}>

            <DataTable
                handleOpenModal={handleOpenModal}
                userData={userData}
                setSelectedData={setSelectedData}
            />



            <GenericModal open={isModalOpen} onClose={handleCloseModal} handleOperation={handleOperation}
                selectedData={selectedData}
                type={modalType}

            />

        </div>
    )
}

export default Home
