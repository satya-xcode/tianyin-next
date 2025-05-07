import { Business, ElectricalServices, EvStation, Settings } from "@mui/icons-material";

export const industries = [
    {
        title: "Chargers & Adapters | Best Charger Manufacturer in Noida",
        dataAos: "fade-up",
        subtitle: "Power Solutions",
        description: "Tianyin Worldtech is a leading charger manufacturer in Noida, offering high-quality chargers and adapters for various applications. Our precision-engineered power solutions ensure reliability and efficiency.",
        image: "/products/oem/charger.png",
        alt: "High-quality chargers and adapters by Tianyin Worldtech",
        category: "products",
        icon: <ElectricalServices fontSize="large" />,
        schema: {
            "@type": "Product",
            "name": "Chargers & Adapters",
            "description": "High-quality chargers and adapters for various applications with precision engineering.",
            "image": "https://www.tianyin.in/products/oem/charger.png",
            "brand": {
                "@type": "Brand",
                "name": "Tianyin Worldtech"
            }
        }
    },
    {
        title: "EV Solutions | Electric Vehicle Components Manufacturer",
        dataAos: "fade-up",
        subtitle: "Electric Vehicle Components",
        description: "As a trusted EV solutions provider, Tianyin Worldtech offers innovative electric vehicle components designed for efficient energy management and reliability.",
        image: "/products/oem/ac.png",
        alt: "Electric vehicle components by Tianyin Worldtech",
        category: "ev",
        icon: <EvStation fontSize="large" />,
        schema: {
            "@type": "Product",
            "name": "EV Solutions",
            "description": "Innovative EV components ensuring efficient energy management and reliability.",
            "image": "https://www.tianyin.in/products/oem/ac.png",
            "brand": {
                "@type": "Brand",
                "name": "Tianyin Worldtech"
            }
        }
    },
    {
        title: "Telecom Equipment | Advanced Connectivity Solutions",
        dataAos: "fade-up",
        subtitle: "Advanced Connectivity Solutions",
        description: "Tianyin Worldtech provides state-of-the-art telecom equipment for high-speed and reliable communication, ensuring seamless connectivity for your business.",
        image: "/products/oem/wifi.png",
        alt: "Telecom equipment by Tianyin Worldtech",
        category: "telecom",
        icon: <Settings fontSize="large" />,
        schema: {
            "@type": "Product",
            "name": "Telecom Equipment",
            "description": "State-of-the-art telecom equipment supporting high-speed and reliable communication.",
            "image": "https://www.tianyin.in/products/oem/wifi.png",
            "brand": {
                "@type": "Brand",
                "name": "Tianyin Worldtech"
            }
        }
    },
    {
        title: "OEM Manufacturing | Custom Manufacturing Solutions",
        dataAos: "fade-up",
        subtitle: "Custom Manufacturing Solutions",
        description: "Tianyin Worldtech specializes in comprehensive OEM manufacturing solutions, tailored to meet your specific business needs with precision and efficiency.",
        image: "/products/oem/manufacturing.png",
        alt: "OEM manufacturing solutions by Tianyin Worldtech",
        category: "oem",
        icon: <Business fontSize="large" />,
        schema: {
            "@type": "Product",
            "name": "OEM Manufacturing",
            "description": "Comprehensive OEM solutions tailored to your specific business needs.",
            "image": "https://www.tianyin.in/products/oem/manufacturing.png",
            "brand": {
                "@type": "Brand",
                "name": "Tianyin Worldtech"
            }
        }
    },
];