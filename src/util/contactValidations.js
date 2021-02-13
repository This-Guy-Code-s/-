export const name_ = (theName) =>{return (/[A-z]/i).test(theName)}
export const email_ = (theEmail) =>{
return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(theEmail)}
export const msg_ = (theMsg) =>{
return (/[A-z]/i).test(theMsg)}