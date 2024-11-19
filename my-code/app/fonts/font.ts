import { Raleway, Poppins, Oswald, Imperial_Script} from 'next/font/google';
 
export const raleway = Raleway({ subsets: ['latin'] }); 

export const poppins = Poppins({ 
    weight:'300',
    style:'normal',
    subsets:['latin']
})

export const oswald = Oswald({
    weight:'700',
    style:'normal',
    subsets:['latin']
})

export const imperial = Imperial_Script({
    weight:'400',
    subsets:['latin']
})