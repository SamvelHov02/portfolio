import './Content.css'
import Item from './Item.jsx'

function Content({ data }){
    const projects = data["projects"]

    return (
        <section className='main-content'>
            <section className='section-about'>
                {data["about"]}
            </section>
            <section className='section-projects'>
                {projects.map(p => <Item project={p} />)}
            </section>
            <section className='section-skills'></section>
        </section>
    )
}

export default Content;