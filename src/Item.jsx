import './Item.css'


function Item({ project }){
    const name = project["name"];
    const desc = project["description"];
    const tags = project["tags"];
    const link = project["link"];

    return (
        <div className='project-item' onClick={() => window.open(link, '_blank') }>
            <p className='project-title'>{name}</p>
            <p className='project-description'>{desc}</p>
            <div className='project-tags'>
                {tags.map(t => <div className='tag'>{t}</div>)}
            </div>
        </div>
    )
}

export default Item;