import {formatTypeField} from './formatTypeField';

const tranferProductDataToInputFormat = (
  name: string,
  description: string,
  ingredients: Array<string>,
  price: number,
  category: string,
  imageUrl: string,
  discountPercentage: number = 0,
  rating: number = 0.0,
  numberOfVote: number = 0,
  variant: string = '',
  point: number = 0,
  reviews: Array<string> = [],
) => {
  return {
    fields: {
      name: formatTypeField(name),
      description: formatTypeField(description),
      ingredients: formatTypeField(ingredients),
      price: formatTypeField(price),
      discountPercentage: formatTypeField(discountPercentage),
      rating: formatTypeField(rating),
      numberOfVote: formatTypeField(numberOfVote),
      variant: formatTypeField(variant),
      point: formatTypeField(point),
      category: formatTypeField(category),
      imageUrl: formatTypeField(imageUrl),
      reviews: formatTypeField(reviews),
    },
  };
};

interface ProductOutput {
  name: any;
  description: any;
  ingredients: any;
  price: any;
  discountPercentage?: any;
  rating?: any;
  numberOfVote?: any;
  variant?: any;
  point?: any;
  category: any;
  imageUrl: any;
  reviews?: any;
}

const tranferProductDataToUsableProductData = (data: ProductOutput) => {
  const {
    name: nameObj,
    description: descriptionObj,
    ingredients: ingredientsObj,
    price: priceObj,
    discountPercentage: discountPercentageObj,
    rating: ratingObj,
    numberOfVote: numberOfVoteObj,
    variant: variantObj,
    point: pointObj,
    category: categoryObj,
    imageUrl: imageUrlObj,
    reviews: reviewsObj,
  } = data;
  const name = nameObj.stringValue;
  const description = descriptionObj.stringValue;
  const ingredients =
    ingredientsObj.arrayValue.values?.map((item: any) => item.stringValue) ||
    [];
  const price = priceObj.doubleValue
    ? priceObj.doubleValue
    : priceObj.integerValue;
  const discountPercentage =
    typeof discountPercentageObj.doubleValue !== 'undefined'
      ? discountPercentageObj.doubleValue
      : discountPercentageObj.integerValue;
  const rating =
    typeof ratingObj.doubleValue !== 'undefined'
      ? ratingObj.doubleValue
      : ratingObj.integerValue;
  const numberOfVote = numberOfVoteObj.integerValue;
  const variant = variantObj.stringValue;
  const point =
    typeof pointObj.doubleValue !== 'undefined'
      ? pointObj.doubleValue
      : pointObj.integerValue;
  const category = categoryObj.stringValue;
  const imageUrl = imageUrlObj.stringValue;
  const reviews =
    reviewsObj.arrayValue.values?.map((item: any) => item.stringValue) || [];

  return {
    name,
    description,
    ingredients,
    price,
    discountPercentage,
    rating,
    numberOfVote,
    variant,
    point,
    category,
    imageUrl,
    reviews,
  };
};

export {tranferProductDataToInputFormat, tranferProductDataToUsableProductData};
export type {ProductOutput};
