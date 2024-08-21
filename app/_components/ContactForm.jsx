/** @format */
"use client";
import { useFormik } from "formik";
import { twMerge } from "tailwind-merge";
import * as Yup from "yup";
import { useRouter, useSearchParams } from "next/navigation";

function ContactForm() {
  const params = useSearchParams();
  const router = useRouter();
  // Formik logic
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    // Form validation
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be 2 characters or more.")
        .max(25, "Name must be 25 characters or less.")
        .required("Name is required."),
      email: Yup.string()
        .email("Invalid email address.")
        .required("Email is required."),
      message: Yup.string()
        .min(10, "Message must be 10 characters or more.")
        .max(140, "Message must be 140 characters or less.")
        .required("Message is required."),
    }),
    // Form submission
    onSubmit: (values) => {
      const newSearchParams = new URLSearchParams(params);
      newSearchParams.set("name", values.name);
      const route = `success?${newSearchParams.toString()}`;
      router.push(route);
    },
  });

  console.log(formik.errors);

  return (
    <form onSubmit={formik.handleSubmit} className='w-full desktop:w-[445px]'>
      <div className='mt-8 desktop:mt-0'>
        <label htmlFor='name' className='sr-only'>
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Name'
          className={twMerge(
            "form-input",
            formik.errors.name && formik.touched.name
              ? "border-danger focus:border-danger"
              : ""
          )}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name && formik.touched.name ? (
          <p className='error-message'>{formik.errors.name}</p>
        ) : (
          ""
        )}
      </div>
      <div className='mt-8'>
        <label htmlFor='email' className='sr-only'>
          Email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          className={twMerge(
            "form-input",
            formik.errors.email && formik.touched.email
              ? "border-danger focus:border-danger"
              : ""
          )}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <p className='error-message'>{formik.errors.email}</p>
        ) : (
          ""
        )}
      </div>
      <div className='mt-8'>
        <label htmlFor='message' className='sr-only'>
          Message
        </label>
        <textarea
          name='message'
          id='message'
          placeholder='Message'
          className={twMerge(
            "form-input h-[107px]",
            formik.errors.message && formik.touched.message
              ? "border-danger focus:border-danger"
              : ""
          )}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>
        {formik.errors.message && formik.touched.message ? (
          <p className='error-message'>{formik.errors.message}</p>
        ) : (
          ""
        )}
      </div>
      <div className='flex justify-end mt-8'>
        <button type='submit' className='btn'>
          Send message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
