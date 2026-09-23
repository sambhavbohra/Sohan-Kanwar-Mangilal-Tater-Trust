import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Stethoscope,
  Users,
  PawPrint,
  ArrowRight,
  ArrowUpRight,
  Heart,
  Shield,
  HandHeart,
  Eye,
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  X,
  LayoutGrid,
  Landmark,
  Infinity as InfinityIcon,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import { IndiaMap, places } from "@/components/IndiaMap";

import { Navbar } from "@/components/site/Navbar";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import trustLogo from "@/assets/trust-logo-upscaled.png";
import heroImage from "@/assets/hero image.jpeg";
import ryaLogo from "@/assets/rya-logo.png";
import mahaveerLogo from "@/assets/mahaveer-logo.png";
import sankaraLogo from "@/assets/sankara-logo.png";
import lionsLogo from "@/assets/lions-logo.png";
import jainLogo from "@/assets/jain-logo.png";
import vesLogo from "@/assets/ves-logo.png";
import adinathLogo from "@/assets/adinath-logo.png";
import rmdCareTrustLogo from "@/assets/rmd-care-trust-logo.jpeg";
import sevaBharathiLogo from "@/assets/seva-bharathi-logo.jpeg";
import chennaiMetroMahaveerLogo from "@/assets/chennai-metro-mahaveer-logo.jpeg";
import rajasthaniAssociationTnLogo from "@/assets/rajasthani-association-tn-logo.png";
import annualScholarshipCeremonyChennaiImg from "@/assets/gallery-annual-scholarship-ceremony-chennai.jpeg";
import awardedRajasthanShreeImg from "@/assets/gallery-awarded-rajasthan-shree-rajasthan-sangh-chennai.jpeg";
import cataractSurgeryChennaiMetroMahaveerImg from "@/assets/gallery-cataract-surgery-chennai-metro-mahaveer.jpeg";
import cataractSurgeryFollowUpImg from "@/assets/gallery-cataract-surgery-follow-up.jpeg";
import chaaraGodownNagaurImg from "@/assets/gallery-chaara-godown-nagaur.jpeg";
import chaaraGodownNagaurPreviewImg from "@/assets/Chaara Godown Nagaur Preview.jpg";
import foodDistributionDriveAkshayaTrustImg from "@/assets/gallery-food-distribution-drive-akshaya-trust.jpeg";
import foodDistributionDriveNewImg from "@/assets/gallery-food-distribution-drive-new.jpeg";
import foodDistributionDriveImg from "@/assets/gallery-food-distribution-drive.jpeg";
import foodDistributionImg from "@/assets/gallery-food-distribution.jpeg";
import freeEyeScreeningCampChennaiImg from "@/assets/gallery-free-eye-screening-camp-chennai.jpeg";
import hallDonatedMarudharMertaCityImg from "@/assets/gallery-hall-donated-marudhar-merta-city.jpeg";
import khwaspuraGaushalaShedImg from "@/assets/gallery-khwaspura-gaushala-shed.jpeg";
import maternityWardInaugurationImg from "@/assets/gallery-maternity-ward-inauguration.jpeg";
import maternityWardInaugurationPreviewImg from "@/assets/Maternity Ward Inauguration Preview.jpg";
import mouSewaBhartiMultiSpecialtyHospitalImg from "@/assets/gallery-mou-sewa-bharti-multi-specialty-hospital.jpeg";
import mouSewaBhartiMultiSpecialtyHospitalPreviewImg from "@/assets/MoU Sewa Bharti Multi Specialty Hospital Preview.jpg";
import newbornCareUnitImg from "@/assets/gallery-newborn-care-unit.jpeg";
import newbornCareUnitPreviewImg from "@/assets/Newborn Care Unit Preview.jpg";
import prostheticsDistributionAdinathJainTrustImg from "@/assets/gallery-prosthetics-distribution-adinath-jain-trust-chennai.jpeg";
import prostheticsDistributionImg from "@/assets/gallery-prosthetics-distribution.jpeg";
import roomDonationDharamshalaLodgingImg from "@/assets/gallery-room-donation-dharamshala-lodging.jpeg";
import sankaraEyeHospitalBlockImg from "@/assets/gallery-sankara-eye-hospital-block.jpeg";
import tenthScholarshipDistributionImg from "@/assets/gallery-10th-scholarship-distribution-ceremony.jpeg";
import tenthScholarshipDistributionPreviewImg from "@/assets/10th Scholarship Distribution Ceremony Preview.jpg";
import eleventhScholarshipDistributionImg from "@/assets/gallery-11th-scholarship-distribution-ceremony.jpeg";
import thirteenthScholarshipDistributionImg from "@/assets/gallery-13th-scholarship-distribution-439-students.jpeg";
import twentyTwoLakhScholarshipDistributionImg from "@/assets/gallery-22-lakh-scholarship-distribution-ceremony.jpeg";
import twentyTwoLakhScholarshipDistributionPreviewImg from "@/assets/22 Lakh Scholarship Distribution Ceremony Preview.jpg";
import inaugurationVivekanandaVidyalayaImg from "@/assets/gallery-inauguration-vivekananda-vidyalaya.jpeg";
import inaugurationVivekanandaVidyalayaPreviewImg from "@/assets/Inauguration Vivekananda Vidyalaya Preview.jpg";
import maternityChildCareHomeHandoverImg from "@/assets/gallery-maternity-child-care-home-handover.jpeg";
import maternityChildCareHomeHandoverPreviewImg from "@/assets/Maternity And Child Care Home Handover Preview.jpg";
import maternityHomePlaquePresentationImg from "@/assets/gallery-maternity-home-plaque-presentation.jpeg";
import maternityHospitalImg from "@/assets/gallery-maternity-hospital.jpeg";
import vivekanandaVidyalayaImg from "@/assets/gallery-vivekananda-vidyalaya.jpeg";
import multispecialityHospitalBhoomiPoojaImg from "@/assets/Multispeciality Hospital Bhoomi Pooja.jpeg";
import bhoomiPoojaCeremonyVivekanandaImg from "@/assets/Bhoomi Pooja Ceremony Vivekananda Vidhyalaya.jpeg";
import bhoomiPoojaCeremonyHospitalImg from "@/assets/Bhoomi Pooja Cermony Multi-speciality Hospital.jpeg";
import bhoomiPoojaCancerHospitalGoonipalayamImg from "@/assets/Bhoomi Pooja Cancer Hospital Goonipalayam.jpg";
import bhoomiPoojaCancerHospitalGoonipalayamPreviewImg from "@/assets/Bhoomi Pooja Cancer Hospital Goonipalayam Preview.jpg";
import cancerHospitalGoonipalayamPressImg from "@/assets/Cancer and Palliative Care Hospital Goonipalayam Press Coverage.jpg";
import cancerHospitalGoonipalayamPressPreviewImg from "@/assets/Cancer and Palliative Care Hospital Goonipalayam Press Coverage Preview.jpg";
import sambhavnathJainMandirPrathisthaImg from "@/assets/Shri Sambhavnath Jain Mandir Prathistha Mahamahotsav.jpg";
import cattleFeedingGaushalaImg from "@/assets/Cattle Feeding in Gaushala.jpeg";
import mangilalChandjiTaterImg from "@/assets/founder-mangilal-chandji-tater.jpeg";
import sohanKanwarTaterImg from "@/assets/founder-sohan-kanwar-tater.jpeg";
import mangalChandTaterImg from "@/assets/founder-mangal-chand-tater.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Sohan Kanwar Mangilal Tater Charitable Trust - Serving Humanity Since 2011",
      },
      {
        name: "description",
        content:
          "A charitable foundation transforming lives through education, healthcare, and compassion across Tamil Nadu and Rajasthan since 2011.",
      },
      {
        property: "og:title",
        content: "Sohan Kanwar Mangilal Tater Charitable Trust",
      },
      {
        property: "og:description",
        content:
          "Serving humanity since 2011 - education, healthcare and community welfare.",
      },
    ],
  }),
  component: Index,
});

