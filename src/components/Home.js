const Home = () => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4">Welcome to Learn React</h1>
                <p className="text-gray-300">This app is my ongoing project where I'm learning and implementing new features in React. It's a work-in-progress, and I'm continuously improving it. While the current CSS might not be perfect, I'm focused on adding more features and enhancing its design soon.</p>
            </div>
            <div>
                <h1 className="text-2xl font-bold mb-4">Exploring Features:</h1>
                <ul className="list-disc pl-4 mb-4 text-start">
                    <li className="mb-2"><span className="font-bold text-lg">Infinite Scroll:</span> Experience seamless scrolling and dynamic content loading.</li>
                    <li className="mb-2"><span className="font-bold text-lg">Pagination:</span> Navigate through discrete pages of content.</li>
                    <li className="mb-2"><span className="font-bold text-lg">Form Validation:</span> Validate user inputs in various forms across the app.</li>
                </ul>
            </div>
            <p className="text-gray-300">Thanks for visiting [Your App Name]. Stay tuned for more updates as I continue to learn and grow this project!</p>

        </div>

    );
}
export default Home;