import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageFooter from './src/components/Footer';
import PageHeader from './src/components/Header';
import Navigation from './src/components/Navigation';
import Science from './src/pages/science';
import Home from './src/pages/index'

function App () {
    return(
        <div className='App'>
        <Router>
            <PageHeader />
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/science" element={<Science />} />
                </Routes>
            <PageFooter />
        </Router>
        </div>
    );
};

export default App;
