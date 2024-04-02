import logo from './images/whit-elogo.png';
import location from './images/Vector.svg';
import phone from './images/call.svg';
import mail from './images/mail.svg';
import glob from './images/glob.svg';

export default function Footer() {
    return(
        <>
        <div
          style={{ height: "40vh", background: "#11467A", display: "flex" }}
          className="foot"
        >
          <div className="foot1">
            <img src={logo} className="foot_logo" />
            <div
              style={{
                paddingLeft: "170px",
                color: "white",
                fontSize: 20,
                fontFamily: "Poppins",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              HebeSec Technologies delivers top-tier products, services, and
              cybersecurity training. Our cost-effective solutions excel in Data
              Security (DS-2) and extend across various domains. With a client
              base spanning public and private sectors, we provide end-to-end
              solutions, drawing on our extensive experience.
            </div>
            <br></br>
            <div
              style={{
                color: "white",
                fontSize: 17,
                paddingLeft: "100px",
                fontFamily: "Inter",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Copyright HebeSec Technologies Pvt. Ltd. © 2023. All rights
              reserved
            </div>
          </div>
          <div className="foot2">
            <div className="seg">
              <img src={location} className="seg1" />
              <div
                style={{
                  color: "white",
                  fontSize: 19,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  width: "90%",
                }}
              >
                <strong>Tamil Nadu, India<br></br></strong>Chennai<br></br>Coimbatore<br></br>Karaikudi
              </div>
            </div>
            <div className="seg">
              <img src={phone} className="seg1" />
              <div
                style={{
                  color: "white",
                  fontSize: 19,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  width: "90%",
                }}
              >
                +91 9566022629</div>
            </div>
            <div className="seg">
              <img src={glob} className="seg1" />
              <div
                style={{
                  color: "white",
                  fontSize: 19,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  width: "90%",
                }}
              >
                www.hebesec.com</div>
            </div>
            <div className="seg">
              <img src={mail} className="seg1" />
              <div
                style={{
                  color: "white",
                  fontSize: 19,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  width: "90%",
                }}
              >
                info@hebesec.com  </div>
            </div>
          </div>
          <div className="foot3">
            <div className="seg">
              <img src={location} className="seg1" />
              <div
                style={{
                  color: "white",
                  fontSize: 19,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  width: "90%",
                }}
              >
                <strong>Malayaia &  Indonesia
<br></br></strong>Kuala Lumpur <br></br>Semarang<br></br><br></br>
              </div>
            </div>
            <div className="seg">
              <img src={phone} className="seg1" />
              <div
                style={{
                  color: "white",
                  fontSize: 19,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  width: "90%",
                }}
              >
                +60 12-675 7536 
</div>
            </div>
            <div className="seg">
              <img src={glob} className="seg1" />
              <div
                style={{
                  color: "white",
                  fontSize: 19,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  width: "90%",
                }}
              >
                www.hebesec.com</div>
            </div>
            <div className="seg">
              <img src={mail} className="seg1" />
              <div
                style={{
                  color: "white",
                  fontSize: 19,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  width: "90%",
                }}
              >
                info@hebesec.com  </div>
            </div>
          </div>
          
        </div>
        </>
    );
}