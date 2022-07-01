import React from "react";

export const storeData = {};

export const arrOfLinkText = ["Portfolio", "About Us", "Contact"];

export const useMediaQuery = (minMax, width) => {
  const [targetReached, setTargetReached] = React.useState(false);

  const updateTarget = React.useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  React.useEffect(() => {
    const media = window.matchMedia(`(${minMax}-width: ${width}px)`);
    // media.addListener(updateTarget);
    media.addEventListener("change", (e) => updateTarget(e));

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    // return () => media.removeListener(updateTarget);
    return () => media.removeEventListener("change", (e) => updateTarget(e));
  }, []);

  return targetReached;
};

export const heroImgContent = {
  about: {
    src: {
      desktop: "/about/desktop/image-hero.jpg",
      tablet: "/about/tablet/image-hero.jpg",
      mobile: "/about/mobile/image-hero.jpg",
    },
    altText: "Person doing work on Mac book Pro with I phone next to Mac Book.",
  },
  contact: {
    src: {
      desktop: "/contact/desktop/image-hero.jpg",
      tablet: "/contact/tablet/image-hero.jpg",
      mobile: "/contact/mobile/image-hero.jpg",
    },
    altText: "Black Rotary Phone.",
  },
};

export const detailsAddressContent = {
  firstOffice: {
    email: "archone@email.com",
    address: "1892 Chenoweth Drive TN",
    phone: "123-456-3451",
  },
  secondOffice: {
    email: "archtwo@email.com",
    address: "3399 Wines Lane TX",
    phone: "832-123-4321",
  },
};

export const portfolioImgContents = [
  // Seraph Station
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-seraph.jpg",
      tablet: "/portfolio/tablet/image-seraph.jpg",
      desktop: "/portfolio/desktop/image-seraph.jpg",
    },
    title: "Seraph Station",
    date: "September 2019",
    altText:
      "Inside of building with White walls, black ceiling and huge light in middle of ceiling.",
  },
  // Eebox Building
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-eebox.jpg",
      tablet: "/portfolio/tablet/image-eebox.jpg",
      desktop: "/portfolio/desktop/image-eebox.jpg",
    },
    title: "Eebox Building",
    date: "August 2017",
    altText: "Looking up at building with Purple Red paint.",
  },
  // Federal II Tower
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-federal.jpg",
      tablet: "/portfolio/tablet/image-federal.jpg",
      desktop: "/portfolio/desktop/image-federal.jpg",
    },
    title: "Federal II Tower",
    date: "March 2017",
    altText: "Outside view of high rise tower.",
  },
  // Project Del Sol
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-del-sol.jpg",
      tablet: "/portfolio/tablet/image-del-sol.jpg",
      desktop: "/portfolio/desktop/image-del-sol.jpg",
    },
    title: "Project Del Sol",
    date: "January 2016",
    altText: "White Glass building near water",
  },
  // Le Prototype
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-prototype.jpg",
      tablet: "/portfolio/tablet/image-prototype.jpg",
      desktop: "/portfolio/desktop/image-prototype.jpg",
    },
    title: "Le Prototype",
    date: "October 2015",
    altText: "Outside view of Two Story white building.",
  },
  // 228B Tower
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-228b.jpg",
      tablet: "/portfolio/tablet/image-228b.jpg",
      desktop: "/portfolio/desktop/image-228b.jpg",
    },
    title: "228B Tower",
    date: "April 2015",
    altText: "Grey Arc Tower. Blue sky background.",
  },
  // Grand Edelweiss Hotel
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-edelweiss.jpg",
      tablet: "/portfolio/tablet/image-edelweiss.jpg",
      desktop: "/portfolio/desktop/image-edelweiss.jpg",
    },
    title: "Grand Edelweiss Hotel",
    date: "December 2013",
    altText:
      "Outside view of top floors of a glass building with light blue skys.",
  },
  // Netcry Tower
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-netcry.jpg",
      tablet: "/portfolio/tablet/image-netcry.jpg",
      desktop: "/portfolio/desktop/image-netcry.jpg",
    },
    title: "Netcry Tower",
    date: "August 2012",
    altText: "Inside building looking up at glassed ceiling.",
  },
  // Hypers
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-hypers.jpg",
      tablet: "/portfolio/tablet/image-hypers.jpg",
      desktop: "/portfolio/desktop/image-hypers.jpg",
    },
    title: "Hypers",
    date: "January 2012",
    altText: "Looking up inside of red painted building with no ceiling.",
  },
  // SXIV Tower
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-sxiv.jpg",
      tablet: "/portfolio/tablet/image-sxiv.jpg",
      desktop: "/portfolio/desktop/image-sxiv.jpg",
    },
    title: "SXIV Tower",
    date: "March 2011",
    altText: "Outside view of top floors of a building with curve designs.",
  },
  // Trinity Bank Tower
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-trinity.jpg",
      tablet: "/portfolio/tablet/image-trinity.jpg",
      desktop: "/portfolio/desktop/image-trinity.jpg",
    },
    title: "Trinity Bank Tower",
    date: "September 2010",
    altText: "Outside looking up of building with 30 floors.",
  },
  // Project Paramour
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-paramour.jpg",
      tablet: "/portfolio/tablet/image-paramour.jpg",
      desktop: "/portfolio/desktop/image-paramour.jpg",
    },
    title: "Project Paramour",
    date: "February 2008",
    altText: "Outside view of building with purple and blue triangles.",
  },
];

