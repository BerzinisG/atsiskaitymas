import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UsersProvider } from './context/UsersContext';
import { PostsProvider } from './context/PostsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  

    
    <UsersProvider>
        <PostsProvider>
            <BrowserRouter>
                <App />  
            </BrowserRouter>
        </PostsProvider>
    </UsersProvider>
);

