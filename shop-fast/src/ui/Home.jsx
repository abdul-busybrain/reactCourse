import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        Quality products.
        <br />
        <span className="text-yellow-500">
          Out of the store, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
