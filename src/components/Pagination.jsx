import React from 'react'

const Pagination = ({ page, setPage, total }) => {


    const handelPrev = (num) => {
        if (page > num) {
            setPage(page - num)
        } else {
            setPage(total)
        }
        scroll(0, 0)

    }

    const handelNext = (num) => {
        if (page <= total - num) {
            setPage(page + num)
        } else {
            setPage(1)
        }
        scroll(0, 0)
    }


    return (
        <div>
            <button onClick={() => { handelPrev(1) }} >{'<'}</button>
            <span> {`Página ${page}  de  ${total}`} </span>
            <button onClick={() => { handelNext(1) }} >{'>'}</button>
        </div>
    )
}

export default Pagination