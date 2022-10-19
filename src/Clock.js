import React from "react";




function Clock() { 
  const date = new Date();
  const currentHour = date.getHours();
  
  if (currentHour < 12) {
    return <h1>Good Morning!</h1>;
  }
  else if (currentHour <= 18 && currentHour >= 12) {
    return <h1>Good Afternoon!</h1>;
  }
  else 
    return <h1>Good Evening!</h1>;
}

export default Clock;
