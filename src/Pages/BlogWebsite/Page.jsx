import React from 'react'

function Page() {
  return (
    <div>
        <nav className='mt-5 mb-5' aria-label="Page navigation example">
            <ul className='pagination list-inline justify-content-center'>
                <li className='page-item'><a href='' className='page-link'>Previous Page</a></li>
                <li className='page-item'><a href='' className='page-link'>1</a></li>
                <li className='page-item'><a href='' className='page-link'>2</a></li>
                <li className='page-item'><a href='' className='page-link'>3</a></li>
                <li className='page-item'><a href='' className='page-link'>next</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Page
