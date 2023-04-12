import Tags from "./Tags"

const Job = ({ jobs, logo }) => {
    return (
        <div className = {`job ${jobs.featured ? 'left-border' : ''}`}>
            <div>
                <img className = 'image' src = {logo[jobs.id - 1]} alt = 'logo'/>
            </div>
            <div className = 'content'>
                <div className = 'title'>
                    <div className = 'company'>{jobs.company}</div>
                    {jobs.new ? <div className = 'new'>NEW!</div> : ''}
                    {jobs.featured ? <div className = 'featured'>FEATURED!</div> : ''}
                </div>
                
                <div className = 'position'>{jobs.position}</div>
                <div className = 'details'>{jobs.postedAt}<span className = 'dot'>&#x2022;</span>{jobs.contract}<span className = 'dot'>&#x2022;</span>{jobs.location}</div>
            </div>
            <div className = 'tags'>
                <div className = 'tag'>{jobs.role}</div>
                <div className = 'tag'>{jobs.level}</div>
                <Tags jobs = {jobs}/>

            </div>
        </div>
    )
}

export default Job