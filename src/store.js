import {createStore} from 'redux';

import {guessingGameReducer} from './reducers'

export default createStore(guessingGameReducer);