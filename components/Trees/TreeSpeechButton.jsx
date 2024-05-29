"use client";

import React from "react";
import { HiSpeakerWave as Audio } from "react-icons/hi2";

const TreeSpeechButton = ({ tree }) => {
  const playPageContent = () => {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = `
      Tree Name: ${tree.treename}.
      Scientific Name: ${tree.scientificname}.
      Description: ${tree.desc}.
      Fun Fact: ${tree.funny}.
    `;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className=" border border-slate-200 dark:border-slate-800 rounded-full p-2 text-2xl">
      <Audio onClick={playPageContent} />
    </div>
  );
};

export default TreeSpeechButton;
