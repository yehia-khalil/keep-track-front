import { useEffect, useState } from 'react';
import { Redirect, useRouteMatch, Link, Switch, Route } from 'react-router-dom';
import Workouts from './workouts';

function Home() {
    let match = useRouteMatch();

    return (
        !localStorage.getItem("user") ? <Redirect to='/login'></Redirect> : <div>
            <ul>
                <li>
                    <Link to={`${match.url}/workouts`}>Workouts</Link>
                </li>
                <li>
                    <Link to={`${match.url}/exercises`}>Exercises</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/workouts`}>
                    <Workouts />
                </Route>
                <Route path={`${match.path}/exercises`}>
                    <h1>EXERCISe</h1>
                </Route>
            </Switch>
        </div>



    )
}

export default Home;
