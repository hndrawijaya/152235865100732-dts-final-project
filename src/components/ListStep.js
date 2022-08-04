import { Typography } from "@mui/material";

const ListStep = ({data}) => {
        return (
                <>
                        {data.map((item) => (
                                <Typography textAlign={"left"} variant="caption" display="block" gutterBottom>
                                        {item}
                                </Typography>
                        ))}
                </>
        );
}

export default ListStep;