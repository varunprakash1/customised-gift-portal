import React from 'react';
import '../Asserts/css/About.css';
import Navbar from './Navbar';
import { useState ,useEffect} from 'react';
import Newloader from './Newloader';
const AboutUs = () => {
  const [loading,setLoad]=useState(true);
  useEffect(()=>{

    const timer=setTimeout(()=>{
      setLoad(false);
    },3000);
    return ()=>clearTimeout(timer);
  },[])
return (loading?
  (<>
   <Newloader/>
  </>):
    (
  <>
      <Navbar/>
  <div className="about-us-container">
      <div className="header">
        <h1>Welcome to Giftify - Your Ultimate Destination for Personalized Gifts!</h1>
      </div>
      <div className="content">
        <section className="intro">
          <p>
            At Giftify, we believe that every gift tells a story. Established in 2024, we embarked on a journey to transform the way people express their emotions through gifts. Our mission is simple: to help you create lasting memories by offering unique, personalized gifts that speak from the heart.
          </p>
        </section>
        <section className="who-we-are">
          <h2>Who We Are</h2>
          <p>
            Giftify is a team of passionate individuals dedicated to bringing you the best in customized gifts. From creative designers to skilled craftsmen, our diverse team works tirelessly to ensure each product is crafted with love and precision. Our online portal offers a seamless shopping experience, where you can easily find the perfect gift for any occasion, be it birthdays, anniversaries, weddings, or just because.
          </p>
        </section>
        <section className="our-promise">
          <h2>Our Promise</h2>
          <ul>
            <li><strong>Quality:</strong> We source the finest materials to ensure that every gift is of the highest quality.</li>
            <li><strong>Customization:</strong> Our state-of-the-art customization options allow you to add a personal touch to every product.</li>
            <li><strong>Customer Satisfaction:</strong> Your happiness is our priority. We strive to provide exceptional customer service and a hassle-free shopping experience.</li>
          </ul>
        </section>
        <section className="our-products">
          <h2>Our Products</h2>
          <p>
            At Giftify, we offer a wide range of products that can be personalized to your liking. From custom-engraved jewelry and monogrammed accessories to personalized home décor and photo gifts, our collection is designed to cater to all tastes and preferences. We are constantly updating our inventory with new and innovative products to keep up with the latest trends and your evolving needs.
          </p>
        </section>
        <section className="why-choose-us">
          <h2>Why Choose Us</h2>
          <ol>
            <li><strong>Unique Designs:</strong> Our team of talented designers creates one-of-a-kind products that you won’t find anywhere else.</li>
            <li><strong>Easy Customization:</strong> Our user-friendly online customization tool makes it easy to create the perfect gift in just a few clicks.</li>
            <li><strong>Fast Shipping:</strong> We understand that timing is crucial. That’s why we offer fast and reliable shipping options to ensure your gift arrives on time.</li>
            <li><strong>Eco-Friendly:</strong> We are committed to sustainability and use eco-friendly materials wherever possible.</li>
          </ol>
        </section>
        <section className="community">
          <h2>Join Our Community</h2>
          <p>
            We believe in the power of community and invite you to join ours. Follow us on social media to stay updated on the latest products, special offers, and behind-the-scenes glimpses into our creative process. Share your Giftify moments with us using the hashtag #GiftifyMoments and become a part of our ever-growing family.
          </p>
        </section>
        <section className="contact-us">
          <h2>Contact Us</h2>
          <p>
            Got a question? Need help with your order? Our friendly customer support team is here to assist you. Reach out to us via email, phone, or live chat, and we’ll be happy to help.
          </p>
        </section>
      </div>
    </div>
  </>
  )
  );
};

export default AboutUs;
