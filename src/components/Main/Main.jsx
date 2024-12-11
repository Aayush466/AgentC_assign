import React from "react";
import SideImage from "../../assets/Side_Image.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../../Slice/FormSlice";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Minimum 3 letter required ")
    .required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  url: yup.string().url("Invalid email"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});
export const Main = () => {
  const { status, error } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(submitForm(data));
  };
  return (
    <>
      <div className="grid grid-cols-2 mt-6 ">
        <div className="m-[100px]">
          <img src={SideImage} alt="Side Image  " />
        </div>
        {/* //form  */}
        <div className='m-[100px] '>
          <div className='mb-[50px]'>
          <h1 className="text-4xl font-bold text-right leading-snug">We'd Love to hear   </h1>
          <h1 className="text-4xl font-bold text-right leading-snug">from you</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-[20px] ">
              {/* <label>Name:</label> */}
              <input
                type="text*"
                {...register("name")}
                className="border border-black p-4 w-full text-base placeholder-black "
                placeholder="Name"
              />
              <p>{errors.name?.message}</p>
            </div>
            <div className='mb-[20px]'>
              {/* <label>Email:</label> */}
              <input
                type="email"
                {...register("email")}
                className="border border-black  p-4 w-full text-base placeholder-black  "
                placeholder="Email"
              />
              <p>{errors.email?.message}</p>
            </div>
            <div className='mb-[20px]'>
              {/* <label>webSite URL</label> */}
              <input
                type="url"
                {...register("url")}
                className="border border-black  p-4 w-full text-base placeholder-black  "
                placeholder="Website url"
              />
              <p>{errors.message?.message}</p>
            </div>
            <div className="mb-[20px]">
              {/* <label>Project Details</label> */}
              <textarea
                {...register("message")}
                className="border w-full text-base placeholder-black h-40 p-4 border-black"
                placeholder="Project Details"
              ></textarea>
              <p>{errors.message?.message}</p>
            </div>
            <button
              type="submit"
              className="border border-gray-500 p-5 rounded w-full bg-black text-white bottom-0 mt-[20px]"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Send Proposal..." : "Send Proposal"}
            </button>
        {status === "succeeded" && <h2 className='text-center text-2xl'>Form submitted successfully!</h2>}
        {status === "failed" && <h1 className='text-center text-2xl'>Error: {error}</h1>}
          </form>
        </div>
      </div>
    </>
  );
};


