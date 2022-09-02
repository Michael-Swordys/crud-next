export default function Titulo(props)
{
    return(
        <div className="flex justify-center flex-col ">
            <h1 className="px-5 py-2 text-2xl">
                {props.children}
            </h1>
            <hr className="border2 border-purple-500"/>
        </div>
    )
}