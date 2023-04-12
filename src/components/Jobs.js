import Job from "./Job"

const Jobs = ({jobs, logo}) => {
  return (
    <>
			{jobs.map((jobs) => (
				<Job key = {jobs.id} jobs = {jobs} logo = {logo}/>
			))}
    </>
  )
}

export default Jobs