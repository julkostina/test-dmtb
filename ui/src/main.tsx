import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from '@apollo/client/react';
import { BrowserRouter } from 'react-router-dom';
import { client } from './apollo';
import App from './index';

createRoot(document.getElementById('root'!)!).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>
);