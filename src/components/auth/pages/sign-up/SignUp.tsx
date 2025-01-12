"use client";
import React, { useState } from "react";
import scss from "./SignUp.module.scss";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import CheckCridentilas from "@/src/components/site/ui/check_cridentials/CheckCridentilas";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuEyeClosed } from "react-icons/lu";
import { useCteateUserMutation } from "@/src/redux/api/auth";
import { useRouter } from "next/navigation";
import { TbLoaderQuarter } from "react-icons/tb";

interface InputValue {
  email: string;
  name: string;
  password: string;
  isAggree: boolean;
}
import { Bounce, ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm<InputValue>();
  const [createUser, { isLoading }] = useCteateUserMutation();
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isValid, setIsValid] = useState(false);
  const [showPassword, setShowPasword] = useState<boolean>(false);

  //create

  const onSubmit: SubmitHandler<InputValue> = async (data) => {
    try {
      const res = await createUser({
        email: data.email,
        password: data.password,
        name: data.name,
        isAggree: data.isAggree,
      });
      if (res.data) {
        reset({
          email: "",
          name: "",
          isAggree: false,
          password: "",
        });
        toast.success("Вы успешно зарегистрировались", {
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
          router.push("/sign-in ");
        }, 4000);
      } else if (res.error) {
        toast.warning("Этот пользователь уже существует", {
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
        toast.error("Не удалось зарегистрировать ваш аккаунт", {
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
      toast.error("Не удалось зарегистрировать ваш аккаунт", {
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
    <div className={scss.SignUp}>
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
      <div className={scss.sign_up_header}>
        <div className="container">
          <div className={scss.header_content}>
            <Link href="/sign-in" className={scss.header_link}>
              Войти
            </Link>
          </div>
        </div>
      </div>
      <div className={scss.content}>
        <div className={scss.sign_up_form}>
          <h1 className={scss.sign_up_title}>Регистрация</h1>
          {/* form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={scss.form}
            noValidate
          >
            <div className={scss.form_group}>
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Введите свое имя"
                {...register("name", {
                  required: true,
                })}
                className={scss.form_inputs}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className={scss.form_group}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Введите свою почту"
                {...register("email", { required: true })}
                className={scss.form_inputs}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={scss.form_group}>
              <label htmlFor="password">Пароль</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                placeholder="Введите свой пароль"
                {...register("password", { required: true })}
                className={scss.form_inputs}
                onChange={(e) => setPassword(e.target.value)}
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
            </div>

            <div className={scss.form_checkbox}>
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                {...register("isAggree", { required: true })}
                className={scss.checkbox}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label htmlFor="terms">Согласен с Условиями</label>
            </div>

            <button
              type="submit"
              className={scss.sign_up_button}
              disabled={Boolean(!isValid || !isChecked)}
            >
              Регистрация
              {isLoading && (
                <TbLoaderQuarter
                  size={20}
                  className={scss.sign_up_button_icon}
                />
              )}
            </button>
          </form>
          {(name.length > 0 || email.length > 0 || password.length > 0) && (
            <CheckCridentilas
              name={name}
              email={email}
              password={password}
              setIsValid={setIsValid}
            />
          )}
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
  );
};

export default SignUp;
