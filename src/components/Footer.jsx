export default function Footer() {
    const CurrentYear = () => {
        return new Date().getFullYear();
    }
    
    return (
        <>
        <p>&copy; - {CurrentYear()}</p>
        </>
    )
};
