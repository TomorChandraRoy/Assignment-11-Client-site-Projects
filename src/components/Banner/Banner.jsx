
const Banner = () => {
    return (
        <div data-aos="zoom-in-up">
            <div className="hero min-h-[500px] " style={{ backgroundImage: 'url(https://i.ibb.co/1zF5Wr0/9175118-6461.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Crieative Online Learning Academy for you.</h1>
                        <p className="mb-5">Get a demanded Internet profession and earn from $1000 per months.</p>
                        <div className="">
                            <button className="btn btn-primary mr-6">Our Courses</button>
                            <button className="btn btn-primary ">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

