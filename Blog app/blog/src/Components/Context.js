import React, { useContext, useEffect, useState } from "react";

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {

    const [data, setdata] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
        
            .then(response => response.json())
            .then(json => setdata(json))

    }, [])
   

    return (
        <Appcontext.Provider value={{ data }}>
          {children}
        </Appcontext.Provider>
      );


}

const useGlobalContext = () => {

    return useContext(Appcontext);
    
  };

  export { Appcontext, AppProvider, useGlobalContext };