export const featuredSectionContents = [
  // project del sol
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-del-sol.jpg",
      tablet: "/portfolio/tablet/image-del-sol.jpg",
      desktop: "/portfolio/desktop/image-del-sol.jpg",
    },
    title: "Project Del Sol",
    altText: "White Glass building near water",
  },
  // 228B Tower
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-228b.jpg",
      tablet: "/portfolio/tablet/image-228b.jpg",
      desktop: "/portfolio/desktop/image-228b.jpg",
    },
    title: "228B Tower",
    altText: "Grey Arc Tower. Blue sky background",
  },
  // Le Prototype
  {
    imgSrc: {
      mobile: "/portfolio/mobile/image-prototype.jpg",
      tablet: "/portfolio/tablet/image-prototype.jpg",
      desktop: "/portfolio/desktop/image-prototype.jpg",
    },
    title: "Le Prototype",
    altText: "Outside view of Two Story white building.",
  },
];

export const slideElementContent = [
  // project paramour
  {
    imgSrc: {
      mobile: "/home/mobile/image-hero-paramour.jpg",
      tablet: "/home/tablet/image-hero-paramour.jpg",
      desktop: "/home/desktop/image-hero-paramour.jpg",
    },
    // title: "Project Paramour",
    title: {
      top: "Project",
      bottom: "Paramour",
    },
    text: "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
  },
  // seraph station
  {
    imgSrc: {
      mobile: "/home/mobile/image-hero-seraph.jpg",
      tablet: "/home/tablet/image-hero-seraph.jpg",
      desktop: "/home/desktop/image-hero-seraph.jpg",
    },
    // title: "Seraph Station",
    title: {
      top: "Seraph",
      bottom: "Station",
    },
    text: "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
  },
  // Federal II Tower
  {
    imgSrc: {
      mobile: "/home/mobile/image-hero-federal.jpg",
      tablet: "/home/tablet/image-hero-federal.jpg",
      desktop: "/home/desktop/image-hero-federal.jpg",
    },
    // title: "Federal II Tower",
    title: {
      top: "Federal II",
      bottom: "Tower",
    },
    text: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
  },
  // Trinity Bank Tower
  {
    imgSrc: {
      mobile: "/home/mobile/image-hero-trinity.jpg",
      tablet: "/home/tablet/image-hero-trinity.jpg",
      desktop: "/home/desktop/image-hero-trinity.jpg",
    },
    // title: "Trinity Bank Tower",
    title: {
      top: "Trinity Bank",
      bottom: "Tower",
    },
    text: "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
  },
];
