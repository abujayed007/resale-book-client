import { useEffect, useState } from "react"

const BuyerHook = (email) => {
    const [isBuyer, setIsBuyer] = useState('');
    const [isBuyerLoading, setIsBuyerLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://resale-market-assaignment-server.vercel.app/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsBuyer(data.isBuyer);
                    setIsBuyerLoading(false)
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading];
}
export default BuyerHook;