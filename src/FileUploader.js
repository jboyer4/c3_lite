import React, {useState} from 'react';
import axios from "axios";

//https://www.pluralsight.com/guides/uploading-files-with-reactjs
//https://reactgo.com/react-post-request-axios/#:~:text=How%20to%20Make%20a%20Post%20request%20in%20React,imported%20axios%20object%20from%20the%20axios%20library.%20
//https://masteringjs.io/tutorials/axios/form-data

const FormData = require('form-data');
export default function CallFileUploader(){ 
    const [selectedFile, setSelectedFile] = useState();
	const [isFileSelected, setIsFileSelected] = useState(false);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFileSelected(true);
    }
    const  handleSubmission = () => {
        const csvContent = new FormData();
        csvContent.append('call_file', selectedFile);
        axios.post("https://8b3f52ef-6c19-40ab-8c35-74485711f436.mock.pstmn.io/upload", csvContent, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
        //Clear uploaded file from form
        setSelectedFile();
        setIsFileSelected(false);
    }
    return(
        <div>
           {isFileSelected && <button onClick={handleSubmission}>Upload</button>}
           <input type="file" name="userCallFile" onChange={changeHandler}/>
        </div>
    );
}