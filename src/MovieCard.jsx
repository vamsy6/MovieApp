import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { motion } from "framer-motion";



const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
<Card className="w-[280px] h-[540px] m-8 flex flex-col overflow-hidden">
  <CardHeader>
    <CardTitle>{Year}</CardTitle>
  </CardHeader>
  <motion.div   whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.5 }}
  transition={{ ease: "easeOut", duration: 0.5 }}>
<CardContent>
    <img className='rounded-sm' src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
  </CardContent>
  </motion.div>
  
  <CardFooter className='flex flex-col text-center'>
    <span className='scroll-m-20 text-1xl font-semibold tracking-tight'>{Type}</span>
    <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight overflow-ellipsis'>{Title}</h3>
  </CardFooter>
</Card>

  );
}



export default MovieCard;