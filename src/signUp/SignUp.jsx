import { useState } from "react";
import bgImage from "images/bgImage.png";
import { useTranslation } from "react-i18next";
import Form from "common/components/Form";
import Netflix from "images/Netflix.png";

const SingUp = () => {
  // import {useNavigate} from"react-router"
  //const navigate useNavigate()
  const { t } = useTranslation();
  const [formData, setFormData] = useState({});
  const signUp = async () => {
    try {
        console.log(formData)
      const response = await fetch("http://localhost:5001/api/v1/auth/signup", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response)
      if (!response.ok) throw new Error("Failed to sing up");
      const data = await response.json();
      //navigate("/login")
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  const formButtons = [
    {
      title: t("signUpButton"),
      style:
        "bg-[#e50914] h-[50px] text-white border-[1px] border-zinc-400 rounded-[4px] w-full ",
      action: signUp,
    },
    {
      title: t("signInPrompt"),
      style: " text-zinc-300 mt-[25px] w-full ",
      action: () => {
        //navigate('/login')
      },
    },
  ];
  const formItems = [
    {
      name: "username",
      type: "text",
      placeHolder: t("usernameLabel"),
      inputStyle:
        "p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white ",
    },
    {
      name: "email",
      type: "email",
      placeHolder: t("emailLabel"),
      inputStyle:
        "p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white ",
    },
    {
      name: "password",
      type: "password",
      placeHolder: t("passwordLabel"),
      inputStyle:
        "p-4 bg-transparent border-[1px] border-zinc-400 rounded-[4px] text-white ",
    },
  ];

  return (
    <div
      className="w-full h-screen relative px-5 items-center justify-center bg-cover bg-no-repeat bg-center "
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
            // navigate('/)
          }}
        >
          <img
            src={Netflix}
            alt=""
            className="w-[90px] sm:w-[120px] lg:w-[160px]  "
          />
        </button>

        <Form
          headerText={{
            title: `${t("signUpButton")}`,
            style: "text-white font-bold text-[32px]",
          }}
          formItems={formItems}
          setFormData={setFormData}
          formButtons={formButtons}
          formStyle={
            "w-[450px] h-[470px] bg-black/70 px-[68px] pt-[48px] flex flex-col gap-4 rounded-[4px] "
          }
        />
      </div>
    </div>
  );
};

export default SingUp;
