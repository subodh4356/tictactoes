  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCKVkumaZj5Y_jAIEEise019uviCpeb7FM",
    authDomain: "subodh-4e5ba.firebaseapp.com",
    projectId: "subodh-4e5ba",
    storageBucket: "subodh-4e5ba.firebasestorage.app",
    messagingSenderId: "25788853245",
    appId: "1:25788853245:web:a7b43e6279f679e9698794",
    measurementId: "G-J1STZ8X4E5"
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

  