// src/components/QuestionsPage.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../json/data.json";
import "./QuestionsPage.css"; // Import CSS file for custom styles

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const location = useLocation();
  const uniqueId =
    new URLSearchParams(location.search).get("id") ||
    Math.random().toString(36).substring(2);

  useEffect(() => {
    setQuestions(data.questions);
  }, []);

  return (
    <div className="questions-page">
      {questions.map((item) => (
        <div key={item.number} className="question">
          <p>
            {item.number}. {item.question}
          </p>
          <ul>
            {Object.entries(item.options).map(([key, value]) => (
              <li
                key={key}
                className={`option ${item.answer === key ? "correct" : ""}`}
              >
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuestionsPage;
