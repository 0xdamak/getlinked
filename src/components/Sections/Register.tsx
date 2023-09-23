import { useState, useEffect, type FormEvent, type ChangeEvent } from "react";
import { register, getCategoryList, type ICategoryList } from "../../services";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../UI/Section";
import Button from "../UI/Button";

type Categories = {
  data: null | ICategoryList[];
  error: boolean;
  loading: boolean;
};
export default function Register() {
  const [registrationForm, setRegistrationForm] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
    category: "",
    size: "",
    agree: false,
  });
  const [modalDisplay, setModalDisplay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState<Categories>({
    data: null,
    error: false,
    loading: false,
  });

  function updateRegistrationForm(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { value, name } = e.target;
    setRegistrationForm({
      ...registrationForm,
      [name]: value,
    });
  }

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const payload = {
      team_name: registrationForm.name,
      email: registrationForm.email,
      phone_number: registrationForm.phone,
      group_size: +registrationForm.size,
      project_topic: registrationForm.topic,
      category: +registrationForm.category,
      privacy_poclicy_accepted: registrationForm.agree,
    };
    setLoading(true);
    setError(false);
    register(payload)
      .then(() => {
        setLoading(false);
        setModalDisplay(true);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }

  useEffect(() => {
    setCategories({ ...categories, loading: true });
    getCategoryList()
      .then(({ data }) => {
        console.log(data);
        setCategories({ ...categories, data, loading: false });
      })
      .catch(() => setCategories({ ...categories, error: true }));
  }, []);

  return (
    <Section id="register">
      <div className="flex items-center justify-center w-full h-full">
        <img
          className=""
          src="/assets/images/register.png"
          alt="frequently asked questions"
        />
      </div>
      <form
        onSubmit={submitHandler}
        className="relative flex flex-col justify-center bg-gl-white/[0.03] max-w-[46rem] min-h-[46rem] mx-auto w-full rounded-xl space-y-8 p-10"
      >
        <div className="max-w-lg mx-auto w-full">
          <h1 className="font-clash-display text-gl-purple text-[2rem] font-semibold mb-[1rem] leading-8">
            Register
          </h1>
          <p className="text-sm text-gl-white mb-4">
            Be part of this movement!
          </p>
          <h1 className="text-2xl">CREATE YOUR ACCOUNT</h1>
        </div>
        <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto w-full">
          <fieldset>
            <label htmlFor="name" className="block text-sm mb-3">
              Team's Name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              className="w-full h-[2.9rem] rounded bg-gl-white/[0.03] border border-gl-white py-3 px-7 placeholder:text-gl-white/25 placeholder:text-sm"
              placeholder="Enter the name of your group"
              value={registrationForm.name}
              onChange={updateRegistrationForm}
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="phone" className="block text-sm mb-3">
              Phone
            </label>
            <input
              name="phone"
              id="phone"
              type="tel"
              className="w-full h-[2.9rem] rounded bg-gl-white/[0.03] border border-gl-white py-3 px-7 placeholder:text-gl-white/25 placeholder:text-sm"
              placeholder="Enter your phone number"
              value={registrationForm.phone}
              onChange={updateRegistrationForm}
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="email" className="block text-sm mb-3">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              className="w-full h-[2.9rem] rounded bg-gl-white/[0.03] border border-gl-white py-3 px-7 placeholder:text-gl-white/25 placeholder:text-sm"
              placeholder="Enter your email address"
              value={registrationForm.email}
              onChange={updateRegistrationForm}
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="topic" className="block text-sm mb-3">
              Project Topic
            </label>
            <input
              name="topic"
              id="topic"
              type="text"
              className="w-full h-[2.9rem] rounded bg-gl-white/[0.03] border border-gl-white py-3 px-7 placeholder:text-gl-white/25 placeholder:text-sm"
              placeholder="What is your group project topic"
              value={registrationForm.topic}
              onChange={updateRegistrationForm}
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="category" className="block text-sm mb-3">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="w-full h-[2.9rem] rounded bg-gl-white/[0.03] border border-gl-white py-3 px-7 placeholder:text-gl-white/25 placeholder:text-sm"
              value={registrationForm.category}
              onChange={updateRegistrationForm}
              //   required
            >
              <option value="" disabled>
                {categories.loading
                  ? "Fetching categories"
                  : categories.error
                  ? "Error fetching categories"
                  : "Select your category"}
              </option>
              {categories.data?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="size" className="block text-sm mb-3">
              Group Size
            </label>
            <select
              name="size"
              id="size"
              className="w-full h-[2.9rem] rounded bg-gl-white/[0.03] border border-gl-white py-3 px-7 placeholder:text-gl-white/25 placeholder:text-sm"
              value={registrationForm.size}
              onChange={updateRegistrationForm}
              required
            >
              <option value="" disabled>
                Select size
              </option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </fieldset>
        </div>
        <div className="max-w-lg mx-auto w-full">
          <p className="text-xs text-gl-magenta italic mb-4">
            Please review your registration details before submitting
          </p>
          <fieldset className="flex items-center gap-2 mb-5">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={registrationForm.agree}
              onChange={(e) =>
                setRegistrationForm({
                  ...registrationForm,
                  agree: e.target.checked,
                })
              }
              required
            />
            <label
              htmlFor="agree"
              className="inline-block text-sm text-gl-white"
            >
              I agreed with the event terms and conditions and privacy policy
            </label>
          </fieldset>
          <Button
            type="submit"
            text="Submit"
            loading={loading}
            className="mx-auto"
            width="100%"
          />
        </div>
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
