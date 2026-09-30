import Footer from '@/components/Footer';
import Navber2 from '@/components/Navber2';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navber2 />
            <main className="flex-grow flex flex-col">{children}</main>
            <Footer />
        </div>
    );
}

export default MainLayout;
