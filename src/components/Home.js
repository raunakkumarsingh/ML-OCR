
import "D:/lnt/lnt/src/components/Home.css";
import React, {useState} from 'react';
import axios from 'axios';
import Result from "./Result";

export default function Home() {

    const data = [
      {
        "sno":1,
        "que":"What is customer id",
        "ans": "QWDR37575753289"
    },
    {
        "sno":1,
        "que":"What is customer name",
        "ans": "Rahul"
    },
    {
        "sno":1,
        "que":"What is Transaction ID",
        "ans": "AMZ37575753289"
    },
    {
        "sno":1,
        "que":"What is BILL DATE",
        "ans": "26/11/2002"
    },
    {
        "sno":1,
        "que":"What is customer id",
        "ans": "QWDR37575753289"
    },
    {
        "sno":1,
        "que":"What is customer id",
        "ans": "QWDR37575753289"
    },
    {
        "sno":1,
        "que":"What is customer id",
        "ans": "QWDR37575753289"
    },
    {
        "sno":1,
        "que":"What is customer id",
        "ans": "QWDR37575753289"
    },
    {
        "sno":1,
        "que":"What is customer id",
        "ans": "QWDR37575753289"
    }
    ];
    
    // const storedBlogs = JSON.parse(localStorage.getItem('links'));
    
    
        const [content,setContent]=useState({})
        const handleClick=(e)=>{
            e.preventDefault();
            data.push(content);
            if(content!=null)
            localStorage.setItem('array',localStorage.getItem('array')+JSON.stringify(content));
                 setContent({content:""});
        }
        const onChange=(e)=>{
            setContent({...content,[e.target.name]:e.target.value});

        }
    
        const [file, setFile] = useState()
    function handleChange(event) {
      setFile(event.target.files[0])
    }
    
    function handleSubmit(event) {
      event.preventDefault()
      const url = 'http://localhost:3000/uploadFile';
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', file.name);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      axios.post(url, formData, config).then((response) => {
        console.log(response.data);
      });
  
    }

  return (
    <main className="content">
        
<div className="container p-0">
{/* <h1 className="h3 mb-3">Messages</h1> */}
<div className="card" style={{height:"44rem"}} >
<div className="row g-0">
<div className="col-12 col-lg-5 col-xl-3 border" style={{height:"44rem"}} >
<div className="px-4 d-none d-md-block">
<div className="d-flex align-items-center">
<div className="flex-grow-1">
<form onSubmit={handleSubmit}>
          <h1>Document</h1>
          <p>Locate the file that you want to scan and make sure that it is in a supported format (e.g., PDF, JPG, PNG, TIFF, etc.).</p>
          <input type="file" onChange={handleChange} /><br/>
          <button className="my-2 btn btn-primary">Upload Image</button>
        </form>
</div>
</div>
</div>


<hr className="d-block d-lg-none mt-1 mb-0"/>
</div>
<div className="col-12 col-lg-7 col-xl-9">
<div className="col-12  scroll">
<div className="py-2 px-4 border-bottom d-none d-lg-block">
<div className="d-flex align-items-center py-1">
<div className="flex-grow-1 pl-3">
<strong>Query</strong>

</div>

</div>
</div>
</div> 
<div className="col-12  scroll">

<div className="position-relative">
<div className="chat-messages p-4">

    {
        data.map((note)=>{
            return  <Result key={note.sno} note={note}/>
        })
    }


{/* </div> */}
</div>
</div>
</div>
<div className="flex-grow-0 py-3 px-4 border-top d-flex" >
<div className="input-group d-flex align-items-end" >
<input type="text" name="content" className="form-control" value={content.content} placeholder="Type your message" onChange={onChange}/>
<button className="btn btn-primary" onClick={handleClick} >Submit</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
  )
}
