import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            toy details page
        </div>
    );
};

export default ToyDetails;