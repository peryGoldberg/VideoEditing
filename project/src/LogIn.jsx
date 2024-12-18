import Form from "./Form";
import "./LogIn.css";
import smile from "./assets/smile.png";
import MA from "./assets/MA.png";
import GCI from "./assets/GCI.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import React, { useState } from "react";
import Alert from '@mui/material/Alert';


const LogIn = () => {

    const [loading, setLoading] = useState(false);  // מצב האם הנתונים נטענים
    const [success, setSuccess] = useState(false);  // מצב הצלחה

    let userInSchema = yup.object().shape({
        userName: yup.string("יכול להיות רק מחרוזת").required(" שם הוא שדה חובה"),
        email: yup.string().required("מייל הוא שדה חובה").matches(/@gmail\.com$/, 'אימייל חייב להיות כתובת Gmail חוקית'),
        phone: yup
            .string() 
            .required("טלפון הוא שדה חובה")
            .matches(/^\d{10}$/, "מספר הטלפון חייב להיות בדיוק 10 ספרות")
    });

    const { control, register, handleSubmit, reset, formState: { dirtyFields, errors, isValid } } = useForm({
        mode: "all",
        resolver: yupResolver(userInSchema)
    });

    const onSubmit = (details) => {
        const userID = 'wocSc2v5MUe-8thiy'; 
        const serviceID = 'service_te12vw6';
        const templateID = 'template_mbfh92i';

        setLoading(true);  // מתחילים את האנימציה
        emailjs.send(serviceID, templateID, details, userID)
            .then((response) => {
                console.log('המייל נשלח בהצלחה', response);
                setLoading(false); // מסיימים את האנימציה
                setSuccess(true);  // הצלחה
                Swal.fire({
                    title: `שלום ${details.userName}`,  
                    text: "הצטרפת בהצלחה!",
                    icon: "success"
                  });
            })
            .catch((error) => {
                console.error('שגיאה בשליחת המייל', error);
                setLoading(false); // מסיימים את האנימציה
                Swal.fire({
                    title: "אופס",
                    text: "קרתה שגיאה",
                    icon: "error"
                  });
            });
    }
    return (
        <>
            <section className="section1">
                <div className="image-container">
                    <img src={MA} alt="Logo" className="letters" />
                    <img src={GCI} alt="Logo" id="GCI" className="letters" />
                    <form onSubmit={handleSubmit(onSubmit)} className="text-box">
                        <div  id="userName">
                            <input htmlFor="userName" style={{ marginTop: '5%' }} type="text" placeholder="שם" {...register("userName")} />
                            {errors.userName && <Alert severity="error">{errors.userName.message}</Alert>}
                        </div>
                        <div id="phone">
                        <input  htmlFor="phone" type="number" placeholder="טלפון"  {...register("phone")}/>
                        {errors.phone && <Alert severity="error">{errors.phone.message}</Alert>}
                        </div>
                        <div id="email">
                        <input htmlFor="email" type="email" placeholder="אימייל" {...register("email")}/>
                        {errors.email && <Alert sx={{marginBotton:'1%'}} severity="error">{errors.email.message}</Alert>}
                        </div>
                        <button type="submit" className="play-button">פליי</button>

                        <div className="smile">
                            <img src={smile} alt="Logo" className="image" />
                        </div>
                    </form>
                </div>
            </section>

        </>
    );
}

export default LogIn;
