import axios from "axios";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const API_URL = process.env.API;
// const JWT_TOKEN = process.env.JWT_TOKEN //admin account token to get private data

/**
 * Global params
 */
const params = {
  baseURL: API_URL,
};

/**
 * Get le menu
 * @returns {Array} tableaux d'objets contenant les noms de pages + leurs liens
 */
export async function getHeaderMenu() {
  return axios.get("/items/pages", params).then((response) => response.data);
}

export async function getWorks() {
  return axios
    .get("/items/works?fields?=project_skills", params)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}
