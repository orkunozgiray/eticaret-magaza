import { auth } from '../../firebase/utils';

export const handleresetPasswordAPI = (email) => {
    const config = {
        url: 'http://localhost:3000/login' // change it with real domain login page url
    };    

    return new Promise((resolve, reject) => {
        auth.sendPasswordResetEmail(email, config)
        .then(() => {
           resolve();
        })
        .catch(() => {
            const err = ['Email not found. Please try again.'];
            reject(err);
        });
    });
};