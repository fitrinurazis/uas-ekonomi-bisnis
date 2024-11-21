// src/components/QuestionsPage.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../json/data.json";

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State untuk input pencarian
  const location = useLocation();

  const uniqueId =
    new URLSearchParams(location.search).get("id") ||
    Math.random().toString(36).substring(2);

  useEffect(() => {
    setQuestions(data.questions);
  }, []);

  // Filter soal berdasarkan input pencarian
  const filteredQuestions = questions.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      Object.values(item.options)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-10 mx-3">
      <div className="sticky top-0 pb-2 bg-white">
        <h1 className="py-2 text-2xl font-bold text-center ">
          UAS TEORI ORGANISASI
        </h1>
        <div className="max-w-4xl mx-auto mb-6">
          <input
            type="text"
            placeholder="Cari soal atau jawaban..."
            className="w-full p-2 border-2 rounded-lg border-stone-900"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 select-none">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((item) => (
            <div
              key={item.number}
              className="w-[400px] p-2 mb-2 border-2 rounded-lg border-stone-900"
            >
              <div className="flex gap-3">
                <p>{item.number}</p>
                <div className="flex flex-col">
                  <p>{item.question}</p>
                  <ul>
                    {Object.entries(item.options).map(([key, value]) => (
                      <li
                        key={key}
                        className={`p-1  ${
                          item.answer === key ? "bg-green-200 " : ""
                        }`}
                      >
                        <p className="flex gap-3">
                          <tr className="text-center align-middle border-2 border-gray-800 w-7 h-7">
                            {key}
                          </tr>
                          <tr className="w-full">{value}</tr>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="w-full text-center text-red-500">
            Soal tidak ditemukan.
          </p>
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;
