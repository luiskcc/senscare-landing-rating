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

  const handleRating = (value: number) => {
    setFeedbackData(prev => ({
        ...prev,
        rating: value
    }));

    if ( value === 5) {
        redirectToPage();
    } else {
        showCommentSection();
     }
    }

  const redirectToPage = () => {
    window.location.href = "https://search.google.com/local/writereview?placeid=ChIJv_EwTLjNQQwRXhRYGLxQpdY";
  }

  const redirectToHomePage = () => {
    window.location.href = "https";
  }

  const showCommentSection = () => {
    const commentSection = document.querySelector('.comment-section');
    if (commentSection) {
      commentSection.classList.remove('hidden');
    }
  };
  

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://formspree.io/f/manjezar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          rating: feedbackData.rating,
          name: feedbackData.clientName,
          email: feedbackData.emailAddress,
          message: feedbackData.comment
        })
      });
  
      if (response.ok) {
        setFeedbackData({
          rating: 0,
          clientName: '',
          emailAddress: '',
          comment: ''
        });
        alert('Gracias por tu feedback!');
        redirectToHomePage();
      } else {
        alert('Hubo un error. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error. Por favor, inténtalo de nuevo.');
    }
  };

  return (

    <div className="text-center text-[rgb(46,75,96)]">
      <div className="content-section px-[60px] py-[120px] lg:px-[100px] lg:py-[200px] xl:p-[100px]">
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
                    onChange={() => handleRating(value)}
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
                  type="email"
                  required
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