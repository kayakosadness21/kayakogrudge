    // Nhập packages hoặc components(hàm) vào index.js lấy từ node_modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

    //  Phương thức để tạo ra 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
