import React from 'react'

const Cards = (props) => {
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl inline-block">
            <figure className="px-10 pt-10">
                <div className="avatar">
                    <div className="w-48 mask mask-squircle">
                        <img src={props.photo} />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title m-5">{props.data["nama"]}</h2>
                <p>{props.data["role"]}</p>
                <div className="card-actions">
                <button className="btn btn-primary">Contact me</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards