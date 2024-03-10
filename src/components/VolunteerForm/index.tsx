import React from "react";
import Section from "../Section";
import styles from "./styles.module.scss";
import Input from "../Input";

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
        />
        <Input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name *"
        />
        <Input type="email" name="email" id="email" placeholder="Email *" />
        <textarea
          rows={4}
          data-name="Message"
          maxLength={5000}
          id="message"
          name="message"
          placeholder="Write some message here"
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
