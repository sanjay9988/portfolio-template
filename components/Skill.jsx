
import Progress from "./Progress";

const Skill=()=>{
    return(
        <div className="p-2 mt-8 space-y-8">
            <h1 className="text-2xl uppercase text-orange-400">More Skill:</h1>

            <div className="flex-row space-y-4 sm:flex sm:space-y-0 gap-4">

                <div className="w-full space-y-4"> 
                <Progress name="Html,CSS and JavaScript" progress="advance"/>
                <Progress name="Python" progress="intermediate"/>
                <Progress name="Flutter" progress ="beginner"/>
                </div>

                <div className="w-full space-y-4"> 
                <Progress name="Python Django" progress="advance"/>
                <Progress name="NodeJs" progress="intermediate"/>
                <Progress name="React" progress="intermediate"/>
                </div>
            </div>
            <div> 
            <h1 className="text-2xl uppercase text-orange-400">Frameworks and Libraries:</h1>
            <p>These are the frameworks and  libraries which are used for the diffrent product i work on.</p>
            </div>

            <div className="flex justify-left gap-2 sm:gap-8">

                    <ul className="space-y-2 text-sm">
                        <li> Django </li>
                        <li> FastApi </li>
                        <li> Talwincss </li>
                        <li> Material ui </li>
                    </ul>

                    <ul className="space-y-2 text-sm">
                        <li> Django </li>
                        <li> FastApi </li>
                        <li> Talwincss </li>
                        <li> Material ui </li>
                    </ul>

                    <ul className="space-y-2 text-sm">
                        <li> Django </li>
                        <li> FastApi </li>
                        <li> Talwincss </li>
                        <li> Material ui </li>
                    </ul>
            </div>

        </div>
    )
}


export default Skill;