import React, { FunctionComponent } from 'react';
import { EmptyProps } from '../../types/props'

import { SingleCardComponent } from './card';

import "./index.css"


export const SingleMainComponent: FunctionComponent<EmptyProps> = ({}) =>
<div className="container">
    <div className="row">
            <SingleCardComponent/>
            <SingleCardComponent/>
            <SingleCardComponent/>
    </div>
</div>