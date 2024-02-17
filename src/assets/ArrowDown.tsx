import {SVGProps} from "react";

function ArrowDown(props: SVGProps<SVGSVGElement>) {
    return (
        <svg fill="#000000" width="12px" height="12px" viewBox="-2.4 -2.4 28.80 28.80"
             xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="2.4"
             transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)" {...props}>
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC"
               strokeWidth="0.336"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
            </g>
        </svg>
    )
}

export {ArrowDown}