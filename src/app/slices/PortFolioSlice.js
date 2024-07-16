import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        user:null,
        userLoader:false,
        about:null,
        aboutLoader:false,
        skills:null,
        skillsLoader:false,
        resume:null,
        resumeLoader:false,
        service:null,
        serviceLoader:false,
        portfolioImages:null,
        portfolioLoader:false,
        testimonials:null,
        testimonialsLoader:false,
}

const portfolioSlice = createSlice({
        name:'auth',
        initialState:initialState,
        reducers:{
                generalRequest:(state)=> {return({...state,userLoader:true})},
                generalSuccess:(state,action)=> {return({...state,userLoader:false,user:action.payload})},
                generalFailure:(state)=> {return({...state,userLoader:false})},
                aboutRequest:(state)=> {return({...state,aboutLoader:true})},
                aboutSuccess:(state,action)=> {return({...state,aboutLoader:false,about:action.payload})},
                aboutFailure:(state)=> {return({...state,aboutLoader:false})},
                skillRequest:(state)=> {return({...state,skillsLoader:true})},
                skillSuccess:(state,action)=> {return({...state,skillsLoader:false,skills:action.payload})},
                skillFailure:(state)=> {return({...state,skillsLoader:false})},
                resumeRequest:(state)=> {return({...state,resumeLoader:true})},
                resumeSuccess:(state,action)=> {return({...state,resumeLoader:false,resume:action.payload})},
                resumeFailure:(state)=> {return({...state,resumeLoader:false})},
                serviceRequest:(state)=> {return({...state,serviceLoader:true})},
                serviceSuccess:(state,action)=> {return({...state,serviceLoader:false,service:action.payload})},
                serviceFailure:(state)=> {return({...state,serviceLoader:false})},
                portfolioRequest:(state)=> {return({...state,portfolioLoader:true})},
                portfolioSuccess:(state,action)=> {return({...state,portfolioLoader:false,portfolioImages:action.payload})},
                portfolioFailure:(state)=> {return({...state,portfolioLoader:false})},
                testimonialsRequest:(state)=> {return({...state,testimonialsLoader:true})},
                testimonialsSuccess:(state,action)=> {return({...state,testimonialsLoader:false,testimonials:action.payload})},
                testimonialsFailure:(state)=> {return({...state,testimonialsLoader:false})},

                
        },
})
export default portfolioSlice.reducer;
export const {
        generalRequest,generalFailure,generalSuccess,
        aboutRequest,aboutFailure,aboutSuccess,
        skillRequest,skillFailure,skillSuccess,
        resumeRequest,resumeFailure,resumeSuccess,
        serviceRequest,serviceFailure,serviceSuccess,
        portfolioRequest,portfolioFailure,portfolioSuccess,
        testimonialsRequest,testimonialsFailure,testimonialsSuccess,
} = portfolioSlice.actions;