import { add } from './helpers';

add.li('Line 3');


async function runPromise() {
    add.li('line 7');
    const p = new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve('We are complete');
            }, 5000)
        }
    );
    const message = await p;
    add.li('line 16');
    add.li(message);
}


add.li('line 21')
runPromise();




add.li('line 27')

// OUTput 
// Line 3
// line 21
// line 7
// line 27
//------- after 5 sec itwill display this
// line 16
// We are complete