import { ACTOR_ADD, ACTOR_LOAD, ACTORS_LOAD, ACTOR_REMOVE } from './reducers';
import { deleteActor, getActor, getActors, postActor } from '../../services/api';

export const loadActors = () => ({
  type: ACTORS_LOAD,
  payload: getActors()
});

export const addActor = data => ({
  type: ACTOR_ADD,
  payload: postActor(data)
});

export const loadActor = id => ({
  type: ACTOR_LOAD,
  payload: getActor(id)
});

export const removeActor = id => ({
  type: ACTOR_REMOVE,
  payload: deleteActor(id).then(() => id)
});