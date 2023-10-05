import React, { useState } from 'react';
import axios from 'axios';
import TransitionEffect from './TransitionEffect';

export default function Contact({ isLightMode }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/api/submitForm', formData);
          console.log(response.data);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };

    return (
        <div className=''>
            <TransitionEffect/>
        <form onSubmit={handleSubmit}
            className={isLightMode ? " mt-32 w-fit max-w-lg md:w-full text-orange-50 mx-auto border-2 bg-sky-950 shadow-sky-950 shadow-2xl rounded-xl p-6"
                : "w-fit mt-32 max-w-lg md:w-full mx-auto border shadow-orange-50  shadow-lg rounded-xl p-6"}>
            <h3 className='text-center'>Contact</h3>
            <div className="mb-4">
                <label
                    htmlFor="name"
                    className={isLightMode ? 'block text-orange-50 font-medium mb-1' : 'block text-white font-medium mb-1'}
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={isLightMode ? "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        : "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"}
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="email"
                    className={isLightMode ? 'block text-orange-50 font-medium mb-1' : 'block text-white font-medium mb-1'}
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={isLightMode ? "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        : "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className={isLightMode ? 'block text-orange-50 font-medium mb-1' : 'block text-white font-medium mb-1'}>
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={isLightMode ? "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        : "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"}
                    rows="4"
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className={`bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isLightMode ? '' : 'text-white'
                    }`}
            >
                Submit
            </button>
        </form>
        </div>
    );
}
