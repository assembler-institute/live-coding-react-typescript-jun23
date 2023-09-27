import { v4 as uuidv4 } from "uuid";

const initialState = 0;

import img_1 from '../img/img_1.jpeg'
import img_2 from '../img/img_2.jpeg'
import img_3 from '../img/img_3.jpeg'

const products = [
  {
    id: uuidv4(),
    title: "Nike Runner",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 88,
    img: img_1,
    quantity: initialState
  },
  {
    id: uuidv4(),
    title: "Puma 80's",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 109,
    img: img_2,
    quantity: initialState
  },
  {
    id: uuidv4(),
    title: "Nike Rev Lite",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 66,
    img: img_3,
    quantity: initialState
  },
  {
    id: uuidv4(),
    title: "Nike Runner",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 88,
    img: img_1,
    quantity: initialState
  },
  {
    id: uuidv4(),
    title: "Puma 80's",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 109,
    img: img_2,
    quantity: initialState
  },
  {
    id: uuidv4(),
    title: "Nike Rev Lite",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 66,
    img: img_3,
    quantity: initialState
  },
  {
    id: uuidv4(),
    title: "Nike Runner",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 88,
    img: img_1,
    quantity: initialState
  },
  {
    id: uuidv4(),
    title: "Puma 80's",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 109,
    img: img_2,
    quantity: initialState
  },
  {
    id: uuidv4(),
    title: "Nike Rev Lite",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.',
    price: 66,
    img: img_3,
    quantity: initialState
  }
];

export default products;