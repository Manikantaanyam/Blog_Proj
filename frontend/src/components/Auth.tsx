import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@anyam/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();

  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  const sendRequest = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );

      console.log(response.data);
      const jwt = response.data;
      localStorage.setItem("token", `Bearer ${jwt}`);
      navigate("/blogs");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex justify-center h-screen items-center ">
      <div className="flex flex-col  ">
        <div className="flex flex-col gap-2 px-10">
          <h2 className="text-2xl font-extrabold text-center">
            Create an account
          </h2>
          <p className="text-slate-400 text-center">
            {type == "signup"
              ? "  Already have an account "
              : "Don't have an account "}
            <Link
              to={type == "signup" ? "/signin" : "/signup"}
              className="underline"
            >
              {type == "signup" ? "Login" : "signup"}
            </Link>{" "}
            ?
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          {type == "signup" ? (
            <Input
              label="Name"
              placeholder="Enter the name"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />
          ) : null}
          <Input
            label="Username"
            type="email"
            placeholder="mani@gmail.com"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                username: e.target.value,
              });
            }}
          />
          <Input
            label="Password"
            type="password"
            placeholder="manikanta"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                password: e.target.value,
              });
            }}
          />
          <button
            onClick={sendRequest}
            className="w-full bg-black text-white mt-4 p-2 rounded-md"
          >
            {type == "signup" ? "Signup" : "Signin"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabelledInput {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function Input({ label, placeholder, onChange, type }: LabelledInput) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-black">
        {label}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border pt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Auth;
