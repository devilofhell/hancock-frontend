import React, {Component} from "react";

import axios from "axios";


class Upload extends Component {

  state = {
    file: null
  }

  handleFile(e){
    let file = e.target.files;

    this.setState({file: file});

    let pictures = e.target.files;
    console.log(pictures);
    let formdata = new FormData()

    for (let i = 0; i < pictures.length; i++) {
      formdata.append(`images`, pictures[i])
    }

    formdata.append('name', "jsdofj")
    axios({
      url: `http://localhost:8080/upload`,
      method: "POST",
      headers: {
        'content-type': 'multipart/form-data',
        'authorization': `you.rt.oken`
      },
      data: formdata
    }).then((res) =>{
      //handle response...
    },(err => {
      //handle error
    }))
  }

  handleUpload(e){

  }

  render() {
    return (<div>
      <form>
        <h4>Hello Upload</h4>
        <input
          type="file"
          name="file"
          multiple
          onChange={(e) => this.handleFile(e)}
        />
        <button type="button" onClick={(e) => this.handleUpload(e)} >Upload</button>
      </form>
    </div>
    )
  }

}
export default Upload;
