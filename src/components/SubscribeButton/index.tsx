import { signIn, useSession } from 'next-auth/client'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import style from './style.module.scss'

interface SubscribeButtonProps {
    priceId: string;
}

export const SubscribeButton: React.FC = () => {
    const [session] = useSession()

    async function handleSubscribeButton() {
        if (!session) {
            signIn("github")
            return
        }

        try { 
            const response = await api.post("/subscribe")

            const {sessionID} = response.data
        
            const stripe = await getStripeJs()

            await stripe.redirectToCheckout({sessionId: sessionID})

        } catch (err) {
            alert(`${err}`)
            return
        }
    }

    return(
        <button 
            className={style.button}
            onClick={handleSubscribeButton}    
        >
            Subscribe now
        </button>
    )
}