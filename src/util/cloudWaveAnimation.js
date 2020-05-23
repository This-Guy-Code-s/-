import styled from 'styled-components'





export const Div = styled.div`
flex:1;
-webkit-width:100%;
-webkit-height:30%;
width:100%;
height:30%;
opacity:70%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
z-index:0;

.waveWrapperInner {
position: absolute;
-webkit-width: 100%;
-webkit-height: 10%;
width: 100%;
height: 15%;
bottom: -1px;
z-index:0;
}
.wave {
flex:1;
-webkit-width: 200%;
-webkit-height: 100%;
width: 200%;
height: 100%;
background-repeat: repeat no-repeat;
-webkit-background-position: 0 bottom;
background-position: 0 bottom;
transform-origin: center bottom;
z-index:-1;
}

.waveTop {
-webkit-background-size: 25% 100px;
background-size: 25% 100px;
animation: move-wave 3s;
-webkit-animation: move-wave 3s;
-webkit-animation-delay: 1s;
animation-delay: 1s;
}

.waveMiddle {
-webkit-background-size: 25% 120px;
background-size: 25% 120px;
-webkit-animation: move_wave 10s linear infinite;
animation: move_wave 10s linear infinite;
}

.waveBottom {
-webkit-background-size: 25% 100px;
background-size: 25% 100px;
-webkit-animation: move_wave 15s linear infinite;
animation: move_wave 15s linear infinite;

}




@-webkit-keyframes move_wave {
0% {
transform: translateX(0) translateZ(0) scaleY(1);
-webkit-transform: translateX(0) translateZ(0) scaleY(1)
}
50% {
transform: translateX(-25%) translateZ(0) scaleY(0.55);
-webkit-transform: translateX(-25%) translateZ(0) scaleY(0.55)
}
100% {
transform: translateX(-50%) translateZ(0) scaleY(1);
-webkit-transform: translateX(-50%) translateZ(0) scaleY(1)
}
}

@keyframes move_wave {
0% {
transform: translateX(0) translateZ(0) scaleY(1);
-webkit-transform: translateX(0) translateZ(0) scaleY(1)
}
50% {
transform: translateX(-25%) translateZ(0) scaleY(0.55);
-webkit-transform: translateX(-25%) translateZ(0) scaleY(0.55)
}
100% {
transform: translateX(-50%) translateZ(0) scaleY(1);
-webkit-transform: translateX(-50%) translateZ(0) scaleY(1)
}
}




/*mobile standing up*/
@media (max-width:500px){
.waveWrapperInner {-webkit-width: 150%;-webkit-height: 20%;width: 150%;height: 25%;}


.waveWrapper {-webkit-height:40%;height:40%;}
}



/*mobile tilting to the side*/
@media (max-width:900px) and (max-height:500px) and (min-width:500px){
.waveWrapperInner {-webkit-height: 40%;height: 40%;}
.waveWrapper {-webkit-height:70%;height:70%;}
}


/*pad standing up*/
@media screen and (max-width:1380px) and (max-height:1380px)
and (min-width:700px) and (min-height:1000px){
.waveWrapperInner {-webkit-height: 20%;height: 20%;}
}

/*pad tilting to the side*/
@media screen and (max-width:1380px) and (max-height:1200px)
and (min-width:1000px) and (min-height:700px){
.waveWrapperInner {height: 15%;}
}


@media(max-width:500px) and (max-height:450px) and (min-height:100px){
display:none;
}

@media(min-width:1000px) and (max-height:700px) and (min-height:100px){
display:none;
}


`



