import React, { useEffect, useMemo, useReducer, useSelector, useState } from "react";
import './Profile.css';
import reducer from "../../Reducer/reducer";



const Profile = () => {

    const [state, dispatch] = useReducer(reducer, {})

    let [flag, setFlag] = useState(false);

    useEffect(() => {
             fetch(`https://reqres.in/api/users/${Math.floor((Math.random() * (13 - 1)) + 1)}`)
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: 'RELOAD',
                    id: res.data.id,
                    avatar: res.data.avatar,
                    fname: res.data.first_name,
                    lname: res.data.last_name,
                    email: res.data.email,
                })
            })

    }, [flag])

    return <>
        <div className="container mt-5">

            <div className="row d-flex justify-content-center">

                <div className="col-md-7">

                    <div className="card p-3 py-4">

                        <div className="text-center">
                            <img src={state.avatar} width="100" className="rounded-circle" />
                        </div>

                        <div className="text-center mt-3">
                            <h5 className="mt-2 mb-0">{`${state.fname} ${state.lname}`}</h5>
                            <span>{state.email}</span>

                            <div className="px-4 mt-1">
                                <p className="fonts">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, cumque. Earum qui enim, dolore animi tempora in necessitatibus sint iusto reiciendis fugiat ducimus atque impedit unde ipsum voluptatem id vero!</p>

                            </div>

                            <ul className="social-list">
                                <li><i className="fa fa-facebook"></i></li>
                                <li><i className="fa fa-dribbble"></i></li>
                                <li><i className="fa fa-instagram"></i></li>
                                <li><i className="fa fa-linkedin"></i></li>
                                <li><i className="fa fa-google"></i></li>
                            </ul>

                            <div className="buttons">

                                <button className="btn btn-outline-primary px-4" onClick={() =>  setFlag(!flag)}>Reload</button>

                            </div>


                        </div>




                    </div>

                </div>

            </div>

        </div>
    </>
}

export default Profile;