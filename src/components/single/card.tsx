import React, { FunctionComponent } from 'react';
import { EmptyProps } from '../../types/props'


export const SingleCardComponent: FunctionComponent<EmptyProps> = ({}) =>
<div className="card-box"> 
    <div className="textSection">
        <div className="_title">
            목표 제목임 아무튼 제목
        </div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed deiusmod tempor incididunt ut labore et.Lorem ipsum  adipisicing....
        </p>
        <div className="tooltipSection">
            <div className="_tooltip">70%</div>
        <div className="progress">
            <div className="determinate" /*style={innerWidth: "70%"}*/>
        </div>
    </div>
    <div className="progressBottomTxt">
        <div className="_left">
            시작 : <span>2021-01-08</span>
        </div>
        <div className="_right">
            달성 : <span>2021-01-10</span>
        </div>
        </div>
            <button className="btnDonate">자세히 보기</button>
        </div>
    </div>
</div>