import './App.css'
import React, { useEffect, useState } from 'react';

export default function Left_top(poops) {
  
  const title = JSON.parse(poops.title);
  const but = Object.keys(title).map((key, index) => (
    <a key={index} href={title[key]}>
      {key}
    </a>
  ));
  
  return (
    <main className="left">
      {but}
    </main>
  );

}