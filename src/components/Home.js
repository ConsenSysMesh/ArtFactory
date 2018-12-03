import React from 'react'

const Home = () => (
  <div>
    <div className="container-fluid">
      <div className="row">
        
        <div className="col-sm-12">
          <div className="jumbotron text-center col-md-8 offset-md-2" style={{backgroundColor: "white"}}>
            <h2 className="display-4">Welcome to ArtFactory!</h2>
            <p className="lead">A media distribution and monetization network for independent artists</p>
            <hr className="my-4" />
            <p>Try it out!</p>
            <form className="lead" onSubmit={this.handleSubmit}>
              <div className="input-group">

                <input type="text" className="form-control" placeholder="artist, film" id="viewArt" style={{border: "1px solid lightgrey"}} />
                <div className="input-group-append">
                  <button className="btn view" type="submit" style={{backgroundColor: "#BFE6BA", borderLeft: "1px solid lightgrey"}} >View Art</button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home