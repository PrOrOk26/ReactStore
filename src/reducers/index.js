import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CARD } from "../actions/action-types"

const initialState = {
  cart: [

  ],
  products: [
    {
      productId: 0,
      productName: 'IPhone XS',
      productImage: "/assets/iphoneXS.jpg",
      productPrice: 799,
      productDescription: 'A large phone with one of the best screens'
    },
    {
      productId: 1,
      productName: 'IPhone 8',
      productImage: "/assets/iphone8.jpg",
      productPrice: 699,
      productDescription: 'A great phone with one of the best cameras'
    },
    {
      productId: 2,
      productName: 'Wilson Racquet',
      productImage: "/assets/wilson_racquet.jpg",
      productPrice: 499,
      productDescription: 'The unique style modern racquet'
    },
    {
      productId: 3,
      productName: 'Babolat Racquet',
      productImage: "/assets/babolat_racquet.jpg",
      productPrice: 599,
      productDescription: 'The raquet that is used by Rafael Nadal'
    },
    {
      productId: 4,
      productName: 'Babolat Tennis Bag',
      productImage: "/assets/babolat_tennis_bag.jpg",
      productPrice: 599,
      productDescription: 'Modern tennis bag'
    },
    {
      productId: 5,
      productName: 'Adidas Sneakers 1800',
      productImage: "/assets/adidasSneakers.jpg",
      productPrice: 299,
      productDescription: 'Modern Adidas sneakers for real guys!'
    },
    {
      productId: 6,
      productName: 'Iphone 6 32 GB',
      productImage: "/assets/iphone6.jpg",
      productPrice: 199,
      productDescription: 'Iphone 6 32 GB from Apple'
    },
    {
      productId: 7,
      productName: 'New Balance 700',
      productImage: "/assets/newBalanceSneakers.jpg",
      productPrice: 399,
      productDescription: 'Sneakers from New Balance'
    },
    {
      productId: 8,
      productName: 'Samsung Smart TV',
      productImage: "/assets/samsung SmartTV.jpg",
      productPrice: 599,
      productDescription: 'Smart TV 2019'
    },
    {
      productId: 9,
      productName: 'Samsung Galaxy A10',
      productImage: "/assets/samsungGalaxyA10.jpg",
      productPrice: 99,
      productDescription: 'Samsung Galaxy is a brand new model that bring quality to a new level.'
    },
    {
      productId: 10,
      productName: 'Toshiba TV',
      productImage: "/assets/toshibaTV.jpg",
      productPrice: 540,
      productDescription: 'Toshiba TV for those who care about the quality'
    },
  ]
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_PRODUCT_TO_CART) {
    return Object.assign({}, state, {
      cart: state.cart.concat(action.product)
    });
  }
  else if (action.type === REMOVE_PRODUCT_FROM_CARD) {
    return Object.assign({}, state, {
      cart: state.cart.filter((pd) => {
        return pd.productId !== action.product.productId
      })
    });
  }
  return state;
};

export default rootReducer;