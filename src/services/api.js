import { get, post, del } from './request';

const URL = '/api';
const ACTORS_URL = `${URL}/actors`;

export const getShips = () => get(ACTORS_URL);
export const postShip = data => post(ACTORS_URL, data);
export const getShip = id => get(`${ACTORS_URL}/${id}`);
export const deleteShip = id => del(`${ACTORS_URL}/${id}`);