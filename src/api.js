import axios from "axios";

const url = 'http://127.0.0.1:80/v1'

const options = {
    headers:{
        'Content-Type': 'application/json',
        "Control-Allow-Origin": "*"
    },
  };

export const register =async (data) => {
    const daftar = await axios.post(`${url}/user/register`,{
        "email":data.email,
        "username":data.username,
        "password":data.password
    },options.headers)
    return daftar
};

export const predict =async () => {
    const Age = JSON.parse(localStorage.getItem("Age"));
    const Educational_level = JSON.parse(localStorage.getItem("Education"));
    const Screening_time = JSON.parse(localStorage.getItem("Screentime"));
    const Irregular_eating_habits = JSON.parse(localStorage.getItem("Eating"));
    const Exercise = JSON.parse(localStorage.getItem("Exercise"));
    const depressiveness = JSON.parse(localStorage.getItem("Depresivenes"));
    const unnecessary_misunderstandings = JSON.parse(localStorage.getItem("Misund"));
    const online_courses = JSON.parse(localStorage.getItem("Course"));
    const overthinking = JSON.parse(localStorage.getItem("Overthingking"));
    const social_media_hours = JSON.parse(localStorage.getItem("Medsos"));
    const hobby_hours = JSON.parse(localStorage.getItem("Hoby"));
    const increased_sleep_hours = JSON.parse(localStorage.getItem("Sleep"));
    
    const daftar = await axios.post(`${url}/models/predict`,{
        'Age':Age,
        'Educational_level': Educational_level,
        'Screening_time': Screening_time,
        'Irregular_eating_habits':Irregular_eating_habits,
        'Exercise':Exercise,
        'depressiveness':depressiveness,
        'unnecessary_misunderstandings':unnecessary_misunderstandings,
        'online_courses':online_courses,
        'overthinking': overthinking,
        'social_media_hours': social_media_hours,
        'hobby_hours':hobby_hours,
        'increased_sleep_hours': increased_sleep_hours,
    },options.headers)
    console.log(daftar)
    return daftar;
};


export const signin =async (data) => {
    const login = await axios.post(`${url}/user/signin`,{
        "email":data.email,
        "password":data.password
    },options.headers)
    return login;
};



