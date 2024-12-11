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
    .min(3, "Minimum 3 letters required")
    .max(25)
    .required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  url: yup.string().url("Invalid URL"),
  project: yup
    .string()
    .min(20, "Project Detail must be at least 20 characters")
    .required("Project Detail is required"),
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 px-4 sm:px-8 md:px-16 lg:px-[100px]">
        <div className="flex justify-center items-center">
          <img
            src={SideImage}
            alt="Side Image"
            className="w-full max-w-sm lg:max-w-full"
          />
        </div>
        <div>
          <div className="mb-8 text-center lg:text-right">
            <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
              We'd Love to hear
            </h1>
            <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
              from you
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="text"
                {...register("name")}
                className="border border-black p-4 w-full text-base placeholder-black"
                placeholder="Name*"
              />
              <p className="text-red-500 text-sm mt-1">
                {errors.name?.message}
              </p>
            </div>
            <div className="mb-4">
              <input
                type="email"
                {...register("email")}
                className="border border-black p-4 w-full text-base placeholder-black"
                placeholder="Email*"
              />
              <p className="text-red-500 text-sm mt-1">
                {errors.email?.message}
              </p>
            </div>
            <div className="mb-4">
              <input
                type="url"
                {...register("url")}
                className="border border-black p-4 w-full text-base placeholder-black"
                placeholder="Website URL"
              />
              <p className="text-red-500 text-sm mt-1">{errors.url?.message}</p>
            </div>
            <div className="mb-4">
              <textarea
                {...register("project")}
                className="border w-full text-base placeholder-black h-40 p-4 border-black"
                placeholder="Project Details*"
              ></textarea>
              <p className="text-red-500 text-sm mt-1">
                {errors.project?.message}
              </p>
            </div>
            <button
              type="submit"
              className="border border-gray-500 p-5 rounded w-full bg-black text-white mt-4 text-lg"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Send Proposal..." : "Send Proposal"}
            </button>
            {status === "succeeded" && (
              <h2 className="text-center text-2xl mt-4 text-green-500">
                Form submitted successfully!
              </h2>
            )}
            {status === "failed" && (
              <h1 className="text-center text-2xl mt-4 text-red-500">
                Error: {error}
              </h1>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
