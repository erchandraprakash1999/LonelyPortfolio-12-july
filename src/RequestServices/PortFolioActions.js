import {
        generalRequest, generalFailure, generalSuccess,
        aboutRequest, aboutFailure, aboutSuccess,
        skillRequest, skillFailure, skillSuccess,
        resumeRequest, resumeFailure, resumeSuccess,
        serviceRequest, serviceFailure, serviceSuccess,
        portfolioRequest, portfolioFailure, portfolioSuccess,
        testimonialsRequest, testimonialsFailure, testimonialsSuccess,
} from "../app/slices/PortFolioSlice"
import api from "./baseApi"
// const Register=(formdata)=>api.post('/auth/signup',formdata)
// const Login=(formdata)=>api.post('/auth/signin',formdata)
const generalapi = () => async (dispatch) => {
        dispatch(generalRequest());
        try {
                const resp = await api.get('/general-settings');
                console.log(resp.data)
                dispatch(generalSuccess(resp.data))
        } catch (error) {
                dispatch(generalFailure())
        }
}
const aboutapi = () => async (dispatch) => {
        dispatch(aboutRequest());
        try {
                const resp = await api.get('/about');
                console.log(resp.data)
                dispatch(aboutSuccess(resp.data))
        } catch (error) {
                dispatch(aboutFailure())
        }
}
const skillsapi = () => async (dispatch) => {
        dispatch(skillRequest());
        try {
                const resp = await api.get('/skills');
                console.log(resp.data)
                dispatch(skillSuccess(resp.data))
        } catch (error) {
                dispatch(skillFailure())
        }
}
const resumeapi = () => async (dispatch) => {
        dispatch(resumeRequest());
        try {
                const resp = await api.get('/resume');
                console.log(resp.data)
                dispatch(resumeSuccess(resp.data))
        } catch (error) {
                dispatch(resumeFailure())
        }
}
const serviceapi = () => async (dispatch) => {
        dispatch(serviceRequest());
        try {
                const resp = await api.get('/service');
                console.log(resp.data)
                dispatch(serviceSuccess(resp.data))
        } catch (error) {
                dispatch(serviceFailure())
        }
}
const portfolioapi = () => async (dispatch) => {
        dispatch(portfolioRequest());
        try {
                const resp = await api.get('/portfolio');
                console.log(resp.data)
                dispatch(portfolioSuccess(resp.data))
        } catch (error) {
                dispatch(portfolioFailure())
        }
}
const testimonialsapi = () => async (dispatch) => {
        dispatch(testimonialsRequest());
        try {
                const resp = await api.get('/testimonial');
                console.log(resp.data)
                dispatch(testimonialsSuccess(resp.data))
        } catch (error) {
                dispatch(testimonialsFailure())
        }
}

export default {
        generalapi,
        aboutapi,
        skillsapi,
        resumeapi,
        serviceapi,
        portfolioapi,
        testimonialsapi
}