import { useEffect, useState } from "react"

const SellerHooks = (email) => {
    const [isSeller, setIsSeller] = useState('');
    const [isSellerLoading, setIsSellerLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://resale-market-assaignment-server.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                    setIsSellerLoading(false)
                })
        }
    }, [email])
    return [isSeller, isSellerLoading];
}
export default SellerHooks;