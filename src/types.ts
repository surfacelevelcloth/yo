type TagProps = {
  params: {
    tag: string;
  };
};

type HandleProps = {
  params: {
    handle: string;
  };
};

type Product = {
  handle: string;
  title: string;
  priceRangeV2: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  featuredImage: {
    url: string;
    altText: string;
  };
};
