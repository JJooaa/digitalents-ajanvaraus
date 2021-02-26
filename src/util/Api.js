import axios from "axios";

export const getTeachersFromServer = () => {
    axios
        .get("https://reservation.spudro.club/api/teachers", {
            headers: { "x-api-key": "JwnB6zQgXaxfPvy59KoLg4CxpqtX48" },
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getTeacherById = (teacherId, date) => {
    axios
        .get(
            `https://reservation.spudro.club/api/reservabletimes/${teacherId}/${date}`,
            {
                headers: { "x-api-key": "JwnB6zQgXaxfPvy59KoLg4CxpqtX48" },
            }
        )
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};


