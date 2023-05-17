import React, { useState } from 'react';
import { HiCloudUpload } from 'react-icons/hi';
import { GrGoogleDrive, GrDropbox, GrOnedrive } from 'react-icons/gr';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setSelectedFile(e.dataTransfer.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log(selectedFile);
  };

  const handleUploadDrive = () => {
    // Handle Google Drive upload logic here
    console.log('Upload from Google Drive');
  };

  const handleUploadDropbox = () => {
    // Handle Dropbox upload logic here
    console.log('Upload from Dropbox');
  };

  const handleUploadOneDrive = () => {
    // Handle OneDrive upload logic here
    console.log('Upload from OneDrive');
  };

  return (
    <>
    <div className="flex flex-col items-center  bg-gray-100">


    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="/assets/fileUpload.svg"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
     
    <h1 className="text-3xl font-bold mb-2">File Upload</h1>
      <div className="h-1 mb-8 w-20 bg-green-500 rounded mr-auto"></div>
      <div className="w-full max-w-sm p-4 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center ">
        <div className="w-full">
          <label htmlFor="fileInput" className="relative">
            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={handleFileSelect}
            />
            <div
              className="w-full h-24 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer "
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <HiCloudUpload className="text-gray-100 text-4xl" />
            </div>
            <span className="text-sm text-gray-100 mt-2">Select or drag and drop a file</span>
          </label>

          {/* <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={handleUpload}
            disabled={!selectedFile}
          >
            Direct Upload
          </button> */}
          <div className="justify-between flex border-y-2 w-full p-3 cursor-pointer bg-gray-500 mt-6 text-gray-100">
            <span className='flex flex-col justify-center font-semibold mr-32'>
         One Drive</span>
        <img className='w-8' src="/assets/icons/one-drive.png" alt="" />
          </div>
          <div className="justify-between flex border-y-2 w-full p-3 cursor-pointer bg-gray-500">
            <span className='flex flex-col justify-center font-semibold text-gray-100'>
        Google Drive</span>
        <img className='w-8' src="/assets/icons/google-drive.png" alt="" />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


     
      
    </div>
  
    </>
  );
};

export default FileUpload;
