import React from 'react'

const GenreItems = () => {
    const genres=[{name:"Action"},{name:"Adventure"},{name:"Comedy"}]
  return (
    <div className='flex gap-2 mb-5'>
        {genres.map(genre=><div className='bg-zinc-600 text-zinc-300 text-sm p-1 rounded-md'>{genre.name}</div>)}
    </div>
  )
}

export default GenreItems