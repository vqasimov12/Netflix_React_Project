import { useState,useEffect } from "react";
import bgImage from "images/bgImage.png";
import { useTranslation } from "react-i18next";
import Form from "common/components/Form";
import Netflix from "images/Netflix.png";
import { ThemeStore } from "common/Store.js";
import { useStore } from "zustand";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router";

const SingIn = () => {
  const { accessToken, addAccessToken } = useStore(ThemeStore);
  const location = useLocation();
  const email = location.state?.email;
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({});
  
    useEffect(() => {
      if (email) {
        setFormData((prevState) => ({ ...prevState, email: email }));
      }
    }, [email]);
  
  const login = async () => {
    try {
     
      const response = await fetch("http://localhost:5001/api/v1/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to sing In");
      const data = await response.json();
      addAccessToken(data.token);
    } catch (error) {
      console.error(error);
      toast.error("Can not signed in", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const formButtons = [
    {
      title: t("signInButton"),
      style:
        "bg-[#e50914] h-[26px] md:h-[50px] text-white border-[1px] border-zinc-400 rounded-[4px] w-full ",
      action: login,
    },
    {
      title: t("signUpPrompt"),
      style: " text-zinc-300 mt-[25px] w-full ",
      action: () => {
        navigate("/signup");
      },
    },
  ];
  const formItems = [
    {
      name: "email",
      type: "email",
      placeHolder: t("emailLabel"),
      inputStyle:
        "p-4 bg-transparent h-[26px] md:h-[50px] border-[1px] border-zinc-400 rounded-[4px] text-white ",
      ...(email ? { value: email } : {}),
    },
    {
      name: "password",
      type: "password",
      placeHolder: t("passwordLabel"),
      inputStyle:
        "p-4 bg-transparent h-[26px] md:h-[50px] border-[1px] border-zinc-400 rounded-[4px] text-white ",
    },
  ];

  return (
    <div className="w-full bg-[#010101] h-full flex flex-col items-center justify-center ">
      <div
        className="w-full h-screen relative items-center justify-center bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div
          className="absolute z-1 flex inset-0 w-full h-screen items-center justify-center"
          style={{
            background:
              "linear-gradient(11.26deg, rgba(0, 0, 0, 0.55) 10%, rgba(0, 0, 0, 0.57) 17.25%, rgba(0, 0, 0, 0.55) 24.5%, rgba(0, 0, 0, 0.55) 31.75%, rgba(0, 0, 0, 0.56) 39%, rgba(0, 0, 0, 0.55) 46.25%, rgba(0, 0, 0, 0.55) 53.5%, rgba(0, 0, 0, 0.50) 60.75%, rgba(0, 0, 0, 0.55) 68%, rgba(0, 0, 0, 0.53) 75.25%, rgba(0, 0, 0, 0.36) 82.5%, rgba(0, 0, 0, 0.34) 89.75%, rgba(0, 0, 0, 0.3) 97%)",
          }}
        >
          <button
            className="absolute z-3 top-6 left-[24px] sm:left-8 md:left-10 lg:left-[168px] "
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src={Netflix}
              alt=""
              className="w-[90px] sm:w-[120px] lg:w-[160px]  "
            />
          </button>
<div className="mt-20">
          <Form
            headerText={{
              title: `${t("signInButton")}`,
              style:
                "text-white font-bold text-[20px] sm:text-[26px] lg:text-[32px]",
            }}
            formItems={formItems}
            setFormData={setFormData}
            formButtons={formButtons}
            formStyle={
              "w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] h-[470px] bg-black/70 px-[15px] sm:px-[30px] md:px-[40px] lg:px-[70px] pt-[48px] flex flex-col gap-4 rounded-[4px] "
            }
          /></div>
        </div>
      </div>
      
      <ToastContainer />
    </div>
  );
};

export default SingIn;
