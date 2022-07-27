import { useParams } from "react-router-dom";

const Offers = (props) => {
  const { offerId } = useParams();

  console.log(offerId);
  return (
    <div>
      <h1>Offer</h1>
      {props.data.offers.map((offer, index) => {
        return (
          offerId === offer._id && (
            <div>
              nom:{offer.product_name}
              <br />
              prix:{offer.product_price}
              <br />
              <img src={offer.product_pictures[0].url} alt="" />
            </div>
          )
        );
      })}

      <br />
      {/* <Link to={`/product/${name}`}>Go to product Page with name: {name}</Link> */}
    </div>
  );
};

export default Offers;
