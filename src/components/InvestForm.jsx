import React, { useState } from "react";
import bg from "../images/house.webp";
import { Button, Input } from "@material-tailwind/react";
import { sendMessage } from "../sendMessage";

const InvestForm = ({ data, setIsModalOpen, lang }) => {
  const {
    formTitle,
    formDescription,
    nameLabel,
    phoneLabel,
    submitButtonText,
    invalidPhone,
    invalidName,
  } = data;
  const isValidPhoneNumber = (phoneNumber) => {
    const phonePattern = /^\+\d{7,}$/;
    const minLength = 7;

    return phonePattern.test(phoneNumber) && phoneNumber.length >= minLength;
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    const { name, phone } = e.target.form.elements;
    e.preventDefault();

    if (formData.name.length < 2) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        name: invalidName,
      }));
      return;
    }

    if (!isValidPhoneNumber(formData.phone)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        phone: invalidPhone,
      }));
      return;
    }

    sendMessage(
      `Посетитель вашего сайта хочет чтобы с ним связались, его имя: ${name.value}, его телефон: ${phone.value}. Он оставил заявку на ${lang} языке в ${new Date().toLocaleTimeString()}.`
    );

    setIsModalOpen(true);
  };



  return (
    <div className="h-[680px] relative">
      <img
        src={bg}
        alt="bg-palms"
        className="w-full h-full object-cover"
        style={{ objectPosition: "center top" }}
      />

      {/* Градиент */}
      <div className="absolute top-[-1px] inset-0 bg-gradient-to-b from-[#7ba5d3] to-transparent h-1/4"></div>
      <div className="absolute bottom-[-1px] w-full bg-gradient-to-b from-transparent to-[#FDFAEC] h-1/4"></div>

      {/* Контент */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <h2
          id="formTitle"
          className="text-slate-950 text-center text-2xl font-bold whitespace-nowrap mt-6"
          aria-label="Form Title"
        >
          {formTitle}
        </h2>

        <form className="items-start  bg-white self-stretch flex flex-col mt-9 mb-5 p-4 rounded-2xl">
          <p
            className="text-slate-950 text-center text-sm font-medium"
            aria-label="Form Description"
          >
            {formDescription}
          </p>

          <div className="w-full my-4">
            <Input name="name" label={nameLabel} onChange={handleInputChange} />
            {validationErrors.name && (
              <p className="text-red-500 text-center py-1">
                {invalidName}
              </p>
            )}
          </div>
          <div className="w-full">
            <Input
              name="phone"
              label={phoneLabel}

              onChange={handleInputChange}
            />
            {validationErrors.phone && (
              <p className="text-red-500 text-center py-1 max-w-80">
                {invalidPhone}
              </p>
            )}
          </div>
          <Button
            className="mt-4"
            onClick={handleSubmit}
            disabled={!formData.name || !formData.phone}
            fullWidth
          >
            {submitButtonText}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default InvestForm;
