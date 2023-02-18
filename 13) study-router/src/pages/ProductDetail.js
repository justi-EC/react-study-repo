import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  //동적 경로로 설정한 페이지 주소값을 가져옴

  return (
    <section>
      <h1>Products Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