/* ───────────────────────── DATA ───────────────────────── */

const impactStats = [
  { value: 4820, label: "Students awarded scholarships" },
  {
    value: 19766858,
    label: "Scholarship amount disbursed",
    prefix: "₹",
    format: "inr" as const,
  },
  { value: 6360, label: "Babies delivered" },
  { value: 166011, label: "Eye camp screenings" },
  { value: 50448, label: "Eye surgeries" },
  { value: 14339, label: "Spectacles distributed" },
  { value: 1307, label: "Eye camps conducted" },
  { value: 2000, label: "Disabled people benefited", suffix: "+" },
  { value: 2, label: "Dialysis machines donated" },
];

const founders = [
  {
    name: "Mangilal Chandji Tater",
    years: "1933 – 2011",
    img: mangilalChandjiTaterImg,
  },
  {
    name: "Sohan Kanwar Tater",
    years: "1936 – 2017",
    img: sohanKanwarTaterImg,
  },
  {
    name: "Mangal Chand Tater",
    years: "1955 – 2025",
    img: mangalChandTaterImg,
  },
];

const values = [
  { icon: Heart, title: "Compassion", text: "Empathy in every act." },
  { icon: Shield, title: "Integrity", text: "Every rupee accounted for." },
  { icon: Users, title: "Community", text: "With and for our people." },
  { icon: HandHeart, title: "Service", text: "Quiet. Consistent. Unwavering." },
  { icon: Eye, title: "Transparency", text: "Open books, open hearts." },
  {
    icon: InfinityIcon,
    title: "Continuity",
    text: "A legacy for generations.",
  },
];

type Project = {
  name: string;
  location?: string;
  impact?: string;
  desc: string;
};
const work: Record<
  "Education" | "Healthcare" | "Community" | "Animal",
  Project[]
> = {
  Education: [
    {
      name: "Scholarship Programme",
      location: "Pan - India",
      impact: "4,820 Students",
      desc: "Annual merit & need-based scholarships.",
    },
    {
      name: "Vivekananda Education Society",
      location: "Chennai",
      impact: "Classroom Donation",
      desc: "Infrastructure for holistic learning.",
    },
    {
      name: "Jain Sohan Kanwar Mangilal Tater Vivekananda Vidhyalaya",
      location: "Uttukottai, Tamil Nadu",
      impact: "Future Campus",
      desc: "4.36 Acres of Land donated for a school.",
    },
    {
      name: "Rajasthan Education Trust",
      location: "Rajasthan",
      impact: "Regional Education",
      desc: "Multi-year support to regional education.",
    },
    {
      name: "Mahaveer Rajasthani Intl. School",
      location: "Chennai",
      impact: "Diamond Donor",
      desc: "Multi-year institutional partnership.",
    },
  ],
  Healthcare: [
    {
      name: "Maternity Hospital",
      location: "Merta city, Rajasthan",
      impact: "6,360 Deliveries",
      desc: "Safe maternity care for underserved families.",
    },
    {
      name: "Eye Camps",
      location: "Tamil nadu and Andhra pradesh",
      impact: "1,66,011 Screenings",
      desc: "Free screenings reaching remote communities.",
    },
    {
      name: "Lions Eye Bank OMNI Van",
      location: "Lions Eye Bank, Egmore, Chennai",
      impact: "Mobile Care",
      desc: "An Omni ambulance donated for mobile eye care to villages and to facilitate eye and organ collection.",
    },
    {
      name: "Dialysis Machines",
      location: "RYA Hospital, chennai",
      impact: "2 Machines",
      desc: "Ongoing kidney care infrastructure.",
    },
    {
      name: "Sankara Eye Hospital Block",
      location: "Chennai",
      impact: "Block Donation",
      desc: "Dedicated patient care block.",
    },
    {
      name: "Limb Camps",
      location: "Multi-region",
      impact: "2000+ Beneficiaries",
      desc: "Prosthetic limbs for the differently-abled.",
    },
    {
      name: "Jain Mission Trust OPD",
      location: "Chikkaballapur, Karnataka",
      impact: "OPD Room",
      desc: "Outpatient care infrastructure.",
    },
    {
      name: "Hospital & Medical Facility Support",
      location: "Jain Mission Trust Hospital, Bangalore",
      impact: "OPD Room Donation",
      desc: "Donation of an OPD room to support outpatient care.",
    },
    {
      name: "Cancer Care",
      location: "RYA Madras Cosmo Foundation",
      impact: "Cancer Detection Centre",
      desc: "Support towards the Cancer Detection Centre.",
    },
  ],
  Community: [
    {
      name: "Blanket Distribution",
      location: "Annual",
      impact: "Winter relief",
      desc: "Warmth for those without shelter.",
    },
    {
      name: "Food Distribution",
      location: "Year-round",
      impact: "Daily meals",
      desc: "Nutrition support in slums and rural areas.",
    },
    {
      name: "Sadharmik Family Support",
      location: "Community",
      impact: "Ongoing",
      desc: "Quiet support to families in need.",
    },
    {
      name: "Flat Donation",
      location: "Chennai",
      impact: "Housing",
      desc: "Residential support for deserving families.",
    },
    {
      name: "Dharamshala Room",
      location: "Rajasthan & Gujrat",
      impact: "Lodging",
      desc: "Dharamshala Rooms Donatated.",
    },
    {
      name: "Butati Dham Dharamshala",
      location: "Butati Dham",
      impact: "Dharamshala Room",
      desc: "A dharamshala room donated to support pilgrims and visitors.",
    },
    {
      name: "Environmental Initiative",
      location: "Pan - India",
      impact: "1,000 Saplings",
      desc: "1,000 saplings planted as part of the Trust's environmental efforts.",
    },
    {
      name: "Natural Disaster Relief",
      location: "Tamil Nadu",
      impact: "Emergency Relief",
      desc: "Relief provided to people affected by COVID-19 and the Tamil Nadu tsunami.",
    },
    {
      name: "Kapeda Dwar Construction",
      location: "Kapeda, Rajasthan",
      impact: "Heritage",
      desc: "Community gateway construction.",
    },
  ],
  Animal: [
    {
      name: "Khwaspura Gaushala Shed",
      location: "Khwaspura, Rajasthan",
      impact: "Cattle Shelter",
      desc: "Built shelter for rescued cattle.",
    },
    {
      name: "Lambiya Gaushala Shed",
      location: "Lambiya, rajasthan",
      impact: "Cattle Shelter",
      desc: "Additional shelter for the herd.",
    },
    {
      name: "Continuous Gaushala Support",
      location: "Pan - India",
      impact: "Ongoing",
      desc: "Recurring care, feed and maintenance.",
    },
    {
      name: "Adinath Jain Trust",
      location: "Rajasthan",
      impact: "Animal Welfare",
      desc: "Long-term support for animal welfare.",
    },
    {
      name: "Cow Shelter and Feeding",
      location: "Rajasthan",
      impact: "7 Cow Sheds",
      desc: "A total of seven cow sheds donated across Rajasthan.",
    },
  ],
};

