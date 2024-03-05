import FilterBar from "../FilterBar";
import SearchBar from "../SearchBar";
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
