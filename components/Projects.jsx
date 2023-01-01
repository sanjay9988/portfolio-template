
import Link from "next/link";
const items = [1, 2, 3, 4,];
const Projects = () => {
    return (
        <div className="p-2 space-y-4">

            <div className="">
                <h1 className="text-xl tracking-wider text-orange-400 font-bold underline"> PROJECTS : </h1>
            </div>

            <div className="grid  grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">


                {items.map((item) =>

                    <div key={item}>

                        <div className="space-y-4 rounded border border-spacing-x-7
                         p-2 border-orange-400  lg:items-center
                          
                         ">
                            <h1 className="text-center font-bold tracking-wider text-sm"> User Authentication {item} </h1>
                            <p className="w-fit">
                                User Authentication is used to verify the role based user and grant excess to the users.
                            </p>
                            <p> Technology used </p>
                            <ul className="flex gap-2 text-sm">
                                <li> NodeJs</li>
                                <li> NextJs</li>
                                <li> SQL Lite </li>
                            </ul>

                            <ul className="flex gap-4">
                                <li> 
                                    <Link href="#"> Project GitHub </Link>
                                </li>
                                <li> 
                                    <Link href="#"> TestLiveProject </Link>
                                </li>
                            </ul>

                        </div>

                    </div>
                )}

            </div>

        </div>
    )
}


export default Projects;