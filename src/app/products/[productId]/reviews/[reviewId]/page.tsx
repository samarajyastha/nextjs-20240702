import React from "react";

type ProductByIdReviewsByIdType = {
  params: { productId: string; reviewId: string };
};

export default function ProductByIdReviewsById(
  props: ProductByIdReviewsByIdType
) {
  return (
    <div>
      Product of id:{props.params.productId} and review of id:
      {props.params.reviewId}
    </div>
  );
}
