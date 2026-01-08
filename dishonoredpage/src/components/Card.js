function Card({ title, eng_title, artist, artist_ingame, painting, images, content}){
    return (
        <div style={cardStyle}>
            <div><img src={painting} style={paintingStyle} alt={eng_title} /></div>
            <h2>{title}</h2>
            <p>{eng_title}</p>
            <p>{artist}</p>
            <p>{artist_ingame}</p>
            <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`How to get the painting${index}`} style={imageStyle} />
                ))}
            </div>
            <p>{content}</p>
        </div>
    )
}

const paintingStyle = {
    width: '1200px',
    height: 'auto',
};

const imageStyle = {
    width: '600px',
    height: 'auto',
}

const cardStyle ={
    border: '1px solid #ddd',
    padding: '20px',
    margin: '10px',
};

export default Card;