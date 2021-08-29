import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'


export default function Workouts({ getCookie }) {

    let [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/workouts', {
            headers: {
                'Authorization': `Bearer ${getCookie('token')}`,
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            setWorkouts(response.data.data)
        })
    }, [])

    return (
        workouts?.map(workout => {
            return (
                <div>
                    <p><strong>Focused Muscle Groups:</strong> {workout.['muscle groups'].map(mg=> `${mg} `)}</p>
                    <p><strong>Date</strong>: {workout.date}</p>
                    <p><strong>Exercises</strong></p>
                    {workout.exercises.map(exercise => {
                        return (
                            <div>
                                <p><strong>Name</strong>: {exercise.exercise} ,</p>
                                <p><strong>Sets</strong> : {exercise.sets} ,</p>
                                <p><strong>Reps Per Set</strong> : {exercise.repititions} ,</p>
                                <p><strong>Rest Period</strong>: {exercise['rest period']} sec ,</p>
                                <p><strong>Weights Used</strong>: {exercise.weight} Kg.</p>
                                <hr></hr>

                            </div>
                        )
                    })}

                    <hr></hr>
                    <hr></hr>
                </div>
            )
        }) || <h1>loading...</h1>

    )
}
