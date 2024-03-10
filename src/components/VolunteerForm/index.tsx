import React from "react";
import Section from "../Section";
import styles from "./styles.module.scss";
import Input from "../Input";
import CheckBox from "../Checkbox";

const VolunteerForm = () => {
  //   const encode = (data) => {
  //     return Object.keys(data)
  //         .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //         .join("&");
  //   }

  //  const handleChange = e => this.setState({ [e.target.name]: e.target.value });

  //   const handleSubmit = e => {
  //     fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: encode({ "form-name": "contact", ...this.state })
  //     })
  //       .then(() => alert("Success!"))
  //       .catch(error => alert(error));

  //     e.preventDefault();
  //   };

  return (
    <Section>
      <div className={styles.Copy}>
        <h2>Be a Volunteer</h2>
        <p>
          Subway tile sustainable tote bag hoodie, pork belly kale chips
          vibecession blue bottle DIY narwhal edison bulb.
        </p>
      </div>
      <form
        className={styles.Form}
        name="volunteer"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="form-name" value="volunteer" />
        <Input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name *"
          required
          autoComplete="given-name"
        />
        <Input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name *"
          required
          autoComplete="family-name"
        />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email *"
          autoComplete="email"
        />
        <Input
          type="tel"
          name="tel"
          id="tel"
          placeholder="Phone *"
          autoComplete="tel"
        />
        <div className={styles.fullWidth}>
          <p style={{ marginBottom: "0.5rem" }}>
            Ways to help:{" "}
            <small>(select all that you&apos;re interested in)</small>
          </p>
          <CheckBox
            id="yardSign"
            label="Display a yard sign (enter address below)"
            value="yard sign"
          />
          <CheckBox id="doors" label="Knock on doors" value="knock doors" />
          <CheckBox
            id="phoneCalls"
            label="Make phone calls"
            value="make phone calls"
          />
          <CheckBox
            id="postCards"
            label="Write postcards"
            value="write postcards"
          />
          <CheckBox id="hostEvent" label="Host an event" value="host event" />
          <CheckBox
            id="inviteEmma"
            label="Invite Emma to an event"
            value="invite emma to event"
          />
        </div>
        <Input
          type="text"
          name="text"
          id="addressLine1"
          placeholder="Address Line 1 *"
          autoComplete="address-line1"
        />
        <Input
          type="text"
          name="text"
          id="addressLine2"
          placeholder="Address Line 2 *"
          autoComplete="address-line2"
        />
        <Input
          type="text"
          name="text"
          id="city"
          placeholder="City *"
          autoComplete="address-level2"
        />
        <Input
          type="text"
          name="text"
          id="state"
          placeholder="State *"
          autoComplete="address-level1"
        />
        <Input
          type="text"
          name="text"
          id="zipCode"
          placeholder="Zip Code *"
          autoComplete="postal-code"
        />
        <textarea
          rows={4}
          data-name="Message"
          maxLength={5000}
          id="message"
          name="message"
          placeholder="Other comment"
        />
        <div className={styles.btn}>
          <button type="submit" className="Btn-primary">
            Join Us!
          </button>
        </div>
      </form>
    </Section>
  );
};

export default VolunteerForm;
