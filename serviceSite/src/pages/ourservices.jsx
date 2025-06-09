//first, import your html
import './our_services.css';
import Navbar from '../navbar';


//this page will now be referred to as homepage
export default function OurServices() {

  function onThingClick(event) {
    const button = event.target;
    const accordionContent = button.nextElementSibling;
    const isActive = button.classList.contains('active');

    // Close all other accordions
    document.querySelectorAll('.accordion-content').forEach(content => {
        content.style.maxHeight = null;
    });
    document.querySelectorAll('.accordion-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Toggle the clicked one
    if (!isActive) {
        button.classList.add('active');
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  }
  
  

  return (
    <>
      {/* // navbar */}
        <Navbar />

        {/* <!-- Main Content --> */}
    <main className="main-content">
        <h1>OUR SERVICES AND PRICES</h1>

        <div className="services-accordion">
            {/* <!-- Women's Services Category --> */}
            <div className="service-category">
                <button onClick={event => onThingClick(event)} className="accordion-btn">Women's Services</button>
                <div className="accordion-content">
                    <div className="service-item"><span>Women's Cut and Style</span><span>$60+</span></div>
                    <div className="service-item"><span>Blow dry</span><span>$40+</span></div>
                    <div className="service-item"><span>Kid girl cut</span><span>$48</span></div>
                    <div className="service-item"><span>Solid color with Haircut</span><span>$135+</span></div>
                    <div className="service-item"><span>Foils highlights with Haircut</span><span>$170+</span></div>
                    <div className="service-item"><span>Balyage with Haircut</span><span>$200</span></div>
                    <div className="service-item"><span>Toner without styling</span><span>$50+</span></div>
                    <div className="service-item"><span>Color only (No blow dry)</span><span>$85+</span></div>
                    <div className="service-item"><span>Full head Highlights</span><span>$100</span></div>
                    <div className="service-item"><span>Balayage</span><span>$150+</span></div>
                    <div className="service-item"><span>Hair mask add-on</span><span>$25+</span></div>
                </div>
            </div>

            {/* <!-- Men's Services Category --> */}
            <div className="service-category">
                < button className="accordion-btn" onClick={event => onThingClick(event)}>Men's Services</button>
                <div className="accordion-content">
                    <div className="service-item"><span>Men's Cut and Style</span><span>$38+</span></div>
                    <div className="service-item"><span>Men's Cut and Beard</span><span>$38+</span></div>
                    <div className="service-item"><span>Cut beard and wax</span><span>$45+</span></div>
                    <div className="service-item"><span>Kid boys cut</span><span>$25+</span></div>
                    <div className="service-item"><span>Outline / Beard trim</span><span>$35+</span></div>
                    <div className="service-item"><span>Men's color and cut</span><span>$80+</span></div>
                    <div className="service-item"><span>Hair mask add-on</span><span>$20</span></div>
                    <div className="service-item"><span>Relaxer straightening and cute</span><span>$92+</span></div>
                    <div className="service-item"><span>Perm</span><span>$110+</span></div>
                </div>
            </div>

            {/* <!-- Add other categories as needed --> */}

        </div>
    </main>

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
