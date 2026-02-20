import Link from "next/link"

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li style={{paddingLeft:'15px'}}><Link href = "/">Home</Link></li>
                <li>|</li>
                <li><Link href = "/characters">Characters</Link></li>
            </ul>
        </nav>
        
    )
}
