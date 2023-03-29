import React, { useState, useEffect } from "react";
import '../styles/CategotyList.css'


const CategoryList = () => {

    const [data, setData] = useState(null);

      useEffect(() => {
        const fetchData = () => {
          fetch("api/categorylist")
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setData(data);
            });
        };
        fetchData();
      }, []);

      return (
        <div className="container">

          <div className="category-list">
              {data &&
                data.map((category) => {
                  return (
                    <div  key={category.id}>
                      <h1>
                        <div>
                           {category.name}
                        </div>
                        </h1>
                    </div>
              );
            })}
          </div>
          <div className="welcome-text">
              <label>
                  Not everybody loves cooking, but once in a blue moon, we always get the urge to jump into the
                  kitchen and whip up something delicious. However, it is hard to keep your culinary game fresh if you
                  lack new ideas and always prepare the same old dish that you inherited from your mum. This is why
                  you need to check out various recipe websites for inspiration. But, how do you know what to
                  cook, considering that there are thousands of recipes out there? This is why we have scoured through
                  the internet and brought you some of the best recipes.
              </label>
          </div>


        </div>
      );
};

export default CategoryList;