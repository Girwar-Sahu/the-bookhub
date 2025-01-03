import React, { useState, useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useBookContext } from "@/utils/BookContext";
import { app } from "@/firebase.config";
import {
  ref,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { Progress } from "../ui/progress";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";

const AddBook = () => {
  const { addBook, loading, error } = useBookContext();
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedDate: "",
    description: "",
  });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    e.preventDefault();
    try {
      if (!image) {
        setUploadError("Please select a book image");
        return;
      }
      setUploadError(null);
      const storage = getStorage(app);
      const filename = new Date().getTime() + image.name;
      const storageRef = ref(storage, `bookhub/${filename}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProgress(progress);
        },
        (error) => {
          setUploadError(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData({ ...formData, imageURL: downloadURL });
            setUploadProgress(0);
            setUploadError(null);
          });
        }
      );
    } catch (error) {
      setUploadError(error.message);
      setUploadProgress(0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook(formData);
    setFormData({
      title: "",
      author: "",
      publishedDate: "",
      description: "",
    });
    setImage(null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold dark:text-white text-gray-900 text-center md:text-left mt-6 mb-6">
        Add Book
      </h2>

      <div className="w-full md:w-1/2 mx-auto md:mx-0 bg-white border dark:border-gray-700 border-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <Label
              className="dark:text-gray-300 text-gray-800 font-medium"
              htmlFor="image"
            >
              Book Image
            </Label>
            <div className="flex gap-2">
              <Input
                className="dark:bg-gray-900 dark:text-gray-300 text-gray-800 file:text-gray-800 dark:file:text-gray-300 cursor-pointer"
                type="file"
                id="image"
                accept="image/*"
                placeholder="Upload Book Image"
                onChange={(e) => setImage(e.target.files[0])}
                ref={fileInputRef}
              />
              <Button
                className="dark:text-white bg-green-500 dark:bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 py-3 px-6 rounded-lg font-medium transition-all"
                onClick={handleImageUpload}
                disabled={uploadProgress > 0}
              >
                {uploadProgress > 0 ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Upload image"
                )}
              </Button>
            </div>
          </div>

          {uploadError && (
            <Alert className="mb-6 dark:bg-gray-800 dark:border-gray-700 text-red-600 dark:text-red-400">
              <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{uploadError}</AlertDescription>
            </Alert>
          )}

          {uploadProgress > 0 && (
            <div className="mb-6">
              <Progress
                value={uploadProgress}
                className="w-full dark:bg-gray-900"
              />
            </div>
          )}

          {formData.imageURL && (
            <div className="mb-6 w-1/2 mx-auto">
              <img
                src={formData.imageURL}
                alt="upload"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          <div className="mb-6">
            <Label
              className="dark:text-gray-300 text-gray-800 font-medium"
              htmlFor="title"
            >
              Title
            </Label>
            <Input
              className="dark:bg-gray-900 dark:text-gray-300 text-gray-800"
              type="text"
              id="title"
              name="title"
              required={true}
              placeholder="Enter book title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6">
            <Label
              className="dark:text-gray-300 text-gray-800 font-medium"
              htmlFor="author"
            >
              Author
            </Label>
            <Input
              className="dark:bg-gray-900 dark:text-gray-300 text-gray-800"
              type="text"
              id="author"
              name="author"
              required={true}
              placeholder="Enter author name"
              value={formData.author}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6">
            <Label
              className="dark:text-gray-300 text-gray-800 font-medium"
              htmlFor="publishedDate"
            >
              Published Date
            </Label>
            <Input
              className="dark:bg-gray-900 cursor-pointer dark:text-gray-300 text-gray-800"
              type="date"
              id="publishedDate"
              name="publishedDate"
              placeholder="Choose year"
              required={true}
              value={formData.publishedDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6">
            <Label
              className="dark:text-gray-300 text-gray-800 font-medium"
              htmlFor="description"
            >
              Description
            </Label>
            <Textarea
              className="dark:bg-gray-900 h-32 dark:text-gray-300 text-gray-800"
              id="description"
              name="description"
              required={true}
              placeholder="Enter a brief description about the book"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          {error && (
            <div className="mb-6">
              <Alert className="mb-6 dark:bg-gray-800 dark:border-gray-700 text-red-600 dark:text-red-400">
                <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </div>
          )}

          <div className="flex justify-end">
            <Button
              className="w-full dark:text-white bg-green-500 dark:bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 py-3 px-6 rounded-lg font-medium transition-all"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Add Book"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
