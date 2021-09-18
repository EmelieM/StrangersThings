import React, { useState } from 'react';
import { makePosting } from '../api'

const NewPost = (props) => {
    const {allPosts, setAllPosts, setIsLoading} = props

    const [willDeliver, setDeliver] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [location, setLocation] = useState("")

    return <div>
        <header><h2>Now you're the stranger with the thing to sell</h2></header>

        <div>
        <form
        id="newPosting"
        onSubmit={async (event)=>{
            event.preventDefault();
            setIsLoading(true);

            try{
              const results = await makePosting(title, description, price, location, willDeliver)
              console.log(results.data.post)
              const newPosts = allPosts.slice()
              setAllPosts([...newPosts, results.data.post])
            }
            catch(err){
              console.error(err)
            }
            finally{
              setIsLoading(false)
            }
          }}
        >
        
        <fieldset className="title">
        <label htmlFor="title">Title</label>
          <input 
          id="title"
          type="text"
          placeholder="listing title"
          value={title}
          onChange={(event)=>{
            setTitle(event.target.value)
          }}
          required
          />
        </fieldset>

        <fieldset className="description">
        <label htmlFor="description">Description</label>
          <input 
          id="description"
          type="text"
          placeholder="listing description"
          value={description}
          onChange={(event)=>{
            setDescription(event.target.value)
          }}
          required
          />
        </fieldset>

        <fieldset className="price">
        <label htmlFor="price">Price $</label>
          <input 
          id="price"
          type="text"
          placeholder="price in USD"
          value={price}
          onChange={(event)=>{
            setPrice(event.target.value)
          }}
          required
          />
        </fieldset>

        <fieldset className="location">
        <label htmlFor="location">Location</label>
          <input 
          id="location"
          type="text"
          placeholder="listing location"
          value={location}
          onChange={(event)=>{
            setLocation(event.target.value)
          }}
          required
          />
        </fieldset>

        <fieldset className="willDeliver">
        <label htmlFor="willDeliver">Willing to deliver?</label>

          <input 
          id="willDeliver"
          type="checkbox"
          value={willDeliver}
          onChange={()=>{
              console.log(willDeliver)
              setDeliver(!willDeliver)
          }}
          />
          
        </fieldset>

        <button type="submit">Make New Post</button>
        </form>
        </div>

    </div>


}

/* This will be the form to make a new post for selling an item */

export default NewPost;