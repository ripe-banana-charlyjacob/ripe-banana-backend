export const ACTORS_LOAD = 'ACTORS_LOAD';
export const ACTOR_LOAD = 'ACTOR_LOAD';
export const ACTOR_ADD = 'ACTOR_ADD';
export const ACTOR_REMOVE = 'ACTOR_REMOVE';

export const actors = (state = [], { type, payload }) => {
  switch(type) {
    case ACTORS_LOAD:
      return payload;
    case ACTOR_ADD:
      return [...state, payload];
    case ACTOR_REMOVE:
      return state.filter(s => s._id !== payload);
    default:
      return state;
  }
};

export const actor = (state = null, { type, payload }) => {
  switch(type) {
    case ACTOR_LOAD:
      return payload;
    case ACTOR_REMOVE:
      return null;
    default:
      return state;
  }
};