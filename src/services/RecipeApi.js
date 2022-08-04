import axios from 'axios';

const baseUrl = 'https://masak-apa-tomorisakura.vercel.app/api';

const recipeapi = axios.create({
  baseURL: baseUrl,
  }
);

export default recipeapi;