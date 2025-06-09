'use client';

import Link from "next/link";

interface ButtonProps {
    href: string;
    text: string;
    external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    href,
    text,
    external
}) => {
    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    text-accent 
                    md:text-base
                    text-sm
                    outline 
                    outline-accent 
                    rounded-lg
                    px-3
                    py-1
                    hover:bg-accent
                    hover:text-white
                    transition
                    duration-300
                    ease-in
                "
            >
                {text}
            </a>
        );
    }
    return (
        <Link
            href={href}
        >
            {text}
        </Link>
    );
}

export default Button;