import React, { Component } from "react";
import course from "../courses.json";

export class courses extends Component {
    constructor(props){
        super(props);
        this.state = {
            child: false,
            young: false,
            adult: false,
            senior: false,
        }
    }
  render() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='container col'>
                    <h1 className='mt-4'>Courses</h1><hr/>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {course.map((e) => {
                            const {id, image, title, desc, url} = e;
                            return(
                                <div class="col" key={id}>
                                    <div class="card h-100">
                                        <img id="productImage" src={image} class="card-img-top" alt="Hollywood Sign on The Hill"/>
                                        <div class="card-body">
                                            <h3 class="card-title">{title}</h3>
                                            <p class="card-text">{desc}</p>
                                            <a href={url} class="btn btn-primary">Checkout Course</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <footer className='mt-2'><h1><b>&copy; Team DARD</b></h1></footer>
                </div>
            </div>
        </div>
    )
  }
}

export default courses
