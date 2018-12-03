import React from 'react'



const Upload = () => (
  <div className="col-xs-12">
    

	  <div className="jumbotron text-center col-md-8 offset-md-2" style={{backgroundColor: "white"}}>
      <h2>Upload to ArtFactory</h2>

		  <form id='captureMedia' onSubmit={this.handleSubmit}>
        
        <div className="input-group mb-3">
				  <div className="custom-file">
				    <input type="file" className="custom-file-input" id="upload-input" onChange={(e) => { document.getElementById("upload-label").innerHTML = document.getElementById("upload-input").value } } />
				    <label className="custom-file-label" id="upload-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
				  </div>
				</div>

				<div className="col-xs-12">
			    <button className="btn file_publish" style={{backgroundColor: '#BFE6BA'}} type="button">Submit</button>
			  </div>
        
      </form>


		  
    </div>


  </div>
)

export default Upload


