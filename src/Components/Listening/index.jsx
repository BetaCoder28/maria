const Listening = () => {
    return(
        <div className="flex justify-center mt-4 space-x-2">
            {[...Array(10)].map((_, index) => (
                <div
                    key={index}
                    className="bg-pink-200 w-1 h-6 animate-pulse"
                    style={{
                        animationDelay: `${index * 0.1}s`,
                        animationDuration: "1s",
                    }}
                />
                
            ))}
        </div>
        
    );
}


export default Listening;