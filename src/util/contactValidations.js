export const name_ = (theName) =>{if(theName.match(/[A-z]/i)){return true}else{return false}}
export const email_ = (theEmail) =>{
if(theEmail.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
return true}else{return false}}
export const msg_ = (theMsg) =>{
if(theMsg.match(/[A-z]/i)){return true}else{return false}}