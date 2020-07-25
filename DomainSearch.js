import React, { useState } from 'react';
import SearchResults from './SearchResults';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Icon } from '@material-ui/core';
import { Search as SearchIcon } from "@material-ui/icons";

function DomainSearch() {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#ADD8E6"
    }
  })),
  keepClass = useStyles()

  const Restaurants = [{businessName: "Yo Mama Restaurants", businessLocation: "Address: 2328 2nd Ave N, Birmingham, AL 35203", businessContact: "Contact: (205)-957-6545", businessImage: "https://www.yomamasrestaurant.com/wp-content/uploads/2014/06/logo@2x.png", businessLink:"https://www.yomamasrestaurant.com/"},
  {businessName: "Roscoe’s Catfish & BBQ", businessLocation: "Address: 120 E 6th Ave , Anchorage, AK 9950", businessContact: "Contact: (907)-279-8961", businessImage: "https://mediaprocessor.websimages.com/width/559/roscoescatfishandbarbeque.webs.com/10682274_290503317827613_4692347535965785386_o.jpg", businessLink:"https://roscoescatfishandbarbeque.webs.com/"},
  {businessName: "Hot Pot Caribbean Cuisine", businessLocation: "Address: Ave Ste 132, Chandler, AZ 85225, US", businessContact: "Contact: (480)-722-7577", businessImage: "https://img1.wsimg.com/isteam/ip/708b0246-640a-4f96-90be-880b72fa8c75/20170406_064254.jpg/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730", businessLink:"https://hotpotcuisine.com/"}]

  const Startups = [{businessName: "LISNR", businessLocation: "Location: Cincinnati, OH", businessContact: "513-322-8400", businessImage: "https://lisnr.com/wp-content/uploads/2018/06/lisnr-cir-color.png", businessLink:"https://lisnr.com/"},
  {businessName: "Walker and Company", businessLocation: "Location: New York, NY", businessContact: "info@walkerandcompany.com", businessImage: "https://www.gunder.com/content/uploads/2017/09/walker_1000x340-default-case-study-logo-client-logo-977.png", businessLink:"https://walkerandcompany.com/"},
  {businessName: "Ovamba Solutions", businessLocation: "Location: Chevy Chase, MD", businessContact: "301-968-2360", businessImage: "https://blog.ovamba.com/wp-content/uploads/2016/11/Ovamba-Logo-702x390.png", businessLink:"https://www.ovamba.com/"}]
  
  const [query, setQuery] = useState("");
  const [businessList, setbusinessList] = useState();
  const [showTitle, setShowTitle] = useState(true);
  
  const handleChange = (event) => {
    setQuery(event.target.value)
  };
  
  

  const handleSubmit = async () => {
    // const response = await fetch(`https://api.godaddy.com/v1/domains/available?domain=${query}`, {
    //   credentials: 'include'
    // });
    // const json = await response.json();

    // what is the search box value?
    // now that i know the value, what list should the businessList be?

      if (query.trim().toLowerCase() === "restaurants" || query.trim().toLowerCase() === "restaurant"){
        setbusinessList(Restaurants)
      }
      else if (query.trim().toLowerCase() === "startups" || query.trim().toLowerCase() === "startup"){
        setbusinessList(Startups)
      }
      else{
        setbusinessList([])
      }

      setShowTitle(false)
  }

 

  
  return (
    <div className="domain-search">
      
      <body style = {{backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEWHzvpLEdEdAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC)"}}>
      {showTitle && <h1 style = {{fontFamily: "Dancing Script"}}>Welcome to GoBlack</h1>}
      <div style= {{marginTop: 20}}></div>
      <TextField className = {keepClass.root} label ="Search a Service" variant = "outlined" onChange={handleChange} value = {query} />
      <Button onClick={handleSubmit}>< SearchIcon/></Button>
      {businessList && businessList.length > 0 &&
        <SearchResults ServiceRequest = {businessList}/>
      }
      {businessList && businessList.length === 0 &&
        <div class="social">
        <h1 style={{color: 'red'}}>Error! Invalid Input</h1> </div>
      }</body>
    </div>
  );
}

export default DomainSearch;