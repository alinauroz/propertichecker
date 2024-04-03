
import { useState, useEffect, useMemo } from "react";
import FeaturedListingBar from "@/Components/FeaturedListingBar/FeaturedListingBar";
import PropertyCard from "@/Components/PropertyCard/PropertyCard";
import FindHome from "@/Components/FindHome/FindHome";
import ContactBar from "@/Components/ContactBar/ContactBar";
import RentHome from "@/Components/RentHome/RentHome";
import ContactForm from "@/Components/ContactForm/ContactForm";
import ContectUs from "@/Components/ContactForm/ContectUs";
import DownloadAppSection from "@/Components/DownloadAppSection/DownloadAppSection";
import AdvertiseSection from "@/Components/AdvertiseSection/AdvertiseSection";
import FooterTwo from "@/Components/FooterTwo/FooterTwo";
import HeaderHome2 from "@/Components/Elements/HeaderHome2";
import { useSelector } from "react-redux";
import { getHomePageApi } from "@/store/actions/campaign";
import ProjectCard from "@/Components/PropertyCard/ProjectCard";
import useIsMobile from "@/utils/useIsMobile";

const Home2 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector((state) => state.User_signup.token);
  const [getFeaturedListing, setGetFeaturedListing] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [apartmentIndex, setApartmentIndex] = useState(0);
  const [mostViewedIndex, setMostViewedIndex] = useState(0);
  const [upcomingIndex, setUpcomingIndex] = useState(0);
  const [locationIndex, setLocationIndex] = useState(0);
  const [favoriteIndex, setFavoriteIndex] = useState(0);

  const [response, setResponse] = useState();
  const isMobile = useIsMobile();

  const itemsPerPage = isMobile ? 1 : 2; 

 
  const fetchHomePageData = () => {
    setIsLoading(true);
    try {
      getHomePageApi({
        onSuccess: (res) => {
          const responseData = res?.data;
          setResponse(responseData);
          setIsLoading(false);
          setGetFeaturedListing(responseData?.featured_section || []);
          setCategoryData(responseData?.categories_section);
        },
        onError: (err) => {
          setIsLoading(false);
          console.log(err);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const { mostViewedProperties, mostLikedProperties, featuredSection, projects } = useMemo(() => {
    console.log(">>>", response);
    const mostViewedProperties = response?.most_viewed_properties || [];
    const mostLikedProperties = response?.most_liked_properties || [];
    const featuredSection = response?.featured_section || [];
    const projects = response?.project_section || [];
    return {
      mostViewedProperties,
      mostLikedProperties,
      featuredSection,
      projects,
    }
  }, [response]);

  useEffect(() => {
    fetchHomePageData();
  }, [isLoggedIn]);

  const prevSlide = (index, setIndex, length) => {
    setIndex((prevIndex) => (prevIndex === 0 ? length - 1 : prevIndex - 1));
  };

  const nextSlide = (index, setIndex, length) => {
    setIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-[#F6F6F6]">
      <div className="screen_width max-w-[1280px] mx-auto">
        <HeaderHome2/>
        <div>
          <FindHome />
          <RentHome />
        </div>

        <div className="homepgeM">
          <FeaturedListingBar
            title="Discover our Featured Listings"
            icon={"/staricIcon.svg"}
            onPrevClick={() => prevSlide(featuredIndex, setFeaturedIndex, getFeaturedListing.length)}
            onNextClick={() => nextSlide(featuredIndex, setFeaturedIndex, getFeaturedListing.length)}
          />
        </div>
        <div className="grid  grid-cols-1 mdgrid-cols-2 gap-2 mt-4">
          {getFeaturedListing
            .slice(featuredIndex, featuredIndex + itemsPerPage)
            .map((ele, index) => (
              <div key={index}>
                <PropertyCard ele={ele} />
                <ContactBar />
              </div>
            ))}
        </div>

        <div className="homepgeM">
          <FeaturedListingBar
            title="Explore Apartment Types"
            icon={"/apartment 1.svg"}
            onPrevClick={() => prevSlide(apartmentIndex, setApartmentIndex, getFeaturedListing.length)}
            onNextClick={() => nextSlide(apartmentIndex, setApartmentIndex, getFeaturedListing.length)}
          />
        </div>
        <div className="grid grid-cols-1 mdgrid-cols-2 gap-2 mt-4">
          {getFeaturedListing
            .slice(apartmentIndex, apartmentIndex + itemsPerPage)
            .map((ele, index) => (
              <div key={index}>
                <PropertyCard ele={ele} />
                <ContactBar />
              </div>
            ))}
        </div>

       
        <div className="homepgeM">
          <FeaturedListingBar
            title="Most Viewed Properties"
            icon={"/eyes.svg"}
            onPrevClick={() => prevSlide(mostViewedIndex, setMostViewedIndex, mostViewedProperties.length)}
            onNextClick={() => nextSlide(mostViewedIndex, setMostViewedIndex, mostViewedProperties.length)}
          />
        </div>
        <div className="grid grid-cols-1 mdgrid-cols-2 gap-2 mt-4">
          {mostViewedProperties
            .slice(mostViewedIndex, mostViewedIndex + itemsPerPage)
            .map((ele, index) => (
              <div key={index}>
                <PropertyCard ele={ele} />
                <ContactBar />
              </div>
            ))}
        </div>
        
        <div className="homepgeM">
          <FeaturedListingBar
            title="Projects"
            icon={"/deep-learning-project 1.svg"}
            onPrevClick={() => prevSlide(upcomingIndex, setUpcomingIndex, projects.length)}
            onNextClick={() => nextSlide(upcomingIndex, setUpcomingIndex, projects.length)}
          />
        </div>
        <div className="grid grid-cols-1 mdgrid-cols-2 gap-2 mt-4">
          {projects
            .slice(upcomingIndex, upcomingIndex + itemsPerPage)
            .map((ele, index) => (
              <div key={index}>
                <ProjectCard project={ele} />
                <ContactBar />
              </div>
            ))}
        </div>
        <div className="homepgeM">
          <FeaturedListingBar
            title="Popular Locations Nearby"
            icon={"/map.svg"}
            onPrevClick={() => prevSlide(locationIndex, setLocationIndex, getFeaturedListing.length)}
            onNextClick={() => nextSlide(locationIndex, setLocationIndex, getFeaturedListing.length)}
          />
        </div>
        <div className="grid grid-cols-1 mdgrid-cols-2 gap-2 mt-4">
          {getFeaturedListing
            .slice(upcomingIndex, upcomingIndex + itemsPerPage)
            .map((ele, index) => (
              <div key={index}>
                <PropertyCard ele={ele} />
                <ContactBar />
              </div>
            ))}
        </div>
        <div className="homepgeM">
          <FeaturedListingBar
            title="Most Favorite Properties"
            icon={"/heart.svg"}
            onPrevClick={() => prevSlide(favoriteIndex, setFavoriteIndex, mostLikedProperties.length)}
            onNextClick={() => nextSlide(favoriteIndex, setFavoriteIndex, mostLikedProperties.length)}
          />
        </div>
        <div className="grid grid-cols-1 mdgrid-cols-2 gap-2 mt-4">
          {mostLikedProperties
            .slice(upcomingIndex, upcomingIndex + itemsPerPage)
            .map((ele, index) => (
              <div key={index}>
                <PropertyCard ele={ele} />
                <ContactBar />
              </div>
            ))}
        </div>
        
       <ContectUs/>
      
      </div>
      <ContactForm />
        <div className="HddenS" style={{ height: "200px" }}></div>
        <DownloadAppSection />
        <div className="HddenS" style={{ height: "100px" }}></div>
        <AdvertiseSection />
        <FooterTwo />
    </div>
  );
};

export default Home2;


