const timeline = [
  {
    year: "2011",
    title: "Trust Established",
    text: "Sohan Kanwar Mangilal Tater Charitable Trust begins its journey of service.",
    icon: Landmark,
  },
  {
    year: "2012–21",
    title: "Growing Years",
    text: "Expanding in education and healthcare through annual scholarships and eye camps.",
    icon: ArrowUpRight,
  },
  {
    year: "2022",
    title: "10th Scholarship Distribution",
    text: "A decade of scholarship support, celebrated with a landmark tally.",
    icon: GraduationCap,
    stats: ["4,298 students supported", "₹1.66 crore over 13 years"],
  },
  {
    year: "2022",
    title: "Large-scale Eye Care Initiative — Chennai Metro Mahaveer Club",
    text: "Eye care support reached communities across Chennai through a large-scale initiative.",
    icon: Stethoscope,
    stats: [
      "1,212 eye camps",
      "1,67,743 screenings",
      "46,926 surgeries",
      "14,281 pairs of spectacles",
    ],
  },
  {
    year: "2022",
    title: "Seva Mahostav",
    text: "A large multi-sector initiative supporting education, healthcare, Gau Seva, eye care, community welfare, Jain institutions and national disaster relief.",
    icon: HandHeart,
    stats: ["₹5 crore commitment"],
  },
  {
    year: "2026",
    title: "14th Scholarship Distribution",
    text: "Another cohort of students supported in their pursuit of education.",
    icon: GraduationCap,
    stats: ["456 students", "₹25.07 lakh in scholarships"],
  },
  {
    year: "2026",
    title: "Empowering Lives",
    text: "Mobility and independence restored for those who need it most.",
    icon: Heart,
    stats: ["500 individuals supported with limbs and wheelchairs"],
  },
];

const partners = [
  { name: "RYA Hospital", logo: ryaLogo },
  { name: "Kewal Chand Mohini Bai Daga Dialysis Centre" },
  { name: "Mahaveer Rajasthani International School", logo: mahaveerLogo },
  { name: "Sankara Eye Hospital", logo: sankaraLogo },
  { name: "Lions Eye Bank", logo: lionsLogo },
  { name: "Jain Mission Trust", logo: jainLogo },
  { name: "Vivekananda Education Society", logo: vesLogo },
  { name: "Adinath Jain Trust", logo: adinathLogo },
  { name: "RMD Care Trust", logo: rmdCareTrustLogo },
  { name: "Seva Bharathi", logo: sevaBharathiLogo },
  { name: "Chennai Metro Mahaveer", logo: chennaiMetroMahaveerLogo },
  {
    name: "Rajasthani Association Tamil Nadu",
    logo: rajasthaniAssociationTnLogo,
  },
];

