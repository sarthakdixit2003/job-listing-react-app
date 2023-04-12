import Tag from './Tag'

const Tags = ({jobs}) => {
  const arr = jobs.languages.concat(jobs.tools)

  return (
    <>
      {arr.map((tag) => (
        <Tag key = {tag} tag = {tag} />
      ))}
    </>

  )
}

export default Tags