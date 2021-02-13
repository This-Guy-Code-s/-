import {LOADING,SUCCESS,BTN,NAVIGATION,MODE,SHOW,ERR} from './actions'
import logo from '../img/tgc1.png'
import me from '../img/me.png'
import wavio from '../img/wave.png'

import bg from '../img/bg6.jpg'
import bgdm from '../img/bg6dm.jpg'



const initialState = {
compRendered:sessionStorage.getItem('nav') || 'Home',
work:[],
error:'',
mode:!window.sessionStorage.getItem('toggleDarkMode')?true:JSON.parse(window.sessionStorage.getItem('toggleDarkMode')),
show:false,
me:me,
logo:logo,
wavio:wavio,
btnL:'Contact Me',
bg:bg,
bgdm:bgdm,

pitch:`" With your own website you can build your brand's credibility,
showcase your work at all times,
increase your audience, 
and always have your self open for opportunities.
You never know who's admiring your content ,
bring your audience into the world they want to be in.
Creating content and good vibes can never get old to me.
From custom websites to updates to your websites,
I can help. Contact Me. "`,

promoGameCodes:[

{
link:"https://www.amazon.com/promocode/A1WBUC4TOJAT89?ref_=assoc_tag_ph_1524218815239&_encoding=UTF8&camp=1789&creative=9325&linkCode=pf4&tag=thisguycodez-20&linkId=810a31eb01ed5ff79246fab0bcec4670",
name:'Save 60% at AreSpark'},

{
link:"https://www.amazon.com/promocode/AH58KFKPSGK6Y?ref_=assoc_tag_ph_1524218824726&_encoding=UTF8&camp=1789&creative=9325&linkCode=pf4&tag=thisguycodez-20&linkId=9b1ba2118bd76a361053eeb9e25b5cf4",
name:'Save 50% at RegeMoudal'},

{
link:"https://www.amazon.com/promocode/A1UFIWC52N42Z2?ref_=assoc_tag_ph_1524218830414&_encoding=UTF8&camp=1789&creative=9325&linkCode=pf4&tag=thisguycodez-20&linkId=9ddd2064254c1eca9e726d86ac0a3c56",
name:'Save 50% at STOGA'},

{
link:"https://www.amazon.com/promocode/A2QWJ5WMOQ2ETL?ref_=assoc_tag_ph_1524218740154&_encoding=UTF8&camp=1789&creative=9325&linkCode=pf4&tag=thisguycodez-20&linkId=640950a59019657e3e095fc788491979",
name:'Save 50% at N-brand'},

{
link:"https://www.amazon.com/promocode/A2LQ9AH18RF13?ref_=assoc_tag_ph_1524218724173&_encoding=UTF8&camp=1789&creative=9325&linkCode=pf4&tag=thisguycodez-20&linkId=d04fddd1d627ad8aaea77967bf29d8b4",
name:'Save 15% at PICTEK'}
]
}

export const reducer =  (state = initialState, action) =>{
switch(action.type){
case LOADING:
return {
...state,
}

case SUCCESS:
return {
...state,
work:action.payload,
}

case BTN:
return {
...state,
btnL:action.payload,
}

case NAVIGATION:
return {
...state,
compRendered:action.payload,
}

case MODE:
return {
...state,
mode:action.payload,
}

case SHOW:
return {
...state,
show:action.payload,
}

case ERR:
return {
...state,
error:action.payload,
}

default:
return state

}
}