/* Gallery */
const galleryTabs = [
  { id: "All" as const, icon: LayoutGrid, label: "All" },
  { id: "Education" as const, icon: GraduationCap, label: "Education" },
  { id: "Healthcare" as const, icon: Stethoscope, label: "Healthcare" },
  { id: "Community" as const, icon: Users, label: "Community" },
  { id: "Animal Welfare" as const, icon: PawPrint, label: "Animal Welfare" },
];
type GalleryCat = (typeof galleryTabs)[number]["id"];
const gallery: {
  cat: Exclude<GalleryCat, "All">;
  caption: string;
  // width / height of the image actually shown (previewImg, if set), so the
  // card's own shape always matches it exactly - no cropping, at any column
  // width.
  ratio: number;
  tone: string;
  img: string;
  // Used only for the grid thumbnail when the full `img` (e.g. a whole
  // newspaper page) doesn't crop well into a photo card; the lightbox still
  // opens the full `img`.
  previewImg?: string;
  hideFromAll?: boolean;
}[] = [
  {
    cat: "Healthcare",
    caption: "Free Eye Screening Camp Chennai",
    ratio: 2.346,
    tone: "from-[#1E3A5F] to-[#142943]",
    img: freeEyeScreeningCampChennaiImg,
  },
  {
    cat: "Education",
    caption: "Annual Scholarship Ceremony Chennai",
    ratio: 1.5,
    tone: "from-[#800000] to-[#4d0000]",
    img: annualScholarshipCeremonyChennaiImg,
  },
  {
    cat: "Healthcare",
    caption: "Maternity Ward Inauguration",
    ratio: 1.794,
    tone: "from-[#C9A23A] to-[#8a6e1f]",
    img: maternityWardInaugurationImg,
    previewImg: maternityWardInaugurationPreviewImg,
  },
  {
    cat: "Animal Welfare",
    caption: "Khwaspura Gaushala Shed",
    ratio: 1.333,
    tone: "from-[#8FA68E] to-[#4f6651]",
    img: khwaspuraGaushalaShedImg,
    hideFromAll: true,
  },
  {
    cat: "Healthcare",
    caption: "Sankara Eye Hospital Block",
    ratio: 1.333,
    tone: "from-[#800000] to-[#3d0000]",
    img: sankaraEyeHospitalBlockImg,
  },
  {
    cat: "Healthcare",
    caption: "Cataract Surgery Follow-Up",
    ratio: 2.221,
    tone: "from-[#1E3A5F] to-[#142943]",
    img: cataractSurgeryFollowUpImg,
  },
  {
    cat: "Community",
    caption: "Food Distribution Drive",
    ratio: 1.662,
    tone: "from-[#C9A23A] to-[#8a6e1f]",
    img: foodDistributionDriveImg,
    hideFromAll: true,
  },
  {
    cat: "Community",
    caption: "Room Donation To Dharamshala Lodging",
    ratio: 2.207,
    tone: "from-[#1E3A5F] to-[#142943]",
    img: roomDonationDharamshalaLodgingImg,
  },
  {
    cat: "Healthcare",
    caption: "Newborn Care Unit",
    ratio: 1.794,
    tone: "from-[#C9A23A] to-[#8a6e1f]",
    img: newbornCareUnitImg,
    previewImg: newbornCareUnitPreviewImg,
    hideFromAll: true,
  },
  {
    cat: "Animal Welfare",
    caption: "Chaara Godown Nagaur",
    ratio: 1.794,
    tone: "from-[#8FA68E] to-[#4f6651]",
    img: chaaraGodownNagaurImg,
    previewImg: chaaraGodownNagaurPreviewImg,
  },
  {
    cat: "Community",
    caption: "Food Distribution Drive",
    ratio: 0.75,
    tone: "from-[#C9A23A] to-[#8a6e1f]",
    img: foodDistributionDriveNewImg,
    hideFromAll: true,
  },
  {
    cat: "Community",
    caption: "Food Distribution Drive With Akshaya Trust",
    ratio: 2.165,
    tone: "from-[#C9A23A] to-[#8a6e1f]",
    img: foodDistributionDriveAkshayaTrustImg,
  },
  {
    cat: "Healthcare",
    caption: "Prosthetics Distribution",
    ratio: 1.796,
    tone: "from-[#1E3A5F] to-[#142943]",
    img: prostheticsDistributionImg,
    hideFromAll: true,
  },
  {
    cat: "Community",
    caption: "Hall Donated In Marudhar Merta City",
    ratio: 1.754,
    tone: "from-[#800000] to-[#3d0000]",
    img: hallDonatedMarudharMertaCityImg,
    hideFromAll: true,
  },
  {
    cat: "Healthcare",
    caption:
      "MoU Between Our Trust And Sewa Bharti Tamil Nadu For Multi-Specialty Hospital",
    ratio: 1.643,
    tone: "from-[#800000] to-[#3d0000]",
    img: mouSewaBhartiMultiSpecialtyHospitalImg,
    previewImg: mouSewaBhartiMultiSpecialtyHospitalPreviewImg,
  },
  {
    cat: "Healthcare",
    caption: "Multispeciality Hospital Bhoomi Pooja",
    ratio: 1.5,
    tone: "from-[#800000] to-[#3d0000]",
    img: multispecialityHospitalBhoomiPoojaImg,
  },
  {
    cat: "Community",
    caption: "Food Distribution",
    ratio: 1.333,
    tone: "from-[#C9A23A] to-[#8a6e1f]",
    img: foodDistributionImg,
    hideFromAll: true,
  },
  {
    cat: "Healthcare",
    caption: "Cataract Surgery With Chennai Metro Mahaveer",
    ratio: 1.499,
    tone: "from-[#1E3A5F] to-[#142943]",
    img: cataractSurgeryChennaiMetroMahaveerImg,
    hideFromAll: true,
  },
  {
    cat: "Community",
    caption: "Awarded Rajasthan Shree By Rajasthan Sangh Chennai",
    ratio: 1.504,
    tone: "from-[#800000] to-[#4d0000]",
    img: awardedRajasthanShreeImg,
  },
  {
    cat: "Healthcare",
    caption: "Prosthetics Distribution With Adinath Jain Trust Chennai",
    ratio: 1.333,
    tone: "from-[#1E3A5F] to-[#142943]",
    img: prostheticsDistributionAdinathJainTrustImg,
  },
  {
    cat: "Education",
    caption: "10th Scholarship Distribution Ceremony",
    ratio: 1.345,
    tone: "from-[#800000] to-[#4d0000]",
    img: tenthScholarshipDistributionImg,
    previewImg: tenthScholarshipDistributionPreviewImg,
    hideFromAll: true,
  },
  {
    cat: "Education",
    caption: "11th Scholarship Distribution Ceremony",
    ratio: 1.451,
    tone: "from-[#1E3A5F] to-[#142943]",
    img: eleventhScholarshipDistributionImg,
    hideFromAll: true,
  },
  {
    cat: "Education",
    caption: "13th Scholarship Distribution To 439 Students",
    ratio: 1.219,
    tone: "from-[#C9A23A] to-[#8a6e1f]",
    img: thirteenthScholarshipDistributionImg,
    hideFromAll: true,
  },
  {
    cat: "Education",
    caption: "22 Lakh Scholarship Distribution Ceremony",
    ratio: 2.09,
    tone: "from-[#800000] to-[#3d0000]",
    img: twentyTwoLakhScholarshipDistributionImg,
    previewImg: twentyTwoLakhScholarshipDistributionPreviewImg,
    hideFromAll: true,
  },
  {
    cat: "Education",
    caption: "Inauguration Of Vivekananda Vidyalaya",
    ratio: 1.452,
    tone: "from-[#1E3A5F] to-[#142943]",
    img: inaugurationVivekanandaVidyalayaImg,
    previewImg: inaugurationVivekanandaVidyalayaPreviewImg,
  },
  {
    cat: "Education",
    caption: "Vivekananda Vidyalaya",
    ratio: 1.566,
    tone: "from-[#C9A23A] to-[#8a6e1f]",
    img: vivekanandaVidyalayaImg,
  },
  {
    cat: "Education",
    caption: "Bhoomi Pooja Ceremony — Vivekananda Vidhyalaya",
    ratio: 0.708,
    tone: "from-[#C9A23A] to-[#8a6e1f]",
    img: bhoomiPoojaCeremonyVivekanandaImg,
    hideFromAll: true,
  },
  {
    cat: "Healthcare",
    caption: "Bhoomi Pooja Ceremony — Multi-speciality Hospital",
    ratio: 0.922,
    tone: "from-[#800000] to-[#4d0000]",
    img: bhoomiPoojaCeremonyHospitalImg,
    hideFromAll: true,
  },
  {
    cat: "Healthcare",
    caption: "Bhoomi Pooja, Cancer Hospital in Goonipalayam",
    ratio: 2.154,
    tone: "from-[#1E3A5F] to-[#142943]",
    img: bhoomiPoojaCancerHospitalGoonipalayamImg,
    previewImg: bhoomiPoojaCancerHospitalGoonipalayamPreviewImg,
    hideFromAll: true,
  },
  {
    cat: "Healthcare",
    caption: "Cancer and Palliative Care Hospital in Goonipalayam",
    ratio: 1.468,
    tone: "from-[#1E3A5F] to-[#142943]",
    img: cancerHospitalGoonipalayamPressImg,
    previewImg: cancerHospitalGoonipalayamPressPreviewImg,
    hideFromAll: true,
  },
  {
    cat: "Community",
    caption: "Shri Sambhavnath Jain Mandir Prathistha Mahamahotsav",
    ratio: 2.165,
    tone: "from-[#C9A23A] to-[#8a6e1f]",
    img: sambhavnathJainMandirPrathisthaImg,
    hideFromAll: true,
  },
  {
    cat: "Animal Welfare",
    caption: "Cattle Feeding in Gaushala",
    ratio: 0.75,
    tone: "from-[#8FA68E] to-[#4f6651]",
    img: cattleFeedingGaushalaImg,
    hideFromAll: true,
  },
  {
    cat: "Healthcare",
    caption: "Maternity And Child Care Home Handover",
    ratio: 2.928,
    tone: "from-[#800000] to-[#4d0000]",
    img: maternityChildCareHomeHandoverImg,
    previewImg: maternityChildCareHomeHandoverPreviewImg,
    hideFromAll: true,
  },
  {
    cat: "Healthcare",
    caption: "Maternity Home Plaque Presentation",
    ratio: 1.432,
    tone: "from-[#1E3A5F] to-[#142943]",
    img: maternityHomePlaquePresentationImg,
  },
  {
    cat: "Healthcare",
    caption: "Maternity Hospital",
    ratio: 1.488,
    tone: "from-[#C9A23A] to-[#8a6e1f]",
    img: maternityHospitalImg,
    hideFromAll: true,
  },
];

