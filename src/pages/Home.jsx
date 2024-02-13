import { useEffect, useState } from "react"
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import Food_item from "../components/Food_item"
import { supabase } from "../../supabaseClient";
import { useQuery } from '@tanstack/react-query';


function Home() {
  // const [list, setlist] = useState([])
  console.log("Home");

  const { data: menuItems, isLoading, error } = useQuery({
    queryKey:['menuItems'],queryFn: fetchMenuItems,
  });

  async function fetchMenuItems() {
    console.log("fetchMenuItems");

    try {
      let { data: menuitems, error } = await supabase
        .from('menuitems')
        .select('*')
      console.log(menuitems);
      return menuitems
    } catch (error) {
      console.log("Error in Home.jsx fetchMenuItems fn :", error);
    }

  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <nav className="flex justify-between items-center">
        <SignedIn><SignOutButton><button className="button ">Sign Out</button></SignOutButton></SignedIn>
        <p className="button">Cart:{}</p>
      </nav>
      Home
      {
        
        menuItems.map((item) => {
          console.log(item);
          return <Food_item foodName={item.name} key={item.MenuItemID}/>})
      }
    </div>
  )
}

export default Home