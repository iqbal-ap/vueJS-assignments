import { ref } from 'vue';

/**
 * 
 * @param {{
 * name: string,
 * email: string,
 * bookingDate: Date,
 * bookingTime: string,
 * numOfPeople: Integer,
 * requests: string
 * }} payload 
 */
function createBooking(payload) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    };

    try {
        fetch("http://localhost:3000/bookings", requestOptions)
    } catch (error) {
        console.log('Error creating booking data');
        throw error;
    }
}

function getMenus() {
    const menus = ref(null);
    const error = ref(null);

    const requestOptions = {
        method: "GET",
    };

    fetch("http://localhost:3000/menus", requestOptions)
        .then((response) => response.json())
        .then((data) => {menus.value = data})
        .catch((err) => error.value = err);
    
    return { menus, error};
}

/**
 * 
 * @param {Integer} id 
 * @param {{
 * title: string,
 * imgSrc: string,
 * description: string,
 * price: Number
 * }} payload 
 */
function updateMenuById(id, payload) {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    };

    try {
        fetch(`http://localhost:3000/menus/${id}`, requestOptions);
    } catch (error) {
        console.log('Error updating menu data');
        throw error;
    }
}
/**
 * 
 * @param {{
 * title: string,
 * imgSrc: string,
 * description: string,
 * price: Number
 * }} payload 
 */
function createMenu(payload) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    };

    try {
        fetch(`http://localhost:3000/menus`, requestOptions);
    } catch (error) {
        console.log('Error updating menu data');
        throw error;
    }
}

export default {
    createBooking,
    getMenus,
    updateMenuById,
    createMenu,
}