/* ───────────────────────── PAGE ───────────────────────── */

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Founders />
        <OurWork />
        <DeepDive />
        <About />
        <Gallery />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ───────────────────────── HERO ───────────────────────── */

function Hero() {
  return (
    <section
      id="home"
      className="relative hero-backdrop flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 [@media(min-width:640px)_and_(min-aspect-ratio:1/1)]:min-h-dvh overflow-hidden"
    >
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.60] [mask-image:radial-gradient(ellipse_at_center,black_12%,transparent_98%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_12%,transparent_98%)]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/65 via-background/15 to-background/30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-background/45" />

      {/* Subtle ornamental shapes */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-[var(--brand-gold)]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[var(--brand-green)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="md:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-[var(--brand-brown)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
            Serving humanity since 2011
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 sm:mt-8 font-display text-[2.6rem] sm:text-5xl lg:text-[5.25rem] leading-[1.05] tracking-tight text-balance text-[var(--brand-brown)]"
          >
            Sohan Kanwar Mangilal Tater{" "}
            <span className="italic text-[var(--brand-green)]">
              Charitable Trust
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-foreground/70 text-balance"
          >
            Transforming lives through{" "}
            <span className="text-[var(--brand-brown)] font-medium">
              education
            </span>
            ,{" "}
            <span className="text-[var(--brand-brown)] font-medium">
              healthcare
            </span>
            , and{" "}
            <span className="text-[var(--brand-brown)] font-medium">
              compassion
            </span>{" "}
            across communities and generations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90 hover:shadow-xl hover:shadow-[var(--brand-green)]/20"
            >
              Explore our work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-brown)]/20 px-7 py-3.5 text-sm font-medium text-[var(--brand-brown)] hover:bg-[var(--brand-brown)]/5 transition"
            >
              Contact us
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="hidden md:flex md:col-span-4 justify-center"
        >
          <div className="relative isolate flex h-64 w-64 lg:h-96 lg:w-96 items-center justify-center">
            <div className="absolute inset-4 lg:inset-6 rounded-full bg-[var(--brand-gold)]/35 blur-3xl" />
            <img
              src={trustLogo}
              alt="Trust emblem"
              className="relative h-52 w-52 lg:h-80 lg:w-80 object-contain contrast-110 saturate-110 drop-shadow-[0_22px_34px_rgba(71,54,64,0.14)]"
            />
          </div>
        </motion.div>
      </div>

      {/* Marquee of impact */}
      <div className="absolute bottom-0 inset-x-0 border-t border-border/60 bg-background/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center gap-8 overflow-x-auto text-sm text-foreground/60">
          <span className="whitespace-nowrap tracking-widest uppercase text-xs font-bold text-[#28752f]">
            Impact at a glance
          </span>
          <span className="whitespace-nowrap font-bold">
            4,820 Scholarships
          </span>
          <span className="text-border">·</span>
          <span className="whitespace-nowrap font-bold">
            50,448 Eye Surgeries
          </span>
          <span className="text-border">·</span>
          <span className="whitespace-nowrap font-bold">6,360 Deliveries</span>
          <span className="text-border">·</span>
          <span className="whitespace-nowrap font-bold">1,307 Eye Camps</span>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── IMPACT ───────────────────────── */

function Impact() {
  return (
    <section id="impact" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">
              Our Impact
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
              A decade of measurable change.
            </h2>
            <p className="mt-6 text-lg text-foreground/65 max-w-xl">
              Numbers tell only part of the story - every figure here represents
              a life touched, a family supported, a future reshaped.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-wrap rounded-2xl overflow-hidden border border-border">
          {impactStats.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 0.04}
              className="grow min-w-0 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="bg-background border-r border-b border-border p-5 sm:p-8 lg:p-10 h-full group hover:bg-[var(--surface)] active:bg-[var(--surface)] transition-colors">
                <div className="font-sans text-3xl sm:text-4xl lg:text-[2.5rem] text-[var(--brand-brown)] leading-none">
                  <Counter
                    to={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    format={s.format ?? "number"}
                  />
                </div>
                <div className="mt-4 text-sm uppercase tracking-wider text-foreground/55">
                  {s.label}
                </div>
                <div className="mt-6 h-px w-8 bg-[var(--brand-gold)] group-hover:w-16 group-active:w-16 transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOUNDERS ───────────────────────── */

function Founders() {
  return (
    <section id="founders" className="section-pad bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="text-center font-display text-4xl sm:text-5xl leading-[1.05] text-balance">
            In Loving Memory
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-10 sm:gap-14">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center w-48">
                <img
                  src={f.img}
                  alt={f.name}
                  className="h-40 w-40 rounded-full object-cover border-4 border-[var(--brand-gold)]/40 shadow-lg"
                />
                <div className="mt-5 font-display text-lg text-[var(--brand-brown)]">
                  {f.name}
                </div>
                <div className="mt-1 text-sm text-foreground/55 tracking-wide">
                  {f.years}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── OUR WORK ───────────────────────── */

const tabs = [
  { id: "Education" as const, icon: GraduationCap, label: "Education" },
  { id: "Healthcare" as const, icon: Stethoscope, label: "Healthcare" },
  { id: "Community" as const, icon: Users, label: "Community" },
  { id: "Animal" as const, icon: PawPrint, label: "Animal Welfare" },
];

function OurWork() {
  const [tab, setTab] = useState<keyof typeof work>("Education");
  const items = work[tab];

  return (
    <section id="work" className="section-pad bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">
                Our Work
              </p>
              <h2 className="mt-4 font-display text-2xl sm:text-4xl lg:text-6xl leading-[1.05] text-balance">
                Programmes that move quietly, reach widely.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {tabs.map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => setTab(id)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition touch-manipulation ${
                    tab === id
                      ? "bg-[var(--brand-brown)] text-white"
                      : "bg-background border border-border text-foreground/70 hover:text-foreground active:text-foreground"
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {items.map((p, i) => (
              <motion.div
                key={p.name}
                data-cursor="magnetic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-background rounded-2xl border border-border p-4 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)] active:-translate-y-1 transition-all duration-500 touch-manipulation"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-lg font-medium tracking-tight text-[var(--brand-brown)] leading-tight">
                      {p.name}
                    </h3>
                    <div className="mt-1.5 flex items-center gap-2 flex-wrap">
                      {p.location && (
                        <span className="text-[10px] uppercase tracking-wider text-foreground/50">
                          {p.location}
                        </span>
                      )}
                      {p.impact && (
                        <span className="inline-flex items-center rounded-full bg-[var(--brand-gold)]/40 px-2 py-0.5 text-[10px] font-medium text-[var(--brand-brown)]">
                          {p.impact}
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-foreground/30 group-hover:text-[var(--brand-green)] group-hover:rotate-12 group-active:text-[var(--brand-green)] group-active:rotate-12 transition-all"
                  />
                </div>
                <p className="mt-3 text-sm text-foreground/65 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ───────────────────────── DEEP DIVE ───────────────────────── */

function DeepDive() {
  const [activeCity, setActiveCity] = useState<string | null>(null);
  const [zoomedState, setZoomedState] = useState<string | null>(null);

  return (
    <section className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-16 lg:space-y-28">
        {/* Timeline */}
        <div>
          <Reveal>
            <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">
              Timeline
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance max-w-3xl">
              From 2011 to today.
            </h2>
          </Reveal>

          <div className="mt-12 relative">
            <div
              className="absolute left-[4.5rem] sm:left-24 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--brand-gold)] via-border to-transparent"
              aria-hidden
            />
            <div className="space-y-6">
              {timeline.map((t, i) => {
                const Icon = t.icon;
                return (
                  <Reveal key={`${t.year}-${t.title}`} delay={i * 0.03}>
                    <div className="relative grid grid-cols-[3.5rem_1fr] sm:grid-cols-[5rem_1fr] gap-3 sm:gap-5 items-start">
                      <div className="pt-3 text-right">
                        <span className="font-display text-sm sm:text-base text-[var(--brand-green)]">
                          {t.year}
                        </span>
                      </div>
                      <div className="group rounded-xl border border-border bg-[var(--surface)] px-4 py-3 sm:px-5 sm:py-4 transition-all duration-300 hover:border-[var(--brand-gold)]/50 hover:shadow-md hover:shadow-[var(--brand-brown)]/5">
                        <div className="flex items-center gap-2">
                          {Icon && (
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-gold)]/15 text-[var(--brand-brown)]">
                              <Icon size={12} />
                            </span>
                          )}
                          <h3 className="font-display text-base sm:text-lg text-[var(--brand-brown)]">
                            {t.title}
                          </h3>
                        </div>
                        <p className="mt-1.5 text-sm text-foreground/65 max-w-md">
                          {t.text}
                        </p>
                        {t.stats && (
                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {t.stats.map((s) => (
                              <span
                                key={s}
                                className="rounded-full border border-[var(--brand-green)]/25 bg-[var(--brand-green)]/5 px-2.5 py-0.5 text-[11px] font-medium text-[var(--brand-green)]"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="absolute left-[4.5rem] sm:left-24 top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--brand-gold)] ring-4 ring-background shadow-[0_0_0_1px_var(--border)]" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Geo + Chart */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="bg-[var(--surface)] rounded-3xl p-6 sm:p-8 lg:p-10 h-full border border-border">
              <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">
                Geographic Reach
              </p>
              <h3 className="mt-3 font-display text-3xl text-[var(--brand-brown)]">
                Where we work
              </h3>
              <div className="mt-8 space-y-6">
                {Object.entries(places).map(([state, cities]) => (
                  <div key={state}>
                    <button
                      type="button"
                      onClick={() =>
                        setZoomedState((cur) => (cur === state ? null : state))
                      }
                      className="flex items-center gap-2 text-sm font-medium text-[var(--brand-brown)] touch-manipulation"
                    >
                      <MapPin size={14} className="text-[var(--brand-green)]" />
                      {state}
                    </button>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cities.map((c) => (
                        <span
                          key={c}
                          onMouseEnter={() => setActiveCity(c)}
                          onMouseLeave={() =>
                            setActiveCity((cur) => (cur === c ? null : cur))
                          }
                          onClick={() => {
                            setActiveCity(c);
                            setZoomedState(state);
                          }}
                          className={`px-3 py-1.5 rounded-full bg-background border text-xs transition-all duration-150 cursor-pointer touch-manipulation ${
                            activeCity === c
                              ? "scale-110 bg-[var(--brand-green)]/15 border-[var(--brand-green)]/40 text-black"
                              : "border-border text-foreground/70"
                          }`}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-[var(--surface)] rounded-3xl p-6 sm:p-8 lg:p-10 h-full border border-border">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">
                    Reach
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-[var(--brand-brown)]">
                    On the map
                  </h3>
                </div>
                {zoomedState && (
                  <button
                    type="button"
                    onClick={() => setZoomedState(null)}
                    className="shrink-0 rounded-full border border-border px-3 py-1.5 text-xs text-foreground/60 hover:text-foreground touch-manipulation"
                  >
                    Show all of India
                  </button>
                )}
              </div>
              <div className="mt-4 h-72 sm:h-80 rounded-2xl border border-border overflow-hidden bg-white">
                <IndiaMap activeCity={activeCity} zoomedState={zoomedState} />
              </div>
              <p className="mt-2 text-center text-xs text-foreground/50">
                Hover a city, or click a state, to zoom in.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Partners */}
        <div id="recognition" className="scroll-mt-24">
          <Reveal>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">
                  Partners
                </p>
                <h2 className="mt-4 font-display text-3xl sm:text-5xl">
                  Institutions driving change with us.
                </h2>
              </div>
            </div>
          </Reveal>
          <div className="mt-12 flex flex-wrap rounded-2xl overflow-hidden border border-border">
            {partners.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 0.03}
                className="grow min-w-0 basis-1/2 sm:basis-1/3 lg:basis-1/4"
              >
                <div className="bg-background border-r border-b border-border p-4 sm:p-6 lg:p-8 h-full flex items-center justify-center text-center min-h-28">
                  <div>
                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="mx-auto h-16 w-auto object-contain mb-2"
                      />
                    ) : (
                      <Building2
                        size={20}
                        className="mx-auto text-[var(--brand-green)] mb-3"
                      />
                    )}
                    <div className="text-sm font-medium text-[var(--brand-brown)] leading-tight">
                      {p.name}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── GALLERY ───────────────────────── */

function Gallery() {
  const [cat, setCat] = useState<GalleryCat>("All");
  const [active, setActive] = useState<number | null>(null);
  const items =
    cat === "All"
      ? gallery.filter((g) => !g.hideFromAll)
      : gallery.filter((g) => g.cat === cat);

  // Starts at 3 to match the server-rendered markup (no `window` there);
  // corrected right after mount if the client is actually narrower, avoiding
  // a hydration mismatch from branching on `window` during initial render.
  const [colCount, setColCount] = useState(3);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setColCount(mq.matches ? 3 : 2);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Pack items into columns by always adding to the shortest column so far,
  // instead of CSS multi-column's approximate balance - keeps column bottoms
  // level instead of leaving a ragged gap under the shorter columns. Cards
  // no longer have a fixed pixel height (that's what forced cropping), so
  // this estimates each item's rendered height from its own aspect ratio at
  // a rough column width - close enough for balancing, doesn't need to be
  // exact since nothing here affects the actual rendered size.
  const columns = useMemo(() => {
    const assumedColWidth = colCount === 3 ? 400 : 170;
    const heights = new Array(colCount).fill(0);
    const cols: (typeof items)[number][][] = Array.from(
      { length: colCount },
      () => [],
    );
    items.forEach((g, i) => {
      let shortest = 0;
      for (let c = 1; c < colCount; c++)
        if (heights[c] < heights[shortest]) shortest = c;
      cols[shortest].push({ ...g, i } as (typeof items)[number] & {
        i: number;
      });
      heights[shortest] += assumedColWidth / g.ratio + 20;
    });
    return cols as ((typeof items)[number] & { i: number })[][];
  }, [items, colCount]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight")
        setActive((i) => (i === null || i >= items.length - 1 ? i : i + 1));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null || i <= 0 ? i : i - 1));
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, items.length]);

  return (
    <section id="gallery" className="section-pad bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">
                Gallery
              </p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Moments from the field.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {galleryTabs.map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => setCat(id)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition touch-manipulation ${
                    cat === id
                      ? "bg-[var(--brand-brown)] text-white"
                      : "bg-background border border-border text-foreground/70 hover:text-foreground active:text-foreground"
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-14 flex gap-5">
          {columns.map((col, ci) => (
            <div key={ci} className="flex min-w-0 flex-1 flex-col gap-5">
              <AnimatePresence mode="popLayout">
                {col.map((g) => (
                  <motion.button
                    key={`${g.caption}-${g.i}`}
                    data-cursor="plain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: g.i * 0.02 }}
                    onClick={() => setActive(g.i)}
                    className={`w-full relative overflow-hidden rounded-2xl ${g.img ? "bg-[var(--surface)]" : `bg-gradient-to-br ${g.tone}`} group block touch-manipulation`}
                    style={{ aspectRatio: g.ratio }}
                  >
                    {g.img && (
                      <img
                        src={g.previewImg ?? g.img}
                        alt={g.caption}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                    <div
                      className={`absolute inset-0 ${
                        g.img
                          ? "bg-gradient-to-t from-black/75 via-black/10 to-transparent"
                          : "bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]"
                      }`}
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-6">
                      <div className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-white/70">
                        {g.cat}
                      </div>
                      <div className="mt-1 sm:mt-2 font-display text-sm sm:text-xl text-white leading-snug">
                        {g.caption}
                      </div>
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition bg-black/20" />
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              data-cursor="plain"
              className="absolute top-6 right-6 text-white/70 hover:text-white"
            >
              <X size={28} />
            </button>
            {active > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActive((i) => (i === null || i <= 0 ? i : i - 1));
                }}
                aria-label="Previous photo"
                data-cursor="plain"
                className="absolute z-10 left-3 sm:left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white transition touch-manipulation"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            {active < items.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActive((i) =>
                    i === null || i >= items.length - 1 ? i : i + 1,
                  );
                }}
                aria-label="Next photo"
                data-cursor="plain"
                className="absolute z-10 right-3 sm:right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white transition touch-manipulation"
              >
                <ChevronRight size={24} />
              </button>
            )}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`relative rounded-3xl overflow-hidden ${
                items[active].img
                  ? "bg-[var(--surface)]"
                  : `bg-gradient-to-br ${items[active].tone} w-full max-w-2xl aspect-[4/3]`
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {items[active].img && (
                <img
                  src={items[active].img}
                  alt={items[active].caption}
                  className="block max-h-[80vh] max-w-[90vw] w-auto h-auto"
                />
              )}
              <div
                className={`absolute inset-0 ${
                  items[active].img
                    ? "bg-gradient-to-t from-black/75 via-black/10 to-transparent"
                    : ""
                }`}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-10">
                <div className="text-xs tracking-[0.2em] uppercase text-white/70">
                  {items[active].cat}
                </div>
                <div className="mt-2 font-display text-xl sm:text-3xl text-white">
                  {items[active].caption}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ───────────────────────── DONATE ───────────────────────── */

function Donate() {
  return (
    <section id="donate" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <Reveal>
            <div className="relative h-full rounded-3xl bg-[var(--brand-green)] text-white p-7 sm:p-10 lg:p-14 overflow-hidden">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--brand-gold)]/30 blur-3xl" />
              <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-gold)] font-medium">
                Donate
              </p>
              <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight text-white">
                Your contribution becomes someone's tomorrow.
              </h2>
              <p className="mt-6 text-white/85 max-w-md">
                Every rupee funds a scholarship, a surgery, a meal, a shelter.
                Direct bank transfer keeps overheads near zero.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border p-7 sm:p-10 lg:p-14 bg-[var(--surface)]">
              <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">
                Bank A/c Details
              </p>
              <h3 className="mt-3 font-display text-2xl text-[var(--brand-brown)]">
                Direct bank transfer
              </h3>
              <dl className="mt-8 divide-y divide-border">
                {[
                  [
                    "Account Name",
                    "Sohan Kanwar Mangilal Tater Charitable Trust",
                  ],
                  ["Bank Name", "RBL Bank"],
                  ["Account Number", "309841435214"],
                  ["IFSC", "RATN0000187"],
                ].map(([k, v]) => (
                  <div key={k} className="py-4 flex justify-between gap-6">
                    <dt className="text-sm text-foreground/55 uppercase tracking-wider">
                      {k}
                    </dt>
                    <dd className="text-sm font-medium text-[var(--brand-brown)] text-right">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-xs text-foreground/55">
                For 80G receipts and queries, please reach out via the contact
                section below.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── ABOUT ───────────────────────── */

function TrustReportVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video lg:aspect-auto lg:flex-1 overflow-hidden rounded-3xl border border-border bg-white shadow-[0_24px_70px_-35px_rgba(0,0,0,0.35)]">
      {playing ? (
        <iframe
          title="Sohan Kanwar Mangilal Tater Charitable Trust report"
          src="https://www.youtube-nocookie.com/embed/1eyNLVcsQZU?autoplay=1"
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label="Play the Trust report video"
          data-cursor="plain"
        >
          <img
            src={trustLogo}
            alt=""
            className="absolute inset-0 h-full w-full object-contain p-10 sm:p-14"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-lg">
              <Play size={26} className="ml-1 fill-white text-white" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section-pad bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-14 lg:space-y-24">
        {/* Story */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 lg:items-stretch">
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">
                Our Story
              </p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.05]">
                A quiet legacy of service.
              </h2>
            </Reveal>
            <div className="space-y-6 text-lg text-foreground/75 leading-relaxed">
              <Reveal delay={0.1}>
                <p>
                  Established in{" "}
                  <span className="text-[var(--brand-brown)] font-medium">
                    2011
                  </span>
                  , the Sohan Kanwar Mangilal Tater Charitable Trust is
                  headquartered in Chennai, Tamil Nadu, with deep roots in Merta
                  City, Rajasthan.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Across more than a decade, the Trust has worked steadily across
                  two states - funding scholarships, building healthcare
                  infrastructure, supporting maternity care, and standing
                  alongside communities, animals, and institutions in need.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  The work is named for the families behind it but belongs to the
                  people it serves: students, patients, mothers, elders, and the
                  silent rural backbone of India.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-5 lg:h-full">
            <Reveal delay={0.15} className="flex h-full flex-col">
              <TrustReportVideo />
              <a
                href="https://www.youtube.com/watch?v=1eyNLVcsQZU"
                target="_blank"
                rel="noreferrer"
                data-cursor="plain"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--brand-green)]"
              >
                Watch on YouTube <ArrowUpRight size={14} />
              </a>
            </Reveal>
          </div>
        </div>

        {/* Mission Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              tag: "Mission",
              title:
                "To uplift lives through education, healthcare and compassion - without distinction.",
              tone: "bg-background",
            },
            {
              tag: "Vision",
              title:
                "A society where opportunity, dignity and care are within reach of every individual.",
              tone: "bg-[var(--brand-brown)] text-white",
            },
          ].map((c, i) => (
            <Reveal key={c.tag} delay={i * 0.1}>
              <div
                className={`${c.tone} rounded-3xl p-6 sm:p-10 lg:p-14 border border-border h-full`}
              >
                <div
                  className={`text-xs tracking-[0.22em] uppercase font-medium ${i ? "text-[var(--brand-gold)]" : "text-[var(--brand-green)]"}`}
                >
                  {c.tag}
                </div>
                <p
                  className={`mt-6 font-display text-2xl lg:text-3xl leading-snug ${i ? "text-white" : "text-[var(--brand-brown)]"}`}
                >
                  {c.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Values */}
        <div>
          <Reveal>
            <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">
              Core Values
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-tight">
              What we hold close.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.05}>
                <div className="bg-background rounded-2xl border border-border p-5 h-full hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)] active:-translate-y-1 active:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)] transition-all duration-500 flex items-center justify-between gap-4 touch-manipulation">
                  <div>
                    <h3 className="font-display text-lg text-[var(--brand-brown)]">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-foreground/65">{text}</p>
                  </div>
                  <div className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[var(--brand-gold)]/40 text-[var(--brand-brown)]">
                    <Icon size={18} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CONTACT ───────────────────────── */

function Contact() {
  return (
    <section id="contact" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.22em] uppercase text-[var(--brand-green)] font-medium">
            Contact
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance max-w-3xl">
            We'd love to hear from you.
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  text: "No 52, Maddox Street, 1st Floor, Vepery, Chennai 600007",
                },
                { icon: Phone, title: "Phone", text: "+91 95661 11058" },
                { icon: Mail, title: "Email", text: "smtaterctrust@gmail.com" },
                {
                  icon: Clock,
                  title: "Office hours",
                  text: "Mon - Sat · 10:00 AM – 6:00 PM",
                },
              ].map((c) => (
                <div key={c.title} className="flex gap-5">
                  <div className="shrink-0 h-12 w-12 rounded-xl bg-[var(--brand-gold)]/40 inline-flex items-center justify-center text-[var(--brand-brown)]">
                    <c.icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-foreground/55">
                      {c.title}
                    </div>
                    <div className="mt-1 text-base sm:text-lg text-[var(--brand-brown)] font-medium">
                      {c.text}
                    </div>
                  </div>
                </div>
              ))}
              <p className="text-sm text-foreground/55 pt-4 border-t border-border">
                We typically respond within 2 business days.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href="https://maps.app.goo.gl/HB8H5LreVFancPEFA"
              target="_blank"
              rel="noreferrer"
              data-cursor="plain"
              className="block h-[280px] sm:h-[420px] rounded-3xl overflow-hidden border border-border relative bg-[var(--surface)] group"
            >
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=1st+Floor,+52,+Maddox+St,+Periamet,+Periyamedu,+Choolai,+Chennai,+Tamil+Nadu+600007&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur px-4 py-2 rounded-full text-xs font-medium text-[var(--brand-brown)] shadow-lg inline-flex items-center gap-1.5">
                Open in Maps <ArrowUpRight size={14} />
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */

function Footer() {
  useEffect(() => {}, []);
  return (
    <footer
      className="bg-[var(--brand-brown)] text-white/80"
      data-cursor="plain"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={trustLogo}
              alt="Trust"
              className="h-12 w-12 object-contain rounded-full bg-white p-1"
            />
            <div>
              <div className="font-display text-white text-lg leading-tight">
                Sohan Kanwar Mangilal Tater
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/50">
                Charitable Trust
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gold)]">
            Navigate
          </div>
          <ul className="mt-5 space-y-2 text-sm">
            {["Home", "Impact", "Our Work", "Gallery", "Donate", "About"].map(
              (l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(" ", "")}`}
                    className="hover:text-white transition"
                  >
                    {l}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gold)]">
            Reach
          </div>
          <ul className="mt-5 space-y-2 text-sm">
            <li>Chennai, Tamil Nadu</li>
            <li>Coimbatore, Tamil Nadu</li>
            <li>Bengaluru, Karnataka</li>
            <li>Jaipur, Rajasthan</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row gap-3 justify-between text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Sohan Kanwar Mangilal Tater Charitable
            Trust. All rights reserved.
          </div>
          <div>Estd. 2011</div>
        </div>
      </div>
    </footer>
  );
}
