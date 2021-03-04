import axios from "axios";

export const getTeachersFromServer = (setTeacher) => {
    axios
        .get("https://reservation.spudro.club/api/teachers", {
            headers: { "x-api-key": "A1LdkJaiEpQlLlNxAOQTuQrD90D1ex" },
        })
        .then((response) => {
            setTeacher(response.data);
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
                headers: { "x-api-key": "A1LdkJaiEpQlLlNxAOQTuQrD90D1ex" },
            }
        )
        .then((response) => {
            sortDays(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};


/*
export const getTeacherTimesById = async (teacherId, weeknum, sortDays) => {
    try {
        const response = await axios.get(`https://reservation.spudro.club/api/reservabletimes/week/${teacherId}/${weeknum}`,
        {
            headers: { "x-api-key": "A1LdkJaiEpQlLlNxAOQTuQrD90D1ex" },
        }
        )
        await sortDays(response);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

*/