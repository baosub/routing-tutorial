import React from 'react'

const page = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-slate-500 w-96 text-center my-20 p-10">
                <h1 className="text-xl">Products List</h1>
                <hr />
                <ul>
                    <li>Product 1</li>
                    <li>Product 2</li>
                    <li>Product 3</li>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <li>Product n</li>
                </ul>
            </div>
        </div>
    )
}

export default page
