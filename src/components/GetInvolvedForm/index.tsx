"use client";
import React, { SyntheticEvent, useEffect, useState } from "react";
import Input from "../Input";
import styles from "./styles.module.scss";
import Button from "../Button";

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
  const [isSuccessfulSubmission, setIsSuccessfulSubmission] = useState(false);

  useEffect(() => {
    if (Object.values(values).some((val) => !val) && !isDisabled) {
      setIsDisabled(true);
    }
    if (Object.values(values).every((val) => !!val) && isDisabled) {
      setIsDisabled(false);
    }
  }, [values, isDisabled]);

  const handleChange = (e: { target: any }) => {
    const existingValues = { ...values };
    let name = e.target.name as keyof IFormValues;
    let value = e.target.value;
    console.log({ ...existingValues, [name]: value });
    setValues({ ...existingValues, [name]: value });
  };

  const handleFormSubmit = async (event: {
    preventDefault: () => void;
    target: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as unknown as string).toString(),
    })
      .then(() => setIsSuccessfulSubmission(true))
      .catch(() => alert("Form submission error"));
  };

  return (
    <div
      className={`${styles.GetInvolvedForm} ${
        isSuccessfulSubmission && styles.isSuccessfulSubmission
      }`}
    >
      {/* @ts-ignore */}
      <form name="getInvolved" onSubmit={handleFormSubmit}>
        <input type="hidden" name="form-name" value="getInvolved" />
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
          <Button
            disabled={isDisabled}
            type="submit"
            variant="secondary"
            inverse
          >
            Send
          </Button>
        </p>
      </form>
      <p className={styles.success}>Form submission successful!</p>
    </div>
  );
};

export default GetInvolvedForm;
