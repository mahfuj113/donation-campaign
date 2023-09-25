const Banner = () => {
    return (
        <div className="h-[70vh] bg-green-200">
            <img className="h-full w-full" src="https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80" alt="" />
            <div className="relative">
                <h1 className="text-5xl absolute bottom-72 left-[400px] font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
            </div>
            <div className="searchbar absolute bottom-[30%] right-[35%] w-[470px]">
                <form>
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path>
                            </svg>
                        </div>
                        <input type="search" name="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here..." required="" />
                        <button className="text-white h-full w-[110px] absolute right-0 bottom-0 bg-[#FF444A] font-medium rounded-r-lg text-sm px-4 py-2 ">Search</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Banner;