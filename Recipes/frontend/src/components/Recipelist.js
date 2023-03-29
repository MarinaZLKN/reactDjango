import React, { useEffect, useState} from "react";


const Recipelist = () => {

    const [data, setData] = useState(null);

      useEffect(() => {
        const fetchData = () => {
          fetch("api/recipelist")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
              setData(data);
              console.log('response')
              console.log(data)
            });
        };
        fetchData();
      }, []);

      return (
        <div className="container1">

          <div className="recipe-list">
              {data &&
                data.map((recipe) => {
                  return (
                    <div  key={recipe.id}>
                      <h1>
                        <li>
                           {recipe.title} - {recipe.description}
                        </li>
                        </h1>
                    </div>
              );
            })}
          </div>
        </div>
      );
};

export default Recipelist;