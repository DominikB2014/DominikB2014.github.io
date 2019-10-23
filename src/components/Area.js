import React from 'react';
import './area.css'
import Star from "./Submission/Star";
import MapContainer from "./MapContainer";


const Home = () => {

    return (
        <div className="area-container">
            <div className="description">
                <h1>Niagara Region</h1>
                <li className="known-for">
                    <span>Tourist Region</span>
                    <span>Waterfall</span>
                    <span>Nature</span>
                </li>
                <p>Tourist region in Canada Ontario most known for Niagara Falls, the most powerful falls in North
                    America</p>
            </div>

            <div className="obj-overview-content">
                <div id="remove-style" className="obj-pictures">
                    <div className="overview-main-image"><h1>Photo (22)</h1></div>
                    <div className="side-image overview-side-image1"/>
                    <div className="side-image overview-side-image2"/>
                    <div className="side-image overview-side-image3"/>
                </div>
                <div className="obj-review-overview">
                    <h1>Review Overview</h1>
                    <div className="obj-overview-rating">
            <span>Rating
            <Star value={5}/>
            </span>
                        <a href="#reviews" className="obj-overview-rating-allreviews"> 39 Reviews</a>
                    </div>
                    <div className="obj-overview-list">
                        <li>
                            <div className="active-review left-style five-overview ">5 Star Reviews</div>
                            <div className="right-style five-overview-bar">95%</div>
                        </li>
                        <li>
                            <div className="left-style four-overview">4 Star Reviews</div>
                            <div className="right-style four-overview-bar">5%</div>
                        </li>
                        <li>
                            <div className="left-style three-overview">3 Star Reviews</div>
                            <div className="right-style three-overview-bar">0%</div>
                        </li>
                        <li>
                            <div className="left-style two-overview">2 Star Reviews</div>
                            <div className="right-style two-overview-bar">0%</div>
                        </li>
                        <li>
                            <div className="left-style one-overview">1 Star Reviews</div>
                            <div className="right-style one-overview-bar">0%</div>
                        </li>
                    </div>
                    <div className="obj-overview-reviews">
                        <div className="overview-review-list">
                            <li><h3>Username1</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex,
                                soluta!</p></li>
                            <li><h3>Username2</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                                consectetur voluptatum beatae sint voluptate illo, ipsa quis labore assumenda excepturi
                                dignissimos adipisci. Dolorum esse ab ipsam molestiae sequi vero voluptas.</p></li>
                            <li><h3>Username3</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                                eligendi dolore dicta at quasi nisi.</p></li>
                            <li><h3>Username4</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
                                odio eligendi consequatur perspiciatis earum officia modi dolorum illum voluptatem
                                sit!</p></li>
                        </div>
                    </div>
                </div>
                <div className="obj-travel-overview">
                    <div className="travel-info">
                        <h2>Travel Overview</h2>
                        <div>
                            <h3><i className="fa fa-globe" aria-hidden="true"/> Location: <br/> Canada, Ontario</h3>
                            <h3><i className="fas fa-map"/> Area: <br/> Niagara</h3>
                            <h3><i className="fa fa-map-marker" aria-hidden="true"/> Latitute,
                                Longitude: <br/> 43.0582 N, 79.2902 W</h3>
                        </div>
                    </div>
                    <div className="overview-map">
                        <MapContainer center={{ lat: 43.0896, lng: -79.0849}}/>
                    </div>
                </div>
                <div className="obj-location-overview">
                    <h2> Location Overview</h2>
                    <p>Niagara is a region located in south Ontario, Canada, between Lake Ontario and Lake Erie. It is
                        an 'area of wonder' with a breathtaking waterfall, nature trails, events and festivities and
                        lush vineyards</p>
                    <h3><i className="fas fa-desktop"/> https://niagarafalls.ca/</h3>
                    <h3><i className="fas fa-clock"/> Closes In: 5H</h3>
                    <h3><i className="fas fa-clock"/> People typically spend: 3H here</h3>
                </div>
            </div>

            <div className="obj-reviews">
                <div className="submit-review-form">
                    <div className="submit-review-border">
                        <h1>Submit Your Own Review!</h1>
                        <form className="review-form" action="">
                            <div className="review-form-item">
                                <label>Rating</label>
                                <Star value={5}/>
                            </div>
                            <div className="review-form-item">
                                <label htmlFor="review-title">Title</label>
                                <input type="text" id="review-title" name="Title" placeholder=""/>
                            </div>
                            <div className="review-form-item">
                                <label htmlFor="review-description">Description</label>
                                <textarea id="review-description" name="message" rows="100" cols="100"/>
                            </div>
                            <div className="review-form-item">
                                <input type="submit" value="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="reviews" className="obj-review">
                    <div className="obj-review-list">
                        <li>
                            <span>Username1</span>
                            <Star value={5}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, pariatur?</p>
                        </li>
                        <li>
                            <span>Username2</span>
                            <Star value={5}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis, ipsa culpa
                                reprehenderit animi voluptatibus.</p>
                        </li>
                        <li>
                            <span>Username3</span>
                            <Star value={5}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi neque accusamus
                                aspernatur optio blanditiis dicta tempore excepturi quibusdam qui incidunt!</p>
                        </li>
                        <li>
                            <span>Username4</span>
                            <Star value={5}/>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quidem sed
                                pariatur!</p>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;