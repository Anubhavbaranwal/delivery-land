import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisibe }) => {
  return (
    <div className="m-1 p-2 bg-white border rounded border-grey-200">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl ">{title}</h1>
        {!isVisible ? (
          <button onClick={() => setIsVisibe(true)}>➕</button>
        ) : (
          <button onClick={() => setIsVisibe(false)}>➖</button>
        )}
      </div>
      {isVisible && <p>{description}</p>}
    </div>
  );
};
const footer = () => {
  const [visibleSection, setVisibleSection] = useState([]);
  return (
    <div className=" py-4 mt-12 bg-slate-200">
      <h1 className="text-center justify-center font-bold text-3xl">
        Created by Anubhav and Utsav{" "}
      </h1>
      <Section
        title={"About Us"}
        description={
          "With the rise of internet orders, particularly in the food and grocery industries, in recent years Swiggy has started its latest initiative, Instamart, with the goal of delivering groceries and other necessities.Instamart is a chain of online convenience stores. Instant meals, snacks, fruits and vegetables, ice creams, and other things are available through these virtual convenience stores.Swiggy provides these things through its partner “dark stores,” which are exclusively available online and its hubs"
        }
        isVisible={visibleSection === "about"}
        setIsVisibe={() =>
          !(visibleSection === "about")
            ? setVisibleSection("about")
            : setVisibleSection(" ")
        }
      />
      <Section
        title={"How Delivery Land works?"}
        description={
          "Delivery Land has over 20 million monthly users and does 1.5 million orders a day as of June 2021. Its orders have grown 2.5 times, while revenue has grown 2.8 times from June 2020 to June 2021.Based on the insight that households order a limited subset of products every day, Swiggy Instamart promises to deliver your order within 45 minutes, from 7 am to 1 am.The marketplace business aggregated with local Kirana stores from where users could get grocery, fresh produce, essential products, and food items delivered through Swiggy’s delivery fleet.The company also has a slew of specialized services under its stores business such as meat and seafood, pet care, etc."
        }
        isVisible={visibleSection === "working"}
        setIsVisibe={() =>
          !(visibleSection === "working")
            ? setVisibleSection("working")
            : setVisibleSection(" ")
        }
      />
      <Section
        title={
          " Yes, we deliver in minutes. No, we don’t commit to doing so in 10-minutes "
        }
        description={
          "With Instamart, customers will always get a range on the delivery promise. The range will depend on various factors like location, time of the day and the on-ground situation. When we started Swiggy Instamart we did deliveries in 30-45 minutes, with growth in the number of dark stores, improved tech, logistics and learnings, we brought it down 15-30 minutes. It’s not something that happened overnight nor something we worked backwards from. "
        }
        isVisible={visibleSection === "delivertime"}
        setIsVisibe={() =>
          !(visibleSection === "delivertime")
            ? setVisibleSection("delivertime")
            : setVisibleSection(" ")
        }
      />
      <Section
        title={"It’s not just faster; it’s fresher "}
        description={
          "Working with Farmer Producer Organizations (FPOs) and farmers through our third-party sellers allows us to get food from farm to table in under 24 hours. What this means is lesser use of shelf life-extending packaging and preservatives. Swiggy Instamart has also doubled down on the selection of verified, certified-organic produce, getting consumers a variety of organic and even hydroponically grown produce."
        }
        isVisible={visibleSection === "fresher"}
        setIsVisibe={() =>
          !(visibleSection === "fresher")
            ? setVisibleSection("fresher")
            : setVisibleSection(" ")
        }
      />
      <Section
        title={"Yes, groceries on-demand is a need for many"}
        description={
          "Instamart’s users are those who are time-pressed and/or convenience seeking. While we initially believed that this meant the younger demographic of under 35, the last 22 months have seen users across all demographics. People who cannot head to a supermarket or a kirana store due to time constraints, work, family or health commitments or simply those who want to use that time to relax and unwind. On-demand purchases are also bringing about a reduction in hoarding and wastage as people are only buying what they need. "
        }
        isVisible={visibleSection === "somequestion"}
        setIsVisibe={() =>
          visibleSection === "somequestion"
            ? setVisibleSection(" ")
            : setVisibleSection("somequestion")
        }
      />
    </div>
  );
};
export default footer;
