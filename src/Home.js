import { Link } from "react-router-dom";

const Home = (props) => {
  console.log(props);

  return (
    <div className="page home">
      <h1>Home</h1>
      {props.data.offers.map((offer, index) => {
        return (
          <div>
            <Link key={index} to={`/Offers/${offer._id}`}>
              ===: {offer.product_name}
            </Link>
            <br />
          </div>
        );
      })}

      <br />
      {/* <Link to={`/product/${name}`}>Go to product Page with name: {name}</Link> */}
    </div>
  );
};

export default Home;
