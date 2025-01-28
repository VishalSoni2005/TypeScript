import imgThree from '../../assets/Postgresql.svg';
import imgFour from '../../assets/react.svg';
import imgTwo from '../../assets/NGINX.svg';
import imgOne from '../../assets/MYSQL.svg';
import { useState } from 'react';

export default function One() {
  const [surrentImg, setCurrentImg] = useState(imgOne);
  // const [active, setActive] = useState(false);
  const [activeBtn, setActiveBtn] = useState("SQL");

  const handleButtonClick = (img, name) => {
    setCurrentImg(img);
    setActiveBtn(name);
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900 text-white">
      <div className="flex  items-center gap-4 mb-8">
        <button
          onClick={() => handleButtonClick(imgOne, "SQL")}
          className={`px-4 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ${activeBtn === 'SQL' ? 'bg-blue-900 text-white' : ''}`}
        >
          SQL
        </button>
        <button
          onClick={() => handleButtonClick(imgTwo, "NGINX")}
          className={`px-4 py-2 border-2 bg-black text-white border-blue-500  font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 ${activeBtn === 'NGINX' ? 'bg-blue-900 text-white' : ''}`}
        >
          NGINX
        </button>
        <button
          onClick={() => handleButtonClick(imgThree, "PostgreSQL")}
          className={`px-4 py-2 border-2 bg-black border-green-500 text-green-500 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition duration-300 ${activeBtn === 'PostgreSQL' ? 'bg-blue-900 text-white' : ''}`}  
        >
          PostgreSQL
        </button>
        <button
          onClick={() => handleButtonClick(imgFour, "React")}
          className={`px-4 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300 ${activeBtn === 'React' ? 'bg-blue-900 text-white' : ''}`}
        >
          React
        </button>
      </div>

      <div className="flex items-center justify-center">
        <img
          src={surrentImg}
          alt="MySQL Logo"
          className="w-32 h-32 object-contain"
        />
      </div>
    </div>
  );
}


// import imgThree from '../../assets/Postgresql.svg';
// import imgFour from '../../assets/react.svg';
// import imgTwo from '../../assets/NGINX.svg';
// import imgOne from '../../assets/MYSQL.svg';
// import { useState } from 'react';

// export default function One() {

//   const [currentImg, setCurrentImg] = useState(imgOne);
//   const [activeButton, setActiveButton] = useState('SQL'); // Track the active button

//   const handleButtonClick = (img, buttonName) => {
//     setCurrentImg(img);
//     setActiveButton(buttonName);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900 text-white">
//       <div className="flex items-center gap-4 mb-8">



//         <button
//           onClick={() => handleButtonClick(imgOne, 'SQL')}
//           className={`px-4 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ${
//             activeButton === 'SQL' ? 'bg-blue-900 text-white' : ''
//           }`}
//         >
//           SQL
//         </button>



//         <button
//           onClick={() => handleButtonClick(imgTwo, 'NGINX')}
//           className={`px-4 py-2 border-2 bg-black text-white border-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 ${
//             activeButton === 'NGINX' ? 'bg-blue-900 text-white' : ''
//           }`}
//         >
//           NGINX
//         </button>



//         <button
//           onClick={() => handleButtonClick(imgThree, 'PostgreSQL')}
//           className={`px-4 py-2 border-2 bg-black border-green-500 text-green-500 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition duration-300 ${
//             activeButton === 'PostgreSQL' ? 'bg-blue-900 text-white' : ''
//           }`}
//         >
//           PostgreSQL
//         </button>



//         <button
//           onClick={() => handleButtonClick(imgFour, 'React')}
//           className={`px-4 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300 ${
//             activeButton === 'React' ? 'bg-blue-900 text-white' : ''
//           }`}
//         >
//           React
//         </button>
//       </div>




//       <div className="flex items-center justify-center">
//         <img
//           src={currentImg}
//           alt="Selected Logo"
//           className="w-32 h-32 object-contain"
//         />
//       </div>
//     </div>
//   );
// }