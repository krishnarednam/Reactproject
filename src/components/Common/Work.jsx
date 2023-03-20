import React from 'react';
import { Link } from 'react-router-dom';
import '../FeaturedWork/FeaturedWork.css';

export default function Work(props) {

    return (
        <>
            <div class="col-md-3">
                <Link to="/works">
                <img  src={props.imgsrc} class="img-fluid w-100 rounded-start" alt="..." />
                </Link>
            </div>
            <div class="col-md-9">
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text"><span id='date'>{props.date}</span><span id='category'>{props.category}</span></p>
                    <p class="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
            <hr/>
        </>
    );
}
