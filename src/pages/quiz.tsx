import { Question } from '@/interfaces';
import React, { useState, useEffect } from 'react';

const Quiz: React.FC<any> = () => {
  const [quizQuestion, setQuizQuestion] = useState<Question | null>(null);
  const [result, setResult] = useState<boolean | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/quiz/question')
      .then(response => response.json())
      .then(data => setQuizQuestion(data))
      .catch(error => console.error('Error:', error));
  }, []);

  function checkAnswer(id: string, answer: string): void {
    fetch(`http://localhost:3000/api/quiz/${id}?answer=${answer}`)
        .then(response => response.json())
        .then(data => setResult(data))
        .catch(error => console.error('Error:', error));
}

  return (
    <div className="quiz">
    { quizQuestion === null && result===null ? (
        <h4>Loading...</h4>
      ) : quizQuestion !== null && result === null ? (
        <>
            <h4>{quizQuestion.question}</h4>
            <ul>
                {quizQuestion.answers.map((answer, index) => (
                    <li key={index} onClick={()=>checkAnswer(quizQuestion.id, answer.answer)}>{answer.answer}</li>
                ))}
            </ul>
        </>
      ) : (
        <h4>Result: {result ? 'Correct!' : 'Incorrect :('}</h4>
      )}
    </div>
  );
}

export default Quiz;

