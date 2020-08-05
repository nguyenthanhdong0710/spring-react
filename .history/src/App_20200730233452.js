import React, { useState, useEffect } from "react";
import "./App.css";
import Routers from "./routers";
import DataFake from "./dataFake";
import categories from "./categoriesFake";
// import gameApi from "./api/gameApi";
// import categoryApi from "./api/categoryApi";
function App() {
  const [getGames, setGames] = useState(DataFake);
  const [getCategories, setCategories] = useState(categories);
  // useEffect(() => {
  //   const getProducts = async () => {
  //     /////////// Show
  //     try {
  //       //game
  //       const games = await (await gameApi.getAll()).data;
  //       setGames(games);
  //       //categories
  //       const cates = [];
  //       await (await categoryApi.getAll()).data.map((cate) => {
  //         cates.push({ label: cate.name + "🍇", value: cate.name });
  //       });
  //       setCategories(cates);
  //     } catch (error) {}

  //     //Update
  //     const onHandleUpdate = (updateProduct) => {
  //       const newProducts = products.map((product) =>
  //         product.id === updateProduct.id ? updateProduct : product // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
  //       );
  //       localStorage.setItem("products", JSON.stringify(newProducts));
  //       setProducts(newProducts);
  //     };
  //   };
  //   getProducts();
  // }, []);
  const onAddHandle = (game) => {
    setGames([...getGames, game]);
    alert("Add game successfully!");
  };
  const onDeleteHandle = (id) => {
    setGames(getGames.filter((game) => game.id !== id));
  };
  const onUpdateGameHandle = (game) => {
    const index = getGames.findIndex((game1) => game1.id === game.id);
    getGames[index] = game;
    setGames(getGames);
    console.log(index);
    console.log(getGames[index]);
    console.log(game);
  };
  return (
    <div className="App">
      <Routers
        games={getGames}
        categories={getCategories}
        onAddGameHandle={onAddHandle}
        onDeleteRowHandle={onDeleteHandle}
        onUpdateGameHandle={onUpdateGameHandle}
      />
    </div>
  );
}
export default App;
