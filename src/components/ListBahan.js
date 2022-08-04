import { Typography } from "@mui/material";

const ListBahan = ({data}) => {
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

export default ListBahan;