import circle1 from "./assets/circle1.png"; 
import circle2 from "./assets/circle2.png"; 
import circle3 from "./assets/smile.png"; 
import circle4 from "./assets/circle4.png"; 
import fourCircles from "./assets/fourCircles.png"; 
import "./Home.css";
import LogIn from "./LogIn";
import Castomers from "./Castomers";
import Wellcome from "./Wellcome";
const Home = () => {
    return ( 
        <>
        <section>
          <div className="home">
            <h1>יוצרת להיטים</h1>
          </div>
        </section>
        <section className="section-fourCircles">
            <img src={fourCircles} alt="Logo" className="fourCircles"/>
            <div className="fourText">
            <h2>טיפוגרפיה</h2>
            <h2>תלת מימד</h2>
            <h2>עיצוב מסך</h2>
            <h2>אנימציה</h2>
            </div>
        </section>
        {/* <section className="fourPictures">
            <div>
            <img src={circle1} alt="Logo" className=""/>
            </div>
            <div>
            <img src={circle2} alt="Logo" className=""/>
            </div>
            <div>
            <img src={circle3} alt="Logo" className=""/>
            </div>
            <div>
            <img src={circle4} alt="Logo" className=""/>
            </div>
        </section> */}
        <Wellcome/>
        <Castomers/>
        <LogIn/>
            <footer style={{textAlign:'center',color:'#204160'}}>פערי מרגליות 0533183564&copy;</footer>
        </>
     );
}
 
export default Home;