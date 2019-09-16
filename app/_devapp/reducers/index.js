import { combineReducers } from 'redux'
import {
    HEADER_ASSETS_REQUEST,
    CONTENT_REQUEST,
    CONTENT_FOCUS,
    CONTENT_PUSH_FORM_VALUE,
    FORM_CONTENT
} from '../actions'

const header = (state = {}, action) => {
    switch (action.type) {
        case HEADER_ASSETS_REQUEST:
            return {
                ...state,
                header_assets_names: action.assets
            }
        default:
            return {
                ...state
            }
    }
}

const content = (state = {}, action) => {
    switch (action.type) {

        case CONTENT_REQUEST:
            return {
                ...state,
                content: action.content,
                contentLoaded: action.contentLoaded
            }

        case CONTENT_FOCUS:
            return {
                ...state,
                focus: action.focus,
            }

        case CONTENT_PUSH_FORM_VALUE:
            return {
                ...state,
                content: {
                    ...state.content,
                    [action.section]: {
                        ...state.content[action.section],
                        [action.key]: action.value
                    }
                }
            }

        case FORM_CONTENT:
            if (action.focus !== state.formFocus) {
                return {
                    ...state,
                    formGroupContent: action.content,
                    formFocus: action.focus
                }
            }
            else return {
                ...state
            }

        default:
            return {
                ...state,
                content: "",
                focus: "",
                contentLoaded: false,
                formGroupContent: "",
                formFocus: ""
            }
    }
}

const footer = (state = {}, action) => {
    switch (action.type) {
        default:
            return {
                ...state,
            }
    }
}

const reducer = combineReducers({
    header,
    content,
    footer
})

export default reducer
