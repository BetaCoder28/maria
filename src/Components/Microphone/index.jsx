
const microphone = () => {

    return(
        <div className="flex justify-center mt-4 space-x-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                >
                {/* Ícono de micrófono blanco */}
                <path
                    d="M24 28C27.3137 28 30 25.3137 30 22V10C30 6.68629 27.3137 4 24 4C20.6863 4 18 6.68629 18 10V22C18 25.3137 20.6863 28 24 28Z"
                    fill="white"
                />
                <path
                    d="M34 22C34 26.4183 30.4183 30 26 30H22C17.5817 30 14 26.4183 14 22V20H18V22C18 24.2091 19.7909 26 22 26H26C28.2091 26 30 24.2091 30 22V20H34V22Z"
                    fill="white"
                />
                <path
                    d="M24 34C25.1046 34 26 33.1046 26 32V30H22V32C22 33.1046 22.8954 34 24 34Z"
                    fill="white"
                />
            </svg>

        </div>
    );

}


export default microphone;