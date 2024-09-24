import React from 'react';
import { Link } from 'react-router-dom';

function OldSportsComplex() {
    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center common-background">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center">
                <h1 className="text-white text-4xl font-bold mb-8">Old Sports Complex</h1>
                <div className="flex flex-col space-y-4">
                    <Link to="/old-sports-complex/badminton" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                        Badminton
                    </Link>
                    <Link to="/old-sports-complex/table-tennis" className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out">
                        Table Tennis
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OldSportsComplex;
