import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Selene",
  lastName: "Yu",
  name: `Premium Eco Packaging`,
  role: "Design Engineer",
  avatar: "/images/og/Victorlogo.png",
  email: "example@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
  ///images/og/Victorlogo.png
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/once-ui-system",
  //   essential: true,
  // },
  // {
  //   name: "LinkedIn",
  //   icon: "linkedin",
  //   link: "https://www.linkedin.com/company/once-ui/",
  //   essential: true,
  // },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/premiumecopackaging?igsh=MjYwMW0xcWVqMGRw",
    essential: false,
  },
  {
    name: "Threads",
    icon: "pinterest",
    link: "https://pin.it/6FzcqPu7k",
    essential: true,
  },
  // {
  //   name: "Email",
  //   icon: "email",
  //   link: `mailto:${person.email}`,
  //   essential: true,
  // },
];

const home: Home = {
  path: "/",
  image: "/images/og/Victorlogo.png",
  label: "Home",
  title: `${person.name}`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>PREMIUM ECO PACKAGING</>,
  featured: {
    display: true,
    title: (
      <Row gap="20" vertical="center">
        {/* <strong className="ml-4">Need Something</strong>{" "} */}
        {/* <Line background="brand-alpha-strong" vert height="20" /> */}
        <Text marginRight="4" onBackground="brand-medium">
          Connect with US
        </Text>
      </Row>
    ),
    href: "https://wa.me/+919821689957",
  },
  galleryCategories: [
    {
      id: "1",
      image: "/images/home/categories/Packaging Customization.jpg",
      title: "Packaging Customization",
      category: "PackagingCustomization",
      description: "Customize your own branded packaging with us. We create premium eco packaging for large to small business, see which product best fits your needs",
    },
    {
      id: "2",
      image: "/images/home/categories/Premium Invitation Cards.jpg",
      title: "Premium Invitation Cards",
      category: "PremiumInvitationCards",
      description: "Eco-friendly packaging solutions for food businesses.",
    },
    {
      id: "3",
      image: "/images/home/categories/Wedding favour & Sweet boxes.jpg",
      title: "Wedding favour & Sweet boxes",
      category: "Weddingfavour",
      description: "Our product approach focuses on creating luxurious and stunning, personalized wedding favours and gift packaging designs to commemorate the special moments and big celebrations in your life",
    },
    {
      id: "4",
      image: "/images/home/categories/Business Packaging.jpg",
      title: "In Stock Products",
      category: "all",
      description: "The most amazing Packaging Products are in stock- Multi Size, Multi Color, LOW MOQ and Fast delivery",
    },
  ],
  subline: (
    <>
      Eco-Friendy Packaing solution provider.
    </>
  ),


};

