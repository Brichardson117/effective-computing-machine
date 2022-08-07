import React from "react";

const Footer = () => {
  return (
    <>
    <div>
        <form>
            <h4><strong>Join Mailing List</strong></h4>
            <label>Email</label>
            <input type='text' name="email" />
            <button type="submit">Submit</button>
        </form>
    </div>
      <h5>
        <strong>Company Info</strong>
      </h5>
      <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Social Responsibiltiy</li>
          <li>Affiliate Program</li>
          <li>Business With Us</li>
          <li>Press and Talent</li>
      </ul>
      <h5>
        <strong>Help</strong>
      </h5>
      <ul>
          <li>Contact Us</li>
          <li>Order status</li>
          <li>Shipping Status</li>
          <li>Online Returns and Exchanges</li>
          <li>Store Returns and Exchanges</li>
          <li>FAQ</li>
      </ul>
      <h5>
        <strong>Material Rewards</strong>
      </h5>
      <ul>
          <li>Apply Now</li>
          <li>Card Benefits</li>
          <li>Manage Account</li>
      </ul>
    </>
  );
};

export default Footer
