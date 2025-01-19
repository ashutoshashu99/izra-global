import React, { useState } from "react";
import Rice from "../../assets/rice.jpg"; // Static image importsrc/assets/ rice.png
import Jaggery from "../../assets/jaggery.jpg"; // Static image import
import Fruits from "../../assets/fruits.jpg"; // Static image
import Vegetables from "../../assets/vegetables.jpg"; // Static image
import Spices from "../../assets/spices.jpg"; // Static image
import Foxnuts from "../../assets/foxnut.jpg"; // Static image
const categoryList = [
  {
    title: "Foxnut (Makhana)",
    desc: "Izra Global offers premium-quality foxnuts (makhana), sourced from the finest water lily seeds and processed to maintain their crunch, purity, and nutritional integrity. Known for their numerous health benefits, foxnuts are naturally gluten-free, low in calories, and rich in protein, making them an ideal snack for weight management and overall wellness. Perfectly roasted and lightly salted, our foxnuts make for a guilt-free snack or can be used as an ingredient in traditional recipes like kheer, curries, or ladoos. With Izra Global, you get foxnuts that combine taste, health, and quality in every bite.",
    img: Foxnuts, // Empty image path
  },
  {
    title: "Rice",
    desc: "At Izra Global, we take pride in offering premium-quality rice to meet all your culinary needs. Our range includes top-tier Basmati rice, Parboiled rice, and the highly sought-after 1121 Basmati rice. Sourced from trusted suppliers, each variety is carefully selected for its superior texture, aroma, and taste. We are committed to delivering the best rice at the most competitive rates, ensuring both value and satisfaction for our customers. Whether you're preparing everyday meals or special dishes, Izra Global guarantees the finest rice for every occasion.",
    img: Rice, // Empty image path
  },
  {
    title: "Jaggery",
    desc: "Izra Global offers a diverse range of high-quality jaggery products, each crafted to deliver authentic sweetness and rich flavor. We provide jaggery slabs, the traditional solid block form, ideal for a variety of uses. Our jaggery powder is fine and granulated, making it perfect for easy incorporation into recipes. For added convenience, we offer jaggery cubes, which are bite-sized for controlled use. We also provide jaggery chana, a delightful combination of jaggery and roasted chickpeas that offers a sweet and crunchy snack. For those with a taste for bold flavors, our spicy jaggery blends the sweetness of jaggery with a mix of spices. Finally, we offer pure cane jaggery made from sugarcane, packed with natural minerals and rich taste. Each product is carefully sourced to ensure authenticity and superior quality, making Izra Global your trusted partner for all your jaggery needs.",
    img: Jaggery, // Empty image path
  },
  {
    title: "Spices",
    desc: "Izra Global provides a wide variety of premium quality spices, each selected to bring rich flavors and aroma to your kitchen. Our red chilli offers a vibrant and spicy kick, perfect for any dish that needs an extra zest. Cumin adds an earthy and warm flavor, ideal for both savory and sweet recipes. Our coriander spice delivers a citrusy and slightly sweet taste, enhancing a variety of dishes. Turmeric, known for its golden color and earthy flavor, is packed with numerous health benefits. Fennel offers a sweet, licorice-like flavor, great for both cooking and baking. Fenugreek brings a slightly bitter yet savory flavor, often used in curry and stews. Our cardamom spice is fragrant and aromatic, a wonderful addition to both sweet and savory dishes. Mustard adds a sharp and tangy note to enhance the taste of any meal. Ginger offers a spicy, zesty kick, perfect for curries and beverages. Lastly, our black pepper is rich and robust, making it an essential ingredient for seasoning and marinating. Each of our spices is carefully sourced to ensure freshness and authenticity, helping you elevate your culinary creations with the finest ingredients.",
    img: Spices, // Empty image path
  },
  {
    title: "Vegetables",
    desc: "Izra Global offers a wide selection of fresh and high-quality vegetables, sourced to bring the best flavors to your table. Our onions are rich in flavor, perfect for adding depth to any dish. The tomatoes are juicy and ripe, making them an ideal base for sauces and salads. Our cabbage is crisp and versatile, ideal for salads, stews, or sautéing. Potatoes are fresh and hearty, perfect for a variety of dishes, from mashed to roasted. Beans are tender and packed with nutrients, offering a satisfying crunch. Garlic, with its bold and aromatic flavor, enhances the taste of any savory dish. Fresh spinach provides a vibrant green color and is perfect for both cooking and raw applications. Cauliflower is versatile, ideal for roasting, stews, or as a substitute in various dishes. Okra is known for its tender texture and ability to absorb flavors, a great addition to curries and stews. Finally, our cucumbers are crisp and refreshing, ideal for salads and refreshing summer dishes. Each vegetable is selected with care to ensure freshness, delivering taste and nutrition to your meals.",
    img: Vegetables, // Empty image path
  },
  {
    title: "Fruits",
    desc: "Izra Global offers a diverse range of fresh, juicy, and delicious fruits, ensuring that each bite is packed with flavor and nutrients. Our pomegranates are ripe and full of antioxidants, perfect for snacking or adding to salads. Mangoes, with their sweet and fragrant aroma, are a tropical delight that can be enjoyed in a variety of dishes or on their own. Our apples are crisp, fresh, and ideal for a healthy snack or adding a touch of sweetness to your recipes. Oranges, known for their refreshing taste and vitamin C content, are perfect for juicing or eating fresh. Watermelons are juicy and hydrating, making them a refreshing treat during warmer months. Bananas are a natural source of energy and perfect for smoothies, baking, or simply enjoying as a quick snack. Finally, our grapes are plump and sweet, offering a satisfying bite whether eaten fresh or used in desserts. With our wide range of fruits, Izra Global ensures that you always have access to nature's finest offerings.",
    img: Fruits, // Empty image path
  },
  
];

