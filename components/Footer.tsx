export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>Bethel High School</h3>
          <p>
            Nursery to High School
            <br />
            Bapatla, Andhra Pradesh
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Academics</li>
            <li>Admissions</li>
            <li>Activities</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>
            📍 Bapatla, Andhra Pradesh
            <br />
            📞 +91 XXXXXXXXXX
            <br />
            ✉️ info@bethelhighschool.in
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Bethel High School. All rights reserved.
      </div>
    </footer>
  );
}
