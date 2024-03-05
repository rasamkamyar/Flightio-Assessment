import FilterBar from "../FilterBar";
import SearchBar from "../SearchBar";
import Footer from "../Footer";
import Header from "../Header";
import ProductContainer from "../ProductContainer";

function HomePage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <FilterBar />
      <ProductContainer />
      <Footer />
    </div>
  );
}

export default HomePage;
