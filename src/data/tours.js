
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";

export const tours = [
  {
    id: 1,
    title: "Planinarenje Velebit",
    category: "Hiking",
    destination: "Velebit",
    duration: "5 dana",
    description: "Istražite ljepote Velebita u malim grupama.",
    longDescription: "Nezaboravna avantura po najljepšim stazama Velebita, uz iskusne vodiče i opremu.",
    price: 250,
    image: image1,
    imageLarge: image1,
    dates: ["2025-06-01 – 2025-06-05", "2025-07-15 – 2025-07-20"]
  },
  {
    id: 2,
    title: "Jedrenje Hvar",
    category: "Sailing",
    destination: "Hvar",
    duration: "3 dana",
    description: "Plovidba uz najljepše otoke Jadrana.",
    longDescription: "Otkrijte skrivene uvale i uživajte u kristalno čistom moru uz profesionalnu posadu.",
    price: 400,
    image: image2,
    imageLarge: image2,
    dates: ["2025-06-10 – 2025-06-12", "2025-08-02 – 2025-08-04"]
  },
  {
    id: 3,
    title: "Ferrata Paklenica",
    category: "Ferrata",
    destination: "Paklenica",
    duration: "2 dana",
    description: "Adrenalinski usponi za iskusne planinare.",
    longDescription: "Isprobajte zahtjevne rute uz osiguranje i stručno vodstvo. Oprema uključena.",
    price: 180,
    image: image3,
    imageLarge: image3,
    dates: ["2025-09-05 – 2025-09-06", "2025-09-19 – 2025-09-20"]
  },
  {
    id: 4,
    title: "Exotic Bali",
    category: "Exotic",
    destination: "Bali",
    duration: "7 dana",
    description: "Egzotični odmor na Baliju uz lokalne vodiče.",
    longDescription: "Kultura, hrana i prirodne ljepote otoka bogova. Uključeni izleti i radionice.",
    price: 1200,
    image: image4,
    imageLarge: image4,
    dates: ["2025-11-01 – 2025-11-07"]
  },
  {
    id: 5,
    title: "City Tour Rim",
    category: "City tours",
    destination: "Rim",
    duration: "4 dana",
    description: "Povijesne znamenitosti i gastronomski doživljaji.",
    longDescription: "Obilazak Koloseuma, Vatikana i skrivenih dragulja, uz lokalne vodiče.",
    price: 550,
    image: image5,
    imageLarge: image5,
    dates: ["2025-10-10 – 2025-10-13", "2025-12-05 – 2025-12-08"]
  }
];
