import React from "react";

interface PagenationProps {
    pagesArray: number[];
    setPage(page:number):any
}

export function Pagenation({pagesArray, setPage} : PagenationProps) {
    return (
        <div>
            Test
        </div>
    );
}