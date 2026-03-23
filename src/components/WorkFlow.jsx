import React from "react";
import "../index.css";
import "../App.css";
import "../css/style.css";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
const WorkFlow = () => {
  const { text } = useContext(LanguageContext);
  return (
    <div
      className="container-fluid mt-15 font-stack"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--nav-text)",
      }}
    >
      <h1
        className="text-center text-4xl "
        style={{ fontWeight: "bolder", fontSize: "50px" }}
      >
        <span
          className="text-pink-600"
          style={{ fontWeight: "bolder", fontSize: "50px" }}
        >
          Work
        </span>{" "}
        Flow
      </h1>

      <div className="w-full py-5">
        <div
          className="max-w-screen-xl mx-auto 
                        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                        gap-6 "
        >
          <div 
            className="rounded-xl border-1 border-gray-200 p-0.5 shadow-xl "
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            <div className="rounded-[10px] work-flow-box p-4 pt-15! sm:p-6 h-full">
              <h2 className="text-center text-lg mb-4">
                <span
                  className="text-pink-600"
                  style={{ fontWeight: "bolder" }}
                >
                  {text?.workflow?.beforeboost?.before_title}
                </span>
              </h2>
              <ul className="space-y-2">
                <li className="nav-link">
                  <div className="flex items-center gap-2">
                    <div className="w-3 bg-pink-600 animate-pulse h-3 rounded-full animate-bounce"></div>
                    {text?.workflow?.beforeboost?.check_page}
                  </div>
                </li>
                <li className="nav-link">
                  <div className="flex items-center gap-2">
                    <div className="w-3 bg-pink-600 animate-pulse h-3 rounded-full animate-bounce"></div>
                    {text?.workflow?.beforeboost?.check_ads}
                  </div>
                </li>
                <li className="nav-link">
                  <div className="flex items-center gap-2">
                    <div className="w-3 bg-pink-600 animate-pulse h-3 rounded-full animate-bounce"></div>
                    {text?.workflow?.beforeboost?.check_content}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="rounded-xl border-1 border-gray-200 p-0.5 shadow-xl"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
          >
            <div className="rounded-[10px] work-flow-box p-4 pt-15! sm:p-6 h-full">
              <h2 className="text-center font-semibold text-lg mb-4">
                <span
                  className="text-pink-600"
                  style={{ fontWeight: "bolder" }}
                >
                  {text?.workflow?.beforeboost?.before_title}
                </span>
              </h2>
              <ul className="space-y-2">
                <li className="nav-link">
                  <div className="flex items-center gap-2 ">
                    <div className="w-3 bg-pink-600 animate-pulse h-3 rounded-full animate-bounce"></div>
                    {text?.workflow?.during_boosting?.check_ads_perfor}
                  </div>
                </li>
                <li className="nav-link">
                  <div className="flex items-center gap-2 ">
                    <div className="w-3 bg-pink-600 animate-pulse h-3 rounded-full animate-bounce"></div>
                    {text?.workflow?.during_boosting?.adj_perfor}
                  </div>
                </li>
                <li className="nav-link">
                  <div className="flex items-center gap-2 ">
                    <div className="w-3 bg-pink-600 animate-pulse h-3 rounded-full animate-bounce"></div>
                    {text?.workflow?.during_boosting?.report_client}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="rounded-xl border-1 border-gray-200 p-0.5 shadow-xl "
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="600"
            data-aos-easing="ease-in-out"
          >
            <div className="rounded-[10px] work-flow-box p-4 pt-15! sm:p-6 h-full">
              <h2 className="text-center  font-semibold text-lg mb-4">
                <span
                  className="text-pink-600"
                  style={{ fontWeight: "bolder" }}
                >
                  {text?.workflow?.during_boosting?.during_title}
                </span>
              </h2>
              <ul className="space-y-2">
                <li className="nav-link">
                  <div className="flex items-center gap-2 ">
                    <div className="w-3 bg-pink-600 animate-pulse h-3 rounded-full animate-bounce"></div>
                    {text?.workflow?.after_boosting?.setting_next_objectives}
                  </div>
                </li>
                <li className="nav-link">
                  <div className="flex items-center gap-2 ">
                    <div className="w-3 bg-pink-600 animate-pulse h-3 rounded-full animate-bounce"></div>
                    {text?.workflow?.after_boosting?.after_report_client}
                  </div>
                </li>
                <li className="nav-link">
                  <div className="flex items-center gap-2 ">
                    <div className="w-3 bg-pink-600 animate-pulse h-3 rounded-full animate-bounce"></div>
                    {text?.workflow?.after_boosting?.research}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
