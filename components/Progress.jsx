

const Progress=(props)=>{

    const grading={
        beginner:"w-[40%] bg-orange-400",
        intermediate:"w-[60%] bg-green-600",
        advance:"w-[100%] bg-green-900"
    }

    const ProgressBar=(props)=>{
        return(
        <div className={`h-2 ${grading[props.type]}`}>
        </div>
        )
    }
    return(
        <div className="space-y-2">
        <h1 className="text-sm sm:text-xl "> {props.name} </h1>

        <div className="min-w-full h-2 bg-white rounded">
            <ProgressBar type={props.progress}/>
        </div>

    </div>
    )
};

export default Progress;