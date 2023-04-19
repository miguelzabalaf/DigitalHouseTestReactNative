// Imports
import { handler } from './handler';
import { initialState } from './initialState';

// Helpers
import { createReducer } from '../../helpers/createReducer';

export const productsReducer = createReducer(initialState, handler);
