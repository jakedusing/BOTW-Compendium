export default function HomePage() {
  return (
    <div>
      <main className="py-8 px-4 max-w-5xl mx-auto">
        <section className="flex flex-col items-center text-center mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg" // Replace with the actual image URL
            alt="The Legend of Zelda: Breath of the Wild"
            className="w-64 h-auto object-cover rounded-lg shadow-lg"
          />
          <p className="mt-4 text-lg text-gray-800">
            Welcome to the ultimate compendium for "The Legend of Zelda: Breath
            of the Wild." Explore detailed entries, discover hidden locations,
            and immerse yourself in the world of Hyrule with our comprehensive
            guide.
          </p>
        </section>

        {/* Add additional sections or features here */}
      </main>
    </div>
  );
}
