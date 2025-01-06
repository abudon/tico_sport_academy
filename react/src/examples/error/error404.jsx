import error_image from '../../assets/images/error/errimg.jpg'



export default function Error404() {

    return (
        <div className="h-screen w-screen bg-gray-50 flex items-center">
            <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                <div className="w-full lg:w-1/2 mx-8">
                    <div className="text-7xl text-[#189cf0] font-dark font-extrabold mb-8"> 404</div>
                    <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
                        Sorry we couldn't find the page you're looking for
                    </p>

                    <a href="#" className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-[#189cf0] active:bg-red-600 hover:bg-white hover:text-black ">back to homepage</a>
                </div>
                <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                    <img src={error_image} className="h-full w-full" alt="Page not found"/>
                </div>

            </div>
        </div>
    );
}
