"use client";
import React, { SyntheticEvent, useEffect, useState } from "react";
import Input from "../Input";
import styles from "./styles.module.scss";

type IFormValues = {
  name: string;
  email: string;
  location: string;
  details: string;
};

const GetInvolvedForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [values, setValues] = useState<IFormValues>({
    name: "",
    email: "",
    location: "",
    details: "",
  });

  const handleChange = (e: { target: any }) => {
    const existingValues = { ...values };
    let name = e.target.name as keyof IFormValues;
    let value = e.target.value;
    console.log({ ...existingValues, [name]: value });
    setValues({ ...existingValues, [name]: value });
  };

  useEffect(() => {
    if (Object.values(values).some((val) => !val) && !isDisabled) {
      setIsDisabled(true);
    }
    if (Object.values(values).every((val) => !!val) && isDisabled) {
      setIsDisabled(false);
    }
  }, [values, isDisabled]);

  return (
    <div className={styles.GetInvolvedForm}>
      {/* @ts-ignore */}
      <form name="getInvolved" method="POST" netlify="true">
        <p>
          <label>
            Name:{" "}
            <Input
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              value={values["name"]}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Email:{" "}
            <Input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              value={values["email"]}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Location:{" "}
            <Input
              onChange={handleChange}
              type="text"
              name="location"
              id="location"
              value={values["location"]}
              required
            />
          </label>
        </p>
        <p>
          <label>
            Details on desired involvement:{" "}
            <textarea onChange={handleChange} name="details" required />
          </label>
        </p>
        <p>
          <button disabled={isDisabled} className="Btn-primary" type="submit">
            Send
          </button>
        </p>
      </form>
    </div>
  );
};

export default GetInvolvedForm;
