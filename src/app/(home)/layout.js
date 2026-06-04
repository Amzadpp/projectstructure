import HomeHeader from "../components/headers/HomeHeader";
export default function HomeLayout({ children }) {
  return (
    <>
      <HomeHeader />
      <main className="p-6">{children}</main>
    </>
  );
}
