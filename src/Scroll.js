import React,{useState,useEffect}  from 'react'

function Scroll() {
    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
    return (
        <>
         {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          ☝
        </button>
      )}   
        </>
    )
}

export default Scroll
