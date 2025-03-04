import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageFooter from '@/app/components/Footer';
import PageHeader from '@/app/components/Header';
import Navigation from '@/app/components/Navigation';
import Home from '@/app/pages/Home';
import Science from '@/app/pages/Science';
import styled from 'styled-components';

function App () {
    return(
        <Router>
            <PageHeader />
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Science" element={<Science/>} />
            </Routes>
            <PageFooter />
        </Router>
    );
};

export default App;