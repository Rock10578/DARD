import React, { Component } from "react";

export default class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseAvailable: "",
            child: false,
            young: false,
            adult: false,
            senior: false,
        };
    }
    componentDidMount(){
        fetch("http://localhost:4000/courseAvailable",{
            method: "POST",
            crossDomain: true,
            headers: {
                "content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        }).then((res) => res.json())
        .then((data) => {
            this.setState({ courseAvailable: data.data})
        });
    }
    render(){
        return (
            <div>
                <hr/><br/>
                <h1>Course Available</h1><br/>
                <div className="container border border-dark rounded p-3 mb-2">

                    <div className="d-flex justify-content-evenly pt-2">
                        <button 
                            type="button" 
                            class="btn btn-info btn-rounded"
                            onClick={(e)=>this.setState({child: true, young: true, adult: true, senior: true})}
                        >All</button>
                        <button 
                            type="button" 
                            class="btn btn-info btn-rounded"
                            onClick={(e)=>this.setState({child: true, young: false, adult: false, senior: false})}
                        >Kids</button>
                        <button 
                            type="button" 
                            class="btn btn-info btn-rounded"
                            onClick={(e)=>this.setState({child: false, young: true, adult: false, senior: false})}
                        >Young</button>
                        <button 
                            type="button" 
                            class="btn btn-info btn-rounded"
                            onClick={(e)=>this.setState({child: false, young: false, adult: true, senior: false})}
                        >Adult</button>
                        <button 
                            type="button" 
                            class="btn btn-info btn-rounded"
                            onClick={(e)=>this.setState({child: false, young: false, adult: false, senior: true})}
                        >Senior</button>
                    </div><hr/>

                    {/* Child */}
                    {this.state.child ? <div className="d-flex justify-content-around p-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img id="productImage" src="https://www.raajkart.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/5/05collinshindiaarambha.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Hindi</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img id="productImage" src="https://www.shethbooks.com/wp-content/uploads/2021/07/Jolly-Kids-Learn-To-Draw-Book-1-1.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Maths Book</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img id="productImage" src="https://m.media-amazon.com/images/I/71j-e2CXxeL.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">ABCD for under 5</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img id="productImage" src="https://m.media-amazon.com/images/I/A12eM84qAsL.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div> : null}

                    {/* Young */}
                    {this.state.young ? <div className="d-flex justify-content-around p-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://img.lovepik.com//photo/50043/8952.jpg_860.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://img.lovepik.com//photo/50043/8952.jpg_860.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://img.lovepik.com//photo/50043/8952.jpg_860.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://img.lovepik.com//photo/50043/8952.jpg_860.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div> : null}

                    {/* Adult */}
                    {this.state.adult ? <div className="d-flex justify-content-around p-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://img.lovepik.com//photo/50043/8952.jpg_860.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://img.lovepik.com//photo/50043/8952.jpg_860.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://img.lovepik.com//photo/50043/8952.jpg_860.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://img.lovepik.com//photo/50043/8952.jpg_860.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div> : null}

                    {/* Senior */}
                    {this.state.senior ? <div className="d-flex justify-content-around p-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://www.sundayguardianlive.com/wp-content/uploads/2019/07/old-learning.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Senior COurse</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://img.lovepik.com//photo/50043/8952.jpg_860.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://img.lovepik.com//photo/50043/8952.jpg_860.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="https://img.lovepik.com//photo/50043/8952.jpg_860.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div> : null}


                </div>

                <footer><h4>&copy; Rock</h4></footer>
            </div>
        )
    }
}