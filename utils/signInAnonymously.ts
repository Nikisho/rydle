import auth, { firebase } from '@react-native-firebase/auth';
import { supabase } from '../supabase';

function getRandomUsername() {
    const adjectives = ["hap", "cle", "fun", "col", "play", "sun", "joy", "bright"];
    const nouns = ["i", "guin", "raffe", "flow", "bow", "bird", "beam", "light"];

    const getRandomElement = (array: string[]) => array[Math.floor(Math.random() * array.length)];

    const randomAdjective = getRandomElement(adjectives);
    const randomNoun = getRandomElement(nouns);

    const username = randomAdjective + randomNoun;
    console.log(username)
    return username;
};

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
                    console.log('User email: ', user.uid);
                    insertUser(user.uid);
                }

            });
        }
        )
        .catch(error => {
            if (error.code === 'auth/operation-not-allowed') {
                console.log('Enable anonymous in your firebase console.');
            }
            // if (error.code === 'auth/uid-already-exists') {
            //     console.log('The provided uid is already in use by an existing user. Each user must have a unique uid.')
            // }
            console.error(error);
        });

};
