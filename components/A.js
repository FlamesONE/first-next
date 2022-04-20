import Link from "next/link";

export default function A({href, children}) {
    return (
        <Link href={href}>
            <a className="link">{children}</a>
        </Link>
    )
};