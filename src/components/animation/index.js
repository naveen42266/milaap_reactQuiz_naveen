import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const BadgeCompletionAnimation = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    setTimeout(() => setShowBadge(true), 1000); // Show badge after confetti starts
    setTimeout(() => setShowConfetti(false), 4000); // Stop confetti after 4 sec
  }, []);

  return (
    <div>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
    </div>
  );
};

export default BadgeCompletionAnimation;
