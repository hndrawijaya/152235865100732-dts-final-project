import { useParams } from "react-router-dom";
import NewList from "../components/NewList";

const Search = () => {
        
        const params = useParams();
        const key = params?.key ;

        const urlSearch = '/search/?q=' + key;

        return (
                <NewList url={ urlSearch } />
        );
}

export default Search;