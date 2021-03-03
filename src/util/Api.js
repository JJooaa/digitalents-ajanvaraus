import axios from "axios";

export const getTeachersFromServer = () => {
    axios
        .get("https://reservation.spudro.club/api/teachers", {
            headers: { "x-api-key": "A7sOVkBANpBDMluasPmQMPHqZ14yqm" },
        })
        .then((response) => {
            console.log(response.data);
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
                headers: { "x-api-key": "A7sOVkBANpBDMluasPmQMPHqZ14yqm" },
            }
        )
        .then((response) => {
            sortDays(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};


