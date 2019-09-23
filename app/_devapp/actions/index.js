import { store } from '../'

export const HEADER_ASSETS_REQUEST = 'HEADER_ASSETS_REQUEST'
export const CONTENT_REQUEST = 'CONTENT_REQUEST'
export const CONTENT_FOCUS = 'CONTENT_FOCUS'
export const CONTENT_PUSH_FORM_VALUE = "CONTENT_PUSH_FORM_VALUE"
export const CONTENT_SAVED_SUCCESS = "CONTENT_SAVED_SUCCESS"
export const FORM_CONTENT = 'FORM_CONTENT'

//////////
// HEAD //
//////////

export const getAssets = (json) => {
    return {
        type: HEADER_ASSETS_REQUEST,
        assets: Object.keys(json)
    }
}

const fetchAssetsAPI = () => dispatch => {
    return fetch(API_URL_ASSETS)
        .then((response) => response.json())
        .then((json) => dispatch(getAssets(json)));
}

export const fetchAssets = () => dispatch => {
    return dispatch(fetchAssetsAPI())
}

//////////
// CONT //
//////////

export const getContentFocus = (focus) => {
    return {
        type: CONTENT_FOCUS,
        focus: focus.target.attributes.value.value,
    }
}

export const getContent = (json, asset) => {
    return {
        type: CONTENT_REQUEST,
        content: json,
        contentLoaded: asset
    }
}

const fetchContentAPI = (asset) => dispatch => {
    return fetch(API_URL_CONTENT + "?asset=" + asset)
        .then((response) => response.json())
        .then((json) => dispatch(getContent(json, asset)));
}

export const fetchContent = (e) => dispatch => {
    return dispatch(fetchContentAPI(e.target.attributes.value.value))
}

////////////////////
// CONT_DATA_FORM //
////////////////////

export const setFormContent = (entries, focus) => {
    return {
        type: FORM_CONTENT,
        content: entries,
        focus: focus
    }
}

export const pushFormValue = (key, value, section) => {
    return {
        type: CONTENT_PUSH_FORM_VALUE,
        key: key,
        value: value.target.value,
        section: section
    }
}

const saveContentSuccess = () => {
    return {
        type: CONTENT_SAVED_SUCCESS,
        contentSaveSuccess: true
    }
}

const saveContentAPI = (data_API) => dispatch => {
    const isDays = store.getState().content.content['calendar.days'] && true
    return fetch(API_URL_SAVE + 
        "?data=" + data_API + 
        "&asset=" + store.getState().content.contentLoaded +
        "&section=" + (isDays ? "calendar.days": store.getState().content.focus))
        .then((response) => response.text())
        .then((response) => { console.log("Data from section Saved") });
}

export const saveContent = () => dispatch => {
    let data_API = [];
    if (store.getState().content.contentLoaded == "days") {
        data_API = {};
        store.getState().content.formGroupContent.map((x) => {
            store.getState().content.content['calendar.days'][x[2]] &&
                (data_API[x[2]] = store.getState().content.content['calendar.days'][x[2]])
        }
        )
        data_API = JSON.stringify(data_API);
    }
    else
        data_API = JSON.stringify(store.getState().content.content[store.getState().content.focus])

    return dispatch(saveContentAPI(encodeURIComponent(data_API)))
}

//////////
// FOOT //
//////////

