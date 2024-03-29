import React, { FunctionComponent } from 'react';
import { EmptyProps } from '../../types/props'

import "./index.css"

export const LoginComponent: FunctionComponent<EmptyProps> = ({}) => 
<div className="container">
    <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
                <div className="card-body">
                    <h2 className="card-title text-center">Sign In</h2>
                    <p className="text-center">제목</p>
                    <form className="form-signin">
                        <div className="form-label-group">
                            <input type="email"  id="inputEmail" className="form-control"/>
                            <label htmlFor="inputEmail">Email address</label>
                        </div>

                        <div className="form-label-group">
                            <input type="password" id="inputPassword" className="form-control"/>
                            <label htmlFor="inputPassword">Password</label>
                        </div>

                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                            <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                        <hr className="my-4"/>
                        </form>
                </div>
            </div>
        </div>
    </div>
</div>
