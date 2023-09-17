import Counter from "../components/Counter";

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-12">
            <h1 className="text-5xl">Default Home</h1>
            <Counter/>
        </div>
    );
};

export default Home;