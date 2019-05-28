import combineReducers from './combineReducers';
import app from './feature/app/reducer/appReducer';
import todos from './feature/todo/reducer/todoReducer';

const reducer = combineReducers({
    app,
    todos
});

export default reducer;
