import{b as m,u as E,n as f,z as g,r as j,P as S,c as x,j as r,k as y,C as b}from"./index-CEjWu8zT.js";import{J}from"./index-CkFy1ewc.js";import{u as U}from"./useCrud-6uD_6Pwn.js";import"./validations-DU48qaoM.js";import"./stringUtils-CSt2nhWB.js";function D(){const o=m(),e=E(),{journalId:t}=f(),{journal:s,loading:n}=g(),{loading:i,success:a,error:u,updateJournal:d}=U(b.UPDATE);j.useEffect(()=>(a&&e(`${S.DETAILS}/${t}`),()=>{o(x.resetState())}),[a]);const c=async p=>{d(p,t)};if(n||!s)return r.jsx(y,{});const l={title:"Refine Your Story!",caption:"Update your travel journal to reflect your latest adventures and insights. Edit your stories, photos, and experiences to keep your journey alive and inspiring.",buttonCaption:"Edit",submitCallback:c,isSubmitting:i,requestError:u,journal:s};return r.jsx(J,{settings:l})}export{D as default};
