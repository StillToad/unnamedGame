import { useState, useEffect } from 'react';
import '../assets/tailwind.css';

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert" className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Something went wrong:</strong>
            <span className="block sm:inline">{error.message}</span>
            <button
                onClick={resetErrorBoundary}
                className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
                Try again
            </button>
        </div>
    );
}

export default ErrorFallback;
