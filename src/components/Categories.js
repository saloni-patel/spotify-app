import React from 'react';
import '../App.css';
const Categories = () => {
        const dataCategories = [{
            id: 1,
            name: 'Category 1'
},
{
    id: 2,
    name: 'Category 1'
},
{
    id: 3,
    name: 'Category 1'
},
{
    id: 4,
    name: 'Category 1'
}
]

    return (
        <div>
        {dataCategories.map(Categories =>{
            <div>
                            <h4>The Top Podcasts Of 2021</h4>
                <span className="subText">SEE All</span>
                <p className="subText">Our favorite new shows of the year</p>
                

                <div class="form-group row">
                    <div class="col-2 col-card">
                        <div className="cardWrap">
                            <div className="card">
                                <div className="cardImage">

                                    <img src="https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&
                                    auto=format&fit=crop&w=1170&q=80"
                                        alt="peace"
                                    />

                                </div>

                                <div className="cardContent">
                                <h6>strength</h6>
                                <p className="subText">“I Don’t Care,” Ed Sheeran feat. Justin Bieber</p>


                                </div>
                            </div>

                        </div>
                    </div>




                    <div class="col-2 col-card">
                        <div className="cardWrap">
                            <div className="card">
                                <div className="cardImage">

                                    <img src="https://images.unsplash.com/photo-1633887995204-96fcaf6fa424?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                        alt="peace"
                                    />

                                </div>

                                <div className="cardContent">
                                <h6>peace</h6>
                                <p className="subText">Spotify Studio</p>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-2 col-card">
                        <div className="cardWrap">
                            <div className="card">
                                <div className="cardImage">

                                    <img src="https://images.unsplash.com/photo-1619178033343-235a61bfc60d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                        alt="peace"
                                    />

                                </div>

                                <div className="cardContent">
                                  <h6>Top bollywood</h6>

                                </div>
                            </div>

                        </div>
                    </div>






                </div>
          

          <br />
          <br />
                <h4>Spotify Original & Exclusive Shows</h4>
               
                <div class="form-group row">
                    <div class="col-2 col-card">
                        <div className="cardWrap">
                            <div className="card">
                                <div className="cardImage">

                                    <img src="https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&
                                    auto=format&fit=crop&w=1170&q=80"
                                        alt="peace"
                                    />

                                </div>

                                <div className="cardContent">
                                <h6>strength</h6>


                                </div>
                            </div>

                        </div>
                    </div>




                    <div class="col-2 col-card">
                        <div className="cardWrap">
                            <div className="card">
                                <div className="cardImage">

                                    <img src="https://images.unsplash.com/photo-1633887995204-96fcaf6fa424?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                        alt="peace"
                                    />

                                </div>

                                <div className="cardContent">
                                <h6>peace</h6>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-2 col-card">
                        <div className="cardWrap">
                            <div className="card">
                                <div className="cardImage">

                                    <img src="https://images.unsplash.com/photo-1619178033343-235a61bfc60d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                        alt="peace"
                                    />

                                </div>

                                <div className="cardContent">
                                  <h6>Top bollywood</h6>

                                </div>
                            </div>

                        </div>
                    </div>
                 </div>
                    </div>
        })};
                   
        </div>
        
    )
}

export default Categories
