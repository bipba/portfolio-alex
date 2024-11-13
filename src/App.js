import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/competences' element={<Knowledges />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} /> {/* Pour la gestion des routes non trouvées */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;







// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Contact from './pages/Contact';
// import Home from './pages/Home';
// import Knowledges from './pages/Knowledges';
// import NotFound from './pages/NotFound';
// import Portfolio from './pages/Portfolio';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/portfolio' element={<Portfolio />} />
//         <Route path='/competences' element={<Knowledges />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='*' element={<NotFound />} /> {/* Pour la gestion des routes non trouvées */}
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
