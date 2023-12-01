import {posts} from "../data/store"
import TheCard from "./TheCard"
import { useState } from "react"
import TheCounter from './TheCounter'

export default function TheMain(){

    const publishedPosts = posts.filter((post) => post.published === true);

    const cardLength = publishedPosts.length -2

    const [active, setActive] = useState(0);

    const prova = (i) => {
        if(i !== active){
            return "hidden"
        }
    }


    return(
        <div>
            {publishedPosts.map((post, i)=>(
            <TheCard 
            key={post.id}
            image={post.image}
            title={post.title}
            content={post.content}
            tags={post.tags}
            published={post.published}
            class={prova(i)}
            />
        ))}
        <TheCounter 
        setActive = {setActive}
        active = {active}
        cardLength = {cardLength}
        />
        </div>
    )

}