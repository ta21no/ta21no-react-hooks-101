import {
    CREATE_EVENT,
    DELETE_EVENT,
    DELETE_ALL_EVENTS
} from "../actions";

/**
 * action = {
 *     type: 'CREATE_EVENT',
 *     title: '2020東京オリンピックのお知らせ',
 *     body: '2020年お知らせお知らせ......'
 * }
 * @param state
 * @param action
 * @returns {Array}
 */
const events = (state = [], action) => {
    switch (action.type) {
        case CREATE_EVENT:
            const event = {title: action.title, body: action.body};
            const length = state.length;
            let id = length === 0 ? 1 : state[length - 1].id + 1;
            return [...state, {id, ...event}];
        case DELETE_EVENT:
            return state.filter(event => event.id !== action.id);
        case DELETE_ALL_EVENTS:
            return [];
        default:
            return state;
    }
};

export default events;