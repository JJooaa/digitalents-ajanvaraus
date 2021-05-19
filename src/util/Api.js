import axios from "axios";

export const getTeachersFromServer = (setTeacher) => {
    axios
        .get("https://reservation.spudro.club/api/teachers", {
            headers: { "x-api-key": process.env.REACT_APP_API_KEY },
        })
        .then((response) => {
            setTeacher(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getTeacherById = (teacherId, weeknum, sortDays) => {
    axios
        .get(
            `https://reservation.spudro.club/api/reservabletimes/week/${teacherId}/${weeknum}`,
            {
                headers: { "x-api-key": process.env.REACT_APP_API_KEY },
            }
        )
        .then((response) => {
            sortDays(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const PostReservation = (reservationObject, setReturnReservation) => {
    axios
        .post(
            `https://reservation.spudro.club/api/reservations`,
            reservationObject,
            {
                headers: { "x-api-key": process.env.REACT_APP_API_KEY },
            }
        )
        .then((response) => {
            setReturnReservation(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};
