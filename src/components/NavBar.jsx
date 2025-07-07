import CartWidget from "./CartWidget";
import "./NavBar.css";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  async function getCategories() {
    try {
      const resp = await fetch("https://dummyjson.com/products/category-list");
      const fetchedData = await resp.json();

      if (!resp.ok) {
        throw new Error("Error en la solicitud de datos de categorias");
      }

      setCategories(fetchedData);
    } catch (error) {
      console.error("Ha ocurrido un error: ", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;

    if (selectedCategory === "todas") {
      navigate("/"); //
    } else if (selectedCategory) {
      navigate(`/category/${selectedCategory}`);
    }
  };

  return (
    <nav className="nav-container">
      <h1>
        <NavLink to="/">E-Commerce</NavLink>
      </h1>

      <select
        className="categorias"
        onChange={handleCategoryChange}
        defaultValue=""
      >
        <option value="todas" className="categoria">
          Selecciona una categoría
        </option>
        {categories.map((category) => (
          <option className="categoria" key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
