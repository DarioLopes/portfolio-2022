import axios from 'axios'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const API_URL = process.env.API

/**
 * Global params
 */
const params = {
  baseURL: API_URL,
}

/**
 * Get liste des slug projets pour revalidate
 * @returns {Array} tableau d'objets contenant les projets
 */
export function getWorksSlug() {
  return axios
    .get('/items/works?fields=slug', params)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

/**
 * Get liste des projets
 * @returns {Array} tableau d'objets contenant les projets
 */
export function getWorks() {
  return axios
    .get('/items/works?fields=*,project_skills.skills_id.skill,project_skills.skills_id.icon', params)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

/**
 * @param {String} slug du projet à get
 * @returns {Object} objet contenant les datas d'un projet (id, images, textes, etc...)
 */
export function getSingleWorks(slug) {
  return axios
    .get(`/items/works?filter[slug][_eq]=${slug ? slug : ''}&fields=*,project_skills.skills_id.skill,project_skills.skills_id.icon`, params)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

/**
 * Get liste des skills
 * @returns {Array} tableau contenant la liste de skills (id, images, textes, etc...)
 */
export function getSkills() {
  return axios
    .get(`/items/skills`, params)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}

/**
 * Get les données de la page "About"
 * @returns {Array} tableau contenant les textes de la page
 */
export function getAbout() {
  return axios
    .get(`/items/about`, params)
    .then((response) => response.data)
    .catch((error) => console.log(error))
}
