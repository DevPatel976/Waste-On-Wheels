


import { loadStripe } from '@stripe/stripe-js';



export async function checkout () {

    let stripePromise = null;
    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        }
        return stripePromise;
    };
    const stripe = await getStripe();
    await stripe.
}
export default checkout;