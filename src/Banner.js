import React, { useState, useEffect } from "react";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fecthData() {}
    fecthData();
  }, []);

  return (
    <header>
      {/* <<< Background Image */}
      {/* title */}
      {/* div > 2 buttons */}
      {/* description */}
    </header>
  );
}

export default Banner;
