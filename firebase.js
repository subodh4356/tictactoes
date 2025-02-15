  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
  apiKey: "AIzaSyDBDY9tqhPn5s5UndHXFzH8s6oZrA7ZRUE",
  authDomain: "new-project-e9eee.firebaseapp.com",
  projectId: "new-project-e9eee",
  storageBucket: "new-project-e9eee.firebasestorage.app",
  messagingSenderId: "337004193901",
  appId: "1:337004193901:web:f8673eae510adeffd7f764"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  async function signUp(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        showNotification('Sign up successful! Redirecting to game...', 'success');
        setTimeout(() => {
            window.location.href = 'main/index.html';
        }, 2000);
        return user;
    } catch (error) {
        showNotification(error.message, 'error');
        throw error;
    }
  }

  async function login(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        showNotification('Login successful! Redirecting to game...', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';

        }, 2000);
        return user;
    } catch (error) {
        showNotification(error.message, 'error');
        throw error;
    }
  }

  // Function to show notifications
  function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
  }

  export { signUp, login };

  
