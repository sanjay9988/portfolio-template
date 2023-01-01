
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="mt-16 flex justify-between pb-8 text-sm capitalize">
            
            <div>
                <h1> Github : <Link href="#">Projects on github.</Link> </h1>
                <h1> Blogs : <Link href="/">Read my blogs.</Link> </h1>
            </div>

            <div>
                <h1> @design by sanjay shah.</h1>
                <p> Think From Heart Make It From Brain <br/>.<span className="text-orange-400">#sanjayshah</span> </p>
            </div>

        </footer>
    )
}

export default Footer;