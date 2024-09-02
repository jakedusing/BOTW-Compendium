export default function HomePage() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <main className="py-8 px-6 max-w-5xl mx-auto space-y-8">
        <section className="flex flex-col items-center text-center mb-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg" // Replace with the actual image URL
            alt="The Legend of Zelda: Breath of the Wild"
            className="w-full h-auto max-w-md object-cover rounded-lg border-4 border-blue-500 shadow-lg"
          />
          <p className="mt-4 text-xl text-gray-300">
            Welcome to the ultimate compendium for "The Legend of Zelda: Breath
            of the Wild." Explore detailed entries, discover hidden locations,
            and immerse yourself in the world of Hyrule with our comprehensive
            guide.
          </p>
        </section>

        {/* Add additional sections or features here */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-300 border-b-2 border-blue-500 pb-2 mb-4">
            Featured Sections
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-300">Equipment</h3>
              <p className="text-gray-300 mt-2">
                Discover all the equipment available in the game, from weapons
                to armor.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-300">Materials</h3>
              <p className="text-gray-300 mt-2">
                Explore the various materials you can find and how they can be
                used.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-300">Monsters</h3>
              <p className="text-gray-300 mt-2">
                Find out about different monsters, where you can find them, and
                what they can drop.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
