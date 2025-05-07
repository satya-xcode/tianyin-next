import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useDeviceType = () => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 600px
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px - 900px
    const isDesktop = useMediaQuery(theme.breakpoints.between("md", "lg")); // 900px - 1200px
    const isLargeDesktop = useMediaQuery(theme.breakpoints.between("lg", "xl")); // 1200px - 1536px
    const isExtraLargeDesktop = useMediaQuery(theme.breakpoints.up("xl")); // > 1536px

    return {
        isMobile,
        isTablet,
        isDesktop,
        isLargeDesktop,
        isExtraLargeDesktop,
    };
};

export default useDeviceType;