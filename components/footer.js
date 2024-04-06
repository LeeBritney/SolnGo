import React from "react"
import Link from "next/link";

export default function Footer()
{
    return(
    <main>
        <div className="footer">
            <nav>
                <ol className="md:flex list">
                    <li><Link href="https://twitter.com/solandgo">Follow Our Twitter</Link> </li>
                    <li><p>Copyrights Sol&Go 2024</p></li>
                </ol>
            </nav>
        </div>
    </main>

)
}