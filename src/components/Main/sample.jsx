// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { submitForm } from "./store/FormSlice";

// const schema = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
// });

// const ContactForm = () => {
//   const { status, error } = useSelector((state) => state.form);
//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     dispatch(submitForm(data));
//   };

//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label>Name:</label>
//           <input type="text" {...register("name")} />
//           <p>{errors.name?.message}</p>
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" {...register("email")} />
//           <p>{errors.email?.message}</p>
//         </div>
//         <div>
//           <label>Message:</label>
//           <textarea {...register("message")}></textarea>
//           <p>{errors.message?.message}</p>
//         </div>
//         <button type="submit" disabled={status === "loading"}>
//           {status === "loading" ? "Submitting..." : "Submit"}
//         </button>
//       </form>
//       {status === "succeeded" && <p>Form submitted successfully!</p>}
//       {status === "failed" && <p>Error: {error}</p>}
//     </div>
//   );
// };

// export default ContactForm;
