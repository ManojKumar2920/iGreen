import TreesList from '@/components/Trees/TreesList';
import React from 'react';


export const metadata = {
  title: 'Trees'
}

const page = () => {
  return (
    <div>
      <TreesList />
    </div>
  )
}

export default page