// src/app/FeedbackForm.tsx
"use client";
import { FormEvent, useState } from 'react';

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
    // Implement your redirect logic here
  };

  const showCommentSection = () => {
    // Implement your comment section logic here
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Implement your submit logic here
  };

  return (
    <div className="text-center text-[rgb(46,75,96)]">
      <div className="content-section px-[40px] py-[150px] lg:px-[100px] lg:py-[200px] xl:p-[100px]">
        <h1 className="lg:text-4xl text-4xl text-slate-800 mb-4 font-open-sans">
          Gracias por visitarnos, valoramos tu opinión.
        </h1>
        <div className="max-w-[400px] mx-auto"> {/* feedback-form */}
          <form onSubmit={handleSubmit} id="feedbackForm">
            <div className="flex flex-row-reverse justify-center py-[50px]"> {/* rating */}
              {[5, 4, 3, 2, 1].map((value) => (
                <div key={value} className="inline group">
                  <input
                    type="radio"
                    id={`star${value}`}
                    name="rating"
                    value={value}
                    onChange={() => value === 5 ? redirectToPage() : showCommentSection()}
                    className="hidden" // rating input
                  />
                  <label 
                    htmlFor={`star${value}`}
                    className="bg-[rgb(240,239,239)] text-white text-[30px] cursor-pointer
                             group-hover:text-orange-400 
                             peer-checked:text-orange-400
                             [&:has(+input:checked)]:text-orange-400
                             [&:has(~label:hover)]:text-orange-400"
                  >
                    ★
                  </label>
                </div>
              ))}
            </div>
            
            <div className="mb-5 hidden"> {/* comment */}
              <div className="flex flex-col pb-10">
                <input
                  id="client_name"
                  value={feedbackData.clientName}
                  onChange={(e) => setFeedbackData({...feedbackData, clientName: e.target.value})}
                  placeholder="Name"
                  className="border border-[#ccc] p-[5px] mb-[10px] rounded" // input-box
                />
                <input
                  id="email_address"
                  value={feedbackData.emailAddress}
                  onChange={(e) => setFeedbackData({...feedbackData, emailAddress: e.target.value})}
                  placeholder="Email address"
                  className="border border-[#ccc] p-[5px] mb-[10px] rounded" // input-box
                />
              </div>
              <textarea
                id="comment"
                value={feedbackData.comment}
                onChange={(e) => setFeedbackData({...feedbackData, comment: e.target.value})}
                placeholder="Please let us know how your experience was"
                className="w-full h-[100px] resize-none border border-[#ccc] rounded p-2"
              />
              <button 
                type="submit" 
                className="bg-[rgb(165,186,201)] text-white px-[30px] py-[5px] pb-[6px] border-none cursor-pointer rounded-[50px]" // submit-btn
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;