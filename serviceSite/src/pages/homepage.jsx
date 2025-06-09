//first, import your html
import './homepage.css';
import Navbar from '../navbar';
import firstImg from '../assets/first.png';
import secondImg from '../assets/secondhair.png';
import thirdImg from '../assets/thirdhair.png';
import fourthImg from '../assets/fourthhair.png';
import fifthImg from '../assets/fifthhair.png';
import sixthImg from '../assets/sixthhair.png';

import { Link } from "react-router";


//this page will now be referred to as homepage
export default function Homepage() {

  return (
    <>
      {/* // navbar */}
        <Navbar />

        {/* // title and book appointment btn */}
        <div className = 'title-btn-container'>
            <div className = 'title-box'>
                <h1 className = 'title'>BotaniCuts Hair Salon
                    <p className = 'title'>123 Street, Ottawa ON</p>
                </h1>
            </div>
        </div>

        <div className="app-btn-container">
            <form action = '../booking/booking.html'>
                <Link to="/booking">
                    <button id = 'app-btn'>Book an appointment with us</button>
                </Link>
            </form>
        </div>


          {/* // explanation of salon  */}
          <div id = 'bg-intro'>
            <div className = 'title-box-scroll'>
                <h1 className = 'title-scroll'>Welcome to BotaniCuts — Where Beauty Blooms Naturally 
                </h1>
              </div>
    
              <div className = 'intro-box'>
                <p className = 'intro-text'>
                    At Botanicuts, we believe in growth, transformation, and the power of self-expression. 
                    Our salon is a sanctuary where style meets soul, and every cut, color, and conversation helps you blossom into your most authentic self. 
                    Founded with the vision of combining beauty with balance, Botanicuts is more than just a salon — it's a botanical escape from the everyday. Our mission is simple: to cultivate a space where clients and stylists alike feel rooted, refreshed, and radiant.
                </p>
              </div>
          </div>
        

          {/* // Image text */}
        <div className="caption-container">
            <p id="caption"></p>
        </div>

        {/* //Thumbnail images  */}
        <div className="row">
            <div className="column">
                <img className="demo cursor" src={firstImg} alt="The Woods" />
            </div>
            <div className="column">
                <img className="demo cursor" src={ secondImg} alt="Cinque Terre" />
            </div>
            <div className="column">
                <img className="demo cursor" src={thirdImg} alt="Mountains and fjords" />
            </div>
            <div className="column">
                <img className="demo cursor" src={fourthImg}  alt="Northern Lights" />
            </div>
            <div className="column">
                <img className="demo cursor" src={fifthImg} alt="Nature and sunrise" />
            </div>
            <div className="column">
                <img className="demo cursor" src={sixthImg} alt="Snowy Mountains" />
            </div>
        </div>

        <footer>
        <div className="footer">
            <h5>CONTACT US</h5>
            <p>Cancellation are accepted 24 hours before scheduled service. Any cancellations under 24 hours will be
                charged 90%</p>
            <p>123 Street, ON 1A2B3C</p>
            <p>123-123-1234</p>
            <p>botanicuts@email.com</p>
            <p>HOURS: 9am - 7pm Tue-Sat</p>
        </div>
    </footer>
    </>
  );
}
