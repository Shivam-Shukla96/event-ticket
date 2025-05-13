import React from "react";
import Image from "next/image";
interface FormData {
  name: string;
  email: string;
  github: string;
  avatarUrl: string;
}

const formFields = [
  { name: "name", type: "text", placeholder: "Full Name" },
  { name: "email", type: "email", placeholder: "example@email.com" },
  { name: "github", type: "text", placeholder: "@yourusername" },
];
interface ApplicationFormProps {
  setSubmitted: (submitted: boolean) => void;
  setFormData: (data: any) => void;
  formData: FormData;
}

export default function ApplicationForm({
  setSubmitted,
  setFormData,
  formData,
}: ApplicationFormProps) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const avatarUrl = URL.createObjectURL(file);
      setFormData((prev: typeof formData) => ({ ...prev, avatarUrl }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4  ">
      {/* Header */}
      <div className="text-center flex flex-col  items-center mb-6">
        <div className="animate-bounce bg-transparent ">
          <Image
            width={40}
            height={40}
            src="/logo.svg"
            alt="Coding Conf Logo"
            className="w-10 rounded-md  p-1 mb-2"
          />
        </div>
        <h1 className="text-3xl font-bold leading-tight  animate-pulse">
          Your Journey to Coding Conf <br />
          <span className="text-2xl text-white">2025 Starts Here!</span>
        </h1>
        <p className="text-sm  text-gray-300 mt-2">
          Secure your spot at next year&apos;s biggest coding conference.
        </p>
      </div>

      {/* Avatar Upload */}
      <div className="space-y-2">
        <label className="text-sm font-medium block">Upload Avatar</label>
        <div className="border border-white/20 bg-white/5 backdrop-blur-md p-4 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer transition hover:bg-white/10">
          <label
            htmlFor="avatar-upload"
            className="cursor-pointer  flex flex-col items-center"
          >
            {formData.avatarUrl ? (
              <Image
                width={40}
                height={40}
                src={formData.avatarUrl}
                alt="Preview"
                className="w-16 h-16 rounded-full object-cover mb-2"
              />
            ) : (
              <>
                <Image
                  width={40}
                  height={40}
                  src="/upload-icon.svg"
                  alt="Upload"
                  className="w-12 h-12 mb-2 hover:scale-120 transition-transform"
                />
                <p className="text-sm text-white/40">
                  Drag and drop or click to upload
                </p>
              </>
            )}
          </label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            required
          />
        </div>
        <p className="text-xs text-gray-400 text-center">
          Upload your photo (JPG or PNG, max size: 500KB).
        </p>
      </div>

      {/* Text Inputs */}
      {formFields.map((field) => (
        <div key={field.name}>
          <label className="text-sm font-medium block mb-1 capitalize">
            {field.name}
          </label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name as keyof typeof formData]}
            onChange={handleChange}
            placeholder={field.placeholder}
            className="w-full p-2 bg-white/5 border border-white/20 backdrop-blur-md rounded placeholder-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-white/80 hover:bg-white/10"
            required
          />
        </div>
      ))}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full anmate-pulse bg-[#ff6b6b] py-2 cursor-pointer inconsolata rounded text-gray-900 font-bold hover:opacity-90 transition"
      >
        Generate My Ticket
      </button>
    </form>
  );
}
