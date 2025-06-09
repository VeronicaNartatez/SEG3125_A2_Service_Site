import "./our_team.css";
import Navbar from "../navbar";
import Jessica from '../assets/Jessica_Alba.png';
import Alex from '../assets/Alex_Alexander.png';
import Sam from '../assets/Sam_Smith.png';



export default function OurTeam() {

  function onThingClick(event) {
    const member = event.target;
    const targetId = member.getAttribute('data-target');
    const details = document.getElementById(targetId);
    const isActive = member.classList.contains('active');

    // Close all other details
    document.querySelectorAll('.stylist-details').forEach(detail => {
        detail.style.maxHeight = null;
    });
    document.querySelectorAll('.team-member').forEach(m => {
        m.classList.remove('active');
    });

    // Toggle the clicked one
    if (!isActive) {
        member.classList.add('active');
        details.style.maxHeight = details.scrollHeight + "px";
    }
  }


  return (<>
    
    <Navbar/>

    {/* <!-- Main Content --> */}
    <main className="main-content">
        <h1>OUR TEAM</h1>
        <h2>ONLY THE BEST FOR YOU</h2>

        <div className="team-container">
            {/* <!-- Team Member 1: Jessica --> */}
            <div className="team-member-container">
                <div className="team-member" data-target="details-jessica" onClick={event => onThingClick(event)}>
                    <img src={Jessica} alt="Stylist Jessica"/>
                    <p>Jessica Alba</p>
                    <div className="get-to-know">Get to know me!</div>
                </div>
                <div id="details-jessica" className="stylist-details">
                    <h3>Experience Information</h3>
                    <p>6 years specializing in color and extensions. Certified in Balayage and Keratin treatments.</p>
                    <h3>Personality Questions</h3>
                    <p><strong>Favorite Drink:</strong> Green Tea</p>
                    <p><strong>Favorite Movie:</strong> The Devil Wears Prada</p>
                </div>
            </div>

            {/* <!-- Team Member 2: Alex --> */}
            <div className="team-member-container">
                <div className="team-member" data-target="details-alex" onClick={event => onThingClick(event)}>
                    <img src={Alex} alt="Stylist Alex"/>
                    <p>Alex Alexander</p>
                    <div className="get-to-know">Get to know me!</div>
                </div>
                <div id="details-alex" className="stylist-details">
                    <h3>Experience Information</h3>
                    <p>7 years of experience with a focus on modern men's cuts and creative styling.</p>
                    <h3>Personality Questions</h3>
                    <p><strong>Favorite Drink:</strong> Espresso</p>
                    <p><strong>Favorite Movie:</strong> Inception</p>
                </div>
            </div>

            {/* <!-- Team Member 3: Sam --> */}
            <div className="team-member-container">
                <div className="team-member" data-target="details-sam" onClick={event => onThingClick(event)}>
                    <img src={Sam} alt="Stylist Sam"/>
                    <p>Sam Smith</p>
                    <div className="get-to-know">Get to know me!</div>
                </div>
                <div id="details-sam" className="stylist-details">
                    <h3>Experience Information</h3>
                    <p>5 years in the industry, passionate about bridal updos and formal event styling.</p>
                    <h3>Personality Questions</h3>
                    <p><strong>Favorite Drink:</strong> Champagne</p>
                    <p><strong>Favorite Movie:</strong> Breakfast at Tiffany's</p>
                </div>
            </div>
        </div>
    </main>


    <footer>
        <div className="footer">
            <h5>CONTACT US</h5>
            <p>Cancellations are accepted 24 hours before scheduled service. Any cancellations under 24 hours will be
                charged 90%</p>
            <p>123 Street, ON 1A2B3C</p>
            <p>123-123-1234</p>
            <p>botanicuts@email.com</p>
            <p>HOURS: 9am - 7pm Tue-Sat</p>
        </div>
    </footer>
  </>)
}
