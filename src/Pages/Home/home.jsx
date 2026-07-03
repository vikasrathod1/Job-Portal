import { Box } from "@mantine/core";
import Hero from "../../Components/Hero/Hero";
import SearchBar from "../../Components/SearchBar/SearchBar";
import TrustedCompanies from "../../Components/TrustedCompanies/TrustedCompanies";
import Categories from "../../Components/Categories/Categories";
import FeaturedJobs from "../../Components/FeaturesJobs/FeaturesJobs";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Footer from "../../Components/Footer/Footer";



const Home = () => {
  return (
    <Box bg="#F8FAFC">
      {/* Hero Section */}

      <Hero />
      <SearchBar />
      <TrustedCompanies />
      <Categories />
      <FeaturedJobs />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </Box>
  );
};

export default Home;