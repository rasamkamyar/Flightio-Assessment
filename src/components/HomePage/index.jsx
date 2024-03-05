import FilterBar from "../FilterBar";
import SearchBar from "../SearchBar";
import Footer from "../Footer";
import Header from "../Header";
import ProductContainer from "../ProductContainer";
import SubHeader from "../SubHeader";

function HomePage() {
  return (
    <div>
      <SubHeader />
      <SearchBar />
      <FilterBar />
      <ProductContainer />
    </div>
  );
}

export default HomePage;
