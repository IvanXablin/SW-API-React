export const getPagesCount = (totalPages:number) => {
    return Math.ceil(totalPages / 10);
}

export const getPagesArray = (totalPages:number) => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i+1)
    }
    return result;
}