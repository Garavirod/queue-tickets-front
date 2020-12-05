export const getDataUserStorage = () => {
    return {
        agent : localStorage.getItem('agent') || null,
        desktop : localStorage.getItem('desktop') || null
    }
}