import React from 'react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';

const About = () => {
  const frameStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 0,
    padding: '1rem',
  };

  const bgImageStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.5,
  };

  const textStyle: React.CSSProperties = {
    position: 'relative',
    fontFamily: 'monospace',
    fontSize: '14px',
    color: 'white',
    zIndex: 1,
  };

  const copyrightStyle: React.CSSProperties = {
    ...textStyle,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '1rem',
  };

  const textforStyle: React.CSSProperties = {
    fontFamily: 'monospace',
    fontSize: '11px',
    color: 'white',
  };

  return (
    <footer className="bg-violet dark:bg-gray-900">
      <hr className="my-10 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-7" />

      <div className="container mx-auto">
        <div style={frameStyle}>
          <Image src="/bgaaa.jpeg" alt="Background Image" layout="fill" objectFit="cover" quality={100} priority={true} />
          {/* Rest of your content */}
          <div className="text-white">
            <h1 className="font-mono" style={textStyle}>
              <a href="https://github.com/L-F-N-BlockNodeChain" className="mr-1">
                Github
              </a>
            </h1>
            <h3 className="font-mono" style={textStyle}>
              <a href="https://www.linkedin.com/company/lfnbnc" className="ml-1">
                LinkedIn
              </a>
            </h3>
            <div style={copyrightStyle}>
          <h1 style={textforStyle}>© 2023 Block Node Chain™</h1>
        </div>
          </div>
        </div>
        {/* Rest of your code */}
       
      </div>
    </footer>
  );
};

export default About;
