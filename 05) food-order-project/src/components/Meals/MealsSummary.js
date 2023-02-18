import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>당신에게 맛있는 음식을 배달합니다.</h2>
      <p>
        여기 있는 다양한 음식 리스트 중에서 가장 좋아하는 음식를 선택하세요!
      </p>
      <p>
        모든 음식은 고품질의 재료로 요리되고 숙련된 요리사들이 직접 요리합니다!
      </p>
    </section>
  );
};

export default MealsSummary;
