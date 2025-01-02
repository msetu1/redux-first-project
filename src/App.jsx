
const App = () => {
    return (
        <div className="m-20">
            <h2 className="text-3xl font-bold mb-5">Counter with redux !</h2>
            <div className="flex items-center gap-5">
            <button className="text-xl btn bg-green-500 text-white hover:bg-black">Increment</button>
            <div className="text-4xl font-bold">0</div>
            <button className="text-xl btn bg-red-500 text-white hover:bg-black">Decrement</button>
            </div>
        </div>
    );
};

export default App;