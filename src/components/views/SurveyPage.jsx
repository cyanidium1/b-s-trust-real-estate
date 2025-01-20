import React, { useState, useEffect } from "react";
import bg from "../../images/bg-Question-min.jpg";
import data from "../../text-content/questions/survey.json";
import { sendMessage } from "../../sendMessage";
import { NavLink, useNavigate } from "react-router-dom";

const SurveyPage = ({ onClose, lang, setIsModalThanksOpen }) => {
  const surveyData = data[lang] || [];
  const controls = data.controls[lang];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleOptionSelect = (option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: option,
    }));
    setSelectedOption(option);
    setCurrentQuestion((prevQuestion) =>
      Math.min(prevQuestion + 1, surveyData.length - 1)
    );
  };

  const handleInputChange = (event) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: event.target.value,
    }));
  };

  const handleBack = () => {
    if (currentQuestion <= 0) {
      navigate("/");
      return;
    }
    setCurrentQuestion((prevQuestion) => Math.max(0, prevQuestion - 1));
    setSelectedOption(null);
  };

  const handleNext = () => {
    if (
      surveyData[currentQuestion]?.type === "input" &&
      !answers[currentQuestion]
    ) {
      alert(controls.noNumber);
    } else {
      setCurrentQuestion((prevQuestion) =>
        Math.min(prevQuestion + 1, surveyData.length - 1)
      );
    }
  };

  const handleInputQuestions = () => {
    const inputQuestions = surveyData.filter(
      (question) => question.type === "input"
    );
    const emptyInputQuestions = inputQuestions.filter(
      (question) => !answers[question.id]
    );

    if (emptyInputQuestions.length > 0) {
      alert("Пожалуйста, заполните все поля ввода.");
    }
  };

  const handleFinish = () => {
    const currentTime = new Date().toLocaleTimeString();
    // console.log(
    //   `Пользователь ${answers[5]} заполнил анкету о подборе недвижимости в ${currentTime} на ${lang} языке на вашем сайте! Его телефон: ${answers[6]} и он бы хотел что б вы с ним связались через ${answers[7]}. Он выбрал следующие варианты ответов: ${answers[0]}, ${answers[1]}, ${answers[2]}, ${answers[3]}, ${answers[4]}`
    // );

    const message = `Пользователь ${answers[4]} заполнил анкету о подборе недвижимости в ${currentTime} на ${lang} языке на вашем сайте! \nЕго телефон: ${answers[5]} и он бы хотел что б вы с ним связались через ${answers[6]}. \nОн выбрал следующие варианты ответов: ${answers[0]}, ${answers[1]}, ${answers[2]}, ${answers[3]}.`;
    // sendMessage(message);
    console.log("🚀 ~ handleFinish ~ message:", message);
    // ТУТ ДАННЫЕ ЮЗЕРА
    navigate("/thanks");
  };
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="p-4 bg-no-repeat bg-cover fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
    >
      <div className="bg-cover bg-blur"></div>
      <div className="bg-white p-6 rounded-lg z-10 max-w-md w-full relative">
        <NavLink
          to="/"
          className="text-4xl absolute top-0 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </NavLink>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            {surveyData[currentQuestion]?.question}
          </h2>
          <div className="flex flex-col">
            {surveyData[currentQuestion]?.options ? (
              surveyData[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`hover:bg-blue-600 ${
                    selectedOption === option
                      ? "bg-orange-500 hover:bg-orange-400"
                      : "bg-blue-500"
                  } hover:bg-blue-600 text-white py-2 px-4 rounded mb-2`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              ))
            ) : (
              <input
                type="text"
                value={answers[currentQuestion] || ""}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 w-full"
              />
            )}
          </div>
        </div>
        <p>{currentQuestion + 1}/7</p>
        <div className="flex flex-col">
          {surveyData[currentQuestion]?.type === "input" && (
            <button
              onClick={
                currentQuestion === surveyData.length - 1
                  ? handleInputQuestions
                  : handleNext
              }
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-2"
            >
              {controls.next}
            </button>
          )}
          {currentQuestion === 6 && (
            <button
              onClick={handleFinish}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-2"
            >
              {controls.finish}
            </button>
          )}
          <button
            onClick={handleBack}
            className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded mb-2 text-center"
          >
            {currentQuestion === 0 ? controls.exit : controls.back}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;
