"use client";
import { useState } from "react";
import TicketComponent from "../Component/TicketComponent";
import ApplicationForm from "@/Component/ApplicationForm";



export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    avatarUrl: "",
  });
  

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center  bg-[url('/bg-binary-image.jpg')] bg-cover bg-center text-white overflow-hidden">
      {/* Foreground Content */}
      <div className="w-full max-w-md shadow-lg shadow-blue-900/50 rounded-lg bg-black/50 backdrop-blur-sm h-fit p-5 space-y-8  mx-auto z-10">
        {!submitted ? (
          <ApplicationForm
            formData={formData}
            setFormData={setFormData}
            setSubmitted={setSubmitted}
           />
        ) : (
          <TicketComponent data={formData} />
        )}
      </div>
    </div>
  );
}
