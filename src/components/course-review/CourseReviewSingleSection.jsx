"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { analyzeReviews } from "@/services/connect.js";
import { getCourseById } from "@/services/connect.js";
import BaseContainer from "@/components/common/BaseContainer/BaseContainer";
import style from "./CourseReviewSingleSection.module.css";

const CourseReviewSingleSection = ({ id, reviews }) => {
  const [course, setCourse] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getCourseById(id);
      setCourse(data);
    };
    getData();
  }, [id]);

  useEffect(() => {
    if (!reviews || reviews.length === 0) return;
    const runAnalysis = async () => {
      setLoading(true);
      const result = await analyzeReviews(reviews);
      if (result) setAnalysis(result);
      setLoading(false);
    };
    runAnalysis();
  }, [reviews]);

  if (!course) return null;

  return (
    <section className={style.review}>
      <BaseContainer>
        <h2 className={style.title}>Відгуки студентів</h2>

        <div>
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            className={style.swiper}
          >
            {reviews.map((rev, index) => {
              const analyzed = analysis?.reviews?.[index];

              return (
                <SwiperSlide key={rev.id} className={style.slide}>
                  <div className={style.card}>
                    <div className={style.card_header}>
                      <span className={style.card_name}>{rev.name}</span>
                    </div>

                    <p className={style.card_text}>
                      {rev.text.length > 100
                        ? `${rev.text.slice(0, 89)}...`
                        : rev.text}
                    </p>

                    {loading && (
                      <div className={style.card_loading}>Аналізуємо...</div>
                    )}

                    {analyzed && !loading && (
                      <div className={style.card_aspects}>
                        {Object.entries(analyzed.aspects).map(([key, asp]) => (
                          <div
                            key={key}
                            className={`${style.aspect_badge} ${
                              asp.label === "positive"
                                ? style.badge_positive
                                : style.badge_negative
                            }`}
                          >
                            <span>{asp.name_ua}</span>
                            <span className={style.badge_conf}>
                              {Math.round(asp.confidence * 100)}%
                            </span>
                          </div>
                        ))}

                        <div className={style.card_overall}>
                          <span
                            className={
                              analyzed.overall_label === "positive"
                                ? style.overall_positive
                                : style.overall_negative
                            }
                          >
                            {analyzed.overall_label === "positive"
                              ? "👍"
                              : "👎"}{" "}
                            {Math.round(analyzed.overall_score * 100)}%
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {analysis && !loading && (
          <div className={style.summary}>
            <h3 className={style.summary_title}>Загальний аналіз курсу</h3>

            <div className={style.summary_counts}>
              <div className={style.count_box}>
                <span className={style.count_num}>
                  {analysis.summary.total_reviews}
                </span>
                <span className={style.count_label}>Всього відгуків</span>
              </div>
              <div className={`${style.count_box} ${style.count_box_green}`}>
                <span className={style.count_num}>
                  {analysis.summary.positive_count}
                </span>
                <span className={style.count_label}>Позитивних</span>
              </div>
              <div className={`${style.count_box} ${style.count_box_red}`}>
                <span className={style.count_num}>
                  {analysis.summary.negative_count}
                </span>
                <span className={style.count_label}>Негативних</span>
              </div>
              <div className={`${style.count_box} ${style.count_box_blue}`}>
                <span className={style.count_num}>
                  {Math.round(analysis.summary.overall_average_score * 100)}%
                </span>
                <span className={style.count_label}>Середня оцінка</span>
              </div>
            </div>

            <div className={style.aspects_grid}>
              {Object.entries(analysis.summary.per_aspect).map(([key, asp]) => (
                <div key={key} className={style.aspect_card}>
                  <span className={style.aspect_name}>{asp.name_ua}</span>

                  <div className={style.progress_bar}>
                    <div
                      className={style.progress_fill}
                      style={{
                        width: `${Math.round(asp.avg_pos_prob * 100)}%`,
                      }}
                    />
                  </div>

                  <span className={style.aspect_pct}>
                    {Math.round(asp.positive_rate * 100)}% позитивних
                  </span>
                </div>
              ))}
            </div>

            <div className={style.influential}>
              <span className={style.influential_label}>
                🔍 Найбільше вплинуло:
              </span>
              <span className={style.influential_name}>
                {analysis.summary.most_influential_aspect.name_ua}
              </span>
              <p className={style.influential_reason}>
                {analysis.summary.most_influential_aspect.reason}
              </p>
            </div>
          </div>
        )}
      </BaseContainer>
    </section>
  );
};

export default CourseReviewSingleSection;
