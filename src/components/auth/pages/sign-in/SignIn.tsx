"use client";
import React, { useState } from "react";
import scss from "./SignIn.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import image from "../../../../assets/sign-in/sigin_photo.png";
import { LuEyeClosed } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useSignInUserMutation } from "@/src/redux/api/auth";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { TbLoaderQuarter } from "react-icons/tb";

interface InputValue {
  email: string;
  password: string;
}

const SignIn = () => {
  const [signInUser, { isLoading }] = useSignInUserMutation();
  const [showPassword, setShowPasword] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputValue>();

  const onSubmit: SubmitHandler<InputValue> = async (data) => {
    try {
      const res = await signInUser({
        email: data.email,
        password: data.password,
      });
      if (res.data) {
        reset({
          email: "",
          password: "",
        });
        toast.success("Вы успешно вошли в систему", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setTimeout(() => {
          router.push("/ ");
        }, 3000);
      } else if (res.error) {
        toast.warning("Пожалуйста, введите правильный email или пароль", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        toast.error("Пожалуйста, введите правильный email или пароль", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error("Не удалось войти в ваш аккаунт", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log(error);
    }
  };

  return (
    <div className={scss.SignIn}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className={scss.content}>
        <div className={scss.sign_in_image}>
          <Image src={image} alt="image" width={640} />
        </div>
        <div className={scss.form_block}>
          <div className={scss.sign_in_form}>
            <h1 className={scss.sign_in_title}>Добро пожаловать</h1>
            {/* form */}  
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={scss.form}
              noValidate
            >
              <div className={scss.form_group}>
                <input
                  type="email"
                  id="email"
                  placeholder="Почта"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Введите корректный email",
                    },
                  })}
                  className={scss.form_inputs}
                />
                {errors.email && (
                  <p className={scss.error}>{errors.email.message}</p>
                )}
              </div>

              <div className={scss.form_group}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Пароль "
                  {...register("password", {
                    required: true,
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_])(?=.*[A-Za-z])(?!.*[\u0400-\u04FF]).{8,}$/,
                      message: "Введите корректный пароль",
                    },
                  })}
                  className={scss.form_inputs}
                />
                {showPassword ? (
                  <MdOutlineRemoveRedEye
                    size={20}
                    className={scss.password_icon}
                    onClick={() => setShowPasword(!showPassword)}
                  />
                ) : (
                  <LuEyeClosed
                    size={20}
                    className={scss.password_icon}
                    onClick={() => setShowPasword(!showPassword)}
                  />
                )}
                {errors.password && (
                  <p className={scss.error}>{errors.password.message}</p>
                )}
              </div>

              <button
                type="submit"
                className={scss.sign_in_button}
                disabled={isLoading}
              >
                Ввойти
                {isLoading && (
                  <TbLoaderQuarter
                    size={20}
                    className={scss.sign_up_button_icon}
                  />
                )}
              </button>
            </form>
            <div className={scss.has_account}>
              <p className={scss.has_account_question}>У вас нет аккаунта?</p>
              <Link href="/sign-up" className={scss.has_account_link}>
                Зарегистрироваться
              </Link>
            </div>
            {/* deviders */}
            <div className={scss.dividers_box}>
              <span className={scss.lines}></span>
              <p className={scss.devider_text}>Или</p>
              <span className={scss.lines}></span>
            </div>
            {/* aditional auth */}
            <div className={scss.additional_auth}>
              <button className={scss.auth_buttons}>
                <FcGoogle size={20} />
                Google
              </button>
              <button className={scss.auth_buttons}>
                <BsFacebook size={20} className={scss.facebook_icon} />
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
