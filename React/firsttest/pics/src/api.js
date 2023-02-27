import axios from "axios";

const searchImages = async (term) => {

    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID ygSKb238oqE5LdT-3UmjzC1R_FoUpAKGRCVH8oEhrYs"
        },
        params: {
            query: term
        }
    })

    return response.data.results;

}

export default searchImages;