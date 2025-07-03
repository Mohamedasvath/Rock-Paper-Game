




import React, { useState } from 'react';
import { motion } from 'framer-motion';

const choices = [
  {
    name: 'Rock',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrPwXhVnXz6XUdOnwVlQNEQQRHZxNXkdgF6VE_lf4R9vbgjXjdIy45i5feULbQr3PzyT8&usqp=CAU  ' ,
    
    emoji: '🪨'
  },
  {
    name: 'Paper',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4PmYeDvw0cyVef2IKhA14EKuRSq3MjZw7x0e8D05m5QpTX0yw8c4VLf2qikkDfnqZBdM&usqp=CAU',
    emoji: '📰'
  },
  {
    name: 'Scissors',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzclrx61WgtnhlTYSUDqjjYw1N8PggXWDJsg&s',
    emoji: '✂️'
  }
];

const getResult = (user, comp) => {
  if (user === comp) return "It's a draw! 😐";
  if (
    (user === 'Rock' && comp === 'Scissors') ||
    (user === 'Paper' && comp === 'Rock') ||
    (user === 'Scissors' && comp === 'Paper')
  ) return 'You win! 😎';
  return 'You lose! 😭';
};

const RPSGame = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);

  const play = (choice) => {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computer);
    const outcome = getResult(choice.name, computer.name);
    setResult(outcome);
    if (outcome.includes('win')) setScore(score + 1);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 text-white"
      style={{
        background: 'linear-gradient(135deg, #582b84, #e3d5ca, #582b84)',
        backgroundSize: '400% 400%',
        animation: 'gradientAnimation 15s ease infinite'
      }}
    >
      <style>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow text-center underline">
         Rock Paper Scissors Game🎮
      </h1>
      <p className="text-xl mb-4">Score: <span className="font-bold text-yellow-300">{score}</span></p>

      <div className="flex flex-wrap justify-center gap-6 mb-10 max-w-3xl">
        {choices.map((choice) => (
          <motion.button
            key={choice.name}
            onClick={() => play(choice)}
            whileTap={{ scale: 1.1, rotate: 5 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-24 h-24 sm:w-32 sm:h-32 bg-white text-indigo-700 rounded-full shadow-lg hover:bg-indigo-100 p-2 flex items-center justify-center"
          >
            <img
              src={choice.src}
              alt={choice.name}
              className="w-16 h-16 sm:w-24 sm:h-24 object-contain"
            />
          </motion.button>
        ))}
      </div>

      <div className="bg-white/20 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl text-center max-w-sm w-full ">
        <p className="text-lg sm:text-xl mb-2  font-extrabold bg-gray-700 rounded-full">
          You chose: {userChoice ? userChoice.emoji : '❔'}
        </p>
        <p className="text-lg sm:text-xl mb-2 font-extrabold bg-gray-700 rounded-full">
          Computer chose: {computerChoice ? computerChoice.emoji : '❔'}
        </p>
        <p className="text-2xl sm:text-3xl mt-4 font-bold text-blue-800 drop-shadow ">
          {result}
        </p>
      </div>
    </div>
  );
};

export default RPSGame;