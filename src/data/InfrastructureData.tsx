import { Cable, Factory, Inventory, PrecisionManufacturing } from "@mui/icons-material";

export const infrastructureData = [
    {
        title: "SMT And MI",
        dataAos: "fade-up",
        description: "Cutting-edge SMT & MI lines ensuring precision and efficiency.",
        image: "infra/smt.webp",
        link: 'smt-and-mi',
        icon: <PrecisionManufacturing fontSize="large" />,
    },
    {
        title: "DC Cables Production",
        dataAos: "fade-up",
        description: "Advanced facility for producing high-quality DC cables with strict quality control.",
        image: "infra/new/dec3.webp",
        link: 'dc-cables-production',
        icon: <Cable fontSize="large" />,
    },
    {
        title: "Assembly And Packing",
        dataAos: "fade-up",
        description: "Streamlined assembly and packaging lines for optimized production.",
        image: "infra/asm.webp",
        link: 'assembly-and-packing',
        icon: <Factory fontSize="large" />,
    },
    {
        title: "Injection Moulding",
        dataAos: "fade-up",
        description: "State-of-the-art molding technology for durable and precise components.",
        image: "infra/new/md11.webp",
        link: 'injection-moulding',
        icon: <Inventory fontSize="large" />,
    },
];