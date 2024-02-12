const ages: number[] = [];

const gameBoard: string[][] = [];

type Product = {
  name: string;
  price: number;
};

const getTotal = (products: Product[]) => {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  return total;
};
