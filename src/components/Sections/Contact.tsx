import { useState, useEffect, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { icons } from "../UI/Icons";
import { contact } from "../../services";
import Button from "../UI/Button";
import Section from "../UI/Section";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function updateContactForm(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value, name } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value,
    });
  }

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const payload = {
      email: contactForm.email,
      phone_number: contactForm.phone,
      first_name: contactForm.name,
      message: contactForm.message,
    };
    setLoading(true);
    setError(false);
    contact(payload)
      .then(() => {
        setLoading(false);
        setContactForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (error) {
        setError(false);
      }
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  return (
    <Section id="contact">
      <div className="self-start mt-16">
        <h1 className="font-clash-display text-gl-purple text-[2rem] font-semibold mb-[1rem]">
          Get in touch
        </h1>
        <p className="text-base text-gl-white mb-4">
          Contact
          <br />
          Information
        </p>
        <p className="text-base text-gl-white max-w-[7.5rem] mb-4">
          27,Alara Street Yaba 100012 Lagos State
        </p>
        <p className="text-base text-gl-white mb-4">Call Us : 07067981819</p>
        <p className="text-base text-gl-white mb-4">
          We are open from Monday-Friday
          <br />
          08:00am - 05:00pm
        </p>
        <p className="text-base text-gl-purple mb-2">Share on</p>
        <div className="flex items-center gap-4 ">
          <a href="#">{icons.instagram}</a>
          <a href="#">{icons.x}</a>
          <a href="#">{icons.facebook}</a>
          <a href="#">{icons.linkedin}</a>
        </div>
      </div>
      <form
        onSubmit={submitHandler}
        className="relative flex flex-col justify-center bg-gl-white/[0.03] max-w-[38rem] min-h-[38rem] mx-auto w-full rounded-xl space-y-8 p-10"
      >
        <h1 className="font-clash-display text-gl-purple text-xl font-semibold mb-[1rem] max-w-md mx-auto w-full leading-8">
          Questions or need assistance?
          <br />
          Let us know about it!
        </h1>
        <input
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          name="name"
          id="name"
          type="text"
          placeholder="Full Name"
          className="max-w-md mx-auto w-full h-[2.9rem] rounded bg-gl-white/[0.03] border border-gl-white py-3 px-7 placeholder:text-gl-white"
          value={contactForm.name}
          onChange={updateContactForm}
          required
        />
        <input
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          className="max-w-md mx-auto w-full h-[2.9rem] rounded bg-gl-white/[0.03] border border-gl-white py-3 px-7 placeholder:text-gl-white"
          value={contactForm.email}
          onChange={updateContactForm}
          required
        />
        <input
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          name="phone"
          id="phone"
          type="tel"
          placeholder="Phone"
          className="max-w-md mx-auto w-full h-[2.9rem] rounded bg-gl-white/[0.03] border border-gl-white py-3 px-7 placeholder:text-gl-white"
          value={contactForm.phone}
          onChange={updateContactForm}
          required
        />
        <textarea
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          name="message"
          id="message"
          placeholder="Message"
          className="max-w-md mx-auto w-full h-[7.4rem] rounded bg-gl-white/[0.03] border border-gl-white py-3 px-7 placeholder:text-gl-white"
          value={contactForm.message}
          onChange={updateContactForm}
          //   required
        ></textarea>
        <Button
          type="submit"
          text="Submit"
          loading={loading}
          className="mx-auto"
        />
        <AnimatePresence>
          {error && (
            <motion.span
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -bottom-8 right-0 text-sm"
            >
              An error occurred, try again
            </motion.span>
          )}
        </AnimatePresence>
      </form>
    </Section>
  );
}
