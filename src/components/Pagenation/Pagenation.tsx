import React from "react";

interface PagenationProps {
    pagesArray: number[];
    setPage(page:number):any
}

export function Pagenation({pagesArray, setPage} : PagenationProps) {

    // function changePage(page:number) {
     //   setPage(page);
   // }

   // return (
        //{pagesArray.map((page: number) =>
             //   <button
            //        key={page}
            //        onClick={() => changePage(page)}
           //     >{page}</button>
        //    )}
   // );
}