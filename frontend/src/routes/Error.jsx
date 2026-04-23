import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import Title from "../components/ui/Titles/Title"; 
import GlassButton from "../components/ui/Buttons/GlassButton";

function Error() {
    const navigate = useNavigate();

    return (
        <Flex 
            direction="column" 
            align="center" 
            justify="center" 
            minH="80vh" 
            px={4}
            gap={8}
        >
            <Title 
                title="There's been an error on our server" 
                subtitle="We are sorry, try again later" 
                align="center" 
            />

            <GlassButton 
                text="RETURN TO HOMEPAGE" 
                onClick={() => navigate('/')} 
            />
        </Flex>
    );
}

export default Error;