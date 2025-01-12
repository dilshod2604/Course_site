"use client";
import React, { useEffect, useState } from "react";
import scss from "./CheckCridentilas.module.scss";
const CheckCridentilas = ({
  name,
  email,
  password,
  setIsValid,
}: {
  name: string;
  email: string;
  password: string;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [nameRules, setNameRules] = useState({
    length: false,
    onlyLetters: false,
  });

  const [emailRules, setEmailRules] = useState({
    isEmail: false,
  });
  const [passwordRules, setPasswordRules] = useState({
    upperCase: false,
    lowerCase: false,
    simbol: false,
    lattin: false,
    length: false,
    noCyrillic: false,
  });

  useEffect(() => {
    const nameValid = name.length > 2 && /^[a-zA-Zа-яА-ЯёЁ]*$/.test(name);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid =
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[\W_]/.test(password) &&
      /[A-Za-z]/.test(password) &&
      !/[\u0400-\u04FF]/.test(password) &&
      password.length >= 8;
    setNameRules({
      length: name.length > 2,
      onlyLetters: /^[a-zA-Zа-яА-ЯёЁ]*$/.test(name),
    });

    setEmailRules({
      isEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    });

    setPasswordRules({
      upperCase: /[A-Z]/.test(password),
      lowerCase: /[a-z]/.test(password),
      simbol: /[\W_]/.test(password),
      lattin: /[A-Za-z]/.test(password),
      noCyrillic: !/[\u0400-\u04FF]/.test(password),
      length: password.length >= 8,
    });
    setIsValid(nameValid && emailValid && passwordValid);
  }, [name, email, password, setIsValid]);

  return (
    <div className={scss.input_rules_box}>
      <div className={scss.input_name}>
        <h4 className={scss.input_name_title}>Имя</h4>
        <div className={scss.input_name_rules}>
          <span className={scss.rules}>
            {nameRules.length ? "✅" : "❌"}
            <p>Имя должен быть болше 2 буквы</p>
          </span>
          <span className={scss.rules}>
            {nameRules.onlyLetters ? "✅" : "❌"}
            <p>Имя должен содержать только буквы</p>
          </span>
        </div>
      </div>
      <div className={scss.input_email}>
        <h4 className={scss.input_email_title}>Email</h4>
        <div className={scss.input_email_rules}>
          <span className={scss.rules}>
            {emailRules.isEmail ? "✅" : "❌"}
            <p>Введите корректный email</p>
          </span>
        </div>
      </div>
      <div className={scss.input_password}>
        <h4 className={scss.input_password_title}>Пароль</h4>
        <div className={scss.input_password_rules}>
          <span className={scss.rules}>
            {passwordRules.upperCase ? "✅" : "❌"}
            <p>Содержать хотя бы одну заглавную букву</p>
          </span>
          <span className={scss.rules}>
            {passwordRules.lowerCase? "✅" : "❌"}
            <p>Содержать хотя бы одну строчную букву</p>
          </span>
          <span className={scss.rules}>
            {passwordRules.simbol? "✅" : "❌"}
            <p>
              Содержать хотя бы один специальный символ (например, !, @, #, $,
              %)
            </p>
          </span>
          <span className={scss.rules}>
            {passwordRules.lattin ? "✅" : "❌"}
            <p>Содержать только английские буквы и специальные символы</p>
          </span>
          <span className={scss.rules}>
            {passwordRules.length ? "✅" : "❌"}
            <p>Содержать только английские буквы и специальные символы</p>
          </span>
          <span className={scss.rules}>
            {passwordRules.noCyrillic ? "✅" : "❌"}
            <p>Не должен содержать русские буквы</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckCridentilas;
