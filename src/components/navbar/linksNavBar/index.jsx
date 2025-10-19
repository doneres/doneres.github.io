const LinksNavBar = (props) => {

    const linkStyle = "px-4 py-2 rounded-lg hover:bg-gray-700 hover:text-white transition duration-300"

    return(
        <>
            <a className={linkStyle} href={props.link}>{props.nomeLink}</a>
        </>
    )
}

export default LinksNavBar