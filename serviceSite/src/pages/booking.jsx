import "./booking.css";
import Navbar from "../navbar";

export default function Booking() {
  return (
    <>
      <Navbar />

      {/* <!--FORM--> */}
      <div className="flex-row-centre">
        <div className="form-box">
          <p className="title" id="title-form">
            {" "}
            Request for a New Appointment
          </p>
          <p className="small-title">
            Since our small business hours may vary, we will email you about the
            times available for the day you choose!
          </p>

          <form method="post" action="/submit-feedback">
            <div className="flex-col">
              <div className="flex-row">
                <label className="box-label">Your First Name:</label>
              </div>
              <div className="flex-row">
                <input
                  className="input-box"
                  type="text"
                  name="username"
                  placeholder="Eren"
                  required
                />
              </div>
            </div>

            <div className="flex-row">
              <label className="box-label">Your Last Name:</label>
            </div>
            <div className="flex-row">
              <input
                className="input-box"
                type="text"
                name="username"
                placeholder="Yeager"
                required
              />
            </div>

            <div className="flex-row">
              <label className="box-label">Email:</label>
            </div>
            <div className="flex-row">
              <input
                className="input-box"
                type="email"
                placeholder="name@domain.com"
                required
              />
            </div>

            <div className="flex-row">
              <label className="box-label">Phone Number:</label>
            </div>
            <div className="flex-row">
              <input
                className="input-box"
                type="tel"
                placeholder="(123) 123-1234"
                pattern="\(\d{3}\) +\d{3}-\d{4}"
                required
              />
            </div>

            <div className="flex-row">
              <label className="box-label">Date:</label>
            </div>
            <div className="flex-row">
              <input className="input-box" type="date" />
            </div>

            <p>Choose the timeframe that works best for you</p>

            <div className="flex-row">
              <label className="box-label">Start Time:</label>
            </div>
            <div className="flex-row">
              <input className="input-box" type="time" /> <p>(hh:mm)</p>
            </div>

            <div className="flex-row">
              <label className="box-label">End Time:</label>
            </div>
            <div className="flex-row">
              <input className="input-box" type="time" /> <p>(hh:mm)</p>
            </div>

            <div className="parent-boot">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  defaultValue={"0"}
                >
                  <option value="0">Sam Smith</option>
                  <option value="1">Jessica Alba</option>
                  <option value="2">Alex Alexander</option>
                </select>
                <label htmlFor="floatingSelect">Choose your stylist!</label>
              </div>
            </div>

            <div className="parent-boot">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option disabled>Women's Services</option>
                  <option>Women's Cut and Style $60+</option>
                  <option>Blow dry $40+</option>
                  <option>Solid color with Haircut $135+</option>
                  <option>Foils highlights with Haircut $170+</option>
                  <option>Balyage with Haircut $200</option>
                  <option>Toner without styling $50+</option>
                  <option>Hair mask add-on $25+</option>
                  <option>Color only (No blow dry) $85+</option>
                  <option>Full head Highlights $100</option>
                  <option>Balayage $150+</option>
                  <option>Kid girl cut $48</option>

                  <option disabled>Men's Services</option>
                  <option>Men's Cut and Style $38+</option>
                  <option>Men's Cut and Beard $38+</option>
                  <option>Cut beard and wax $45+</option>
                  <option>Kid boys cut $25+</option>
                  <option>Hair mask add-on $20</option>
                  <option>Outline / Beard trim $85+</option>
                  <option>Relaxer straightening and cute $92+</option>
                  <option>Perm $110+</option>
                  <option>Men's color and cut $80+</option>
                </select>
                <label htmlFor="floatingSelect">Select which service</label>
              </div>
            </div>

            <div id="submit-btn-box">
              <input
                id="submit-btn"
                type="submit"
                value="Submit Appointnment Request"
              />
            </div>
          </form>
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
