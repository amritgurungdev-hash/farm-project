import { useState } from "react";
const initialFormData = {
  name: "",
  email: "",
  phone_number: "",
  company: "",
  message: "",
};

export default function Enquiry() {
    const [formData, setFormData]=useState(initialFormData);
    const[submitted, setSubmitted]=useState(false);
        const handleChange = (e) => {
        const { name, value } = e.target;
        setSubmitted(false);

        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
         }));
        };


   const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Enquiry submitted:", formData);
  setFormData(initialFormData);
  setSubmitted(true);

  
};
 
  return (
    
    <section className="font-poppins flex justify-center p-5 sm:px-20 ">
      <div className="w-full max-w-3xl">
        <h2 className="mb-6 text-4xl font-bold">
          General Enquiry
        </h2>
        {
            submitted &&(
                <p role="status" className="text-green-600 font-bold pb-3">Thank you! Your enquiry has been submitted</p>
            )
        }

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name and Email */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="name">Name:</label>
              <input
                className="w-full rounded-md border p-3"
                id="name"
                name="name"
                placeholder="Your Name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="email">Email:</label>
              <input
                className="w-full rounded-md border p-3"
                id="email"
                name="email"
                placeholder="Your Email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Phone and Company */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="phone">Phone Number:</label>
              <input
                className="w-full rounded-md border p-3"
                id="phone"
                name="phone_number"
                placeholder="Your Phone Number"
                type="tel"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="company">Company:</label>
              <input
                className="w-full rounded-md border p-3"
                id="company"
                name="company"
                placeholder="Your Company"
                type="text"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="comment">Comment or Message:</label>
            <textarea
              className="w-full rounded-md border p-3 "
              id="comment"
              name="message"
              placeholder="Write your message here..."
              rows={5}
              required
             value={formData.message}
                onChange={handleChange}
            />
          </div>

          <button
            className="w-fit rounded-md bg-green-600 px-6 py-3
                       font-semibold text-white hover:bg-green-700"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

    </section>
  );
}





