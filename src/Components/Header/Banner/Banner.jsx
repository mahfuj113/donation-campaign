import PropTypes from 'prop-types'
const Banner = ({ query, setQuery, handleSearch }) => {
    return (
        <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/NtvN9kF/people-meeting-community-center.jpg)' }}>
            <div className="hero-overlay bg-white bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <h1 className="mb-10 text-black text-5xl font-bold">I Grow By Helping People In Need</h1>
                    <input onChange={(e) => setQuery(e.target.value)} type="text" value={query} className="h-[50px] w-[360px] text-black focus:outline-none" placeholder="Search here...." />
                    <button onClick={handleSearch} className="bg-[#FF444A] px-7 py-3 rounded-r-lg text-base font-semibold text-[#FFF]">Search</button>
                </div>
            </div>
        </div>
    );
};
Banner.propTypes = {
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
}
export default Banner;