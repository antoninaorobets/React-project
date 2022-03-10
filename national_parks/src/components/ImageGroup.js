import React from 'react'
import { Image } from 'semantic-ui-react'


function ImageGroup({images}) {
    
    const displayImages = images.map((img,indx) => <Image key={indx} src={img.url} />)
    return (
  <div>
    <Image.Group size='small'>
    {displayImages}
    </Image.Group>
  </div>
)
    }
export default ImageGroup