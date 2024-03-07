import React from "react";
import Section from "../Section";
import styles from "./styles.module.scss";
import Input from "../Input";

const VolunteerForm = () => {
  return (
    <Section>
      <div className={styles.Copy}>
        <h2>Be a Volunteer</h2>
        <p>
          Subway tile sustainable tote bag hoodie, pork belly kale chips
          vibecession blue bottle DIY narwhal edison bulb.
        </p>
      </div>
      <form className={styles.Form}>
        <Input type="text" name="" id="" placeholder="Name *" />
        <Input type="email" name="" id="" placeholder="Email *" />
        <textarea
          rows={4}
          data-name="Message"
          maxLength={5000}
          id="Message"
          name="Message"
          placeholder="Write some message here"
        />
      </form>
      <div className={styles.btn}>
        <button type="submit" className="Btn-primary">
          Join Us!
        </button>
      </div>
    </Section>
  );
};

export default VolunteerForm;
