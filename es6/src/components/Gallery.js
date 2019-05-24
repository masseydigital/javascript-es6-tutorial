import React, {Component} from 'react';

class Gallery extends Component{
    render(){
        let alternate = "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwi12fCiiLTiAhVlTt8KHa0NDA8QjRx6BAgBEAU&url=https%3A%2F%2Fhazlitt.net%2Ffeature%2Fusers-guide-kazuo-ishiguro&psig=AOvVaw3AksKwg__gQhTpyLupE1bD&ust=1558783790385644"

        return(
            <div>
                {
                    this.props.items.map((item, index)=>{
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return (
                            <a 
                            key={index}
                            className="book"
                            href={infoLink}
                            target="_blank"
                            >
                            <img 
                            src={imageLinks !== undefined ? imageLinks.thumbnail : alternate} 
                            alt="book image"
                            className="book-img"
                            />
                            <div className = "book-text">
                            {title}
                            </div>

                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;