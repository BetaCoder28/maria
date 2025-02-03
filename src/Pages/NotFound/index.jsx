import NotFoundIcon from '../../assets/svgs/NotFound'

const NotFound = () => {
    return (
        <div className="m-12">
                <h2 className="text-4xl text-center"> 404 Page Not Found </h2>

                <p className="text-2xl text-center mt-2"> We are sorry, the page you are looking for is not found. </p>
                <NotFoundIcon />
        </div>
        
    )
}

export default NotFound;