import './Castomers.css';
import circleGradiant from "./assets/circleGradiant.png";
import circle2 from "./assets/circle2.png";
import logo from "./assets/logo.gif";
import bigLogo from "./assets/bigLogo.png";
import { useState, useEffect } from 'react';

const Castomers = () => {
    const [imges, setImages] = useState([
        { logo: logo, text: 'תיאור 1: תוכנית מרתקת ומרגשת!' },
        { logo: bigLogo, text: 'תיאור 2: תוכנית שילהבה את הבנות!' },
        { logo: logo, text: 'תיאור 3: שיתוף פעולה מושלם!' },
        { logo: bigLogo, text: 'תיאור 4: מחכים בקוצר רוח להפקה הבאה!' },
        { logo: logo, text: 'תיאור 1: תוכנית מרתקת ומרגשת!' },
        { logo: bigLogo, text: 'תיאור 2: תוכנית שילהבה את הבנות!' },
        { logo: logo, text: 'תיאור 3: שיתוף פעולה מושלם!' },
        { logo: bigLogo, text: 'תיאור 4: מחכים בקוצר רוח להפקה הבאה!' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImages((prevImages) => {
                const newImages = [...prevImages];
                const firstElement = newImages.shift();
                newImages.push(firstElement);
                return newImages;
            });
        }, 3000);

        return () => clearInterval(interval); // ניקוי ה-Interval על unmount
    }, []);

    return (
        <div className="castomers">
            <div className="lahit">תערכו להיות להיט</div>
            <div className="all">
                {/* מעגלי הלוגואים */}
                <div className="circles">
                    {imges.map((item, index) => (
                        <div key={index} className="try">
                            <img src={item.logo} alt={`Logo ${index}`} />
                        </div>
                    ))}
                </div>
                {/* עיגול מרכזי */}
                <img id="circle" src={imges[0].logo} alt="Logo" />
                <div className="description">{imges[0].text}</div>
            </div>
        </div>
    );
}

export default Castomers;
