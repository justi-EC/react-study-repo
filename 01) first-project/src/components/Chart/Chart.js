import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //넘겨져온 객체 배열의 value값만 추출해서 배열로 저장
  const totalMaximum = Math.max(...dataPointValues); //넘겨져온 객체 배열의 value값 중 최대 크기를 저장하는 변수
  //max()는 배열이 아닌 인자들의 목록을 넣어줘야함
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>

    // 갖고있는 dataPoints만큼 ChartBar컴포넌트를 생성
  );
};

export default Chart;
