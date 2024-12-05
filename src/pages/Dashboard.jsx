import { Link } from "react-router";

function Dashboard() {
  return (
    <section className="mx-auto container my-4">
      <h1 className="text-3xl text-red font-semibold">
        Welcome to your Dashboard
      </h1>
      <Link className="mt-4" to={"/dashboard/account-settings"}>
        settings
      </Link>
    </section>
  );
}

export default Dashboard;
