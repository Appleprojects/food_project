import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { Camera, Upload, RefreshCw, Send } from "lucide-react";

const AIClassifier = () => {
  const [mode, setMode] = useState<"camera" | "upload">("camera");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<{ predicted_class: string; confidence: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const webcamRef = useRef<Webcam>(null);

  // Capture image from webcam
  const captureImage = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const blob = await (await fetch(imageSrc)).blob();
        const file = new File([blob], "captured_image.jpg", { type: "image/jpeg" });
        setImageFile(file); // Store image for later submission
      }
    }
  };

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  // Submit the image for prediction
  const handleSubmit = async () => {
    if (!imageFile) {
      alert("Please capture or upload an image first.");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const response = await fetch("http://127.0.0.1:8000/predict/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Server Error");

      const data = await response.json();
      console.log("Prediction Response:", data);

      if (data.error) {
        alert(data.error);
        setPrediction(null);
      } else {
        setPrediction(data); // Update prediction state
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error processing image. Please try again.");
      setPrediction(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Food Classifier</h1>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setMode("camera")}
            className={`flex items-center px-4 py-2 rounded-lg ${
              mode === "camera" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            <Camera className="h-5 w-5 mr-2" />
            Camera
          </button>
          <button
            onClick={() => setMode("upload")}
            className={`flex items-center px-4 py-2 rounded-lg ${
              mode === "upload" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            <Upload className="h-5 w-5 mr-2" />
            Upload
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        {mode === "camera" ? (
          <div className="space-y-4">
            <Webcam ref={webcamRef} screenshotFormat="image/jpeg" className="w-full rounded-lg" />
            <button
              onClick={captureImage}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
            >
              Capture Image
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <label className="block w-full">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-indigo-500">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">JPG, PNG up to 10MB</p>
              </div>
              <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
            </label>
          </div>
        )}

        {imageFile && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-gray-700 font-medium">Image Selected: {imageFile.name}</p>
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={!imageFile || isLoading}
          className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 flex items-center justify-center"
        >
          {isLoading ? (
            <RefreshCw className="h-5 w-5 animate-spin" />
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              Submit & Get Results
            </>
          )}
        </button>

        {prediction && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Results</h3>
            <div className="space-y-2">
              <p className="text-gray-700">
                Predicted Food: <span className="font-semibold">{prediction.predicted_class}</span>
              </p>
              <p className="text-gray-700">
                Confidence: <span className="font-semibold">{prediction.confidence}%</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIClassifier;
