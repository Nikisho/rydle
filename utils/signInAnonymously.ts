import auth, { firebase } from '@react-native-firebase/auth';
import { supabase } from '../supabase';
import { getRandomUsername } from './getRandomUsername';

const insertUser = async (uid: string) => {
    const {  error } = await supabase
        .from('users')
        .insert({
            username: getRandomUsername(),
            uid: uid
        })
    if (error) {
        console.error(error.message);
    }
}

export const signInAnonymously = async () => {

    auth()
        .signInAnonymously()
        .then(() => {
            console.log('User signed in anonymously');
        }).then(() => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    console.log('User uid: ', user.uid);
                    insertUser(user.uid);
                }

            });
        }
        )
        .catch(error => {
            if (error.code === 'auth/operation-not-allowed') {
                console.log('Enable anonymous in your firebase console.');
            }
            if (error.code === 'auth/uid-already-exists') {
                console.log('The provided uid is already in use by an existing user. Each user must have a unique uid.')
            }
            console.error(error);
        });

};
