import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const KEY =
  "pk_test_51NRPXuGK5Qw843gXXd9gxrYiAHVzFB8aMVUZYnyLDM6s138XbHSR4ku5AA37dbMN3gkevfdJwPu77jnjfklTiYuG00elmALiKz";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
        navigate("/home");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name="NJD shop"
          image="https://hoopshype.com/wp-content/uploads/sites/92/2023/07/2k24-KOBE-1-crop.jpeg?w=1000&h=600&crop=1"
          shippingAddress
          billingAddress
          description="Your total is ..."
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: 900,
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