const about: About = {
  path: "https://wa.me/+919821689957",
  label: "About",
  title: `GSTN: 07CTRPD0611C1Z7`,
  description: ``,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Selene is a Jakarta-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. Her work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/PremiumInvitationCards/Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "vertical",
      category: "PremiumInvitationCards",
    },
    {
      src: "/images/gallery/PremiumInvitationCards/02_Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "horizontal",
      category: "PremiumInvitationCards",
    },

    {
      src: "/images/gallery/PremiumInvitationCards/03_Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "horizontal",
      category: "PremiumInvitationCards",
    },

    {
      src: "/images/gallery/PremiumInvitationCards/04_Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "horizontal",
      category: "PremiumInvitationCards",
    },

    {
      src: "/images/gallery/PremiumInvitationCards/05_Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "horizontal",
      category: "PremiumInvitationCards",
    },

    {
      src: "/images/gallery/PremiumInvitationCards/06_Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "horizontal",
      category: "PremiumInvitationCards",
    },

    {
      src: "/images/gallery/PremiumInvitationCards/07_Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "horizontal",
      category: "PremiumInvitationCards",
    },

    {
      src: "/images/gallery/PremiumInvitationCards/08_Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "horizontal",
      category: "PremiumInvitationCards",
    },

    {
      src: "/images/gallery/PremiumInvitationCards/09_Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "vertical",
      category: "PremiumInvitationCards",
    },

    {
      src: "/images/gallery/PremiumInvitationCards/10_Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "vertical",
      category: "PremiumInvitationCards",
    },

    {
      src: "/images/gallery/PremiumInvitationCards/11_Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "vertical",
      category: "PremiumInvitationCards",
    },

    {
      src: "/images/gallery/PremiumInvitationCards/12_Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "vertical",
      category: "PremiumInvitationCards",
    },

    {
      src: "/images/gallery/PremiumInvitationCards/15_Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "vertical",
      category: "PremiumInvitationCards",
    },

    {
      src: "/images/gallery/PremiumInvitationCards/16_Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "vertical",
      category: "PremiumInvitationCards",
    },

    {
      src: "/images/gallery/PremiumInvitationCards/17_Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "horizontal",
      category: "PremiumInvitationCards",
    },

    {
      src: "/images/gallery/PremiumInvitationCards/18_Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "horizontal",
      category: "PremiumInvitationCards",
    },

    {
      src: "/images/gallery/PremiumInvitationCards/19_Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "horizontal",
      category: "PremiumInvitationCards",
    },

    {
      src: "/images/gallery/PremiumInvitationCards/20_Invitation Card.jpg",
      alt: "Invitation Card",
      orientation: "horizontal",
      category: "PremiumInvitationCards",
    },

    {
      src: "/images/gallery/PackagingCustomization/Gift Box & Paper Bag.jpg",
      alt: "Gift Box & Paper Bag",
      orientation: "horizontal",
      category: "PackagingCustomization",
    },

    {
      src: "/images/gallery/PackagingCustomization/Customized Gift box.jpg",
      alt: "Customized Gift box",
      orientation: "horizontal",
      category: "PackagingCustomization",
    },

    {
      src: "/images/gallery/PackagingCustomization/Customized Wine Box.jpg",
      alt: "Customized Wine Box",
      orientation: "horizontal",
      category: "PackagingCustomization",
    },

    {
      src: "/images/gallery/PackagingCustomization/Customized B2B Packaging.jpg",
      alt: "Customized B2B Packaging",
      orientation: "horizontal",
      category: "PackagingCustomization",
    },

    {
      src: "/images/gallery/PackagingCustomization/Chocolate Box.jpg",
      alt: "Chocolate Box",
      orientation: "horizontal",
      category: "PackagingCustomization",
    },

    {
      src: "/images/gallery/PackagingCustomization/Customized office Gift.jpg",
      alt: "Customized office Gift",
      orientation: "horizontal",
      category: "PackagingCustomization",
    },

    {
      src: "/images/gallery/PackagingCustomization/Customized butter paper & cartan box.jpg",
      alt: "Customized butter paper & cartan box",
      orientation: "horizontal",
      category: "PackagingCustomization",
    },
    {
      src: "/images/gallery/PackagingCustomization/08_Chocolate Box.jpg",
      alt: "Chocolate Box",
      orientation: "horizontal",
      category: "PackagingCustomization",
    },
    {
      src: "/images/gallery/PackagingCustomization/09_Chocolate Box.jpg",
      alt: "Chocolate Box",
      orientation: "horizontal",
      category: "PackagingCustomization",
    },

    {
      src: "/images/gallery/PackagingCustomization/Customized Dhokla Box.jpg",
      alt: "Customized Dhokla Box",
      orientation: "horizontal",
      category: "PackagingCustomization",
    },
    {
      src: "/images/gallery/PackagingCustomization/Customized Diwali Box.jpg",
      alt: "Customized Diwali Box",
      orientation: "horizontal",
      category: "PackagingCustomization",
    },

    {
      src: "/images/gallery/PackagingCustomization/Customized Luxury Box.jpg",
      alt: "Customized Luxury Box",
      orientation: "horizontal",
      category: "PackagingCustomization",
    },

    {
      src: "/images/gallery/PackagingCustomization/Customized Cosmatic Box.jpg",
      alt: "Customized Cosmatic Box",
      orientation: "horizontal",
      category: "PackagingCustomization",
    },

    {
      src: "/images/gallery/PackagingCustomization/Customized Prouduct Packaging.jpg",
      alt: "Customized Prouduct Packaging",
      orientation: "horizontal",
      category: "PackagingCustomization",
    },
    {
      src: "/images/gallery/PackagingCustomization/Customized Corporateb Box.jpg",
      alt: "Customized Corporateb Box",
      orientation: "vertical",
      category: "PackagingCustomization",
    },
    {
      src: "/images/gallery/PackagingCustomization/Customized Birthday Box.jpg",
      alt: "Customized Birthday Box",
      orientation: "vertical",
      category: "PackagingCustomization",
    },
    {
      src: "/images/gallery/PackagingCustomization/Customized ECO Bags.jpg",
      alt: "Customized ECO Bags",
      orientation: "vertical",
      category: "PackagingCustomization",
    },
    {
      src: "/images/gallery/PackagingCustomization/18_Chocolate Box.jpg",
      alt: "Chocolate Box",
      orientation: "vertical",
      category: "PackagingCustomization",
    },

    // wedding flavours
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/01_Wedding Sweet Box.jpg",
      alt: "Wedding Sweet Box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/02_Wedding 2 Jar Box.jpg",
      alt: "Wedding 2 Jar Box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/03_Wedding Sweet Box.jpg",
      alt: "Wedding Sweet Box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/04_wedding Box.jpg",
      alt: "wedding Box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/05_wedding Empty Box.jpg",
      alt: "wedding Empty Box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/06_wedding Blank Boxes.jpg",
      alt: "wedding Blank Boxes",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/08_for wedding Sweets.jpg",
      alt: "for wedding Sweets",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/09_wedding Sweets.jpg",
      alt: "wedding Sweets",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/10_ Premium wedding Hamper.jpg",
      alt: "Premium wedding Hamper",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/11_wedding Favor Box.jpg",
      alt: "wedding Favor Box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/12_wedding Box.jpg",
      alt: "wedding Box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    // {
    //   src: "/images/gallery/WeddingFavourSweetBoxes/14_ Premium Sweets wedding.jpg",
    //   alt: "Premium Sweets wedding",
    //   orientation: "horizontal",
    //   category: "Weddingfavour",
    // },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/15_wedding Jar card box.jpg",
      alt: "wedding Jar card box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/16_wedding Box.jpg",
      alt: "wedding Box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/17_Wedding.jpg",
      alt: "Wedding",
      orientation: "vertical",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/18_Wedding.jpg",
      alt: "Wedding",
      orientation: "vertical",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/19_Wedding return Gift.jpg",
      alt: "Wedding return Gift",
      orientation: "vertical",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/20_Wedding.jpg",
      alt: "Wedding",
      orientation: "vertical",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/21_Wedding Gift.jpg",
      alt: "Wedding Gift",
      orientation: "vertical",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/22_Wedding MDF folding box.jpg",
      alt: "Wedding MDF folding box",
      orientation: "vertical",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/23_Wedding Bhaji Box.jpg",
      alt: "Wedding Bhaji Box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/24_wedding Premium Sweet Box.jpg",
      alt: "wedding Premium Sweet Box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/25_wedding.jpg",
      alt: "wedding",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/26_wedding.jpg",
      alt: "wedding",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/27_wedding Baiyna Box.jpg",
      alt: "wedding Baiyna Box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/28_wedding Sweets.jpg",
      alt: "wedding Sweets",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/29_wedding Folding MDF box.jpg",
      alt: "wedding Folding MDF box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/30_wedding Jar Box.jpg",
      alt: "wedding Jar Box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/31_wedding premium Box.jpg",
      alt: "wedding premium Box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/32_wedding MDF box.jpg",
      alt: "wedding MDF box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/33_wedding Bhaji Dabba.jpg",
      alt: "wedding Bhaji Dabba",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/34_wedding ka box.jpg",
      alt: "wedding ka box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/35_wedding Baiyna Box.jpg",
      alt: "wedding Baiyna Box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/36_Wedding Gift box.jpg",
      alt: "Wedding Gift box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/37_Wedding Dry Fruits Box.jpg",
      alt: "Wedding Dry Fruits Box",
      orientation: "horizontal",
      category: "Weddingfavour",
    },
    {
      src: "/images/gallery/WeddingFavourSweetBoxes/38_Wedding Fry fruit Luxury boxes.jpg",
      alt: "Wedding Fry fruit Luxury boxes",
      orientation: "horizontal",
      category: "Weddingfavour",
    },

    // business packaging

    {
      src: "/images/gallery/BusinessPackaging/01_Employee Welcome Kit.jpg",
      alt: "Employee Welcome Kit",
      orientation: "horizontal",
      category: "BusinessPackaging",
    },
    {
      src: "/images/gallery/BusinessPackaging/02_Customized Packaging for Business.jpg",
      alt: "Customized Packaging for Business",
      orientation: "horizontal",
      category: "BusinessPackaging",
    },
    {
      src: "/images/gallery/BusinessPackaging/03_Corporate Gift.jpg",
      alt: "Corporate Gift",
      orientation: "vertical",
      category: "BusinessPackaging",
    },
    {
      src: "/images/gallery/BusinessPackaging/04_Cardboard Packaging.jpg",
      alt: "Cardboard Packaging",
      orientation: "horizontal",
      category: "BusinessPackaging",
    },
    {
      src: "/images/gallery/BusinessPackaging/05_Cosmetic Packaging.jpg",
      alt: "Cosmetic Packaging",
      orientation: "vertical",
      category: "BusinessPackaging",
    },
    {
      src: "/images/gallery/BusinessPackaging/06_Cosmetic Packaging.jpg",
      alt: "Cosmetic Packaging",
      orientation: "horizontal",
      category: "BusinessPackaging",
    },

    {
      src: "/images/gallery/BusinessPackaging/07_Eco Packagin.jpg",
      alt: "Eco Packagin",
      orientation: "vertical",
      category: "BusinessPackaging",
    },

    {
      src: "/images/gallery/BusinessPackaging/08_Jewellery Packaging.jpg",
      alt: "Jewellery Packaging",
      orientation: "horizontal",
      category: "BusinessPackaging",
    },

    {
      src: "/images/gallery/BusinessPackaging/09_Mettle Boxes.jpg",
      alt: "Mettle Boxes",
      orientation: "vertical",
      category: "BusinessPackaging",
    },

    {
      src: "/images/gallery/BusinessPackaging/10_Event Packaging.jpg",
      alt: "Event Packaging",
      orientation: "vertical",
      category: "BusinessPackaging",
    },

    {
      src: "/images/gallery/BusinessPackaging/11_Perfume Packaging.jpg",
      alt: "Perfume Packaging",
      orientation: "horizontal",
      category: "BusinessPackaging",
    },

    {
      src: "/images/gallery/BusinessPackaging/12_Shoes Packaging.jpg",
      alt: "Shoes Packaging",
      orientation: "vertical",
      category: "BusinessPackaging",
    },

    {
      src: "/images/gallery/BusinessPackaging/15_Event Packaging.jpg",
      alt: "Event Packaging",
      orientation: "horizontal",
      category: "BusinessPackaging",
    },

  ],
};


export { person, social, newsletter, home, about, blog, work, gallery };
