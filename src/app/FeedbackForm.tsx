// src/app/FeedbackForm.tsx
"use client";
import { FormEvent, useState } from 'react';
import './star.css'; // Make sure to create this file

interface FeedbackData {
  rating: number;
  clientName: string;
  emailAddress: string;
  comment: string;
}

const FeedbackForm = () => {
  const [feedbackData, setFeedbackData] = useState<FeedbackData>({
    rating: 0,
    clientName: '',
    emailAddress: '',
    comment: ''
  });

  const redirectToPage = () => {
    window.location.href = "https://www.google.com/search?sca_esv=ea7b27f3c7f5bbf6&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EyK5qbfm6waJWN25G7fUCxDJbl-qAGI4S_VnpmZc7vA1R2zrLl3VGz1OLzzB_qxVOONmuJIvBMAsWv65r7PFv86lG_izaaruMj8nXtx7x7Jkn5Wq5g%3D%3D&q=Spa+Laguna+Nivaria+Reviews&sa=X&ved=2ahUKEwi0ptaUq-eNAxUUSjABHa-8GbMQ0bkNegQIKhAE&biw=1511&bih=814&dpr=2#lrd=0xc41cdb84c30f1bf:0xd6a550bc1858145e,3,,,,"
  };

  const showCommentSection = () => {
    const commentSection = document.querySelector('.comment-section');
    if (commentSection) {
      commentSection.classList.remove('hidden');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', feedbackData);
  };

  return (
    <div className="text-center text-[rgb(46,75,96)]">
      <div className="content-section px-[40px] py-[150px] lg:px-[100px] lg:py-[200px] xl:p-[100px]">
        <h1 className="lg:text-4xl text-4xl text-slate-800 mb-4 font-open-sans">
          Gracias por visitarnos, valoramos tu opinión.
        </h1>
        <div className="max-w-[400px] mx-auto">
          <form onSubmit={handleSubmit} id="feedbackForm">
            <div className="rating">
              {[5, 4, 3, 2, 1].map((value) => (
                <div key={value}>
                  <input
                    type="radio"
                    id={`star${value}`}
                    name="rating"
                    value={value}
                    onChange={() => value === 5 ? redirectToPage() : showCommentSection()}
                  />
                  <label htmlFor={`star${value}`}>★</label>
                </div>
              ))}
            </div>
            
            <div className="comment-section mb-5 hidden">
              <div className="flex flex-col pb-10">
                <input
                  id="client_name"
                  value={feedbackData.clientName}
                  onChange={(e) => setFeedbackData({...feedbackData, clientName: e.target.value})}
                  placeholder="Nombre"
                  className="border border-[#ccc] p-[5px] mb-[10px]"
                />
                <input
                  id="email_address"
                  value={feedbackData.emailAddress}
                  onChange={(e) => setFeedbackData({...feedbackData, emailAddress: e.target.value})}
                  placeholder="Correo electrónico"
                  className="border border-[#ccc] p-[5px] mb-[10px]"
                />
              </div>
              <textarea
                id="comment"
                value={feedbackData.comment}
                onChange={(e) => setFeedbackData({...feedbackData, comment: e.target.value})}
                placeholder="Por favor, cuéntanos cómo fue tu experiencia"
                className="w-full h-[100px] resize-none border border-[#ccc] p-2"
              />
              <button 
                type="submit" 
                className="text-[#C2A471] font-bold px-[30px] py-[5px] pb-[6px] border-2 border-[#C2A471] cursor-pointer mt-4"
              >
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;