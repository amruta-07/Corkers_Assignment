import { APIENDPOINTS, APIMETHOD } from "./APIConstants";
import { Constants } from "./Constants";

export const fetchUserData = async () => {
    try {
        const result = await apiCall(APIMETHOD.GET);
        if (result.success) {
            return result.data;
        }
        alert(result.message || Constants.FETCH_FAILED);
        return [];
    } catch (error) {
        console.error("Error fetching user data:", error);
        alert(Constants.FETCH_FAILED);
        return [];
    }
};

export const addUserData = async (data) => {
    try {
        const result = await apiCall(APIMETHOD.POST, "", data);
        return result.data;
    } catch (error) {
        console.error("Error adding user data:", error);
        alert(Constants.ADD_FAILED);
        return [];
    }
};

export const updateUserData = async (data, id) => {
    try {
        const result = await apiCall(APIMETHOD.PUT, id, data);
        return result.data;
    } catch (error) {
        console.error("Error updating user data:", error);
        alert(Constants.UPDATE_FAILED);
        return [];
    }
};

export const deleteUserData = async (id) => {
    try {
        const result = await apiCall(APIMETHOD.DELETE, id);
        return result.data;
    } catch (error) {
        console.error("Error deleting user data:", error);
        alert(Constants.DELETE_FAILED);
        return [];
    }
};


export const apiCall = async(method,endpoint="",data={})=>{
    return new Promise((resolve,reject)=>{
        const api = APIENDPOINTS+endpoint
        fetch(api,{
            method: method,
            headers: {
                "Content-Type": "application/json"
              },
            ...(method == APIMETHOD.POST || method == APIMETHOD.PUT) &&{
                body: JSON.stringify(data)
            }

        }).then(res => res.json())
        .then(result => {
          resolve({
            success: true,
            data: result
          })
        }).catch((err)=>{
            resolve({
                success: false,
                message: err.message 
            })
        });
    });
}