const ProjectCard = ({ category }) => {
  return (
    <section className="flex flex-col md:flex-row" id="media">
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold">{category.title}</h1>
        <p className="py-8 mr-8 h-auto md:h-36">{category.desc}</p>
        {/* <button className="px-6 py-3 bg-white border text-black rounded-full border-[#F4B400] hover:bg-[#F4B400] hover:text-white duration-300 transition-all">
          Raise query
        </button> */}
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        {category.img ? (
          <img className="rounded-lg transform transition duration-300 hover:scale-105 w-full" src={category.img} alt={category.title} />
        ) : (
          <p>No Image Available</p>
        )}
      </div>
    </section>
  );
};

const Section3 = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <section className="p-8 md:p-20 bg-[#FFFFFF]">
      <div className="pb-12 md:pb-20">
        <h1 className="text-3xl md:text-4xl font-semibold pb-6 md:pb-8">
          <span className="text-[#2F6B3C]">Products</span> we deal in
        </h1>
        <p className="text-lg md:text-xl w-full md:w-1/2">
        Izra Global delivers premium-quality rice, jaggery, fresh vegetables, seasonal fruits, and nutritious foxnuts. Sourced sustainably, each product offers exceptional taste, freshness, and health benefits, ensuring quality and purity for daily meals, snacks, and culinary creations.
        </p>
      </div>

      <div>
        <div className="flex overflow-x-auto md:overflow-visible pb-8 md:pb-20 ml-4 md:ml-8">
          {["Foxnut","Rice", "Jaggery", "Spices", "Vegetables", "Fruits"].map((name, index) => (
            <div key={`button-${index}`} className="mr-6 md:mr-12">
              <button
                className={`text-lg md:text-2xl ${
                  sliderIndex === index
                    ? "underline font-semibold decoration-yellow-400 underline-offset-8 decoration-4"
                    : ""
                } w-32 md:w-40`}
                onClick={() => setSliderIndex(index)}
              >
                {name}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center md:justify-start">
        <ProjectCard category={categoryList[sliderIndex]} />
      </div>
    </section>
  );
};

export default Section3;